import React from "react";
import BackgroundImage from "./../../public/images/bacground.jpg";
import {
  FaArrowRight,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div
      className="w-full bg-slate-200 flex items-center justify-center py-8 md:py-0 flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.4)), url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 place-content-center place-items-center lg:grid-cols-3 mt-12 w-4/5 mx-auto gap-12">
        <div>
          <span>
            <h1 className="text-3xl font-bold  uppercase text-white">
              Cust<span className="text-blue-700">Tomer</span>
            </h1>
          </span>
          <span>
            <h3 className="my-8 text-sm text-white">
              Monotonectally synergize granular top visualize strategic
              infomediaries afters task state of the art infrastructures digital
              agency in north
            </h3>
          </span>

          <span>
            <button className="flex items-center justify-center gap-2 py-2 px-4 primary-bg text-white rounded-md">
              <span>Discover More</span> <FaArrowRight />
            </button>
          </span>
        </div>

        {/* mid row here */}
        <div className="text-white">
          <h1 className="font-bold text-2xl">Our Services</h1>

          <div>
            <ul className="mt-6">
              <li className="footer-list">
                <span>
                  <FaArrowRight />
                </span>
                <span>Web Development</span>
              </li>
              <li className="footer-list">
                <span>
                  <FaArrowRight />
                </span>
                <span>Ecommercee Solution</span>
              </li>
              <li className="footer-list">
                <span>
                  <FaArrowRight />
                </span>
                <span>SEO and Digital Marketing</span>
              </li>
              <li className="footer-list">
                <span>
                  <FaArrowRight />
                </span>
                <span>Web Automation</span>
              </li>
            </ul>
          </div>
        </div>
        {/* mid row ends here */}

        {/* news letter starts here */}
        <div className="">
          <div>
            <h1 className="text-2xl text-blue-500 my-8">
              Subscribe our newsletter
            </h1>
          </div>
          <div>
            <div>
              <form
                action=""
                className="w-full bg-blue-500 flex items-center justify-between rounded-sm"
              >
                <input
                  type="email"
                  name="news-letter"
                  id="news-letter"
                  placeholder="your email"
                  className="w-full h-full py-2 px-2 text-white outline-none border-0  bg-transparent placeholder:text-white"
                />
                <button className="px-4 py-2 text-blue-500 bg-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div>
            <h3 className="mt-4 text-white leading-5">
              Subscribe our email. Stay connected with us. Get latest updates
              and news.
            </h3>
          </div>
        </div>

        {/* news letter ends here */}
      </div>
      <footer className="w-4/5 border-t mt-8 text-white mx-auto py-4 flex items-center justify-between flex-col lg:flex-row gap-8">
        <div className="order-2 md:order-1">
          <span className="text-sm">© 2024 DreamTech Inc.</span>
        </div>
        <div className="order-1 md:order-2">
          <ul className="flex items-center justify-center gap-4">
            <li className="w-12 text-black text-xl hover:bg-blue-500 transition-all cursor-pointer hover:text-white h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <FaFacebook />
            </li>
            <li className="w-12 text-black text-xl hover:bg-blue-500 transition-all cursor-pointer hover:text-white h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <FaWhatsapp />
            </li>
            <li className="w-12 text-black text-xl hover:bg-blue-500 transition-all cursor-pointer hover:text-white h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
