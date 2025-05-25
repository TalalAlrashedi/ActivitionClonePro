import React from "react";
import Footer from "../components/Footer";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { GoDot, GoDotFill } from "react-icons/go";

const articlesData = [
  {
    id: 1,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    date: "May 20, 2025",
    title: "Stitch Returns in Season 04",
    description: "Following a daring jailbreak conducted by his former adversary, Stitch's clandestine resurrection is achieved...",
  },
  {
    id: 2,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    date: "May 15, 2025",
    title: "Support C.O.D.E. Military Appreciation Month with USAA",
    description: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans...",
  },
  {
    id: 3,
    image: "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    date: "May 09, 2025",
    title: "Tony Hawk's Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    description: "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk's Pro Skater 3 + 4...",
    url: "https://www.tonyhawkthegame.com/blog/2025/05/tony-hawk-pro-skater-three-four-thps-fest-los-angeles",
  },
  {
    id: 4,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    date: "May 07, 2025",
    title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
    description: "#TeamRICOCHET Season 03 Recap and Update.",
    url: "https://www.callofduty.com/blog/2025/05/call-of-duty-black-ops-6-warzone-ricochet-anti-cheat-season-three-recap",
  },
  {
    id: 5,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    date: "May 01, 2025",
    title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
    description: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans...",
    url: "https://www.callofduty.com/blog/2025/05/call-of-duty-endowment-military-appreciation-month",
  },
  {
    id: 6,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    date: "Apr 29, 2025",
    title: "Black Ops 6 Season 03 Reloaded: All the Details",
    description: "Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil...",
    url: "https://www.callofduty.com/blog/2025/04/call-of-duty-black-ops-6-warzone-zombies-season-three-reloaded-announcement",
  },
];

const ArticleCard = ({ article }) => (
  <div className="group relative bg-gradient-to-b from-[#343434] to-[#000000] rounded-lg overflow-hidden shadow-md flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div
      className="h-48 sm:h-52 lg:h-56 bg-center bg-cover"
      style={{ backgroundImage: `url(${article.image})` }}
    ></div>
    <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
      <time className="text-xs text-gray-400 uppercase tracking-wide">
        {article.date}
      </time>
      <h3 className="mt-2 text-base sm:text-lg font-semibold text-white leading-tight">
        {article.title}
      </h3>
      <div className="w-18 h-2 bg-gray-300 lg:mt-3 hover:bg-blue-600"></div>
      <div className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out mt-3 lg:mt-4 group-hover:max-h-96">
        <p className="text-gray-300 text-sm leading-relaxed">{article.description}</p>
        <div className="mt-4">
          <a
            href={article.url || "#"}
            className="inline-flex items-center text-[12px] text-blue-500 font-semibold hover:text-blue-400 transition-colors"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-full lg:h-screen flex items-center px-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex items-center m-[5%] p-2 w-full">
          <div className="flex flex-col items-center text-center">
            <img src="/games/codLogo.png" alt="COD Logo" className="h-50 m-7" />
            <span className="text-2xl text-white font-bold mb-6">
              Available Now For iOS and Android!
            </span>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="hover:cursor-pointer bg-[rgb(11,59,95)] px-6 py-3 rounded-full text-white font-bold">
                DOWNLOAD NOW
              </button>
              <button className="hover:bg-[rgb(11,59,95)] px-10 py-3 hover:cursor-pointer rounded-full text-amber-50 border-white border font-bold">
                VISIT SITE
              </button>
            </div>
          </div>
        </div>
        <div className="mb-11 lg:mb-0 lg:flex hidden w-80 absolute bottom-1 left-1/2 bg-[rgba(0,0,0,0.5)] p-4 mt-7 rounded-full transform -translate-x-1/2 justify-between items-center z-100 text-xl text-gray-300">
          <FaArrowLeftLong />
          <div className="flex gap-2">
            <GoDot />
            <GoDot />
            <GoDot />
            <GoDotFill />
            <GoDot />
            <GoDot />
          </div>
          <FaArrowRight />
        </div>
      </div>

      {/* News Filter Bar */}
      <div className="bg-[#262626] p-4">
        <div className="flex justify-center p-4 m-4">
          <h1 className="text-4xl text-white">Latest News & Articles</h1>
        </div>
        <div
          className="relative flex items-center justify-center w-[90%] mx-auto m-5"
          style={{
            borderBottom: "2px solid grey",
            borderTop: "2px solid grey",
          }}
        >
          <div className="px-4 py-2 text-2xl text-gray-900 cursor-pointer active">
            <p className="text-2xl font-bold text-white bg-[#182d3a] px-3">
              All News
            </p>
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="/games/activision-logo-small.svg"
              alt="Activision"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="/games/cod-logo (1).svg"
              alt="Call of Duty"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="/games/tonyHawks.svg"
              alt="Tony Hawk"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="/games/crash.png"
              alt="Crash"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <section className="bg-gradient-to-b from-[#343434] to-[#000000] p-5 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {articlesData.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;