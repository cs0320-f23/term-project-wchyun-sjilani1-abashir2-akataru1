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
            props.setLoading(false);
            props.setMenu(myMenu[selectedMeal]);
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
        <button onClick={handleSubmit}>Submit</button>
        </div>
        {notAllSelected ? <p class="not-enough">Please select an option from all of the dropdown menus above</p> : null}
        

         

        </div> 
      );
}
export default Submit;