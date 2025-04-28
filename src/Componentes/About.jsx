import React from 'react';

const About = () => {
    return (
        <>
            <div className="flex flex-col gap-10 md:gap-20 mt-10 md:mt-20 items-center text-black px-4 md:px-10 lg:px-20">
                {/* Header Section */}
                <div className="flex items-center justify-center flex-col gap-2 text-xl md:text-3xl">
                    <h1 className="text-center">
                        About <span className="font-extrabold underline">Our brand</span>
                    </h1>
                    <div className="text-center font-light">
                        <h6 className="text-base md:text-lg">Passionate About Properties, Dedicated to</h6>
                        <h6 className="text-base md:text-lg">Your Vision</h6>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col p-10 md:flex-row md:flex-nowrap items-center justify-center gap-10 w-full">
                    {/* Image Section */}
                    <div className="w-full md:w-[100%] lg:w-1/3 flex justify-center">
                        <img
                            className="h-64 md:h-full object-contain"
                            src="/src/assets/about.png"
                            alt="About"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center  md:justify-center text-center  md:text-left gap-20">
                        <div className="text-5xl md:text-7xl lg:text-9xl flex flex-col gap-6">
                            <div className="flex items-center justify-around gap-4">
                                <div className="flex flex-col items-center">
                                    <h1 className='text-5xl md:text-7xl'>20+</h1>
                                    <p className="text-sm md:text-base   text-center">certified coustomer</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className='text-5xl md:text-7xl'>12+</h1>
                                    <p className="text-sm md:text-base  text-center">Project completed</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-around gap-20">
                                <div className="flex flex-col items-center">
                                    <h1 className='text-5xl md:text-7xl'>10+</h1>
                                    <p className="text-sm md:text-base w-20 md:w-30 text-center">Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className='text-5xl md:text-7xl'>25+</h1>
                                    <p className="text-sm md:text-base w-20 md:w-30 text-center">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center md:text-xl lg:text-2xl mt-5 md:mt-10 w-full md:w-[90%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus
                            odio incidunt neque deleniti veritatis qui vitae ad impedit, quo dolor
                            fuga architecto eaque sunt itaque. Eligendi modi ex magni!
                        </p>
                        <button className="bg-blue-500 px-4 md:px-6 py-2 mt-5 md:mt-10 rounded-full hover:bg-blue-600">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
