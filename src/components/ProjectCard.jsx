import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      // This is the relative container
      className="group relative overflow-hidden rounded-lg bg-surface 
                 shadow-lg border border-gray-700/50" 
    >
      {/* THIS IS THE FIX:
        An invisible link overlay that covers the entire card.
      */}
      <Link 
        to={`/project/${project.id}`} 
        className="absolute inset-0 z-10"
        aria-label={`View details for ${project.title}`} // For accessibility
      />

      {/* All the visual content is below the link layer */}
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover transition-transform 
                   duration-500 group-hover:scale-105" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-secondary text-sm mb-4">{project.shortDescription}</p>
        
        <div 
          className="text-accent group-hover:underline flex items-center"
        >
          View Details <ArrowUpRight size={16} className="ml-1" />
        </div>
      </div>
      
      {/* Hover effects */}
      <div className="absolute inset-0 bg-black/50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* This icon needs z-20 so it appears *above* the link overlay */}
      <div className="absolute top-4 right-4 p-2 bg-accent/80 rounded-full
                    translate-x-12 -translatey-12 group-hover:translate-x-0 
                    group-hover:translate-y-0 transition-transform duration-300 z-20">
         <ArrowUpRight className="text-white" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;