

import React from "react";

function Booking() {
  return (
    <div className="bg-gray-300 py-16  mt-11">
      <div className="max-w-screen-xl mx-auto text-center px-6 sm:px-12">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Book Your Perfect Trip Today
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose from a range of travel services and start planning your dream trip.
        </p>
      </div>

      {/* Booking Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12 lg:px-24 mt-16">
        {/* Flight Booking Option */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Flight Booking</h3>
          <p className="text-gray-600 mt-4">
            Book affordable flights to destinations around the world with ease.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition duration-300">
            Book Flight
          </button>
        </div>

        {/* Hotel Booking Option */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Hotel Booking</h3>
          <p className="text-gray-600 mt-4">
            Find top-rated hotels and resorts at your dream destinations.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition duration-300">
            Book Hotel
          </button>
        </div>

        {/* Tour Booking Option */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Guided Tours</h3>
          <p className="text-gray-600 mt-4">
            Explore hidden gems with our expert-guided tours.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition duration-300">
            Book Tour
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Ready to get started on your adventure?
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          Take the first step toward your dream trip. Book your adventure today!
        </p>
        <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-md text-xl hover:bg-green-500 transition duration-300">
          Book Your Trip Now
        </button>
      </div>
    </div>
  );
}

export default Booking;
