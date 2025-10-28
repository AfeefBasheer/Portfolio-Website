import React, { useEffect } from 'react';  
import { useParams, Navigate } from 'react-router-dom';  
import { projects } from '../data/projects.js'; 
import ProjectNavbar from '../components/ProjectNavbar.jsx'; 
import Footer from '../components/Footer.jsx'; 
import Button from '../ui/Button.jsx'; 
import Heading from '../ui/Heading.jsx'; 
import { motion } from 'framer-motion';  

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    // Redirect to home if project not found
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ProjectNavbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" className="text-left mb-8">{project.title}</Heading>
          
          {/* Video Showcase */}
          <div className="mb-8 aspect-video w-full max-w-4xl mx-auto 
                          rounded-lg overflow-hidden shadow-lg 
                          border border-gray-700/50">
            <iframe
              width="100%"
              height="100%"
              src={project.videoUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                     gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                About this project
              </h2>
              <p className="text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Right Column: Tech Stack & Demo */}
            <div className="md:col-span-1">
              <div className="bg-surface p-6 rounded-lg 
                              border border-gray-700/50 sticky top-24">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent 
                                 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">See Demo</Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;