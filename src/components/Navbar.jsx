import React from "react";
import convLogo from '../assets/convLogo.png'
import { FaTools } from "react-icons/fa";

export const NavbarOne = () => {
  return (
    <div className="mb-10 z-[100]">
      <nav className="relative px-4 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src={convLogo} loading="lazy" height={60} width={60}/>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-indigo-600 font-bold hover:text-gray-600 dark:text-indigo-600 underline underline-offset-8"
              href="#"
            >
              Home
            </a>
          </li>
          
        </ul>
        <div className="space-x-2 hidden lg:block">
          
          <button className=" flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
            More Tools <FaTools/>
          </button>
        </div>
      </nav>
    </div>
  );
};

NavbarOne.displayName = "NavbarOne";
