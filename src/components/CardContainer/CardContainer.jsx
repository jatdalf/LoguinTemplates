import Card from "../Card/Card"
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux"
import Pagination from "../Pagination/pager"
import { useState } from "react"

const CardContainer = ()=>{
    const cardData = [
        {
            id:1,
            name:"background Image",
            cardImg: ""
        },
        {
            id:2,
            name:"Animated Logo",
            cardImg: ""
        },
        {
            id:3,
            name:"Carousel",
            cardImg: ""
        },
        {
            id:4,
            name:"Background video",
            cardImg: ""
        },
        {
            id:5,
            name:"Matrix Style",
            cardImg: ""
        },
        {
            id:6,
            name:"",
            cardImg: ""
        },
        {
            id:7,
            name:"",
            cardImg: ""
        },
        {
            id:8,
            name:"",
            cardImg: ""
        },

        ];
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
                totalCards={cardData.length} 
                cardPerPage={cardPerPage}                                 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>                       
        <div className={style.CardContainer}>          
            {currentCard.map(cardData =>{
                return <Card
                key= {cardData.id}
                ID= {cardData.id}
                name= {cardData.name}
                cardImg= {cardData.cardImg}               
                />})            
            }        
        </div>            
        </div>
        )
}

export default CardContainer