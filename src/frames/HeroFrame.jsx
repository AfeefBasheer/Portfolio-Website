import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../ui/Button.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import MacTerminal from '../components/MacTerminal.jsx';
import ProfilePic from '../assets/profile-pic.jpg'; // Dummy profile pic

const HeroFrame = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center 
                 relative overflow-hidden pt-20 md:pt-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row w-full">
          
          {/* 1. Left Section (Profile) - 25% */}
          <motion.div 
            className="w-full md:w-1/4 flex flex-col items-center 
                       justify-center p-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={ProfilePic} 
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover border-4 
                         border-accent shadow-glow-accent mb-6" 
            />
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
              <Button>See My Work</Button>
            </ScrollLink>
          </motion.div>

          {/* 2. Center Section (Caption & Terminal) - 60% */}
          <motion.div 
            className="w-full md:w-3/5 flex flex-col justify-center p-4 
                       items-center md:items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 text-center md:text-left">
              Hi, I'm [Your Name]
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 text-center md:text-left">
              A Full Stack & AI Developer turning ideas into 
              intelligent and scalable web applications.
            </p>
            <MacTerminal />
          </motion.div>

          {/* 3. Right Section (Socials) - 15% */}
          <div className="w-full md:w-1/5">
            <SocialLinks />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroFrame;