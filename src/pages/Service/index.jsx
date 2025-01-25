import React, { useEffect } from "react";
import Btn from '../../components/arrowBtn'
import { MoveUpRight } from "lucide-react";
import { About1, About3, About4, About5, About6 } from '../../Assets'
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false,  // Set once to false to enable animation every time element enters the viewport
        });
      }, []);

  const services = [
    { imgSrc: About1, title: "Window Air Conditioning", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { imgSrc: About3, title: "Air Conditioning Service", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { imgSrc: About4, title: "Heating Systems", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { imgSrc: About5, title: "Ventilation Systems", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { imgSrc: About6, title: "Energy Efficiency Consulting", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];

  return (
    <div className="w-full mt-10 flex justify-center items-center px-4">
      <div className="max-w-[1300px] w-full flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[45%]">
          <p className="text-lg lg:text-xl">our Service</p>
          <h1 className="text-[40px] lg:text-[60px] text-[#1E2831]">
            Professional Services Tailored for You
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#545471]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div></div>
        <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" className="mb-10">
              <img className="w-full max-w-[287px] h-[305px] mx-auto" src={service.imgSrc} alt={service.title} />
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex flex-col gap-5">
                  <h2 className="text-[20px] lg:text-[24px]">{service.title}</h2>
                  <p className="text-[16px] lg:text-[18px] text-[#545471]">{service.description}</p>
                </div>
                <div>
                  <Btn
                    icon={<MoveUpRight size={20} />}
                    btnname={` LET'S TALK`}
                    className={'hidden lg:flex items-center justify-center border p-2 gap-2 rounded-full transition-colors duration-200 hover:bg-blue-500 hover:text-white'}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
