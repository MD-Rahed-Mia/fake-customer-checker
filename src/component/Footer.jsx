import React from "react";
import BackgroundImage from "./../../public/images/bacground.jpg";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div
      className="w-full bg-slate-200 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.4)), url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <footer className="w-4/5 text-white mx-auto py-4 flex items-center justify-between">
        <div>
          <span>© 2024 DreamTech Inc.</span>
        </div>
        <div>
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
