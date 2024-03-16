import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div style={{ backgroundColor: '#1B1914', color: '#FFB53A' }} className="p-6 h-screen flex-wrap bg-body">
      <motion.h1 
        initial={{ opacity: 0, y: -100 }} // Initial animation state (opacity: 0, move up by 100 pixels)
        animate={{ opacity: 1, y: 0 }}    // Animation target state (opacity: 1, back to original position)
        transition={{ duration: 1 }}      // Animation duration
        className="mb-5 text-customOrange"
      >
        HELLO CURIO
      </motion.h1>
      <div className="mb-5 text-7xl text-white subtitle">Uncover global charm: Greet the world's quirks!</div>

      {/* Container for left content */}
      <div className="w-1/2 pr-2">
        <p className="mb-3 text-white">
          Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages.
        </p>
      </div>

      {/* Container for right content */}
      <div className="w-1/2 pl-2">
        <div className="h-0.5 bg-neutral-100 dark:bg-white/10 m-auto"></div>
      </div>
    </div>
  );
}

export default Header;
