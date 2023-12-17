import React, {useEffect, useState} from 'react';
import { jwtDecode } from "jwt-decode";

import Day from './day.js'
import Dhall from './Dhall.js'
import Meal from './meal.js'

function Submit(props){
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    const [selectedDhall, setSelectedDhall] = useState('');
    const [notAllSelected, setNotAllSelected] = useState(false);
    // const [menu, setMenu] = useState([]);

    const handleDayChange = (day) => {
        setSelectedDay(day);
      };
    
      const handleDhallChange = (dhall) => {
        setSelectedDhall(dhall);
      };
    
      const handleMealChange = (meal) => {
        setSelectedMeal(meal);
      };

      function toUpper(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
         }

      const handleSubmit = async () => {
        if (selectedDay === '' || selectedMeal === '' || selectedDhall === '') {
          setNotAllSelected(true);
        } 
        else {
          props.setMenu([]);
          setNotAllSelected(false);
          try {
            props.setLoading(true);
            const response = await fetch("http://127.0.0.1:8000/scrape/" + selectedDhall + "/" + selectedDay);
            const myMenu = await response.json();
            console.log(myMenu[selectedMeal]);
            

            let itemString = "";

            console.log(myMenu[selectedMeal].length);

            for (let i=0; i<myMenu[selectedMeal].length; i++ ) {
              if (i === 0) {
                itemString += myMenu[selectedMeal][i]['Menu item'];
              } else {
                itemString += ',x,' + myMenu[selectedMeal][i]['Menu item'];
              }
            }

            console.log(itemString);

            const avgResponse = await fetch("http://127.0.0.1:8000/get_avg_score/" + itemString);
            const avgResponseJSON = await avgResponse.json();

            console.log(avgResponseJSON);

            let retMenu = [];

            for (let i=0; i<myMenu[selectedMeal].length; i++) {
              let newMenuObj = myMenu[selectedMeal][i];
              let menu_item = avgResponseJSON["Average Score"][myMenu[selectedMeal][i]["Menu item"]];

                newMenuObj['Rating'] = Number(avgResponseJSON["Average Score"][myMenu[selectedMeal][i]["Menu item"]]).toFixed(2);

                if (isNaN(newMenuObj['Rating'])) {
                  newMenuObj['Rating'] = 'No Ratings Yet';
                }
              
              
              console.log(avgResponseJSON["Average Score"]);
              retMenu.push(newMenuObj);
              // myMenu[selectedMeal][i]['Rating'] = avgResponseJSON[myMenu[selectedMeal][i]];
              // console.log(myMenu[selectedMeal][i]['Rating']);
            }

            console.log(retMenu);

            props.setLoading(false);
            props.setMenu(retMenu);      

          } catch (error) {
            console.error("There was an error", error);
          }
        }
      };

      return(
        <div className="inputs">
        
        <Day onSelectDay = {handleDayChange} />
        <Dhall onSelectDhall={handleDhallChange} />
        <Meal onSelectMeal = {handleMealChange} />
        <div className="button-container">
        <button onClick={handleSubmit} aria-label='Submit'>Submit</button>
        </div>
        {notAllSelected ? <p class="not-enough">Please select an option from all of the dropdown menus above</p> : null}
        

         

        </div> 
      );
}
export default Submit;