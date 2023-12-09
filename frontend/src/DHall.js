import React, { useState } from "react";

import "./App.css";


const DHall = ({updateLastClickedButton}) => {


  const [selectedHall, setSelectedHall] = useState(null);

  const handleDayClick = (key) => {
    console.log(`clicked ${key}`);
    setSelectedHall(key);
    updateLastClickedButton(key); 
  };
  
  
    // const handleDayOne = () => {
    //   console.log('clicked Sharpe Refectory '); 
    // };
  
    // const handleDayTwo = () => {
    //   console.log('clicked Andrews Commons'); 
    // };


    // const handleDayThree = () => {
    //   console.log('Verney-Woolley'); 
    // };

    // const handleDayFour = () => {
    //   console.log('Blue Room'); 
    // };

    // const handleDayFive = () => {
    //   console.log('Ivy Room'); 
    // };

    // const handleDaySix = () => {
    //   console.log('Gourmet To Go'); 
    // };
  
    // const handleDaySeven = () => {
    //   console.log('Josiahs'); 
    // };
    return (
      <Dropdown
     
      trigger={<button onClick={handleDayClick}>Dining Hall</button>}
        menu={[
          <button key ="sharpe-refectory" onClick={handleDayClick}>Sharpe Refectory</button>,
          <button key ="andrews-commons" onClick={handleDayClick}>Andrews Commons</button>,
          <button key = "verney-woolley" onClick={handleDayClick}>Verney-Woolley</button>,
          <button key = "blue-room"onClick={handleDayClick}>Blue Room</button>,
          <button key = "ivy-room"onClick={handleDayClick}>Ivy Room</button>,
          <button key = "gourmet-to-go"onClick={handleDayClick}>Gourmet To Go</button>,
          <button key = "josiahs"onClick={handleDayClick}>Josiahs</button>,
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
