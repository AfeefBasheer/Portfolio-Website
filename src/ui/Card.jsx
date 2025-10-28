import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`bg-surface rounded-lg p-6 shadow-lg 
                  border border-gray-700/50 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;