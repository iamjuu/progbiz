import React from 'react';
import { Arrowbtn, About1, About2, About3 } from '../../Assets';

const About = [
  { id: 1, img: About1 },
  { id: 2, img: About2 },
  { id: 3, img: About1 },
  { id: 4, img: About2 },
  { id: 5, img: About3 },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen mt-24  ">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-blue-600 text-sm uppercase tracking-wide">ABOUT US</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cool
              <br />
              Technologies
            </h1>
          </div>

          <div className="relative">
            <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
              Founded in the Emirate of Abu Dhabi in 2012, Cool Technologies have emerged to
              be one of the leading suppliers of industrial cooling equipment in the UAE for
              the past 10 years.
            </p>
          </div>
        </div>

        <div className="flex justify-end mb-8">
        <button className="group relative">
  <img 
    src={Arrowbtn} 
    alt="arrow button" 
    className="transition-transform duration-300 transform group-hover:rotate-90"
  />
</button>

        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="w-full py-8 overflow-hidden relative">
        <div
          className="flex items-center gap-4 animate-scroll hover:pause-scroll"
          style={{
            animationDuration: '20s',
          }}
        >
          {About.map((item) => (
            <div
              key={item.id}
              className="min-w-[300px] flex-shrink-0 p-4 rounded-lg shadow-lg"
            >
              <img
                src={item.img}
                alt={`About ${item.id}`}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          ))}
          {/* Duplicate Items */}
          {About.map((item) => (
            <div
              key={`duplicate-${item.id}`}
              className="min-w-[300px] flex-shrink-0 p-4 rounded-lg shadow-lg"
            >
              <img
                src={item.img}
                alt={`Duplicate About ${item.id}`}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            display: flex;
            animation: scroll linear infinite;
          }

          .hover\\:pause-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
