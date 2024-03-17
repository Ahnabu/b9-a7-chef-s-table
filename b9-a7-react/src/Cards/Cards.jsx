import Card from "../Card/Card";
import { useEffect, useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [cook, setCook] = useState([])
  
    const handleCook = (crd) => {
        const isExist = cook.find(item => item.recipe_id == crd.recipe_id);
        

        if (!isExist) {
            setCook([...cook, crd])
            
        } else {
            toast('already exists')
            
        }
        

    }
    const [cooking, setCooking] = useState([])
    const [time, setTime] = useState(0)
    const [calories, setCalories] = useState(0)
    const handleCooking = (crd) => {
        const isExist = cook.find(item => item.recipe_id == crd.recipe_id);
         


        if (isExist) {
            const send = cook.filter(item => item.recipe_id != crd.recipe_id);
            setCook([send])
            setCooking([...cooking, crd])
            setTime(time + crd.preparing_time)
            setCalories(calories + crd.calories)

        } 


    }
    console.log(cards);
    return (
        <div className="flex gap-7">
        <div className="grid lg:grid-cols-2 gap-4 mt-8 ">

        
        {
            cards.map(card => {
                return <Card key={card.recipe_id} card={card} handleCook={handleCook} />
            })
        }
            </div>
            <div>
                <Sidebar key={cook.recipe_id} cook={cook} handleCooking={handleCooking} cooking={cooking}
                    time={time} calories={calories}></Sidebar>
            </div>
            
        </div>
    );
};

export default Cards;