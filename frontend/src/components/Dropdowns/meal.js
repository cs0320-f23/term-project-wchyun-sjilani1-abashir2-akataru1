import React, { useState } from "react"
import { Select } from '@chakra-ui/react'

import "../../styles/App.css";


const Meal = (props) => {

   const [selectedmeal, setSelectedmeal] = useState("");
  
   const [content, setContent] = useState("");

  const handleMealChange = (
    event) => {
    setSelectedmeal(event.target.value);
    props.onSelectMeal(event.target.value);
    const selectedmealOption = event.target.options[event.target.selectedIndex];
    const selectedmealLabel = selectedmealOption.getAttribute("label");
    setContent(`Selected meal is ${selectedmealLabel}`);
    // onChange(event.target.value);
  };

  
    return (
      <div>

      <Select
                value = {selectedmeal}
                key= {selectedmeal}
               
                onChange={handleMealChange}
                placeholder="Select a Meal"

                aria-label="select-meal"
               
              >
                <option label = "Breakfast" key="bre" value= "Breakfast" >
                Breakfast
                </option>
                <option label = "Lunch" key="lun" value="Lunch">
                  Lunch
                </option>
                <option label = "Dinner" key="din" value="Dinner">
                  Dinner
                </option>
               
              </Select>


              </div>
    )
}

 
    
  export default Meal;