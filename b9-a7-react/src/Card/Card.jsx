
import { FaRegClock } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
const Card = ({ card }) => {
   
    
    const {recipe_image, calories, preparing_time, ingredients, short_description, recipe_name} = card
    console.log(card.length)

    return (
            
        <div >
            <div className="card w-96 bg-base-100 shadow-xl border-[#878787] border">
                <figure className="px-5 pt-5">
                    <img src={recipe_image} className="rounded-xl w-[330px] h-[200px] object-cover" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <div>
                        <h3>Ingredients:{ingredients.length}</h3>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>

                    </div>
                    <hr />
                    <div className="flex flex-row-reverse justify-between">
                        <div className="flex ">
                            <GoFlame></GoFlame>
                            <h3> {calories} Calories  </h3>
                        </div>
                        <div className="flex "> 
                            <FaRegClock /> 
                            <h3>  {preparing_time} Minutes</h3>
                        </div>
                        
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#0BE58A] text-[#150B2B] rounded-full">Want to cook</button>
                    </div>
                </div>
            </div>
        </div>
            
       
    );
};

export default Card;