import React from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const pagesUrl = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Support", path: "/support" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen py-3 border-b border-b-orange-50 bg-[rgba(0,0,0,0.79)] text-gray-200 z-100 overflow-hidden">
      <div className="lg:hidden absolute top-1 m-4 left-2 text-4xl">
        <CiMenuBurger className="text-white font-bold align-middle" />
      </div>

      <div className="flex items-center justify-evenly px-8 py-4">
        <div className="flex items-center ml-10 ">
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static ">
            <img src="/logos/logoActivation.png" alt="Logo" className="h-8 hover:cursor-pointer" />
          </div>

          <nav className="hidden lg:flex ">
            <ul className="flex space-x-6">
              {pagesUrl.map((item) => (
                <li className="opacity-70 hover:opacity-100" key={item.name}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-3 w-100 justify-end hidden lg:flex">
          <button className="bg-sky-900 hover:cursor-pointer font-bold px-3 rounded-2xl text-[16px]">
            SIGN UP
          </button>
          <button className=" hover:cursor-pointer font-light opacity-80 text-[14px]">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
