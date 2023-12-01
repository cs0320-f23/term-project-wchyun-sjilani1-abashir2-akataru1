import React, { useEffect, useState } from "react";
import "../styles/App.css";



// REMEMBER TO PUT YOUR API KEY IN A FOLDER THAT IS GITIGNORED!!
// (for instance, /src/private/api_key.tsx)
// import {API_KEY} from "./private/api_key"

function App() {

  const[open, setOpen] = useState(false); 

  return ( <div className="App">
    <div className="menu-container"> 
    <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
    </div>
    <div className="dropdown-menu"> </div>
    <h3>Date Selection</h3>
    <ul> <DropdownItem/>
    <DropdownItem  text = {"Monday"} /> 
    <DropdownItem text = {"Tuesday"}/> 
    <DropdownItem text = {"Wednesday"}/> 
    <DropdownItem text = {"Thursday"}/> 
    <DropdownItem text = {"Friday"}/> 
    <DropdownItem text = {"Saturday"}/>  
    <DropdownItem text = {"Sunday"}/>  
    </ul>
    
    </div>
  
  </div>
  );
}

function DropdownItem(props) { 
  return( 
    <li className = 'dropdownItem'> 
    <a> [props.text] </a>
    </li>

  ); 
}

export default App;
