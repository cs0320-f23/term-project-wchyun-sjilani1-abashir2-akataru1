import React, { useState } from "react"
import { Select } from '@chakra-ui/react'

import "../../styles/App.css";


const Day = (props) => {

   const [selectedDay, setSelectedDay] = useState("");
  
   const [content, setContent] = useState("");

  const handleDayChange = (
    event) => {
    setSelectedDay(event.target.value);
    props.onSelectDay(event.target.value);
    const selectedDayOption = event.target.options[event.target.selectedIndex];
    const selectedDayLabel = selectedDayOption.getAttribute("label");
    setContent(`Selected day is ${selectedDayLabel}`);
  };

    return (
      <div>

      <Select
                value = {selectedDay}
                key= {selectedDay}
               
                onChange={handleDayChange}
                placeholder="Select a Weekday"
               
              >
                <option label = "Monday" key="Mon" value="Mon" >
                  Monday
                </option>
                <option label = "Tuesday" key="Tue" value="Tue">
                  Tuesday
                </option>
                <option label = "Wednesday" key="Wed" value="Wed">
                  Wednesday
                </option>
                <option label = "Thursday" key="Thu" value="Thu">
                  Thursday
                </option>
                <option label = "Friday" key="Fri" value="Fri">
                  Friday
                </option>
                <option label = "Saturday" key="Sat" value="Sat">
                  Saturday
                </option>
                <option label = "Sunday" key="Sun" value="Sun">
                  Sunday
                </option>
              </Select>

              </div>
    )
}

  export default Day;
