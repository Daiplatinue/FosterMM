import React from 'react';

const Why: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
      <div className="text-center relative z-10">
        <h1 className="text-[3rem] font-bold text-gray-900 mb-4 tracking-tight">Why Planet of Enyaw</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-black font-semibold leading-relaxed mb-8">
            Foster adoption is like a planet nurturing life, providing children with a safe and loving environment to grow and thrive. It creates a new orbit of opportunities, pulling them into a system of care, support, and belonging they might not have had before. Every child deserves a space where they can shine, much like planets becoming brighter when embraced by the light of their sun. It's about building connections and forming a new family constellation centered on love, security, and shared dreams. Just as life adapts and flourishes on different planets, children in foster adoption bloom when given the right care and the chance to be part of a supportive home.
          </p>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="absolute bottom-4 right-6 text-gray-500 text-sm z-20">
        enyaw © 2024
      </div>

      {/* Large Planet at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 animate-spin-slow shadow-[0_0_100px_rgba(219,39,119,0.3)] relative">
          {/* Add some "craters" with subtle circular overlays */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white opacity-10"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-white opacity-5"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Why;