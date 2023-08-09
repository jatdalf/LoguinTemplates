import './App.css'
import { Home } from "./views"
import NavBar from "./components/navBar/navBar"
import { Route, useLocation } from 'react-router-dom';
import axios from 'axios';

function App() {  
  const location = useLocation();
  return (
    <>
      <h1>Loguin Templates</h1>
      <div className="card">
        <button>
          Home
        </button>
      </div>        
    </>
  )
}

export default App
