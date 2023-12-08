import './App.css';
import React, {useEffect, useState} from 'react';
import { jwtDecode } from "jwt-decode";

import Home from "./home.js"; 
import DHall from "./DHall.js"; 


function App() {
  const [user, setUser] = useState({});
  const [notBrownStudent, setNotBrownStudent] = useState(false);



  function loginCallbackResponse(response) {
    let decoded_user_credentials = jwtDecode(response.credential);
    console.log(decoded_user_credentials);
    //TODO: Need to add persistence of log in using cookies (or add auto sign-in: https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out)

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
    /* global google */
    google.accounts.id.initialize({
      client_id: '735330380811-di9hrlr84nvs6eomntk5t63hl210nt52.apps.googleusercontent.com',
      callback: loginCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"), 
      {theme: "outline", size: "medium"}
    );
  }, []);


  return (
    <div className="App">
      <div id="signInDiv"></div>
      {notBrownStudent ? <p>Please sign in with your ".brown.edu" email</p> : null} {/* Displays this message if a non-brown email signs in */}
      {Object.keys(user).length>0 ? <div>Hello, you're logged in {user.name}</div> : null} {/* <------ This is how we will handle displaying after login*/}

      <Home/>
      <DHall/>
    </div>
  );
}

export default App;
