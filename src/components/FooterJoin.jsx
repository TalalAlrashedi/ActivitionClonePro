import React from "react";

export const FooterJoin = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 px-6 md:px-20 py-10 border-b border-gray-700">
          <div className="md:w-1/2 w-full flex flex-col justify-center space-y-6 max-w-lg">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
              WE'RE HERE TO HELP!
            </h2>
            <p className="text-sm sm:text-lg leading-relaxed">
              Get answers to frequently asked questions, check server status,
              and engage with a support expert
            </p>
            <button className="w-40 py-2 border bg-black rounded-full font-semibold hover:cursor-pointer hover:bg-[#143e67] transition">
              VISIT SUPPORT
            </button>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:justify-end items-center space-x-4">
            <img
              src="public/games/bannergames.png"
              className=" object-contain bg-cover"
            />
          </div>
        </div>

        <div className="relative bg-black px-4 sm:px-10 md:px-20 py-12 sm:py-16 overflow-hidden">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
            alt="Background"
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center space-y-4 text-white">
              <h2 className="font-bold text-3xl sm:text-4xl text-[#0668af]">
                HAVE FUN
              </h2>
              <p className="text-sm sm:text-lg">
                Learn More About Job Opportunities
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="w-32 py-2 border border-transparent bg-[rgb(11,59,95)] rounded-full font-semibold hover:bg-white hover:text-black transition">
                  JOIN US
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-center md:justify-between gap-8 text-white text-center sm:text-left">
              <ul className="space-y-2 flex-1">
                <p className="text-2xl font-bold">OUR TEAMS</p>
                <li>GAME DESIGN</li>
                <li>ART & ANIMATION</li>
                <li>BRAND MANAGEMENT</li>
                <li>PRODUCTION</li>
                <li>QUALITY ASSURANCE</li>
              </ul>
              <ul className="space-y-2 flex-1">
                <li>CUSTOMER SUPPORT</li>
                <li>STUDIO OPERATIONS</li>
                <li>PROGRAMMING</li>
                <li>FINANCE & ACCOUNTING</li>
                <li>HUMAN RESOURCES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
