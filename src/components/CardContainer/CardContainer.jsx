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
            cardImg: "https://static.wixstatic.com/media/400291_2c63e138f0814e77b36485a827d009ae~mv2.jpg",
            cardAdress: "login01"
        },
        {
            id:2,
            name:"Animated Logo",
            cardImg: "https://static.wixstatic.com/media/400291_fc7102effe314b75920e06be35d7c9d3~mv2.jpg",
            cardAdress: "login02"
        },
        {
            id:3,
            name:"Carousel",
            cardImg: "https://static.wixstatic.com/media/400291_c860597f34b4497e815d56ccf601b791~mv2.jpg",
            cardAdress: "login03"
        },
        {
            id:4,
            name:"Background video",
            cardImg: "https://static.wixstatic.com/media/400291_645297876fe04820b2347b4e5ea943cd~mv2.jpg",
            cardAdress: "login04"
        },
        {
            id:5,
            name:"Matrix Style",
            cardImg: "https://static.wixstatic.com/media/400291_034e8b80e4ab44998827fd4762173368~mv2.jpg",
            cardAdress: "login05"
        },
        {
            id:6,
            name:"Future",
            cardImg: "https://static.wixstatic.com/media/400291_02bf3d3857d9424998629e62b704fcf7~mv2.jpg",
            cardAdress: "login06"
        },
        {
            id:7,
            name:"Neon Lights",
            cardImg: "https://static.wixstatic.com/media/400291_96632761afc346fa8a428318cab8783a~mv2.jpg",
            cardAdress: "login07"
        },
        {
            id:8,
            name:"Multiple Logo Animations",
            cardImg: "https://static.wixstatic.com/media/400291_d0d8d210fb1847fd847bae0416bfbbb2~mv2.jpg",
            cardAdress: "login08"
        },

        ];
    const LoguinTemplates = [8]
    //pagination data
    const [currentPage, setCurrentPage] = useState (1)
    const [cardPerPage] = useState (9)
    const lastCardIndex = currentPage * cardPerPage;
    const fistCardIndex = lastCardIndex - cardPerPage; 
    const currentCard = LoguinTemplates.slice(fistCardIndex, lastCardIndex)
    //end pagination data
    
    return (
        <div>        
            <div className={style.CardContainer}>
            <Pagination 
                totalCards={cardData.length} 
                cardPerPage={cardPerPage}                                 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
            </div>
            <div >          
                {currentCard.map(cardData =>{
                return <Card
                    key= {cardData.id}
                    ID= {cardData.id}
                    name= {cardData.name}
                    cardImg= {cardData.cardImg} 
                    cardAdress = {cardData.cardAdress}            
                />})       
                }        
            </div>
        </div>         
    )
}

export default CardContainer