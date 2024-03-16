import React from 'react';
import { motion } from 'framer-motion';

function AnimatedSVG() {
  return (
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
        initial={{ scale: 0 }} // Initial animation state (scale: 0)
        animate={{ scale: 1 }} // Animation target state (scale: 1)
        transition={{ duration: 1 }} // Animation duration
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="blue"
          whileHover={{ scale: 1.1 }} // Scale up when hovered
          whileTap={{ scale: 0.9 }} // Scale down when tapped
        />
      </motion.svg>
    </div>
  );
}

export default AnimatedSVG;
