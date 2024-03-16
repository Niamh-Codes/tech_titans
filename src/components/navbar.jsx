import React from "react";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 text-white py-2 lg:py-4 shadow-md dark:bg-neutral-700">
        <div className="container mx-auto px-3 lg:px-0 flex items-center justify-between">
          <span className="text-xl lg:text-2xl">*</span>
          <div className="flex w-full lg:w-1/3 items-center justify-between">
            <span className="flex items-center px-3 py-2 text-gray-600 dark:text-white"></span>
          </div>
          <div className="hidden lg:flex w-full lg:w-1/3 items-center justify-between">
            <ul className="flex gap-6">
              <li>About</li>
              <li>Contact</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;