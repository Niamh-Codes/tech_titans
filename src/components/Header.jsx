import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className=" 100-vh mx p-6 bg-body flex flex-col flexlg:flex-row px-6">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
          className="mb-2  100-vh mx p-6 bg-body flex flex-col  text-customOrange"
        >
          HELLO CURIO
        </motion.h1>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: -150 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="content-start w-1/2 mb-5 text-7xl text-white subtitle flex-col lg:flex-row"
        >
          Uncover global charm: Greet the world's quirks!
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-2/5 pl-2">
          <div className="h-0.5 bg-neutral-100 dark:bg-white/10 mb-3"></div>
        </div>
        <div className="w-1/2 flex-col justify-end content-end pr-2">
          <motion.p
            initial={{ opacity: 0, x: 150, y: -110 }}
            animate={{ opacity: 1, x: 150, y: -110 }}
            transition={{ duration: 1, delay: 1 }}
            className="justify-end content-end mb-3 text-white flex flex-col text-lg lg:text-2xl"
          >
            Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages. Learn about different cultures, customs, and traditions around the world. Challenge yourself and have fun with our interactive quiz!
          </motion.p>
        </div>
      </div>
      <div className="flex">
      </div>
    </div>
  );
}

export default Header;
