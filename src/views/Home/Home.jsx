import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
//import { getActivities, getCountries } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
//import Filterbar from "../../components/Filters/filterbar";
import style from "./Home.module.css"
import backgroundImage from "../../Assets/HomeBg.jpg"

const Home = () =>{
    const dispatch = useDispatch(); 
    
    // useSelector(state => state.orderCountries) cambio esta linea, evita la pantalla en negro luego de adicionar actividades??
    useSelector(state => state.orderCountries)       
    useEffect(()=>{
        dispatch(getCountries()) //get all Countries from Back
        dispatch(getActivities()) //get all Activities from Back
    },[dispatch])

    return(
        <body className={style.HomeBg} background={backgroundImage}>
        <div className={style.HomeDiv}>               
            <Filterbar    />           
            <CardContainer/>            
        </div>
        </body>
    )
}
export default Home;