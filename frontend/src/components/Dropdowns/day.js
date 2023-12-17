import React, { useState } from "react"
import { Select } from '@chakra-ui/react'

import "../../styles/App.css";


const Day = (props) => {

   const [selectedDay, setSelectedDay] = useState("");
  
   const [content, setContent] = useState("");

  // const handleDayClick = (key) => {
  //   console.log(clicked ${key});
  //   setSelectedDay(key);
  //   updateLastClickedButton(key); 
  // };

  const handleDayChange = (
    event) => {
    setSelectedDay(event.target.value);
    props.onSelectDay(event.target.value);
    const selectedDayOption = event.target.options[event.target.selectedIndex];
    const selectedDayLabel = selectedDayOption.getAttribute("label");
    setContent(`Selected day is ${selectedDayLabel}`);
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
                value = {selectedDay}
                key= {selectedDay}
                aria-label="select-day"
               
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
  export default Day;
