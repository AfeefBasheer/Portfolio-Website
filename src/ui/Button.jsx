import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      onClick={onClick}
      className={`px-6  py-2 rounded-full font-semibold text-gray-900 
                  bg-teal-500 hover:bg-teal-400
                  transition-all duration-300 shadow-sm
                  ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
