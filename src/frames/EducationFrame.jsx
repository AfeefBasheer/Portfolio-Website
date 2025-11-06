import React from "react";
import { motion } from "framer-motion";
import Heading from "../ui/Heading.jsx";
import { educationData } from "../data/education.js";

const EducationFrame = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 px-8 md:px-24 bg-[#0d0d0d] text-gray-200 overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0e0e0e]" />
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-[0.05]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <Heading>My Education</Heading>
        <p className="text-gray-400 text-base md:text-lg mt-3 max-w-2xl mx-auto text-center">
          My academic background and qualifications.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        
        {/* The Animated Timeline Line */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-[2px] bg-[#5eead4]/20 -translate-x-1/2"
          style={{ originY: 0 }} // Animate from the top
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`flex items-center w-full ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* 1. Card Side */}
              <div className="w-5/12">
                <a
                  href={edu.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // --- THIS IS THE FIX ---
                  // Added 'block' to make the <a> tag behave like a <div>
                  className={`block group relative p-6 bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md 
                              transition-all duration-500 hover:border-[#5eead4]/40 
                              hover:shadow-[0_0_25px_-8px_rgba(94,234,212,0.3)]
                              ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <h3 className="text-xl font-semibold text-[#5eead4] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.years}</p>
                  <p className="text-sm text-gray-400">{edu.cgpa}</p>
                  
                  {/* Subtle Glow Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-2/3 h-[2px] bg-[#5eead4] transition-all duration-500" />
                </a> 
              </div>

              {/* 2. Center Dot */}
              <div className="w-2/12 flex justify-center">
                <motion.div
                  className="absolute z-10 w-4 h-4 rounded-full bg-[#5eead4] 
                             border-2 border-[#0d0d0d] shadow-[0_0_12px_#5eead4]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                />
              </div>

              {/* 3. Empty Side (for spacing) */}
              <div className="w-5/12" />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationFrame;