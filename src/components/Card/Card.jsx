import style from "./Card.module.css"
import {Link} from 'react-router-dom'

const Card = (props)=>{    
    const data = props
    console.log(props.cardImg)
    console.log(props.name)
    console.log(props.cardAdress)

    return (
    <div className={style.cardEliminarEstaFrase}>     
        <Link to={`/${props.cardAdress}`}>
        {/* <div> 
            <img className={style.FlagImg} src={props.cardImg} alt={props.cardImg}  width="150em" height="110em"/>
            <h3>{props.name}</h3>
        </div> */}
        </Link>    
    </div>)
}

export default Card   

{/* <button className={style.glowOnHover} type="button" value={data}> visualize </button> */}