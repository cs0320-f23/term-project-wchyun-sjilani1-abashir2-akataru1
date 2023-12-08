import React, { useState } from "react";

import "./App.css";


const DHall = () => {

  
  
    const handleDayOne = () => {
      console.log('clicked Sharpe Refectory '); 
    };
  
    const handleDayTwo = () => {
      console.log('clicked Andrews Commons'); 
    };


    const handleDayThree = () => {
      console.log('Verney-Woolley'); 
    };

    const handleDayFour = () => {
      console.log('Blue Room'); 
    };

    const handleDayFive = () => {
      console.log('Ivy Room'); 
    };

    const handleDaySix = () => {
      console.log('Gourmet To Go'); 
    };
  
    const handleDaySeven = () => {
      console.log('Josiahs'); 
    };
    return (
      <Dropdown
     
      trigger={<button onClick={handleDayOne}>Dining Hall</button>}
        menu={[
          <button key ="Monday" onClick={handleDayOne}>Sharpe Refectory</button>,
          <button key ="Tuesday" onClick={handleDayTwo}>Andrews Commons</button>,
          <button key = "Wednesday" onClick={handleDayThree}>Verney-Woolley</button>,
          <button key = "Thursday"onClick={handleDayFour}>Blue Room</button>,
          <button key = "Friday"onClick={handleDayFive}>Ivy Room</button>,
          <button key = "Saturday"onClick={handleDaySix}>Gourmet To Go</button>,
          <button key = "Sunday"onClick={handleDaySeven}>Josiahs</button>,
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
          <ul className="Hall">
            {menu.map((menuItem, index) => (
              <li key={index} className="dining-hall">
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
  export default DHall;
