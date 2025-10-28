import React from 'react';
import Heading from '../ui/Heading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js'; // Import dummy data

const ProjectsFrame = () => {
  return (
    <section id="projects" className="min-h-screen py-16 flex items-center">
      <div className="container mx-auto px-4">
        <Heading>Things I've Built</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFrame;