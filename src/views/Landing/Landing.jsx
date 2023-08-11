import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const Landing = () =>{
    return(        
        <div > 
            <a>This is landing</a>
            {/* <Link to="/Home"  >
                <button className={style.homeButton}> Home </button>
            </Link> */}
        </div>
    )
}

export default Landing;