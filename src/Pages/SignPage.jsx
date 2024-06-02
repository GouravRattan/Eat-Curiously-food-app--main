import React, { useState } from "react";
import LoginImg from "../assets/LoginImg.png";
// import GOOGLE_ICON from "../assets/google.svg";
import {Link} from "react-router-dom";
import main_logo from "../assets/transparent-logo.png";

 
const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the user input data
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <>
      <div className="w-full h-screen flex items-start bg-[#042f1a]">
      <img className="absolute w-40 top-10 left-64" src={main_logo} alt="" />
        <div className="w-full lg:w-1/2 h-full relative flex justify-center items-center">
          
          <div className="absolute w-full flex flex-col mt-32 lg:text-xl space-y-20 font-rammetto">
  <h1 className="w-full flex font-bold items-center justify-center text-white text-5xl lg:text-6xl">MEAT FREE</h1>
  <img
    src={LoginImg}
    alt="login-image"
    className="absolute bottom-0 left-64 w-1/4 font-bold items-center justify-center lg:max-w-[500px] h-auto lg:max-h-[400px] flex object-cover ml-auto mr-auto mt-10 lg:mt-40 z-10"
  />
  <h1 className="w-full flex font-bold items-center justify-center text-white text-5xl lg:text-6xl pr-4 z-20">YOUR MIND</h1>
</div>

        </div>

        <div className="w-1/2 h-full flex flex-col p-20 justify-between items-center">
          <h1 className="w-full text-xl max-w-[500px] mx-auto text-[#ffffff] font-semibold mr-auto">
            curious dot
          </h1>

          <div className="w-full flex flex-col max-w-[500px] mt-10 text-white">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-4xl font-semibold mb-4">Sign Up</h3>
              <p className="text-base mb-2">
                Welcome Back! Please enter your details
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-[600px] flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <button
                type="submit"
                className="w-full bg-[#fc74b4] font-bold text-white border my-2 rounded-md border-black p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Sign-up
              </button>
            </form>

            <div className="w-full flex items-center justify-center relative py-8">
              <div className="w-full h-[1px] bg-white"></div>
            </div>
            
          </div>
          <div className="w-full flex items-center justify-center text-white">
            <p>
            have an account?{" "}

            <Link to="/signup"
               className="font-semibold underline underline-offset-2 cursor-pointer">
                {" "}
                LOGIN{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
