import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function Nav() {
  const [menu, setMenu] = useState(null);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <nav className="w-full sticky top-0 left-0 bg-white z-50">
      <div className="mx-auto w-4/5 md:w-full md:px-4 flex items-center justify-between gap-3 py-4 md:py-8 border-b">
        <div>
          <h1 className="text-4xl font-bold">
            Cus<span className="primary-color">tomer</span>
          </h1>
        </div>

        {/* menu container */}
        <div
          className={
            menu
              ? "absolute md:static top-[68px] left-0 bg-white h-auto overflow-visible md:h-auto md:overflow-visible"
              : "absolute md:static top-[68px] left-0 bg-white h-0 overflow-hidden md:h-auto md:overflow-visible"
          }
        >
          <div className="flex items-center justify-center flex-col md:flex-row gap-8 w-[100vw] md:w-auto py-4 md:py-0 border-t-2 md:border-t-0">
            <ul className="flex items-center justify-center gap-8 flex-col md:flex-row w-full">
              <li className="cursor-pointer hover:text-blue-700 transition">
                Home
              </li>
              <li className="cursor-pointer hover:text-blue-700 transition">
                About
              </li>
              <li className="cursor-pointer hover:text-blue-700 transition">
                Services
              </li>
              <li className="cursor-pointer hover:text-blue-700 transition">
                Blog
              </li>
            </ul>
            <div>
              <button className="px-8 py-3 md:px-6 md:py-2 md:text-sm md:min-w-32 text-white text-md primary-bg rounded-sm shadow-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* menu container ends */}

        <div
          className="md:hidden text-2xl cursor-pointer hover:text-blue-600 transition-all"
          onClick={handleMenu}
        >
          {menu ? <RxCross1 /> : <CiMenuBurger />}
        </div>
      </div>
    </nav>
  );
}
