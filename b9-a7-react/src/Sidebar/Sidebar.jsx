import PropTypes from 'prop-types';




const Sidebar = ({ cook, handleCooking, cooking, time, calories }) => {
    

    return (
        <div className="card w-full lg:w-[35vw] text-center shadow-xl border border-[#969696] mt-8">
            <div>
                <h2 className="text-[#282828] font-bold text-3xl mt-9">Want to cook:{cook.length}</h2>
                <hr />
                <div className='flex justify-around pr-24 pl-8'>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr />
                {
                    cook.map((item, index) => (
                        <ul key={index} className='flex justify-between px-4 mt-6'>
                            <p>{ index+1}</p>
                            <li> <p>{item.recipe_name}</p></li>
                            <li><p>{item.preparing_time} Minutes</p></li>
                            <li><p>{item.calories} Calories</p></li>
                            <li><button className='btn bg-[#0BE58A] text-[#150B2B] rounded-full font-bold' onClick={() => handleCooking(item)}>Preparing</button></li>
                        </ul>
                        
                    )
                    )
                    
                }
                
                <hr />
                <div>
                    <h2 className="text-[#282828] font-bold text-3xl mt-9">Currently cooking:{cooking.length}</h2>
                    <hr />
                    <div className='flex justify-around pr-8 pl-20'>
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                    <hr />
                
                    {
                        cooking.map((item, index) => (
                            
                            <ul key={index} className='flex justify-between px-4 mt-6 mb-4'>
                                <p>{index + 1}</p>
                                <li> <p>{item.recipe_name}</p></li>
                                <li><p>{item.preparing_time} Minutes</p></li>
                                <li><p>{item.calories} Calories</p></li>
                               
                            </ul>

                        )
                        )

                    }
                    <hr />
                    <div className='flex justify-around mt-6 mb-4'>
                        <h3>   </h3>
                        <h3>Total Time:{ time}</h3>
                        <h3>Total Calories:{calories}</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
Sidebar.propTypes = {
    cook: PropTypes.shape({
        calories: PropTypes.number,
        preparing_time: PropTypes.number,
        recipe_name: PropTypes.string,
        map: PropTypes.func,
        length: PropTypes.number,
    }),
    length: PropTypes.number,
    handleCooking: PropTypes.func,
    cooking: PropTypes.array,
    time: PropTypes.number,
    calories: PropTypes.number,
    

};
export default Sidebar;