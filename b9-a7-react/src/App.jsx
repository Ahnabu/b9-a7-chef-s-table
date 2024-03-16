import PropTypes from 'prop-types';
import './App.css'
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function App() {


  return (
    <>


      <div>
        {/* navbar */}


        <div>

          <div className="navbar  bg-base-100 ">


            <div className="dropdown">
              <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li>
                  <a>Recipes </a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li><a>Search</a></li>
              </ul>

            </div>
            <div className="flex-1">
              <a className="btn btn-ghost font-bold text-[#150B2B] text-3xl">Foodie Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex pr-60">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li>
                  <a>Recipes </a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li><a>Search</a></li>
              </ul>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder=" Search" className="input input-bordered w-24 md:w-auto" />
              </div>
              <div className="dropdown dropdown-end">
                <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <FaRegUserCircle className='text-4xl text-[#0BE58A]' />
                  </div>
                </div>
                <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>


          <div id='banner' className='max-w-[380px] lg:w-[1200px] lg:h-[600px] mx-auto text-center lg:pt-40 pt-20' >
            <h1 className='text-5xl font-extrabold text-white'>
              Learn knife skills and whip <br /> up a delicious meal.</h1>
            <p className='text-white mt-14'>The aroma of spices filled the air as we chopped vegetables, following the chef's instructions. Laughter bubbled up as we learned <br /> knife skills and teamed up to create a delicious meal.</p>
            <div className='mt-14'>
              <button className='btn bg-[#0BE58A] text-[#150B2B] font-bold border-0 lg:mr-20 rounded-full'>Explore Now</button>
              <button className='btn btn-ghost text-white border-white rounded-full'>Our Feedback</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
