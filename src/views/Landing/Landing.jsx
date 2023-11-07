import { Link } from "react-router-dom";
import style from "./Landing.module.css"

export const Landing = () =>{
    return(        
        <div > 
            <h2>Welcome!</h2>
            <br/><br/>
            <p>This page shows a list of loguin screens<br/>
            using different techniques, applying react,<br/>
            javascript, css, sass.
            </p>
            <Link to="/Home"  >
                <button className={style.homeButton}> Home </button>
            </Link>
        </div>
    )
}

export default Landing;