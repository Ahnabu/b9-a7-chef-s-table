
import './App.css'

import Cards from './Cards/Cards';
import Header from './Header/Header';




function App() {
  
  

  return (
    <>
     

      <Header></Header>

      {/* our Recipes */}
      <div className='text-center mt-14'>
        <h1 className='text-[#150B2B] text-5xl font-bold'>Our Recipes</h1>
        <p className='text-[#150B2B99] mt-7'>Follow our guide through every step of making this delightful dish. We'll begin with "Flavor Explosion," where we'll introduce key ingredients and techniques to create a taste sensation. Then, move on to "Assembly Magic" to learn how to combine everything seamlessly. For baking enthusiasts, "Oven Love" provides baking tips for golden perfection. Finally, "Finishing Touches" offers ideas to elevate your dish and leave a lasting impression.</p>
      </div>
      <div>
        <Cards></Cards>
        
      </div>
      
    </>
  )
}

export default App
