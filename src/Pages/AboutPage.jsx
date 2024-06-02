import React from 'react';
import aboutImage from '../assets/about-img.svg';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Marquee from '../Components/Marquee';
import PlantsPage from './PlantsPage';

const AboutPage = () => {
  return ( 
    <>
      <div className="flex flex-col lg:flex-row bg-[#fc74b4] min-h-screen">
        <NavBar  AboutBtn="text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto" />
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <h1 className="text-4xl lg:text-7xl font-bold font-rammetto text-center lg:text-left mx-10 my-10 lg:my-20">
            CURIOUS... BY NAME, BY NATURE
          </h1>
          <p className="text-lg lg:text-2xl text-center lg:text-left mx-10 my-10 lg:my-20 lg:pr-20">
            It’s what inspires us to whip up, throw together, tear, shake, and break the rules – on a mission to redefine food for a new generation.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src={aboutImage} alt="About" className="h-80 lg:h-auto max-w-full mx-auto my-10 lg:mr-10" />
        </div>
      </div>

    </>
  );
};

export default AboutPage;
