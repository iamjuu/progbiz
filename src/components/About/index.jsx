import React from 'react';
import { Circle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <p className="text-blue-600 text-sm uppercase tracking-wide">ABOUT US</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cool
              <br />
              Technologies
            </h1>
          </div>
          
          <div className="relative">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded in the Emirate of Abu Dhabi in 2012, Cool Technologies have emerged to be one of the leading suppliers of industrial cooling equipment in the UAE for the past 10 years.
            </p>
            
            <button className="flex items-center space-x-2 text-sm font-medium">
              <span>KNOW MORE</span>
              <Circle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;