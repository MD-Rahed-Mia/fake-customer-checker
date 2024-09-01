import React from "react";

export default function Nav() {
  return (
    <nav className="w-full sticky top-0 left-0 bg-white z-50">
      <div className="mx-auto w-4/5 flex items-center justify-between gap-3 py-8 border-b">
        <div>
          <h1 className="text-4xl font-bold">
            Cus<span className="primary-color">tomer</span>
          </h1>
        </div>
        <div>
          <div className="flex items-center justify-center gap-8">
            <ul className="flex items-center justify-center gap-8">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pages</li>
              <li>Blog</li>
            </ul>
            <div>
              <button className="px-8 py-3 text-white text-md primary-bg rounded-sm shadow-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
