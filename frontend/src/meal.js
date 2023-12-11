import React, { useState } from "react"
import { Select } from '@chakra-ui/react'

import "./App.css";


const Meal = ({onChange}) => {

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
    const selectedmealOption = event.target.options[event.target.selectedIndex];
    const selectedmealLabel = selectedmealOption.getAttribute("label");
    setContent(`Selected day is ${selectedmealLabel}`);
    onChange(event.target.value);
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
                <option label = "Breakfast" key="Mon" value= "Breakfast" >
                Breakfast
                </option>
                <option label = "Lunch" key="Tue" value="Lunch">
                  Lunch
                </option>
                <option label = "Dinner" key="Wed" value="Dinner">
                  Dinner
                </option>
               
              </Select>

              <p> {content} </p>

              </div>
    )
}

 
    
  export default Meal;