import CardContainer from "../../components/CardContainer/CardContainer";
import style from "./Home.module.css"
import backgroundImage from "../../Assets/starsBG.png"

const Home = () =>{
    return(
      <body className={style.HomeBg} background={backgroundImage}>
        <div className={style.HomeDiv}>
          <CardContainer/>            
        </div>
      </body>
    )
}
export default Home;