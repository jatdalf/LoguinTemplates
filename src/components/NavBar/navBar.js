import { Link } from "react-router-dom";
import style from "./navBar.module.css"

const navBar = ()=>{
    return(
        <div className={style.navContainer}>
            <Link to="/home">Home</Link>
            <Link to="/about">Activities</Link>            
            <Link to="/contact">Activities</Link> 
        </div>
    )
}

export default navBar