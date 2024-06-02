import React from 'react';
import aboutImage4 from '../assets/AboutImg4.png';
import NavBar from '../Components/NavBar';

const AboutPage4 = () => {

  return ( 
    <>
      <div className="flex flex-col lg:flex-row bg-[#042f1a] min-h-screen">
        <NavBar />

        <div className="relative lg:w-1/2 flex items-center justify-center">
          <img src={aboutImage4} alt="About" className="h-auto max-h-[80vh] lg:max-h-full max-w-full w-auto" />
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/2 text-[#fff6f6]">
          <h1 className="text-4xl lg:text-7xl font-bold text-center lg:text-left mx-10 my-10 lg:my-20 font-rammetto leading-snug">
          FLAVOURSOME FOOD FOR EVERYONE
          </h1>
          <p className="text-lg lg:text-2xl text-center lg:text-left mx-10 my-10 lg:my-12 lg:pr-20">Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn’t mean flavour free.</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage4;
