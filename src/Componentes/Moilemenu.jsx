import React from 'react'
import { ImCross } from "react-icons/im";

const Moilemenu = ({setMobileMenu}) => {
    return (
        <div>
            <div className="flex items-center gap-10">
                <div onClick={()=>setMobileMenu(false)} className=" text-2xl text-white absolute top-5 right-5 cursor-pointer transition-all">
                <ImCross  />
                </div>
                <ul className="  flex flex-col gap-3 text-2xl">
                    <li><a onClick={()=>setMobileMenu(false)} href="#"  className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a onClick={()=>setMobileMenu(false)} href="#" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a onClick={()=>setMobileMenu(false)} href="#" className="text-gray-300 hover:text-white">Services</a></li>
                    <li><a onClick={()=>setMobileMenu(false)} href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
                <button className='hidden md:block bg-gray-300 px-6 py-2 rounded-3xl '> sign up</button>
            </div>
        </div>
    )
}

export default Moilemenu