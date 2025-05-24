import React from "react";
import { NavLink } from "react-router-dom";

const pagesUrl = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Support", path: "/support" },
];

const Navbar = () => {
  return (
    <div className="bg-black text-white border-b border-white ">
      <div className="flex items-center justify-evenly px-8 py-4">
        <div className="flex items-center -ml-15 gap-10">
          <img src="/logos/logoActivation.png" alt="Logo" className="h-7" />
          <nav>
            <ul className="flex space-x-8">
              {pagesUrl.map((item) => (
                <li className="opacity-70 hover:opacity-100" key={item.name}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-3  w-100 justify-end ">
          <button className="bg-sky-900 hover:cursor-pointer font-bold px-3 rounded-2xl text-[16px]">
            SIGN UP
          </button>
          <button className=" hover:cursor-pointer font-light opacity-80 text-[14px]">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
