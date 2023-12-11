// import './App.css';
// import React, {useEffect, useState} from 'react';
// import { jwtDecode } from "jwt-decode";

// import Home from "./home.js"; 
// import DHall from "./DHall.js"; 


// function App() {
//   const [user, setUser] = useState({});
//   const [notBrownStudent, setNotBrownStudent] = useState(false);
//   const [lastClickedButtonHome, setLastClickedButtonHome] = useState('');
//   const [lastClickedButtonDHall, setLastClickedButtonDHall] = useState('');
//   const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

 
//   const handleSelectedTypeChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedType(event.target.value.toLowerCase() as NodeType);
//     setContent("");
//   };


//   function loginCallbackResponse(response) {
//     let decoded_user_credentials = jwtDecode(response.credential);
//     console.log(decoded_user_credentials);
//     //TODO: Need to add persistence of log in using cookies (or add auto sign-in: https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out)

//     //This checks for if the user has a brown.edu email (only brown students should probably be using this)
//     if (decoded_user_credentials.email.endsWith("brown.edu")) {
//       setUser(decoded_user_credentials);
//       setNotBrownStudent(false);
//       document.getElementById("signInDiv").hidden = true;
//     } else {
//       setNotBrownStudent(true);
//     }
//   }

//   const updateLastClickedButton = (button, component) => { 
//     if (component === 'Home') { 
//       setLastClickedButtonHome(button); 
//     } else if (component === 'DHall') { 
//     setLastClickedButtonDHall (button); }
//   };

//   useEffect(() => { 
//     setIsSubmitEnabled(lastClickedButtonHome && lastClickedButtonDHall);
//   }, [lastClickedButtonHome, lastClickedButtonDHall]);
  

  

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id: '735330380811-di9hrlr84nvs6eomntk5t63hl210nt52.apps.googleusercontent.com',
//       callback: loginCallbackResponse
//     });

//     google.accounts.id.renderButton(
//       document.getElementById("signInDiv"), 
//       {theme: "outline", size: "medium"}
//     );
//   }, []);


//   const handleSubmit = () => {
//     if (isSubmitEnabled) {

//       if (lastClickedButtonDHall && lastClickedButtonHome) {
     
//       console.log('Submitting data:', { Home: lastClickedButtonHome, DHall: lastClickedButtonDHall });}
  

//       setLastClickedButtonHome('');
//       setLastClickedButtonDHall('');
//       setIsSubmitEnabled(false);
//     }
//   };


//   return (
//     <div className="App">
//       <div id="signInDiv"></div>
//       {notBrownStudent ? <p>Please sign in with your ".brown.edu" email</p> : null} {/* Displays this message if a non-brown email signs in */}
//       {Object.keys(user).length>0 ? <div>Hello, you're logged in {user.name}</div> : null} {/* <------ This is how we will handle displaying after login*/}

//       <Home updateLastClickedButton={(button) => updateLastClickedButton(button, 'Home')} />
//       <DHall updateLastClickedButton={(button) => updateLastClickedButton(button, 'DHall')} />

//       {/* Submit button */}
//       <button onClick={handleSubmit} disabled={!isSubmitEnabled}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;
// function setSelectedType(arg0: NodeType) {
//   throw new Error('Function not implemented.');
// }

// function setContent(arg0: string) {
//   throw new Error('Function not implemented.');
// }

