import React from "react";
// import helloCuriosvg from '../../assets/helloCuriosvg.svg'
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="text-customOrange bg-body py-2 lg:py-4 shadow-md dark:bg-neutral-700"
      >
        <div className="container mx-auto px-3 lg:px-0 flex items-center justify-between">
          <img
            src="../../assets/helloCuriosvg.svg"
            alt="orange star logo"
            className="h-8 w-8 lg:h-10 lg:w-10 ml-2"
          />
          <div className="flex w-full lg:w-1/3 items-center justify-between">
            <span className="flex items-center px-3 py-2 text-gray-600 dark:text-white"></span>
          </div>
          <ul className="flex gap-4 mr-3">
            <a href="#search">Search</a>
            <a href="#quiz">Quiz</a>
            <a href="#footer">Meet the Team</a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

<nav>
  <div class="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
    <div class="flex items-center flex-1">
      <span class="text-3xl font-bold">Logo</span>
    </div>
    <div class="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
      <div class="flex-10">
        <ul class="flex gap-8 mr-16 text-[18px]">
          <a>
            <li class="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              Home
            </li>
          </a>
          <a>
            <li class="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              About
            </li>
          </a>
          <a>
            <li class="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              Services
            </li>
          </a>
          <a>
            <li class="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              Projects
            </li>
          </a>
          <a>
            <li class="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </div>
    <div></div>
    <button class="block sm:hidden transtion">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu_Fries">
          <path d="M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"></path>
          <path d="M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"></path>
          <path d="M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"></path>
        </g>
      </svg>
    </button>
  </div>
</nav>;
