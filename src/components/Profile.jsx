import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ProfilePic from "../assets/profile-pic.jpg"; 

const picVariants = {
  hover: { scale: 1.03, y: -5, opacity: 0.9 },
  tap: { scale: 0.97 },
};

const ProfileImage = () => {
  return (
    <ScrollLink
      to="about"
      smooth={true}
      duration={500}
      offset={-70}
      className="cursor-pointer"
    >
      <motion.div
        variants={picVariants}
        whileHover="hover"
        whileTap="tap"
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="bg-[#0f0f0f] p-1 rounded-2xl border border-[#5eead4]/30 
                   overflow-hidden flex justify-center items-center"
      >
        <motion.img
          src={ProfilePic}
          alt="Profile"
          className="w-[240px] h-[270px] md:w-[268px] md:h-[292px] 
                     rounded-2xl object-cover transition-all duration-300"
        />
      </motion.div>
    </ScrollLink>
  );
};

export default ProfileImage;
