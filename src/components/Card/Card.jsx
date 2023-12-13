import style from "./Card.module.css"
import {Link} from 'react-router-dom'

const Card = (props)=>{    
    const data = props    

    return (
    <div className={style.card}>     
        <Link to={`/${props.cardAdress}`}>
        <div> 
            <img className={style.FlagImg} src={props.cardImg} alt={props.cardImg} />
            <h3  className={style.centered}>{props.name}</h3>
        </div>
        </Link>    
    </div>)
}

export default Card   

{/* <button className={style.glowOnHover} type="button" value={data}> visualize </button> */}