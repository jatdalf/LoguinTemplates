import style from "./Card.module.css"
import {Link} from 'react-router-dom'

const Card = (props)=>{    
    const data = props
    return (
    <div className={style.card}>   card  
        <Link to={`/${props.cardAdress}`}>
        {/* <div>
            <img className={style.FlagImg} src={props.flag_img} alt={props.flag_img}  width="150em" height="110em"/>
            <h3>{props.name}</h3>
        </div> */}
        </Link>    
    </div>)
}

export default Card   

{/* <button className={style.glowOnHover} type="button" value={data}> visualize </button> */}