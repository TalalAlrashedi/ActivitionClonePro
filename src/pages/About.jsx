import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

const Imges = [
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
    name: "Rob Kostich",
    subname: "President",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
    name: "Josh Taub",
    subname: "Chief Operating Officer",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
    name: "Suzie Carr",
    subname: "Chief People Officer",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg",
    name: "Terri Durham",
    subname: "SVP & General Counsel",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg",
    name: "David Stohl",
    subname: "Head of Development, Call of Duty",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg",
    name: "Pat Kelly",
    subname: "Head of Creative, Call of Duty",
  },
];

const gameCover = [
  {
    img: "/game_covers/BO6-FOB.jpg",
    name: "CALL OF DUTY BLACK OPS 6",
    subname: "MATURE 17+",
  },
  {
    img: "/game_covers/codm-boxart.jpg",
    name: "CALL OF DUTY : WARZONE",
    subname: "MATURE 17+",
  },
  {
    img: "/game_covers/wz-boxart.jpg",
    name: "CALL OF DUTY MODERN WARFARE III",
    subname: "MATURE 17+",
  },
  {
    img: "/game_covers/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
    name: "CRASH TEAM RUMBLE",
    subname: "MATURE 10+",
  },
  {
    img: "/game_covers/sekiro-boxart.jpg",
    name: "SEKIRO",
    subname: "MATURE 17+",
  },
  {
    img: "/game_covers/spyro-boxart.png",
    name: "SPYRO",
    subname: "MATURE 10+",
  },
];

const studioLogo = [
  { img: "/studio_logos/logo_atvi-shanghai-studio.png" },
  { img: "/studio_logos/logo_beenox.png" },
  { img: "/studio_logos/logo_demonware.png" },
  { img: "/studio_logos/logo_highmoon-studios.png" },
  { img: "/studio_logos/logo_infinityward.png" },
  { img: "/studio_logos/logo_raven.png" },
  { img: "/studio_logos/logo_sledgehammer.png" },
  { img: "/studio_logos/logo_treyarch.png" },
  { img: "/studio_logos/logo-toysforbob.png" },
];

function About() {
  return (
    <div className="bg-black min-h-screen text-white sm:flex sm:mx-auto flex-col">
      <img
        src="/aboutImages/bannerAbout.png"
        alt="Banner"
        className="w-full object-cover mt-8"
      />

      <div className="flex justify-center p-6">
        <h1 className="text-2xl font-bold">Our Mission</h1>
      </div>

      <div className="max-w-4xl mx-auto border-t border-gray-500 pt-6 px-4 text-center mb-6">
        <p>
          At Activision, we strive to create the most iconic brands in gaming
          and entertainment. We’re driven by our mission to deliver unrivaled
          gaming experiences for the world to enjoy, together. Home to iconic
          franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro
          Skater™, we're a global leader in interactive entertainment. Our goal?
          Delight millions with innovative, fun, and engaging games. With a
          legacy of success, we're pushing boundaries with cutting-edge
          technology and inclusive practices. Join us in delivering
          unforgettable entertainment and seize the chance to level up your
          career.
        </p>
      </div>

      <div className="flex justify-center p-6">
        <h1 className="text-2xl font-bold">Activate Your Future</h1>
      </div>

      <div className="max-w-4xl mx-auto border-t border-gray-500 pt-6 px-4 text-center mb-10">
        <p>
          We unite our global player community with epic entertainment, focusing
          on three core pillars:
          <br />
          People - fostering talent and learning opportunities.
          <br />
          Innovation - consistently pushing to iterate and evolve.
          <br />
          Excellence - delivering high-quality games, consistently year in and
          year out.
          <br />
          Join us at Activision, where inclusivity thrives, and together we
          shape the future of entertainment for our players. Explore open roles
          now!
        </p>
      </div>

      <div className="flex justify-center p-6">
        <h1 className="text-2xl font-bold">Our Values</h1>
      </div>

      <div className="max-w-4xl mx-auto border-t border-gray-500 pt-6 px-4 text-center mb-10">
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
          alt="Our Values"
          className="mx-auto"
        />
      </div>

      <div className="flex justify-center items-center mb-10">
        <button className="bg-[rgb(11,59,95)] hover:cursor-pointer rounded-full w-30 h-10">
          LEARN MORE
        </button>
      </div>

      <div>
        <div className="flex justify-center p-6 border-b max-w-4xl mx-auto border-gray-500">
          <h1 className="text-2xl font-bold mt-8">Our Mission</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-5">
          {Imges.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={item.name}
                className="mt-5 rounded-full w-50 h-50 object-cover"
              />
              <h3 className="font-bold mt-2">{item.name}</h3>
              <p className="text-center">{item.subname}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-center p-6 border-b max-w-4xl mx-auto border-gray-500">
          <h1 className="text-2xl font-bold mt-9">Our Games</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-5 p-6 rounded-lg">
          {gameCover.map((item, index) => (
            <div key={index} className="shadow-md flex flex-col items-center">
              <img
                src={item.img}
                alt={item.name}
                className="mt-5 h-[30vh] hover:scale-110 hover:shadow-xl transition-transform duration-300"
              />
              <h3 className="text-center mt-5">{item.name}</h3>
              <p className="text-center mt-5">{item.subname}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-center p-6 border-b max-w-4xl mx-auto border-gray-500">
          <h1 className="text-2xl font-bold mt-9">Our Studios</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-5 p-6 rounded-lg">
          {studioLogo.map((item, index) => (
            <div
              key={index}
              className="shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 flex justify-center"
            >
              <img
                src={item.img}
                alt={`Studio ${index + 1}`}
                className="mt-5 w-48 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;