import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const navItems = ['Home', 'Skills', 'Projects', 'Stats', 'Education', 'Contact'];

const HomeNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <ul className="flex items-center justify-center gap-1 px-4 py-2 
                     bg-surface/80 backdrop-blur-md rounded-full 
                     border border-gray-700/50 shadow-lg">
        {navItems.map((item) => (
          <li key={item}>
            <ScrollLink
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 py-2 rounded-full text-secondary hover:text-primary 
                         cursor-pointer transition-colors"
              activeClass="bg-accent/30 text-primary"
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default HomeNavbar;