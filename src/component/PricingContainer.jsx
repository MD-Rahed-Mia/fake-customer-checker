import React from "react";
import BackgroundImage from "./../../public/images/bacground.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export default function PricingContainer() {
  return (
    <div
      className="w-full min-h-[60vh] mt-40 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.4)), url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-4/5 mx-auto grid gap-[10%] grid-cols-1 lg:grid-cols-2 place-content-center place-items-start">
        {/* pricing left */}
        <div>
          <div>
            <h3 className="primary-color font-bold my-4 text-center">
              Pricing Plans
            </h3>
          </div>
          <div>
            <h1 className="text-white mb-12 text-2xl md:text-4xl lg:text-4xl text-center md:text-left font-bold capitalize">
              Our Best Affordable Pricing Plan <br />
              Choose Your Plans
            </h1>
          </div>

          {/* wrapper */}
          <div>

            
            <div class="max-w-3xl h-fit mx-auto bg-white p-2 md:p-4 rounded-lg shadow-md">
              {/* faq section starts  */}
              <div class="relative min-h-12 border rounded-md mb-2">
                <input
                  type="checkbox"
                  id="faq-toggle"
                  class="faq-toggle hidden"
                />

                <div className="absolute top-2 md:top-4 right-2 md:right-4 faq-icon">
                  <FaChevronRight />
                </div>
                <label
                  htmlFor="faq-toggle"
                  class="block p-2 text-[14px] md:text-xl bg-gray-200 cursor-pointer text-gray-700 font-semibold rounded-md hover:bg-gray-300  select-none"
                >
                  How to increase product sales in 2024?
                </label>

                <div class="faq-content p-4 border-t text-sm md:text-md border-gray-200">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Commodi iure voluptas facere quis deleniti optio nesciunt
                  impedit, labore pariatur, voluptatem ex porro consectetur vero
                  tenetur eaque harum mollitia molestiae unde.
                </div>
              </div>
              {/* faq sections ends */}
            </div>



          </div>
        </div>
        {/* pricing left end */}

        {/* pricing right starts here */}
        <div className="py-8 w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* price cards */}
            <div className="min-w-full min-h-[150px] relative  p-4 md:p-8 bg-white rounded-md" data-aos="flip-down">
              {/* price */}
              <div className="absolute top-16 right-12 ">
                <span>
                  <h1 className=" text-3xl">BDT1500</h1>
                </span>
              </div>

              {/* card title */}
              <div className="primary-bg text-white absolute -top-4 right-8 py-2 px-6 rounded-md">
                <span>
                  <h1>Popular</h1>
                </span>
              </div>

              <div>
                <h3 className="primary-color uppercase">For 1 years</h3>
              </div>

              <div className="flex ps-8 mt-4 flex-col lg:flex-row justify-center gap-8 md:gap-12 w-4/5 py-2">
                <div className="h-[50px] w-[50px] p-4 text-white rounded-md flex items-center justify-center primary-bg">
                  <span className="text-xl  block">
                    <FaCheck />
                  </span>
                </div>
                <div>
                  <span>
                    <h1 className="text-lg md:text-2xl uppercase font-bold">
                      19 Days For Free
                    </h1>
                  </span>
                  <span className="text-sm  mt-2 block">
                    Multifunctional human capital after awesome superior
                    scenarios my coordinate
                  </span>

                  <span>
                    <button className="block py-3 px-8 primary-bg font-light text-white mt-4 rounded-md">
                      Purchased{" "}
                    </button>
                  </span>
                </div>
              </div>
            </div>
            {/* price cards */}


            {/* price cards */}
            <div className="min-w-full min-h-[150px] relative  p-4 md:p-8 bg-white rounded-md" data-aos="flip-up">
              {/* price */}
              <div className="absolute top-16 right-12 ">
                <span>
                  <h1 className=" text-3xl">BDT1500</h1>
                </span>
              </div>

              {/* card title */}
              <div className="primary-bg text-white absolute -top-4 right-8 py-2 px-6 rounded-md">
                <span>
                  <h1>Popular</h1>
                </span>
              </div>

              <div>
                <h3 className="primary-color uppercase">For 1 years</h3>
              </div>

              <div className="flex ps-8 mt-4 flex-col md:flex-row justify-center gap-8 md:gap-12 w-4/5 py-2">
                <div className="h-[50px] w-[50px] p-4 text-white rounded-md flex items-center justify-center primary-bg">
                  <span className="text-xl  block">
                    <FaCheck />
                  </span>
                </div>
                <div>
                  <span>
                    <h1 className="text-lg md:text-2xl uppercase font-bold">
                      19 Days For Free
                    </h1>
                  </span>
                  <span className="text-sm  mt-2 block">
                    Multifunctional human capital after awesome superior
                    scenarios my coordinate
                  </span>

                  <span>
                    <button className="block py-3 px-8 primary-bg font-light text-white mt-4 rounded-md">
                      Purchased{" "}
                    </button>
                  </span>
                </div>
              </div>
            </div>
            {/* price cards */}
          </div>
        </div>
        {/* pricing rights ends here */}
      </div>
    </div>
  );
}
