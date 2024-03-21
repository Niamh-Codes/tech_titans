import React from 'react';
import { motion } from 'framer-motion';
import starOrange from './logo/starOrange.svg';
import './styles/Header.css'; // Import the CSS file

function Header() {
  return (
    <div className="header-container h-screen">
      <div className="flex items-center justify-between"> {/* Added flex container with justify-between */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header-title text-4xl sm:text-5xl md:text-6xl lg:text-giant mb-6"
        >
          HELLO CURIO
        </motion.h1>
        <motion.div
          className="star-orange"
          style={{
            background: `url(${starOrange})`,
            width: '200px', // Adjust width to match your SVG width
            height: '200px', // Adjust height to match your SVG height
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="flex lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="subtitle w-full lg:w-1/2 mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
        >
          Uncover global charm: Greet the world's quirks!
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row w-full mb-6">
        <div className="w-2/5 mb-2 lg:mb-0 mr-10"> {/* Add margin bottom for separation on large screens */}
          <div className="line"></div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-6"> {/* Adjust width for full width on small screens */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="description-text md:text-4xl space-x-0.5 text-white"
          >
            Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages. Learn about different cultures, customs, and traditions around the world. Challenge yourself and have fun with our interactive quiz!
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Header;
