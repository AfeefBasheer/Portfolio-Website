import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { Home } from 'lucide-react';

const ProjectNavbar = () => {
  const { id } = useParams();
  
  return (
    <nav className="w-full py-4 bg-surface/80 backdrop-blur-md 
                    border-b border-gray-700/50 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-secondary hover:text-primary transition-colors">
          <Home size={24} />
        </Link>
        <div className="flex gap-4">
          {projects.map((project) => (
            <NavLink
              key={project.id}
              to={`/project/${project.id}`}
              className={({ isActive }) => 
                `text-secondary hover:text-primary transition-colors px-3 py-1 rounded-md
                 ${isActive ? 'text-primary bg-accent/30' : ''}`
              }
            >
              {project.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;