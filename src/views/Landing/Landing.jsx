import { Link } from "react-router-dom";
import style from "./Landing.module.css"

export const Landing = () =>{
    return(        
        <div className={style.landingContainer}> 
            <h1 className={style.landingH1}>Welcome!</h1>
            <br/><br/>
            <p className={style.landingP}>This page shows a list of loguin screens<br/>
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