

import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="mt-[80px] bg-gradient-to-r from-gray-200 to-gray-300 py-16 px-6 sm:px-12 md:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        
        {/* Left Section: Text */}
        <div className="text-center lg:text-left max-w-xl mx-auto">
          <h2 className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Best Destinations Around the World
            <br />
            <span className="text-6xl sm:text-7xl text-green-500">Adventure Awaits</span>
            <br />
            <span className="text-3xl sm:text-4xl font-semibold text-gray-800">Let&apos;s Go!</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nihil minus. Praesentium, vel provident tempore reprehenderit quae quia, distinctio explicabo debitis ab veritatis dolor voluptate. Sed quod excepturi assumenda sit.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-6">
            <button className="bg-transparent border-2 border-gray-800 px-6 py-3 rounded-md text-gray-800 font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white">
              Contact Us
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-green-400 hover:text-gray-800">
              Book Now
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative max-w-lg mx-auto lg:max-w-none lg:w-[600px]">
          <Image
            src="/istockphoto-1190297091-612x612-removebg-preview.png"
            alt="Travel Image"
            width={600}
            height={600}
            className="object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;














