import React from "react";
import NavBar from "../Components/NavBar";
import LoginImg from "../assets/LoginImg.png";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import AboutPage3 from "./AboutPage3";
import AboutPage4 from "./AboutPage4";
import Product from "../Pages/Product";
import PlantsPage from "./PlantsPage";
import Recipes from "./Recipes";
import Marquee from "../Components/Marquee";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full bg-[#042f1a]">
        <NavBar />
        <div className="flex justify-center items-center h-screen relative overflow-hidden">
          <img
            src={LoginImg}
            alt="login-image"
            className="w-full md:w-auto h-auto object-cover"
            style={{ maxWidth: "100%", width: "400px" }} // Adjust the width here
          />
          <div className="absolute w-full top-1/4 left-1/2 transform -translate-x-1/2 text-center space-y-40">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white mb-4">
              MEAT-FREE
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white">
              YOUR MIND
            </h1>
          </div>
        </div>
      </div>
      <AboutPage />
      <AboutPage2 />
      <AboutPage3 />
      <AboutPage4 />
      <Recipes />
      <Marquee />
      <Footer />
    </>
  );
};

export default HomePage;
