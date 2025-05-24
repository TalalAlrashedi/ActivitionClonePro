import React from "react";
import Footer from "../components/Footer";
const articlesData = [
  {
    id: 1,
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    date: "May 20, 2025",
    title: "Stitch Returns in Season 04",
    description:
      "Following a daring jailbreak conducted by his former adversary, Stitch's clandestine resurrection is achieved...",
  },
  {
    id: 2,
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    date: "May 15, 2025",
    title: "Support C.O.D.E. Military Appreciation Month with USAA",
    description:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans...",
  },
  {
    id: 3,
    image:
      "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    date: "May 09, 2025",
    title: "Tony Hawk's Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    description:
      "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk's Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11.",
    url: "https://www.tonyhawkthegame.com/blog/2025/05/tony-hawk-pro-skater-three-four-thps-fest-los-angeles",
  },
  {
    id: 4,
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    date: "May 07, 2025",
    title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
    description: "#TeamRICOCHET Season 03 Recap and Update.",
    url: "https://www.callofduty.com/blog/2025/05/call-of-duty-black-ops-6-warzone-ricochet-anti-cheat-season-three-recap",
  },
  {
    id: 5,
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    date: "May 01, 2025",
    title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
    description:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack, the C.O.D.E. Got Your Six Event, Kane Brown High Road Challenge, and more.",
    url: "https://www.callofduty.com/blog/2025/05/call-of-duty-endowment-military-appreciation-month",
  },
  {
    id: 6,
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    date: "Apr 29, 2025",
    title: "Black Ops 6 Season 03 Reloaded: All the Details",
    description:
      "Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil, and new updates to Verdansk. Get new Loadout items like the Vendetta Perk and the Ladra SMG and participate in new events and more when the mid-season update launches on May 1!",
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
        <p className="text-gray-300 text-sm leading-relaxed">
          {article.description}
        </p>
        <div className="mt-4">
          <a
            href="#"
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
      <div className="relative flex items-center px-4">
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
            <div className="flex space-x-4">
              <button className="bg-sky-900 text-amber-50 font-bold px-10 py-4 text-xl rounded-2xl shadow-lg hover:bg-sky-800 transition">
                Download Now
              </button>
              <button className="px-10 py-4 border border-white text-white rounded hover:bg-sky-900 hover:text-black transition">
                Visit
              </button>
            </div>
          </div>

          <div className=" bg-amber-100 w-[40%]">
            <div className="absolute bottom-1 mr-15 left-1/2 transform  z-30 flex space-x-4">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                aria-label="Previous"
                type="button"
              >
                Previous
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                aria-label="Next"
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#262626] p-4 ">
        <div className="flex justify-center p-4 m-4">
          <h1 className="text-4xl text-white ">Latest News & Articles</h1>
        </div>

        <div
          className="relative flex items-center justify-center w-[90%] mx-auto m-5 "
          style={{
            borderBottom: "2px solid grey",
            borderTop: "2px solid grey",
          }}
        >
          <div className="px-4 py-2 text-2xl text-gray-900 cursor-pointer active">
            <p className="text-2xl font-bold text-white bg-[#182d3a] px-3 ">
              All News
            </p>
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="public/games/activision-logo-small.svg"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="public/games/cod-logo (1).svg"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="public/games/tonyHawks.svg"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
          <div className="px-4 py-2 cursor-pointer">
            <img
              src="public/games/crash.png"
              className="h-6 opacity-60 hover:opacity-100"
            />
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-b from-[#343434] to-[#000000] p-5 text-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6  lg:gap-8">
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
