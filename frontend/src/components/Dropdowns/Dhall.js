import React, { useState } from "react"
import { Select } from '@chakra-ui/react'

import "../../styles/App.css";


const DHall = (props) => {

   const [selectedDhall, setSelectedDhall] = useState("");
  
   const [content, setContent] = useState("");

  const handleDHallChange = (
    event) => {
    setSelectedDhall(event.target.value);
    props.onSelectDhall(event.target.value);
    const selectedHallOption = event.target.options[event.target.selectedIndex];
    const selectedHallLabel = selectedHallOption.getAttribute("label");
    setContent(`Selected Hall is ${selectedHallLabel}`);
  };

  
    return (
      <div>

      <Select
                value = {selectedDhall}
                key= {selectedDhall}
               
                onChange={handleDHallChange}
                placeholder="Select a Dining Hall"
               
              >
                <option label = "Sharpe Refectory" key="Mon" value="sharpe-refectory" >
                Sharpe Refectory
                </option>
                <option label = "Andrews Commons" key="Tue" value="andrews-commons">
                  Andrews Commons
                </option>
                <option label = "Verney-Woolley" key="Wed" value="verney-woolley">
                Verney-Woolley
                </option>
                <option label = "Blue Room" key="Thu" value="blue-room">
                Blue Room
                </option>
                <option label = "Ivy Room" key="Fri" value="ivy-room">
                Ivy Room
                </option>
                <option label = "Gourmet to Go" key="Sat" value="gourmet-to-go">
                Gourmet to Go
                </option>
                <option label = "Josiahs" key="Sun" value="josiahs">
                  Josiah's
                </option>
              </Select>


              </div>
    )
}
  
  export default DHall;