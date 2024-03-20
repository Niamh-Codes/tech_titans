import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import starOrange from '../../assets/starOrange.svg';
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
=======

function Header() {
  return (
    <div className=" 100-vh mx p-6 bg-body flex flex-col">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
          className="mb-2 text-customOrange"
        >
          HELLO CURIO
        </motion.h1>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: -150 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="content-start w-1/2 mb-5 text-7xl text-white subtitle"
>>>>>>> Yaseens-branch
        >
          Uncover global charm: Greet the world's quirks!
        </motion.div>
      </div>
<<<<<<< HEAD
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
=======
      <div className="flex">
        <div className="w-2/5 pl-2">
          <div className="h-0.5 bg-neutral-100 dark:bg-white/10 m-auto"></div>
        </div>
        <div className="w-1/2 flex-col justify-end content-end pr-2">
          <motion.p
            initial={{ opacity: 0, x: 150, y: -110 }}
            animate={{ opacity: 1, x: 150, y: -110 }}
            transition={{ duration: 1, delay: 1 }}
            className="justify-end content-end mb-3 text-3xl text-white"
          >
            Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages.
          </motion.p>
        </div>
      </div>
      <div className="flex">
      </div>
>>>>>>> Yaseens-branch
    </div>
  );
}

export default Header;
