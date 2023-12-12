import React, { useState } from "react"
import { Select } from '@chakra-ui/react'

import "../../styles/App.css";


const Meal = (props) => {

   const [selectedmeal, setSelectedmeal] = useState("");
  
   const [content, setContent] = useState("");

  // const handleDayClick = (key) => {
  //   console.log(clicked ${key});
  //   setSelectedDay(key);
  //   updateLastClickedButton(key); 
  // };

  const handleMealChange = (
    event) => {
    setSelectedmeal(event.target.value);
    props.onSelectMeal(event.target.value);
    const selectedmealOption = event.target.options[event.target.selectedIndex];
    const selectedmealLabel = selectedmealOption.getAttribute("label");
    setContent(`Selected meal is ${selectedmealLabel}`);
    // onChange(event.target.value);
  };

  
  
    // const handleDayOne = () => {
    //   console.log('clicked Monday'); 
    // };
  
    // const handleDayTwo = () => {
    //   console.log('clicked Tuesday'); 
    // };


    // const handleDayThree = () => {
    //   console.log('clicked Wednesday'); 
    // };

    // const handleDayFour = () => {
    //   console.log('clicked Thursday'); 
    // };

    // const handleDayFive = () => {
    //   console.log('clicked Friday'); 
    // };

    // const handleDaySix = () => {
    //   console.log('clicked Saturday'); 
    // };
  
    // const handleDaySeven = () => {
    //   console.log('clicked Sunday'); 
    // };
    return (
      <div>

      <Select
                value = {selectedmeal}
                key= {selectedmeal}
               
                onChange={handleMealChange}
                placeholder="Select a Meal"
               
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

              <p> {content} </p>

              </div>
    )
}

 
    
  export default Meal;