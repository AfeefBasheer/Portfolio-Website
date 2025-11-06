import React from "react";
import { ArrowUpRight } from "lucide-react"; 
import { motion } from "framer-motion"; 

const CertificationCard = ({ certification }) => {
  const { title, issuer, date, image, link } = certification;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer relative group block h-full bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-[#5eead4]/40 hover:shadow-[0_0_25px_-8px_rgba(94,234,212,0.3)] 
      overflow-hidden"
    >
      {/* Image tag updated below
      */}
      <img
        src={image} // This should now be a screenshot of your certificate
        alt={`${title} preview`}
        className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-80" // <-- Added opacity change
      />

      {/* Replaced FiExternalLink with ArrowUpRight and added motion for hover effect */}
      <motion.div // <-- Added motion.div wrapper
        className="absolute bottom-5 right-5 w-7 h-7 text-gray-200 rounded-full p-1 
                   flex items-center justify-center group-hover:text-[#5eead4] transition-all duration-300"
        initial={{ x: -4 }} // <-- Initial position for the subtle movement
        whileHover={{ x: 4 }} // <-- Movement on hover
        transition={{ type: "spring", stiffness: 300 }} // <-- Smooth spring transition
      >
        <ArrowUpRight size={18} /> {/* <-- The new icon */}
      </motion.div>


      {/* Card Content - now in a separate div with padding */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#5eead4] mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-2">{issuer}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>

      {/* Subtle Glow Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-2/3 h-[2px] bg-[#5eead4] transition-all duration-500" />
        </a>
  );
};

export default CertificationCard;