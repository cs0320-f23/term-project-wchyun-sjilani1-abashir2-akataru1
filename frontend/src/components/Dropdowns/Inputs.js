import React, {useEffect, useState} from 'react';
import { jwtDecode } from "jwt-decode";

import Day from './day.js'
import Dhall from './Dhall.js'
import Meal from './meal.js'

function Submit(){
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    const [selectedDhall, setSelectedDhall] = useState('');

    const handleDayChange = (day) => {
        setSelectedDay(day);
      };
    
      const handleDhallChange = (dhall) => {
        setSelectedDhall(dhall);
      };
    
      const handleMealChange = (meal) => {
        setSelectedMeal(meal);
      };

      const handleSubmit = () => {
        if (selectedDay && selectedMeal && selectedDhall) {
          console.log('Submitting data:', {
            Day: selectedDay,
            Meal: selectedMeal,
            Dhall: selectedDhall,
          });
  
          setSelectedDay('');
          setSelectedMeal('');
          setSelectedDhall('');
        }
      
      };

      return(
        <div className="inputs">
        
        <Day onSelectDay = {handleDayChange} />
        <Dhall onSelectDhall={handleDhallChange} />
        <Meal onSelectMeal = {handleMealChange} />

        <button onClick={handleSubmit}>Submit</button>
         

        </div> 
      );
}
export default Submit;