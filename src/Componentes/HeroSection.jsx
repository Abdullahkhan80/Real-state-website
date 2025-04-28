import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <>
            <div className=" h-screen  bg-black  relative">
                <img src="/src/assets/Hero.jpg" style={{ opacity: 0.5 }} className='w-full h-full absolute object-cover' alt="" srcset="" />
                <div className="fixed z-30 w-full backdrop-blur-3xl bg-transparent stickey ">
                    <Navbar />
                </div>
                <div className=" flex justify-center mb-20 flex-col items-center text-white absolute z-10 inset-0 p-5 md:p-0 ">
                    <div className="flex flex-col gap-4 pt-15 items-center">
                        <h1 className='text-4xl  text-center font-extrabold md:text-7xl '>Welcome to Our Website</h1>
                        <p className=' text-center  md:text-3xl'>Discover amazing content with us.</p>
                        <div className="mt-6 text-white">

                            <button className='bg-blue-500  px-6 py-2 rounded-full hover:bg-blue-600'>Get Started</button>
                            <button className='border ml-10 px-6 py-2 rounded-full hover:bg-white/15'>Get Started</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection