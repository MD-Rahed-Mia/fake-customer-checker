import React from "react";
import BannerBg from "./../../public/images/banner.png";
import { FaLink } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import HeroThumb from "./../../public/images/hero-thumb.png";
import { FaSearch } from "react-icons/fa";

export default function Banner() {
  return (
    <div
      className="w-full min-h-[70vh] py-12 lg:py-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.4)), url(${BannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-4/5 mx-auto min-h-[85vh] px-8 md:px-0 grid grid-cols-1 lg:grid-cols-2  place-items-center">
        <div className="px-4 md:px-8 order-2 lg:order-1" data-aos="fade-right">
          <div>
            <h1 className="text-white text-md font-light">
              IT SOLUTION AGENCY IN USA
            </h1>
            <h1 className="text-white text-center lg:text-left my-8 md:my-0 text-4xl md:text-4xl lg:text-6xl leading-[40px] md:leading-[60px] lg:leading-[80px] font-bold">
              BUSINESS INNOVATION WITH IT EXPERT
            </h1>
            <h3 className="text-white text-center md:text-left font-light mt-3 text-lg">
              Professionally optimize interdependent intellectual interoperable
              connect best practices. Progressively fabricate done
            </h3>
          </div>

          <div className="mt-8 flex items-center gap-8 flex-col lg:flex-row">
            <button className="px-4 md:px-8  py-2 md:py-4 primary-bg text-sm text-white rounded-sm flex items-center justify-center gap-2">
              <span>
                <BiLinkExternal />
              </span>
              <span>Lets Talk</span>
            </button>
            <button className="px-4 md:px-8  py-2 md:py-4 primary-bg text-sm text-white rounded-sm flex items-center justify-center gap-2">
              <span>
                <FaLink />
              </span>
              <span>Read More</span>
            </button>
          </div>
        </div>
        <div
          className="relative w-full h-full flex items-center justify-center order-1 lg:order-2"
          data-aos="fade-left"
        >
          {/* <img src={HeroThumb} alt="hero" className="absolute bottom-0"/> */}

          <div className="w-full min-h-[50px] mx-auto bg-white rounded-full text-blue-500 flex items-center gap-2 justify-between">
            <div className="w-32 h-[50px] rounded-l-full flex items-center justify-center font-bold text-xl bg-slate-300">
              <span>088</span>
            </div>
            <div className="p-2 w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="search by mobile number"
                className="placeholder:text-blue-500 w-full h-full outline-none border-none font-bold bg-transparent"
              />
            </div>

            <div className="w-40 min-h-[50px] primary-bg flex items-center justify-center rounded-r-full text-white cursor-pointer">
              <button>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
