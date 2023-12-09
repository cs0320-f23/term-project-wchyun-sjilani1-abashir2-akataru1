import React, { useState } from "react";

import "./App.css";


const Home = ({updateLastClickedButton}) => {

  const [selectedDay, setSelectedDay] = useState(null);
  const handleDayClick = (key) => {
    console.log(`clicked ${key}`);
    setSelectedDay(key);
    updateLastClickedButton(key); 
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
      <Dropdown
     
      trigger={<button onClick={handleDayClick}>Week Day</button>}
        menu={[
          <button key ="Monday" onClick={handleDayClick}>Monday</button>,
          <button key ="Tuesday" onClick={handleDayClick}>Tuesday</button>,
          <button key = "Wednesday" onClick={handleDayClick}>Wednesday</button>,
          <button key = "Thursday"onClick={handleDayClick}>Thursday</button>,
          <button key = "Friday"onClick={handleDayClick}>Friday</button>,
          <button key = "Saturday"onClick={handleDayClick}>Saturday</button>,
          <button key = "Sunday"onClick={handleDayClick}>Sunday</button>,
        ]}

      />
    );
  };
  
  const Dropdown = ({ trigger, menu }) => {
    const [open,setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };


    return (
      <div className="dropdown">
        {React.cloneElement(trigger, { onClick: handleOpen})}
        {open ? (
          <ul className="Day">
            {menu.map((menuItem, index) => (
              <li key={index} className="week-day">
                {React.cloneElement(menuItem, { 
                  onClick: () => {
                  menuItem.props.onClick(); 
                  setOpen(false);
                },})}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }; 
  export default Home;

