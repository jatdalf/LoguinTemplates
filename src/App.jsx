import './App.css'
//import { Landing } from '../src/views/Landing/Landing';
//import {Home } from "./views/Home/Home"
//import NavBar from "./components/navBar/navBar.js"
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import axios from 'axios';


function App() {  
  const location = useLocation();
  return (  
    <div>
      <h1>Loguin Templates</h1>
    </div>     
  )
}

export default App
