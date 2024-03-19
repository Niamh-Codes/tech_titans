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
