import React, { useEffect } from 'react';
import { FooterLogo } from '../../Assets';
import AOS from 'aos'; // Ensure you import AOS
import 'aos/dist/aos.css'; // Ensure you import AOS styles

const Footer = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: false });
  
    const handleScroll = () => {
      AOS.refresh(); /
    };
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      AOS.destroy(); 
    };
  }, []);

  return (
    <footer className="bg-[#1C2632] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="mb-16" data-aos="fade-down">
          <h2 className="text-[60px] font-semibold mb-8">
            Ready to Experience Superior<br />Cooling?
          </h2>
          <div className="flex items-center gap-8">
            <button className="border border-white rounded-full px-6 py-2 flex items-center gap-2 hover:bg-white hover:text-[#1C2632] transition-colors">
              LET'S TALK
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="mailto:info@cooltech.com" className="hover:underline">
              info@cooltech.com
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1" data-aos="fade-up">
            <img src={FooterLogo} alt="Cool Technologies" className="mb-4" />
            <p className="text-gray-400 text-[18px]">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="font-medium  text-[#E4E4E4] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div data-aos="fade-up">
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">Gallery</a></li>
              <li><a href="#" className="hover:text-white">Blogs</a></li>
            </ul>
          </div>

          {/* Info */}
          <div data-aos="fade-up">
            <h3 className="font-medium mb-4">Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700" data-aos="fade-up">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300">INSTAGRAM</a>
            <a href="#" className="hover:text-gray-300">FACEBOOK</a>
            <a href="#" className="hover:text-gray-300">TWITTER</a>
            <a href="#" className="hover:text-gray-300">PINTEREST</a>
          </div>
          <p className="text-sm text-gray-400">
            Copyright © 2024 Cooltech. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
