import React from "react";
import { FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="my-20 bg-slate-200 w-full min-h-[30vh]">
      <div className="w-3/5 mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 min-h-[30vh] place-content-center">
        {/* contact card */}
        <div class="relative flex items-center justify-center gap-5 border rounded-md border-blue-800 min-h-[100px] cursor-pointer overflow-hidden group">
          <div class="relative z-30 flex items-center justify-center gap-8">
            <div class="w-16 h-16 rounded-full border-2 border-blue-800 group-hover:border-white flex items-center justify-center text-2xl text-blue-800 group-hover:text-white">
              <span>
                <FaPhone />
              </span>
            </div>
            <div>
              <h3 className="text-lg group-hover:text-white">Call us on</h3>
              <h1 class="text-blue-500 text-xl font-bold group-hover:text-white">
                +88 01575 088264
              </h1>
            </div>
          </div>

          <span class="absolute top-0 left-0 h-full bg-blue-800 transition-all duration-300 ease-in-out group-hover:w-full w-0 z-10"></span>
        </div>
        {/* contact card end */}
        {/* contact card */}
        <div class="relative flex items-center justify-center gap-5 border rounded-md border-blue-800 min-h-[100px] cursor-pointer overflow-hidden group">
          <div class="relative z-30 flex items-center justify-center gap-8">
            <div class="w-16 h-16 rounded-full border-2 border-blue-800 group-hover:border-white flex items-center justify-center text-2xl text-blue-800 group-hover:text-white">
              <span>
                <FaMailBulk />
              </span>
            </div>
            <div>
              <h3 className="text-lg group-hover:text-white">Email us</h3>
              <h1 class="text-blue-500 text-xl font-bold group-hover:text-white">
                mdrahed708@gmail.com
              </h1>
            </div>
          </div>

          <span class="absolute top-0 left-0 h-full bg-blue-800 transition-all duration-300 ease-in-out group-hover:w-full w-0 z-10"></span>
        </div>
        {/* contact card end */}
        {/* contact card */}
        <div class="relative flex items-center justify-center gap-5 border rounded-md border-blue-800 min-h-[100px] cursor-pointer overflow-hidden group">
          <div class="relative z-30 flex items-center justify-center gap-8">
            <div class="w-16 h-16 rounded-full border-2 border-blue-800 group-hover:border-white flex items-center justify-center text-2xl text-blue-800 group-hover:text-white">
              <span>
                <FaWhatsapp />
              </span>
            </div>
            <div>
              <h3 className="text-lg group-hover:text-white">Whatsapp us</h3>
              <h1 class="text-blue-500 text-xl font-bold group-hover:text-white">
                +88 01575 088264
              </h1>
            </div>
          </div>

          <span class="absolute top-0 left-0 h-full bg-blue-800 transition-all duration-300 ease-in-out group-hover:w-full w-0 z-10"></span>
        </div>
        {/* contact card end */}
      </div>
    </div>
  );
}
