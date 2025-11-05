import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="group relative w-full min-w-[320px] max-w-[600px] rounded-2xl 
                   bg-[#1a1a1a]/60 border border-white/10 backdrop-blur-md shadow-md 
                   overflow-hidden transition-all duration-500 
                   hover:border-cyan-400 hover:shadow-[0_0_20px_#00ffff]/40 cursor-pointer"
      >
        {/* Image */}
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-56 object-cover rounded-t-2xl"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Content */}
        <div className="p-6 flex flex-col justify-between h-auto space-y-3">
          <h3 className="text-lg md:text-2xl font-semibold text-[#5eead4]">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            {project.shortDescription}
          </p>

          {/* Tech stack badges with subtle cyan glow */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 bg-[#0f0f0f]/60 border border-cyan-500/30 rounded-md text-gray-300 shadow-[0_0_8px_#5eead4]/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            <Button>
              <span>View Demo</span>
            </Button>
            <motion.div
              className="text-[#5eead4]"
              initial={{ x: -4 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
