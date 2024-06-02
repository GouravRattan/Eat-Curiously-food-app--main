import React, { useState } from "react";
import pieces from "../../assets/sub-product-img/image3.png";
import NavBar from "../../Components/NavBar";
import { useNavigate } from "react-router-dom";
import Marquee from "../../Components/Marquee";
import Footer from "../../Components/Footer";

const P1 = () => {
  const navigate = useNavigate();
  const [CartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("CURIOUS PIECES");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const addToCart = () => {
    setCount(count + 1);
    setCartItems([...CartItems, count]);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-[#042f1a] min-h-screen">
        <NavBar AboutBtn="text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto" />
        <div className="flex flex-col justify-center items-center lg:w-1/2 text-white mx-4 lg:mx-10 my-10 lg:my-20 lg:ml-20">
          <h1 className="text-4xl lg:text-8xl font-bold font-rammetto text-center lg:text-left mt-10 mb-6 lg:mx-0">
          CURIOUS BANGERS
          </h1>
          <p className="text-xs lg:text-xl text-center lg:text-left mx-4 lg:mx-0 mb-6 lg:pr-10 lg:max-w-4xl">
            Tender, delicious, juicy protein pieces coated in a hot and spicy
            glaze. Perfect for those with dietary restrictions, our pieces
            contain none of the 14 main allergens such as dairy, gluten, soy,
            and nuts. Our versatile Eat Curious pieces are perfect for a variety
            of culinary applications including pizza toppings, pies, salad
            bowls, stir-fry, pasta dishes, curries, and more!
          </p>
          <div className="flex flex-col lg:flex-row items-center w-full">
            <button
              onClick={() => {
                navigate("/Cart", {
                  state: {
                    CartItems,
                    name,
                  },
                });
              }}
              className="w-full lg:w-auto bg-white text-[#042f1a] text-lg lg:text-2xl font-bold font-rammetto rounded-md py-3 px-8 cursor-pointer"
            >
              ENQUIRE
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={pieces}
            alt="About"
            className="w-full lg:w-auto max-h-[20vh] lg:max-h-96 mx-4 lg:mx-10 my-10 lg:my-0 object-contain rounded-xl"
          />
        </div>
      </div>
      <div className="relative bg-green-900 text-white p-4">
        <div
          className="bg-green-900 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className=" font-rammetto font-bold text-4xl px-8 ">INGREDIENTS</span>
          <span>{dropdownOpen ? "-" : "+"}</span>
        </div>
        {dropdownOpen && (
          <div className="bg-green-900 px-12">
            <p>Water, Panko Breadcrumbs (20%) (Wheat Flour, Yeast, Salt), Pea Protein Powder (12%) (Pea Protein, Bamboo Fibre, Emulsifier (Methyl Cellulose), Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances), Stabiliser (Sodium Alginate), Salt), Wheat Flour (contains Calcium Carbonate, Iron, Niacin, Thiamin), Wheat Gluten, Sunflower Oil, Garlic Powder, Salt, Smoked Paprika, Mixed Herbs, Black Pepper, Turmeric.</p>
          </div>
        )}
      </div>

      <div className="relative bg-green-900 text-white p-4">
        <div
          className="bg-green-900 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className=" font-rammetto font-bold text-4xl px-8 ">COOKING INSTRUCTIONS</span>
          <span>{dropdownOpen ? "-" : "+"}</span>
        </div>
        {dropdownOpen && (
          <div className="bg-green-900 px-12">
            <p>COOKING INSTRUCTIONS
From Frozen: Remove all packaging. Deep Fry: Pre-heat fryer to correct temperature. Add product to basket and fry in hot cooking oil (175°C) for 8 minutes. Oven Cook: Brush both sides with cooking oil. Place on a baking tray and cook in a pre-heated oven at 200°C / 180°C Fan Assisted / Gas Mark 4 for 12 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.</p>
          </div>
        )}
      </div>
      <Footer />
      <Marquee />
    </>
  );
};

export default P1;
