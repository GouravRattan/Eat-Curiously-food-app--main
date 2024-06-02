import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import LoginImg from "../assets/LoginImg.png";
import GOOGLE_ICON from "../assets/google.svg";
// import Logo from "../Components/Logo";
import main_logo from "../assets/transparent-logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen bg-[#042f1a]">
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

        <div className="w-full lg:w-1/2 h-full flex flex-col p-10 lg:p-20 justify-between items-center">
          <h1 className="w-full text-lg lg:text-xl max-w-[500px] mx-auto text-[#ffffff] font-semibold">
            Source Dot..
          </h1>

          <div className="w-full flex flex-col max-w-[500px] mt-10 text-white">
            <div className="w-full flex flex-col mb-4 lg:mb-8">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Login</h3>
              <p className="text-sm lg:text-base mb-2">
                Welcome Back! Please enter your details
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-[600px] flex flex-col space-y-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black bg-white py-2 lg:py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black bg-white py-2 lg:py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <div className="w-full flex items-center justify-between mt-2 lg:mt-4">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-xs lg:text-sm">Remember me</p>
                </div>
                <Link to="/" className="text-xs lg:text-sm font-medium underline underline-offset-2">
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#fc74b4] font-bold text-white my-2 rounded-md p-2 lg:p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Log-in
              </button>
            </form>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-sm lg:text-lg absolute text-white">or</p>
            </div>

            <div className="w-full text-[#fc74b4] font-bold bg-white border my-2 rounded-md border-black p-2 lg:p-4 text-center flex items-center justify-center">
              <img src={GOOGLE_ICON} className="h-4 lg:h-6 mr-2" alt="" />
              Sign In with Google
            </div>
          </div>

          <div className="w-full flex items-center justify-center text-white">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold underline underline-offset-2 cursor-pointer">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
