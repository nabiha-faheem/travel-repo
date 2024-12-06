import React from "react";
import { FaPlane, FaHotel, FaTaxi, FaCompass } from "react-icons/fa"; // Importing icons

function Services() {
  return (
    <div className="py-16 bg-gray-300 mt-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          Our Exceptional Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the world with our curated travel services designed just for you.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <FaPlane className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Flight Booking</h3>
          <p className="text-center text-gray-600 mt-2">
            Book flights to any destination at competitive prices with ease.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <FaHotel className="text-4xl text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Hotel Reservations</h3>
          <p className="text-center text-gray-600 mt-2">
            Secure your stay at the best hotels with just a few clicks.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <FaTaxi className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Airport Transfers</h3>
          <p className="text-center text-gray-600 mt-2">
            Easy and comfortable airport pickups and drop-offs at affordable rates.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <FaCompass className="text-4xl text-red-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Guided Tours</h3>
          <p className="text-center text-gray-600 mt-2">
            Explore new destinations with expert tour guides to enrich your journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
















