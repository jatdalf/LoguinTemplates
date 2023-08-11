import './App.css'
import {Landing, Home } from "./views"
import NavBar from "./components/navBar/navBar.js"
import { Route, useLocation, Link } from 'react-router-dom';
import axios from 'axios';


function App() {  
  const location = useLocation();
  return (
    <div className="card">
      <h1>Loguin Templates</h1>
        {/* {location.pathname !== "/" && <NavBar />}  */}
        {/* <Route exact path="/" render = {()=> <Landing/>}/>            */}
        {/* <Route path="/home" render = {()=> <Home/>}/>        */}
    </div>       
  )
}

export default App
