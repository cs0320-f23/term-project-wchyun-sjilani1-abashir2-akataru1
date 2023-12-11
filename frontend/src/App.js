import './App.css';
import React, {useEffect, useState} from 'react';
import { jwtDecode } from "jwt-decode";
import Card from './card.jsx';
import Day from './day.js'
import Dhall from './Dhall.js'
import Meal from './meal.js'
// import submitData from './submitData.js'


  //Typescript version
  // const App: React.FC = () => {
  //   return (
  //     <div>
  //       <card name="Pizza" description="Good!" rating={5} />
  //     </div>
  //   );
  // };

  function App() {
    const [user, setUser] = useState({});
    const [notBrownStudent, setNotBrownStudent] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    const [selectedDhall, setSelectedDhall] = useState('');
   
  

    // const handleSubmit = () => {
    //   submitData();
    // };

 

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

    const handleDayChange = (day) => {
      setSelectedDay(day);
    };
  
    const handleDhallChange = (dhall) => {
      setSelectedDhall(dhall);
    };
  
    const handleMealChange = (meal) => {
      setSelectedMeal(meal);
    };

    const handleSubmit = () => {
      if (selectedDay && selectedMeal && selectedDhall) {
        console.log('Submitting data:', {
          Day: selectedDay,
          Meal: selectedMeal,
          Dhall: selectedDhall,
        });

        setSelectedDay('');
        setSelectedMeal('');
        setSelectedDhall('');
      }
    };
  
  
    return (
      <div className="App">
        <div id="signInDiv"></div>
        {notBrownStudent ? <p>Please sign in with your ".brown.edu" email</p> : null} {/* Displays this message if a non-brown email signs in */}
        {Object.keys(user).length>0 ? <div>Hello, you're logged in {user.name}
      
        <Day onSelectDay = {handleDayChange} />
         <Dhall onSelectDhall={handleDhallChange} />
        <Meal onSelectMeal = {handleMealChange} />

        <button onClick={handleSubmit}>Submit</button>

       
        <Card name="Chili Con Carne" description="garlic, onions, jalapeno and red peppers, ground beef, kidney beans and ancho chilies with herbs and spices" rating={5} />
        <Card name="Crab And Corn Chowder" description="applewood smoked bacon, rum, cream, onions, potatoes, corn and crab" rating={5} />
      
       


        </div> : null} {/* <------ This is how we will handle displaying after login*/}
        {/* <div>
        <Card name="Chili Con Carne" description="garlic, onions, jalapeno and red peppers, ground beef, kidney beans and ancho chilies with herbs and spices" rating={5} />
      </div>

      <div>
        <Card name="Crab And Corn Chowder" description="applewood smoked bacon, rum, cream, onions, potatoes, corn and crab" rating={5} />
      </div> */}
      </div>
    );
    }
export default App;