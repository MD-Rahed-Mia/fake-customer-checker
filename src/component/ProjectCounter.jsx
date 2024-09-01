import React from "react";
import BackgroundImage from "./../../public/images/bacground.jpg";

export default function ProjectCounter() {
  return (
    <div className="w-full py-40 bg-slate-200">
      <div
        className="w-full min-h-[40vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.4)), url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 w-4/5 mx-auto  gap-4 place-content-center min-h-[40vh] place-items-center">
          {/* starts */}
          <div>
            <h1 className="flex flex-col items-center justify-center gap-4">
              <span className="text-2xl lg:text-6xl font-bold text-white">
                100%
              </span>
              <span className="text-[12px] md:text-md text-white font-light uppercase">
                Satisfaction Rates
              </span>
            </h1>
          </div>
          {/* ends */}

          {/* starts */}
          <div>
            <h1 className="flex flex-col items-center justify-center gap-4">
              <span className="text-2xl lg:text-6xl font-bold text-white">
                100%
              </span>
              <span className="text-[12px] md:text-md text-white font-light uppercase">
                Satisfaction Rates
              </span>
            </h1>
          </div>
          {/* ends */}
          {/* starts */}
          <div>
            <h1 className="flex flex-col items-center justify-center gap-4">
              <span className="text-2xl lg:text-6xl font-bold text-white">
                100%
              </span>
              <span className="text-[12px] md:text-md text-white font-light uppercase">
                Satisfaction Rates
              </span>
            </h1>
          </div>
          {/* ends */}
          {/* starts */}
          <div>
            <h1 className="flex flex-col items-center justify-center gap-4">
              <span className="text-2xl lg:text-6xl font-bold text-white">
                100%
              </span>
              <span className="text-[12px] md:text-md text-white font-light uppercase">
                Satisfaction Rates
              </span>
            </h1>
          </div>
          {/* ends */}
        </div>
      </div>
    </div>
  );
}
