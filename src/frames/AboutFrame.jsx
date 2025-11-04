import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-24 bg-[#0a0a0a]"
    >
      {/* Left: Description */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-gray-300 max-w-xl space-y-5"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-400">
          I’m <span className="text-cyan-400 font-semibold">Afeef Basheer</span>, 
          a passionate software engineer focused on building intelligent systems 
          and crafting elegant front-end experiences that actually make sense. 
          I enjoy learning about emerging tech, experimenting with design ideas, 
          and writing code that looks as good as it runs.
        </p>

        <p className="text-gray-400">
          My interests orbit around <span className="text-cyan-400">AI-driven development</span>, 
          system architecture, and creating human-centric digital products.  
          I believe in precision, clean logic, and keeping things functional yet aesthetic.
        </p>
      </motion.div>

      {/* Right: Resume Download */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <a
          href="/Afeef_Basheer_Resume.pdf"
          download
          className="flex items-center gap-3 px-8 py-4 border border-cyan-500/40 rounded-xl
          text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
        >
          <Download className="w-5 h-5" />
          <span className="font-semibold">Download Resume</span>
        </a>
      </motion.div>
    </section>
  );
};

export default AboutSection;
