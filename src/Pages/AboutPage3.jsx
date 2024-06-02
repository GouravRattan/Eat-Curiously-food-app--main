import React, { useEffect, useState } from 'react';
import aboutImage3 from '../assets/AboutImg3.png';
import NavBar from '../Components/NavBar';

const AboutPage3 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Use a timeout to trigger the first animation after a short delay
    const timer1 = setTimeout(() => {
      setLoaded(true);
    }, 100);

    // Use another timeout to trigger the second animation after the first one completes
    const timer2 = setTimeout(() => {
      setLoaded(false);
    }, 600);

    // Clean up the timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return ( 
    <div className={`flex flex-col lg:flex-row bg-[#d4ed6d] min-h-screen ${loaded ? 'zoom-in' : 'zoom-out'}`}>
      <NavBar  AboutBtn="text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto" />
      <div className="flex flex-col justify-center items-center lg:w-1/2 px-8">
        <h1 className="text-4xl lg:text-7xl font-bold font-rammetto text-center lg:text-left mx-10 my-10 lg:my-20">
          POWERED BY POSITIVITY
        </h1>
        <p className="text-lg lg:text-2xl text-center lg:text-left mx-10 my-10 lg:my-20 lg:pr-20">
          We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img src={aboutImage3} alt="About" className="w-auto h-auto max-w-full max-h-full lg:max-h-[650px]" />
      </div>
    </div>
  );
};

export default AboutPage3;
