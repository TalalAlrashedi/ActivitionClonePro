import React from "react";
import FooterLinks from "../components/FooterLinks";
const cards = [
  "ART, ANIMATION & SOUND",
  "ENGINEERING",
  "PRODUCTION",
  "CORPORATE FUNCTIONS",
  "DESIGN",
  "MARKETING & SALES",
  "QUALITY ASSURANCE (QA)",
  "CENTRAL TECH",
  "MOBILE",
];
const exploreItems = [
  {
    title: "Our Locations",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
    link: "/company/locations",
  },
  {
    title: "DE&I",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg",
    link: "/company/diversity-inclusion",
  },
  {
    title: "Early Careers",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg",
    link: "/early-careers",
  },
  {
    title: "Mission & Talent Brand",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png",
    link: "/we-are-activision",
  },
];
const logos = [
  {
    logo: "/public/studio_logos/logo_atvi-shanghai-studio.png",
  },
  {
    logo: "/public/studio_logos/logo_beenox.png",
  },
  {
    logo: "/public/studio_logos/logo_demonware.png",
  },
  {
    logo: "/public/studio_logos/logo_highmoon-studios.png",
  },
  {
    logo: "/public/studio_logos/logo_infinityward.png",
  },
  {
    logo: "/public/studio_logos/logo_raven.png",
  },
  {
    logo: "/public/studio_logos/logo_sledgehammer.png",
  },
  {
    logo: "/public/studio_logos/logo_treyarch.png",
  },
  {
    logo: "/public/studio_logos/logo-toysforbob.png",
  },
];
const jobs = [
  {
    title: "Senior Gameplay Engineer - High Moon Studios",
    category: "Programming / Software Engineering",
    id: "R024108",
    description:
      "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024108EXTERNAL",
  },
  {
    title: "Lead Analytics Engineer",
    category: "Data Analytics",
    id: "R024154",
    description:
      "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024154EXTERNAL",
  },
  {
    title: "Expert Animation Engineer - Infinity Ward",
    category: "Programming / Software Engineering",
    id: "R024307",
    description:
      "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024307EXTERNAL",
  },
  {
    title: "Senior AI Animator - Infinity Ward",
    category: "Animation",
    id: "R022959",
    description:
      "Use motion capture and hand-keyed techniques to create high-fidelity NPC animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR022959EXTERNAL",
  },
  {
    title: "Level Designer",
    category: "Game / Level Design",
    id: "R025221",
    description:
      "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR025221EXTERNAL",
  },
];
const Careers = () => {
  return (
    <div>
      <div
        className="text-white min-h-screen"
        style={{ backgroundColor: "rgb(18,18,18)" }}
      >
        <div className=" h-screen  overflow-hidden bg-black">
          <video
            src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
            autoPlay
            muted
            loop
            className="absolute top-0 l left-0 h-full object-cover "
          />
          <div className="flex justify-center items-center absolute w-full h-full z-20">
            <button className="text-center bg-emerald-900 text-black p-4 rounded-full hover:bg-gray-300 transition">
              SEARCH JOBS
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-5 text-2xl p-3">
          <h4 className="text-3xl font-bold">
            START YOUR GAME CHANGING CAREER
          </h4>
        </div>

        <div className="max-w-6xl mx-auto mt-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="relative border border-white rounded-[10px] px-5 py-6 text-xs sm:text-sm hover:bg-white hover:text-black cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#121212] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            EXPLORE OUR WORLD
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exploreItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg overflow-hidden shadow-lg flex flex-col bg-black"
              >
                <div
                  className="h-64 sm:h-72 lg:h-80 xl:h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imgSrc})` }}
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <button
                    href={item.link}
                    className="inline-block px-6 py-2 border border-white rounded-full uppercase text-sm font-medium hover:bg-[#08497a]  transition-colors duration-200 cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="slide-video" className="relative bg-black overflow-hidden">
        <div className="w-full">
          <video
            className="w-full h-auto"
            src="https://www.activision.com/cdn/videos/game-ap-look.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div id="slide-video-footer" className="sr-only" />
      </section>
      <div
        className="text-center bg-[#171717] h-full w-full"
        style={{ padding: "20px" }}
      >
        <h1 className="text-amber-50 font-bold text-2xl">OUR STUDIOS</h1>
      </div>
      <div
        className="flex flex-row bg-[#171717]"
        style={{ padding: "20px", paddingBottom: "40px" }}
      >
        <div className="grid grid-cols-1 gap-10  lg:grid-cols-3 md:grid-cols-3 gap-5 h-full w-full mx-auto">
          {logos.map((item) => (
            <div className="flex flex-row justify-center items-center">
              <img
                src={item.logo}
                width={"40%"}
                className="hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <section id="be-the-first" className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Be the First to Apply
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="
                relative  
                bg-white text-black rounded-lg  
                p-6 xl:p-10              
                w-full 
                xl:max-w-2xl xl:mx-auto   
                flex flex-col
              "
              >
                <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"></button>

                <h3 className="text-xl font-semibold mb-1 hover:text-[#0668af] cursor-pointer">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {job.category} {job.id}
                </p>

                <p
                  className="mt-4 text-sm text-gray-700 leading-relaxed flex-grow overflow-hidden"
                  style={{
                    WebkitLineClamp: 3,
                  }}
                >
                  {job.description}
                </p>

                <button
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-6 w-40 
                  bg-black text-white font-semibold  
                  px-6 py-2  
                  border border-[#3e8916]  
                  rounded  
                  hover:bg-[#3e8916] hover:border-[#3e8916]  
                  transition-colors cursor-pointer
                "
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterLinks />
    </div>
  );
};

export default Careers;
