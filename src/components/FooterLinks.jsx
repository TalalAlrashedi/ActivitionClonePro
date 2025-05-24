import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#1a1a1a" }}
        className="py-10 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 text-white">
          <div className="flex flex-col min-w-[180px]">
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <ul className="flex gap-3 mb-6">
              <li className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaFacebook size={20} />
              </li>
              <li className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaXTwitter size={20} />
              </li>
              <li className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaLinkedin size={20} />
              </li>
              <li className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaInstagramSquare size={20} />
              </li>
            </ul>
          </div>
          <div className="flex flex-col min-w-[140px]">
            <h3 className="text-xl font-bold mb-4">POPULAR GAMES</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:underline">Call of Duty </li>
              <li className="hover:underline">Tony Hawk Pro Skater</li>
              <li className="hover:underline">Crash Bandicoot </li>
              <li className="hover:underline">Spyro</li>
              <li className="hover:underline">Sekiro</li>
            </ul>
          </div>
          <div className="flex flex-col min-w-[140px]">
            <h3 className="text-xl font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:underline">Press </li>
              <li className="hover:underline">Research </li>
              <li className="hover:underline">Activision Blizzard </li>
              <li className="hover:underline">Contact Us </li>
            </ul>
          </div>
          <div className="flex flex-col min-w-[140px]">
            <h3 className="text-xl font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:underline">Term us</li>
              <li className="hover:underline">Privacy Policy</li>
              <li className="hover:underline">Cookie Policy</li>
              <li className="hover:underline">Cookie Settings</li>
              <li className="hover:underline">Online Safety</li>
              <li className="hover:underline">Applicant Privacy Policy</li>
              <li className="flex items-center gap-1 hover:underline">
                Your Privacy Choices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
