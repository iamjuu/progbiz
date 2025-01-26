import React, { useEffect } from 'react';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7 } from '../../Assets';
import { MoveRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import the AOS styles

const ClientLogos = () => {
  const logos = [
    { name: 'General', src: Logo1 },
    { name: 'Midea', src: Logo2 },
    { name: 'Akai', src: Logo3 },
    { name: 'Nikai', src: Logo4 },
    { name: 'Bompani', src: Logo5 },
    { name: 'Super General', src: Logo6 },
    { name: 'Siemens', src: Logo7 },
    { name: 'Whirlpool', src: Logo1 },
  ];

  const getBorderClass = (index) => {
    switch (index) {
      case 0:
        return 'border-t-0 border-l-0'; // Hide top and left border
      case 1:
        return 'border-t-0'; // Hide top border
      case 2:
        return 'border-t-0'; // Hide top border
      case 3:
        return 'border-t-0 border-r-0'; // Hide top and right border
      case 4:
        return 'border-l-0 border-b-0'; // Hide left and bottom border
      case 5:
        return 'border-b-0'; // Hide bottom border
      case 6:
        return 'border-b-0'; // Hide bottom border
      case 7:
        return 'border-b-0 border-r-0'; // Hide bottom and right border
      default:
        return ''; // Default no border change
    }
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set animation duration
      once: false, // Ensure animations are triggered every time the element is in view
    });

    // Listen for scroll events and refresh AOS to re-trigger animations when scrolling
    const handleScroll = () => {
      AOS.refresh(); // Re-initialize AOS when scrolling back
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col gap-5">
          <p className="text-blue-600 text-[20px] mb-2 uppercase tracking-wide">
            CLIENTS & FRIENDS
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            We've worked
            <br />
            with lovely clients
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`bg-white border p-8 flex items-center justify-center ${getBorderClass(index)} transition-all transform hover:scale-105 hover:shadow-lg hover:border-blue-500 duration-300 ease-in-out`}
              data-aos="fade-up" // Add AOS animation when in view
              data-aos-delay={`${index * 100}`} // Delay animation based on index
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-h-12 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* More View Section */}
        <div className='mt-2 flex gap-2 items-center'>
          <MoveRight /> <span>more view</span>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
