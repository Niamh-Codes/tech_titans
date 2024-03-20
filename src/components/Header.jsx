import React from 'react';
import { motion } from 'framer-motion';
import starOrange from '../../assets/starOrange.svg';
import './styles/Header.css'; // Import the CSS file

function Header() {
  return (
    <div className="header-container">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
          className="header-title"
        >
          HELLO CURIO
        </motion.h1>
        <motion.div
          className="star-orange"
          style={{
            background: `url(${starOrange})`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="flex lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: -150 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="subtitle w-1/2 mb-5 text-7xl text-white leading-tight"
        >
          Uncover global charm: Greet the world's quirks!
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-2/5 pl-2">
          <div className="line"></div>
        </div>
        <div className="w-1/2 flex-col justify-end content-end pr-2 header-description">
          <motion.p
            initial={{ opacity: 0, x: 150, y: -110 }}
            animate={{ opacity: 1, x: 150, y: -110 }}
            transition={{ duration: 1, delay: 1 }}
            className="description-text"
          >
            Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages. Learn about different cultures, customs, and traditions around the world. Challenge yourself and have fun with our interactive quiz!
          </motion.p>
          {/* <div className="line"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
