import React from 'react';
import { motion } from 'framer-motion';

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
        >
          Uncover global charm: Greet the world's quirks!
        </motion.div>
      </div>
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
    </div>
  );
}

export default Header;
