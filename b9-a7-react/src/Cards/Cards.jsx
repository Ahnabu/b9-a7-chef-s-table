import Card from "../Card/Card";
import { useEffect, useState } from 'react';

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(
        () => {
            fetch('../public/data.json')
                .then(res => res.json())
                .then(data => {
                    
                    setCards(data)
                })
        }, []
    )
    console.log(cards);
    return (
        <div className="grid lg:grid-cols-2 gap-4 mt-8 ">

        
        {
            cards.map(card => {
                return <Card key={card.id} card={card} />
            })
        }
        </div>
    );
};

export default Cards;