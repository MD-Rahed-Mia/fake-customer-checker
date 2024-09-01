import React from "react";
import SupportBanner from "./../../public/images/about-thumb3.png";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Support() {
  return (
    <div className="w-full min-h-[40vh] py-24 pb-40">
      <div className="mx-auto w-full min-h-[40vh] md:w-4/5 grid grid-cols-1 md:grid-cols-2 place-content-center">
        {/* suppert left */}
        <div
          className="w-[90%] md:w-4/5 mx-auto h-[60vh]"
          style={{
            backgroundImage: `url(${SupportBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-[16px] md:p-[35px] lg:p-[42px] max-w-[120px] md:max-w-[150px] lg:max-w-[180px] min-h-36 primary-bg rounded-2xl flex items-center justify-center">
            <h1 className="text-center text-white text-xl font-bold">
              8+ years <br />
              <span className="text-lg">Experience</span>
            </h1>
          </div>
        </div>

        {/* support right */}
        <div className="py-4 px-4 md:px-0">
          <div>
            <h3 className="primary-color text-lg">IT Support For Business</h3>
          </div>
          <div>
            <h1 className="font-bold text-4xl md:text-6xl my-4">
              Ensuring Your Success Trusted IT Services Source
            </h1>
          </div>

          <div>
            <p className="text-sm md:text-md my-4 text-slate-500">
              Monotonectally synergize granular markets and front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based models. Synergistically task state of the art
              infrastructures for
            </p>
          </div>

          {/* service desc */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* service card */}

            <div className="flex items-center gap-4 mt-8">
              <span className="w-16 h-16  rounded-sm bg-white text-2xl md:text-4xl flex items-center justify-center primary-color">
                <RiMoneyDollarCircleFill />
              </span>
              <span>
                <h1 className="text-xl leading-6">100% Money Back Gaurentee</h1>
              </span>
            </div>
            {/* service card */}
            <div className="flex items-center gap-4">
              <span className="w-16 h-16 rounded-sm bg-white text-2xl md:text-4xl flex items-center justify-center primary-color">
                <MdGroup />
              </span>
              <span>
                <h1 className="text-xl leading-6">
                  Expert & Dedicated Team Members
                </h1>
              </span>
            </div>
            {/* service card */}
            <div className="flex items-center gap-4">
              <span className="w-16 h-16 rounded-sm bg-white text-2xl md:text-4xl flex items-center justify-center primary-color">
                <RiMoneyDollarCircleFill />
              </span>
              <span>
                <h1 className="text-xl leading-6">100% Money Back Gaurentee</h1>
              </span>
            </div>
            {/* service card */}
            <div className="flex items-center gap-4">
              <span className="w-16 h-16 rounded-sm bg-white text-2xl md:text-4xl flex items-center justify-center primary-color">
                <MdGroup />
              </span>
              <span>
                <h1 className="text-xl leading-6">
                  Expert & Dedicated Team Members
                </h1>
              </span>
            </div>
          </div>
          {/* ends service desc */}

          <div>
            <button className="px-12 py-4 text-sm mt-8 primary-bg text-white flex items-center gap-2 justify-center hover:bg-blue-800 transition duration-1000">
              <span>Discover More</span>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
