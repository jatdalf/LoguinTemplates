import Card from "../Card/Card"
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux"
import Pagination from "../Pagination/pager"
import { useState } from "react"

const CardContainer = ()=>{
    //const Countries = useSelector(state => state.Countries)
    const LoguinTemplates = 8
    //pagination data
    const [currentPage, setCurrentPage] = useState (1)
    const [cardPerPage] = useState (9)
    const lastCardIndex = currentPage * cardPerPage;
    const fistCardIndex = lastCardIndex - cardPerPage; 
    //const currentCard = Countries.slice(fistCardIndex, lastCardIndex)
    const currentCard = LoguinTemplates.slice(fistCardIndex, lastCardIndex)
    //end pagination data
    
    return (
        <div>
            <Pagination 
                totalCards={Countries.length} 
                cardPerPage={cardPerPage}                                 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>                       
        <div className={style.CardContainer}>          
            {currentCard.map(country =>{
                return <Card
                key= {country.ID}
                ID= {country.ID}
                name= {country.name}
                flag_img= {country.flag_img}
                continent= {country.continent}
                capital= {country.capital}
                subregion= {country.subregion}
                area= {country.area}
                population= {country.population}
                activities= {country.activities}
                />})            
            }        
        </div>            
        </div>
        )
}

export default CardContainer