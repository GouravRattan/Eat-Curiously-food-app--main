import React from 'react';
import aboutImage2 from '../assets/AboutImg2.png';
import NavBar from '../Components/NavBar';
import Marquee from '../Components/Marquee';

const AboutPage2 = () => {
  return ( 
    <>
      <div className="flex flex-col lg:flex-row bg-[#fc74b4] min-h-screen">
        <NavBar /> 

        <div className="relative lg:w-1/2 flex items-center justify-center">
          <img src={aboutImage2} alt="About" className="w-full h-auto max-h-[65vh] lg:max-h-full lg:w-auto" />
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <h1 className="text-4xl lg:text-7xl font-bold text-center lg:text-left mx-10 my-10 lg:my-20 font-rammetto leading-snug">
            INSPIRING GOOD THROUGH TASTY GOODNESS 
          </h1>
          <p className="text-lg lg:text-2xl text-center lg:text-left mx-10 my-10 lg:my-12 lg:pr-20">
            We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
          </p>
        </div>
      </div>
      <Marquee />
    </>
  );
};

export default AboutPage2;
