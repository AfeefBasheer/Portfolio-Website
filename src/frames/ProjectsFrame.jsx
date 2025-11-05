import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

const ProjectsFrame = () => {
  return (
    <section className="relative min-h-screen py-20 px-8 md:px-24 bg-[#0d0d0d] text-gray-200">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 text-center">
        Projects
      </h1>
      <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
        A few things I’m building while learning and experimenting with AI,
        backend, and cloud.
      </p>

      {/* Grid*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-14 gap-y-14 w-full max-w-6xl mx-auto justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsFrame;
