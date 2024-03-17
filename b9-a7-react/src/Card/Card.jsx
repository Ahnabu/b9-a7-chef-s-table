import PropTypes from 'prop-types';
import { FaRegClock } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ card, handleCook }) => {
   
    
    const {recipe_image, calories, preparing_time, ingredients, short_description, recipe_name} = card
 

    return (
            
        <div >
            <div className="card w-96 bg-base-100 shadow-xl border-[#bebebe] border">
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
                            )).slice(0, 3) }
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
                        <button className="btn bg-[#0BE58A] text-[#150B2B] rounded-full" onClick={() => handleCook(card)}>Want to cook
                       <ToastContainer/> </button>
                    </div>
                </div>
            </div>
           
        </div>
            
       
    );
};
Card.propTypes = {
    card: PropTypes.shape({
        recipe_image: PropTypes.string,
        calories: PropTypes.number,
        preparing_time: PropTypes.number,
        ingredients: PropTypes.array,
        short_description: PropTypes.string,
        recipe_name: PropTypes.string,
        recipe_id: PropTypes.number,
        
    }),
    handleCook: PropTypes.func
}

export default Card;