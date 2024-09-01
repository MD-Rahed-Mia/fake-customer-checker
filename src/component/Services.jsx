import React from "react";

import { BsBagCheck } from "react-icons/bs";
import { TiGroupOutline } from "react-icons/ti";
import { MdHeadsetMic } from "react-icons/md";

export default function Services() {
  return (
    <div className="w-full min-h-[400px] -translate-y-24 ">
      <div className="w-3/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] place-content-center">
        {/* card starts */}
        <div className="min-w-40 min-h-[300px] py-8 relative  rounded-md  shadow-md group transition-all bg-white">
          <div className="relative z-20">
            <div className="my-4 w-20 mx-auto z-20">
              <span className="w-20 h-20 bg-slate-300  rounded-full flex items-center justify-center text-4xl font-light group-hover:text-[#0c59db]">
                <BsBagCheck />
              </span>
            </div>

            <div>
              <h1 className="text-center font-bold text-2xl group-hover:text-white">
                8+ Years Experience
              </h1>
              <h2 className="text-center text-slate-500 text-sm mt-4 group-hover:text-white">
                Monotonically synergize grants to business visualize strategic
                infomediaries
              </h2>

              <div className="mt-8 w-fit mx-auto flex items-center justify-between gap-3 transition-all">
                <span className="w-12 h-[2px] primary-bg block group-hover:bg-white"></span>
                <span className="hidden group-hover:block text-white text-sm">
                  read more
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-0 bg-[#0c59db] transition-all duration-500 ease-in-out group-hover:h-full z-10 rounded-md"></div>
        </div>
        {/* card ends */}


        {/* card starts */}
        <div className="min-w-40 min-h-[300px] py-8 relative  rounded-md  group transition-all bg-white shadow-md">
          <div className="relative z-20">
            <div className="my-4 w-20 mx-auto z-20">
              <span className="w-20 h-20 bg-slate-300  rounded-full flex items-center justify-center text-4xl font-light group-hover:text-[#0c59db] ">
                <TiGroupOutline />
              </span>
            </div>

            <div>
              <h1 className="text-center font-bold text-2xl group-hover:text-white">
                Dedicated Team
              </h1>
              <h2 className="text-center text-slate-500 text-sm mt-4 group-hover:text-white">
                Monotonically synergize grants to business visualize strategic
                infomediaries
              </h2>

              <div className="mt-8 w-fit mx-auto flex items-center justify-between gap-3 transition-all">
                <span className="w-12 h-[2px] primary-bg block group-hover:bg-white"></span>
                <span className="hidden group-hover:block text-white text-sm">
                  read more
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-0 bg-[#0c59db] transition-all duration-500 ease-in-out group-hover:h-full z-10 rounded-md"></div>
        </div>
        {/* card ends */}
        {/* card starts */}
        <div className="min-w-40 min-h-[300px] py-8 relative  rounded-md  shadow-md group transition-all bg-white">
          <div className="relative z-20">
            <div className="my-4 w-20 mx-auto z-20">
              <span className="w-20 h-20 bg-slate-300  rounded-full flex items-center justify-center text-4xl font-light group-hover:text-[#0c59db]">
                <MdHeadsetMic />
              </span>
            </div>

            <div>
              <h1 className="text-center font-bold text-2xl group-hover:text-white">
                Valuable Support
              </h1>
              <h2 className="text-center text-slate-500 text-sm mt-4 group-hover:text-white">
                Monotonically synergize grants to business visualize strategic
                infomediaries
              </h2>

              <div className="mt-8 w-fit mx-auto flex items-center justify-between gap-3 transition-all">
                <span className="w-12 h-[2px] primary-bg block group-hover:bg-white"></span>
                <span className="hidden group-hover:block text-white text-sm">
                  read more
                </span>
              </div>
            </div>  
          </div>

          <div className="absolute top-0 left-0 w-full h-0 bg-[#0c59db] transition-all duration-500 ease-in-out group-hover:h-full z-10 rounded-md"></div>
        </div>
        {/* card ends */}
      </div>
    </div>
  );
}
