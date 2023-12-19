import '../styles/App.css';
import React, {useEffect, useState} from 'react';
import { jwtDecode } from "jwt-decode";
import Card from './MealsReviews/MenuCard.js';
import {useSearchParams} from 'react-router-dom';

import Header from './Header'
import Day from './Dropdowns/day.js'
import Dhall from './Dropdowns/Dhall.js'
import Meal from './Dropdowns/meal.js'
import Submit from './Dropdowns/Inputs.js'
import {TailSpin} from 'react-loader-spinner'
 

  function App() {
    const [user, setUser] = useState({});
    const [notBrownStudent, setNotBrownStudent] = useState(false);
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const skipLogin = searchParams.get('skipLogin');

    
    function loginCallbackResponse(response) {
      let decoded_user_credentials = jwtDecode(response.credential);
      console.log(decoded_user_credentials);  
      //This checks for if the user has a brown.edu email (only brown students should probably be using this)
      if (decoded_user_credentials.email.endsWith("brown.edu")) {
        setUser(decoded_user_credentials);
        setNotBrownStudent(false);
        document.getElementById("signInDiv").hidden = true;
      } else {
        setNotBrownStudent(true);
      }
    }
  
    useEffect(() => {
      if (skipLogin === 'true' && Object.keys(user).length === 0) {
        setUser({'name':'Example Person', 'email': 'example@brown.edu'});
        document.getElementById("signInDiv").hidden = true;
      }
      else {
        /* global google */
      google.accounts.id.initialize({
        client_id: '735330380811-di9hrlr84nvs6eomntk5t63hl210nt52.apps.googleusercontent.com',
        callback: loginCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"), 
        {theme: "outline", size: "medium"}
      );
      }
      
    }, [skipLogin]);
  
    return (
      <div className="App">
        <Header/>
        <div id="signInDiv"></div>
        {notBrownStudent ? <p>Please sign in with your ".brown.edu" email</p> : null} {/* Displays this message if a non-brown email signs in */}
        {Object.keys(user).length>0 ?
        
         <div className='main-div'>
        
        <Submit setMenu={setMenu} setLoading={setLoading}/>

        {menu ? menu.map((item) => (<div className='cards'>
          <Card name={item["Menu item"]} description={item["Description"]} dietary={item["Dietary restrictions"]} rating={item["Rating"]} user={user}/><hr></hr></div>)
        ) : null}

        {loading ? <div className='loading-div'>
              <br /> 
              <br />
              <TailSpin
                color="#000000" 
                ariaLabel='Spinner'
              />
            </div> : null}

        </div> : null} {/* <------ This is how we will handle displaying after login*/}
      </div>
    );
    }
export default App;