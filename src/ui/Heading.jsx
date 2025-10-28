import React from 'react';
import { motion } from 'framer-motion';

const Heading = ({ children, as: Component = 'h2', className = '' }) => {
  return (
    <Component
      className={`text-3xl md:text-4xl font-bold text-primary mb-8 text-center ${className}`}
    >
      {children}
    </Component>
  );
};

export default Heading;