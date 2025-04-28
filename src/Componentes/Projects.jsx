import React, { useState } from 'react';

const Projects = () => {
  const images = [
    '/src/assets/project_img_1.jpg',
    '/src/assets/project_img_2.jpg',
    '/src/assets/project_img_3.jpg',
    '/src/assets/project_img_4.jpg',
    '/src/assets/project_img_5.jpg',
    '/src/assets/project_img_6.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 w-full h-full">
      <h1 className="text-3xl md:text-7xl font-extrabold text-center py-5">Feature Projects</h1>
      <div className="relative w-full max-w-5xl overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-64 w-full md:w-1/4 mx-10 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-5xl px-10 mt-4">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;