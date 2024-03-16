import React from 'react';
import { motion } from 'framer-motion';
// import starOrangeSvg from './assets/starOrange.svg'; // Import the SVG file

function Header() {
  return (
    <div style={{ backgroundColor: '#1B1914', color: '#FFB53A' }} className="p-6 h-screen flex-wrap bg-body">
      <motion.h1 
        initial={{ opacity: 0, y: -100 }} 
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1 }}      
        className="mb-2 text-customOrange"
      >
        {/* <img src={starOrangeSvg} alt="Star Orange" /> Use the imported SVG component */}
        HELLO CURIO
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -100 }} 
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1, delay: 0.5 }} 
        className="mb-5 text-7xl text-white subtitle"
      >
        Uncover global charm: Greet the world's quirks!
      </motion.div>

      {/* Container for left content */}
      <div className="w-1/2 pr-2">
        <motion.p
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}    
          transition={{ duration: 1, delay: 1 }} 
          className="mb-3 text-white"
        >
          Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages.
        </motion.p>
      </div>

      {/* Container for right content */}
      <div className="w-1/2 pl-2">
        <div className="h-0.5 bg-neutral-100 dark:bg-white/10 m-auto"></div>
      </div>
    </div>
  );
}

export default Header;
