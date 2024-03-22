import React from 'react';
import { Link } from 'react-scroll';
import logoPNG from "../../assets/logoPNG.png";

const NavBar = () => {
  return (
    <nav className='text-customOrange bg-body py-2 lg:py-4 shadow-md dark:bg-neutral-700 flex items-center justify-between'>
      <div>
        <img src='../../assets/logoPNG.png' alt='logo orange' className="h-8 w-8 lg:h-10 lg:w-10 ml-2" />
      </div>
      <ul className='flex gap-4 mr-3'>
        <li>
          <Link to="mainsearch" spy={true} smooth={true} duration={500} className="cursor-pointer text-white hover:text-customOrange">
            Search
          </Link>
        </li>
        <li>
          <Link to="quiz" spy={true} smooth={true} duration={500} className="cursor-pointer text-white hover:text-customOrange">
            Quiz
          </Link>
        </li>
        <li>
          <Link to="footer" spy={true} smooth={true} duration={500} className="cursor-pointer text-white hover:text-customOrange">
            Meet the Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;