import React from "react";
import ProductBackground from "./../../public/images/color-bg.jpg";
export default function WorkingProcess() {
  return (
    <div
      className="w-full min-h-[80vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.4)), url(${ProductBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-4/5 mx-auto py-20">
        <div>
          <h3 className="primary-color font-bold text-lg text-center">
            Working Process
          </h3>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center text-white font-bold mt-4">
            We Follow the Easy Working Steps
          </h1>
        </div>

        <div className="grid w-4/5 mx-auto mt-12 grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center">
          {/* working card starts here */}
          <div className="">
            <div className="w-24 md:w-32 lg:w-40 md:h-32 lg:h-40  h-24  my-8 mx-auto rounded-full object-cover flex items-center justify-center  ">
              <div className="z-30 border-2 w-24  md:w-32 lg:w-40 md:h-32 lg:h-40 h-24  flex rounded-full items-center  justify-center relative">
                <img
                  className="w-full h-full rounded-full"
                  src="/images/working.jpg"
                  alt="working"
                />

                <span className="absolute  -translate-x-1/2 -translate-y-1/2 rounded-full w-[120%] h-[120%] md:w-[115%] md:h-[115%]   lg:w-[110%] lg:h-[110%] border-blue-800 border-dashed border-4 -z-[1] animate-rotate"></span>
              </div>
            </div>
            <div className="my-4 ">
              <h1 className="text-center text-xl md:text-2xl text-white">
                Start A Project
              </h1>
              <h3 className="text-center my-4 md:my-8 w-full md:w-3/5 mx-auto font-light text-white text-md md:text-lg">
                Proactively drive maintainable value next mission-critical
                infrastructures done the new business to planning
              </h3>
            </div>
          </div>
          {/*working card ends here */}

          {/* working card starts here */}
          <div className="">
            <div className="w-24 md:w-32 lg:w-40 md:h-32 lg:h-40  h-24  my-8 mx-auto rounded-full object-cover flex items-center justify-center  ">
              <div className="z-30 border-2 w-24  md:w-32 lg:w-40 md:h-32 lg:h-40 h-24  flex rounded-full items-center  justify-center relative">
                <img
                  className="w-full h-full rounded-full"
                  src="/images/working.jpg"
                  alt="working"
                />

                <span className="absolute  -translate-x-1/2 -translate-y-1/2 rounded-full w-[120%] h-[120%] md:w-[115%] md:h-[115%]   lg:w-[110%] lg:h-[110%] border-blue-800 border-dashed border-4 -z-[1] animate-rotate"></span>
              </div>
            </div>
            <div className="my-4 ">
              <h1 className="text-center text-xl md:text-2xl text-white">
                Start A Project
              </h1>
              <h3 className="text-center my-4 md:my-8 w-full md:w-3/5 mx-auto font-light text-white text-md md:text-lg">
                Proactively drive maintainable value next mission-critical
                infrastructures done the new business to planning
              </h3>
            </div>
          </div>
          {/*working card ends here */}
          {/* working card starts here */}
          <div className="">
            <div className="w-24 md:w-32 lg:w-40 md:h-32 lg:h-40  h-24  my-8 mx-auto rounded-full object-cover flex items-center justify-center  ">
              <div className="z-30 border-2 w-24  md:w-32 lg:w-40 md:h-32 lg:h-40 h-24  flex rounded-full items-center  justify-center relative">
                <img
                  className="w-full h-full rounded-full"
                  src="/images/working.jpg"
                  alt="working"
                />

                <span className="absolute  -translate-x-1/2 -translate-y-1/2 rounded-full w-[120%] h-[120%] md:w-[115%] md:h-[115%]   lg:w-[110%] lg:h-[110%] border-blue-800 border-dashed border-4 -z-[1] animate-rotate"></span>
              </div>
            </div>
            <div className="my-4 ">
              <h1 className="text-center text-xl md:text-2xl text-white">
                Start A Project
              </h1>
              <h3 className="text-center my-4 md:my-8 w-full md:w-3/5 mx-auto font-light text-white text-md md:text-lg">
                Proactively drive maintainable value next mission-critical
                infrastructures done the new business to planning
              </h3>
            </div>
          </div>
          {/*working card ends here */}
        </div>
      </div>
    </div>
  );
}
