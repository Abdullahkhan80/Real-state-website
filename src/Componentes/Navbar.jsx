import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import Moilemenu from './Moilemenu';

const Navbar = () => {
  const [setMobileMenu, setsetMobileMenu] = useState(false)
  return (
    <div>
      <nav className="bg-transparent  p-5 top-0 left-0 w-full py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 text-2xl text-white">
            <img src="/src/assets/favicon.svg" className='' alt="" />
            <h1>State</h1>
          </div>
          <div className="flex items-center gap-10">

          <ul className=" hidden md:flex space-x-4 ">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
          <button className='hidden md:block bg-gray-300 px-6 py-2 rounded-3xl '> sign up</button>
          </div>
          <div className="text-white md:hidden text-4xl cursor-pointer">

        <FiAlignRight onClick={()=>setsetMobileMenu(true)} />
          </div>
        </div>
        <div className={`absolute inset-0 p-10 text-xl text-center h-screen w-screen ${setMobileMenu?'flex items-start justify-center bg-black md:hidden':'hidden'} `}>

      <Moilemenu setMobileMenu={setsetMobileMenu}  />
        </div>
      </nav>
    </div>
  )
}

export default Navbar