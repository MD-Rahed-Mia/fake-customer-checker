import React from "react";
import BannerBg from "./../../public/images/banner.png";
import { FaLink } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import HeroThumb from "./../../public/images/hero-thumb.png";

export default function Banner() {
  return (
    <div
      className="w-full min-h-[85vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.4)), url(${BannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-4/5 mx-auto min-h-[85vh] grid grid-cols-1 md:grid-cols-2  place-items-center">
        <div>
          <div>
            <h1 className="text-white text-2xl font-light">
              IT SOLUTION AGENCY IN USA
            </h1>
            <h1 className="text-white text-6xl leading-[80px] font-bold">
              BUSINESS INNOVATION WITH IT EXPERT
            </h1>
            <h3 className="text-white font-light mt-3 text-lg">
              Professionally optimize interdependent intellectual interoperable
              connect best practices. Progressively fabricate done
            </h3>
          </div>

          <div className="mt-8 flex items-center gap-8">
            <button className="px-8 py-4 primary-bg text-sm text-white rounded-sm flex items-center justify-center gap-2">
              <span>
                <BiLinkExternal />
              </span>
              <span>Lets Talk</span>
            </button>
            <button className="px-8 py-4 primary-bg text-sm text-white rounded-sm flex items-center justify-center gap-2">
              <span>
                <FaLink />
              </span>
              <span>Read More</span>
            </button>
          </div>
        </div>
        <div className="relative w-full h-full flex items-end justify-center">
          <img src={HeroThumb} alt="hero" className="absolute bottom-0"/>
        </div>
      </div>
    </div>
  );
}
