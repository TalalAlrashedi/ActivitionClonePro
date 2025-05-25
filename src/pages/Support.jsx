import React from "react";
import { IoGameController } from "react-icons/io5";
import FooterLinks from "../components/FooterLinks";
const CardList = [
  {
    title: "CALL OF DUTY: BLACK OPS 6",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg",
  },
  {
    title: "ACCOUNT & SECURITY",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg",
  },
  {
    title: "CALL OF DUTY: WARZONE",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg",
  },
  {
    title: "CALL OF DUTY: MOBILE",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg",
  },
  {
    title: "TONY HAWK'S PRO SKATER 3 + 4",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE III",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWIII-home-tile-1c.png",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE II",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg",
  },
  {
    title: "CALL OF DUTY: BLACK OPS COLD WAR",
    image:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg",
  },
];

function Support() {
  return (
    <>
      <div className="bg-black h-15"></div>
      <div
        className="flex items-center p-5 md:pl-10  bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage:
            "url('https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg')",
        }}
      >
        <div className="w-[32rem] flex flex-col items-start space-y-2">
          <img
            className="w-full object-contain"
            src="https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6-S3R-logo-lockup.png"
            alt=""
          />
          <div className="flex w-full items-center space-x-3 md:pl-10">
            <IoGameController className="text-white text-xl md:text-4xl" />
            <h1 className="text-white text-sm md:text-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED
            </h1>
          </div>
          <div className="flex w-full items-center space-x-3 md:pl-10">
            <IoGameController className="text-white text-xl md:text-4xl" />
            <h1 className="text-white text-sm md:text-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              Browse the support page
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#2c2c2c]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10  py-10 px-5 md:px-20 lg:px-20">
          {CardList.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-y-2  ">
                <h1 className=" text-neutral-400 w-auto hover:text-white cursor-pointer text-base font-semibold ">
                  {item.title}
                </h1>
                <img
                  className="w-full  object-cover rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>

      <FooterLinks/>
    </>
  );
}
export default Support;
