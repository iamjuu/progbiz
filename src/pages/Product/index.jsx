import React,{useEffect} from 'react';
import Imgbtn from '../../components/arrowBtn';
import { Cata1, Cata2, Cata3, Cata4, Cata5, Cata6 } from '../../Assets';
import { MoveUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductCategories = () => {
  const categories = [
    {
      btnName: 'Air Conditioner',
      imageSrc: Cata1,
    },
    {
      btnName: 'Air Cooler',
      imageSrc: Cata2,
    },
    {
      btnName: 'Chillers',
      imageSrc: Cata3,
    },
    {
      btnName: 'Ice Makers',
      imageSrc: Cata4,
    },
    {
      btnName: 'Appliances',
      imageSrc: Cata5,
    },
    {
      btnName: 'Air Conditioner',
      imageSrc: Cata1,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Animation triggers every time the element enters the viewport
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-[60px] font-medium text-gray-900" data-aos="fade-up">
          Explore Our Top Categories
        </h2>
        <p className="text-[18px] text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply
        </p>
      </div>

      <div className="w-full mt-10 justify-center flex flex-wrap gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group transform transition duration-500 hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // Adding different animations for variation
            data-aos-delay={index * 100}
          >
            <img
              src={item.imageSrc}
              alt={'image'}
              className="w-[550px] object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:opacity-80"
            />
            <div className='w-full mt-4'>
              <Imgbtn
                btnname={item.btnName}
                icon={<MoveUpRight size={20} />}
                className="flex items-center gap-1 justify-center text-black text-[24px] transition-colors duration-300 hover:text-blue-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
