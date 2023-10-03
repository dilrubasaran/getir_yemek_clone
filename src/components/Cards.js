import { useEffect, useState } from "react";
import cardsData from '../api/cards.json'

const Cards = () => {

    const[cards, setCards] = useState([]);

    useEffect(()=>{
        //data isteği
        setCards(cardsData)
    },[])

    return(
        <div className="grid grid-cols-3 gap-x-4">
            {cards.length && cards.map(card => (
                <div className="flex flex-col text-start p-4!tracking-normal box-border">
                    <div className=" bg-white items-center justify-start pb-10 pt-14 h-full flex flex-col rounded-lg  font-semibold text-base text-[#5d3ebc] ">
                    <img src={card.image} alt={card.title} width="150px" height="150px"  />
                    <h6 className="font-semibold text-lg mt-6 text-center text-[#5d3ebc] max-width-[292px] leading-6" >{card.title}</h6>
                    </div>
                </div>
            )) }
        </div>
    )
}
export default Cards 