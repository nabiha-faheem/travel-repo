'use client'

import { useState, useEffect } from 'react';

export default function FullWidthTestimonials() {
  const testimonials = [
    {
      quote: "This trip was absolutely incredible! The travel agency took care of everything, from start to finish. Highly recommend!",
      name: "Sophia Williams",
      role: "Travel Enthusiast",
      image: "/images/testimonial1.jpg",
    },
    {
      quote: "We had the best vacation of our lives! The organization was flawless, and the experiences were unforgettable.",
      name: "Daniel Johnson",
      role: "Explorer",
      image: "/images/testimonial2.jpg",
    },
    {
      quote: "From the moment we booked, everything was perfect. The itinerary, the hotels, the activities – all top-notch!",
      name: "Emma Rodriguez",
      role: "Family Traveler",
      image: "/images/testimonial3.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-transition every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length])

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] bg-gray-300">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}
      ></div>

      {/* Testimonial content */}
      <div className="relative flex justify-center items-center w-full h-full text-white px-6 sm:px-12 z-10">
        <div className="text-center max-w-4xl">
          <blockquote className="text-2xl sm:text-3xl italic font-semibold mb-6">
            {testimonials[currentTestimonial].quote}
          </blockquote>
          <div>
            <p className="text-xl font-bold">{testimonials[currentTestimonial].name}</p>
            <p className="text-md text-gray-200">{testimonials[currentTestimonial].role}</p>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          className="text-white text-3xl p-2 bg-green-600 rounded-full hover:bg-green-700 transition duration-300"
          onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        >
          &#8592;
        </button>
        <button
          className="text-white text-3xl p-2 bg-green-600 rounded-full hover:bg-green-700 transition duration-300"
          onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
