import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import Pagination from "../Pagination/pager"
import { useState } from "react"

const CardContainer = ()=>{
    const cardData = [
        {
        id: 1,
        name: "Background Image",
        cardImg: "/media/login01.webp",
        cardAdress: "login01"
        },
        {
            id:2,
            name:"Animated Logo",
            cardImg: "/media/login02.webp",
        },
        {
            id:3,
            name:"Carousel",
            cardImg: "/media/login03.webp",
            cardAdress: "login03"
        },
        {
            id:4,
            name: "Background Video",
            cardImg: "/media/login04.webp",
            cardAdress: "login04"
        },
        {
            id:5,
            name:"Matrix Style",
            cardImg: "/media/login05.webp",
            cardAdress: "login05"
        },
        {
            id:6,
            name:"Future",
            cardImg: "/media/login06.webp",
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
            cardImg: "/media/login08.webp",
            cardAdress: "login08"
        },
        {
            id:9,
            name:"Dark and Blue",
            cardImg: "/media/login09.webp",
            cardAdress: "login09"
        },
        {
            id: 10,
            name: "Editorial / Paper",
            cardImg: "/media/login10.webp",
            cardAdress: "login10"
        },
        {
  id: 11,
  name: "Moonlit Portal",
  cardImg: "/media/login11.webp",
  cardAdress: "login11"
},
{
  id: 12,
  name: "Prism / Liquid Light",
  cardImg: "/media/login12.webp",
  cardAdress: "login12"
},
// "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
        ];
    
     return (
        <div className={style.CardContainer}>
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    ID={card.id}
                    name={card.name}
                    cardImg={card.cardImg}
                    cardAdress={card.cardAdress}
                />
            ))}
        </div>
    );
};

export default CardContainer;