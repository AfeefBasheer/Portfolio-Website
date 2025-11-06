import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import Button from "../ui/Button.jsx"; // Make sure this path is correct

// --- Utility Components ---

// A simple utility component for styled section headings
const SectionHeading = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-[#5eead4] mb-6">
    {children}
  </h2>
);

// Re-usable style for the card (WITH HOVER) - for System Architecture
const cardBaseStyle =
  "relative group p-6 sm:p-8 bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-[#5eead4]/40 hover:shadow-[0_0_25px_-8px_rgba(94,234,212,0.3)]";

// Re-usable style for cards (NO HOVER) - for Tech Stack, Current Status, and About
const cardBaseStyleNoHover =
  "relative p-6 sm:p-8 bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-500";

// Re-usable component for the card's glow-line (for interactive cards)
const GlowLine = () => (
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/3 h-[2px] bg-[#5eead4] transition-all duration-500" />
);

// --- Animation Variants ---

// Staggered animation for the main sections
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

// Staggered animation for the individual tech tags
const tagContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// --- Main Component ---

const ProjectDetailFrame = ({ project }) => {
  return (
    <section className="pt-12 pb-16 px-[10%]">
      {/* --- 1. TITLE --- */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.1}
        variants={sectionVariants}
        className="text-3xl md:text-5xl font-bold text-gray-100 mt-12 mb-12 text-center"
      >
        {project.title}
      </motion.h1>

      {/* --- Main 2-Column Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-12 items-start">
        {/* --- LEFT COLUMN (Visuals) --- */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          {/* --- 2. MAIN IMAGE --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            variants={sectionVariants}
            className="w-full rounded-2xl overflow-hidden shadow-lg 
                       border border-white/10
                       transition-all duration-500"
          >
            <img
              width="100%"
              height="100%"
              src={project.imageUrl}
              alt={`${project.title} preview`}
              className="w-full object-cover"
            />
          </motion.div>

          {/* --- 5. SYSTEM ARCHITECTURE (With Hover Glow) --- */}
          {project.architectureImageUrl && (
            <Link
              to={project.architectureImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block" // Ensures the link occupies the full block
            >
              <motion.div
                className={`${cardBaseStyle} cursor-pointer`} // Has hover glow
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <SectionHeading>System Architecture</SectionHeading>
                <div
                  className="w-full rounded-lg overflow-hidden 
                             border border-white/10"
                >
                  <img
                    src={project.architectureImageUrl}
                    alt={`${project.title} architecture diagram`}
                    className="w-full bg-white p-2"
                  />
                </div>
                <GlowLine /> {/* Add GlowLine here */}
              </motion.div>
            </Link>
          )}
        </div>

        {/* --- RIGHT COLUMN (Data) --- */}
        <div className="lg:col-span-3 flex flex-col gap-12 mt-12 lg:mt-0">
          {/* --- 3. TECH STACK (No Hover Glow) --- */}
          <motion.div
            className={`${cardBaseStyleNoHover} `} // --- UPDATED: No hover glow
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.3}
            variants={sectionVariants}
          >
            <SectionHeading>Tech Stack</SectionHeading>

            <motion.div
              key={project.id}
              className="flex flex-wrap gap-3"
              variants={tagContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  variants={tagVariants}
                  className="px-4 py-2 bg-[#1a1a1a]/70 border border-white/10 
                             rounded-lg text-gray-300 text-sm
                             transition-all duration-300 
                             hover:border-[#5eead4]/60 hover:text-[#5eead4] 
                             hover:shadow-[0_0_10px_rgba(94,234,212,0.2)]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            {/* --- REMOVED: GlowLine --- */}
          </motion.div>

          {/* --- 4. CURRENT STATUS (No Hover Glow) --- */}
          <motion.div
            className={`${cardBaseStyleNoHover}`} // No hover glow
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.4}
            variants={sectionVariants}
          >
            <SectionHeading>Current Status</SectionHeading>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              {project.currentStatus}
            </p>
          </motion.div>

          {/* --- 6. ABOUT THIS PROJECT (No Hover Glow) --- */}
          <motion.div
            className={`${cardBaseStyleNoHover}`} // No hover glow
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <SectionHeading>About this Project</SectionHeading>
            <ul className="list-disc list-outside ml-5 space-y-4">
              {project.descriptionPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-gray-400 leading-relaxed text-base md:text-lg"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* --- 7. DEMO BUTTON --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full md:w-1/2">Demo will be Available Soon</Button>
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectDetailFrame;
