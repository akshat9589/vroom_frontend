import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.jpg"
const Navbar = () => {
  return (
    <div>
      <header className="text-white bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
           {/* <img src={} alt="logo"  width="40px" height="40px" /> */}
            <span className="ml-3 text-xl">Vroom<br /> </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-white-900">Home</a>
            <a href="login" className="mr-5 hover:text-white-900">Login</a>
            <a href="SignUp" className="mr-5 hover:text-white-900">SignUp</a>
            <a href="logout" className="mr-5 hover:text-white-900">Logout</a>
          </nav>
         
        </div>
      </header>
    </div>
  );
};

export default Navbar;
