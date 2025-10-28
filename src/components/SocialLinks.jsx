import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Mail, href: 'mailto:afeefmb.4221@gmail.com' },
];

const iconVariants = {
  hover: { scale: 1.2, color: '#007aff' },
  tap: { scale: 0.9 },
};

const SocialLinks = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full p-4 space-y-6 
                 bg-surface/50 border-l border-gray-700/50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="text-secondary"
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;