import React from "react";
import helloCuriosvg from '../../assets/helloCuriosvg.svg'



function Navbar() {
  return (
    <>
<nav className="text-customOrange bg-body py-2 lg:py-4 shadow-md dark:bg-neutral-700">
  <div className="container mx-auto px-3 lg:px-0 flex items-center justify-between">
    <img src='../../assets/helloCuriosvg.svg' alt='orange star logo' className="h-8 w-8 lg:h-10 lg:w-10 ml-8"/>
    <div className="flex w-full lg:w-1/3 items-center justify-between">
      <span className="flex items-center px-3 py-2 text-gray-600 dark:text-white"></span>
    </div>
    <div className="hidden lg:flex w-full lg:w-1/3 items-center justify-end mr-8">
      <ul className="flex gap-4">
        <a href="#footer">Contact</a>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;