import React, { useState } from "react"
import { Select } from '@chakra-ui/react'

import "../../styles/App.css";


const DHall = (props) => {

   const [selectedDhall, setSelectedDhall] = useState("");
  
   const [content, setContent] = useState("");

  // const handleDayClick = (key) => {
  //   console.log(clicked ${key});
  //   setSelectedDay(key);
  //   updateLastClickedButton(key); 
  // };

  const handleDHallChange = (
    event) => {
    setSelectedDhall(event.target.value);
    props.onSelectDhall(event.target.value);
    const selectedHallOption = event.target.options[event.target.selectedIndex];
    const selectedHallLabel = selectedHallOption.getAttribute("label");
    setContent(`Selected Hall is ${selectedHallLabel}`);
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

              <p> {content} </p>

              </div>
    )
}
    //   <Dropdown
     
    //   trigger={<button onClick={handleDayClick}>Week Day</button>}
    //     menu={[
    //       <button key ="Monday" onClick={handleDayClick}>Monday</button>,
    //       <button key ="Tuesday" onClick={handleDayClick}>Tuesday</button>,
    //       <button key = "Wednesday" onClick={handleDayClick}>Wednesday</button>,
    //       <button key = "Thursday"onClick={handleDayClick}>Thursday</button>,
    //       <button key = "Friday"onClick={handleDayClick}>Friday</button>,
    //       <button key = "Saturday"onClick={handleDayClick}>Saturday</button>,
    //       <button key = "Sunday"onClick={handleDayClick}>Sunday</button>,
    //     ]}

    //   />
     
  // const Dropdown = ({ trigger, menu }) => {
  //   const [open,setOpen] = React.useState(false);

  //   const handleOpen = () => {
  //     setOpen(!open);
  //   };



 
    
  //     <div className="dropdown">
  //       {React.cloneElement(trigger, { onClick: handleOpen})}
  //       {open ? (
  //         <ul className="Day">
  //           {menu.map((menuItem, index) => (
  //             <li key={index} className="week-day">
  //               {React.cloneElement(menuItem, { 
  //                 onClick: () => {
  //                 menuItem.props.onClick(); 
  //                 setOpen(false);
  //               },})}
  //             </li>
  //           ))}
  //         </ul>
  //       ) : null}
  //     </div>
  //   );
  // }; 
  export default DHall;