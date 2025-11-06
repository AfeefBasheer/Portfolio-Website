import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { projects } from "../data/projects.js";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // <-- Removed 'Home' import

const ProjectNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center"
      >
        <ul
          className="flex items-center gap-1 px-2 py-2
            bg-[#111]/80 backdrop-blur-sm border border-cyan-500/20 
            shadow-[0_0_10px_rgba(0,255,255,0.05)] rounded-2xl"
        >
          {/* 1. Home Link */}
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-full text-gray-400 hover:text-cyan-400 
                cursor-pointer transition-colors duration-200"
            >
              Home {/* <-- CHANGED: Was <Home size={18} /> */}
            </Link>
          </li>
          
          {/* 2. Project Links */}
          {projects.map((project) => (
            <li key={project.id}>
              <NavLink
                to={`/project/${project.id}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-gray-400 hover:text-cyan-400 
                   cursor-pointer transition-colors duration-200
                   ${isActive ? "bg-cyan-500/10 text-cyan-400" : ""}`
                }
              >
                {project.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* --- Mobile Hamburger Button --- */}
      <div className="fixed top-5 right-5 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md bg-[#111]/80 border border-cyan-500/20 text-cyan-400"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed inset-0 bg-[#0b0b0b]/95 backdrop-blur-sm 
                       flex flex-col items-center justify-center gap-8 
                       text-lg text-gray-300 z-40"
          >
            {/* 1. Mobile Home Link (No change was needed here) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1, color: "#5eead4" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="text-gray-400 cursor-pointer text-xl transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </motion.div>
            
            {/* 2. Mobile Project Links */}
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }} // Stagger delay
                whileHover={{ scale: 1.1, color: "#5eead4" }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={`/project/${project.id}`}
                  className={({ isActive }) =>
                    `text-gray-400 cursor-pointer text-xl transition-all
                     ${isActive ? "text-cyan-400" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {project.title}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectNavbar;