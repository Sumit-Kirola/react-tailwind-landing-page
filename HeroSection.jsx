import React from 'react';

// Hero section component - main landing area with title and CTA buttons
const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to My Landing Page
        </h1>

        {/* Subheading text */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Build amazing things with React and Tailwind CSS. Fast, responsive, and beautiful.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Learn More
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;