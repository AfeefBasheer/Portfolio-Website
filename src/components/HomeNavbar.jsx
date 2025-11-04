import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Stats",
  "Education",
  "Contact",
];

const HomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  // Fix scrollspy lag specifically for the About section
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();

      // If About is within ~2px of top but hasn't activated yet, force refresh
      if (rect.top >= -2 && rect.top <= 2) {
        window.dispatchEvent(new Event("scroll"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center"
      >
        <ul
          className="flex items-center gap-1 px-5 py-3
            bg-[#111]/80 backdrop-blur-sm border border-cyan-500/20 
            shadow-[0_0_10px_rgba(0,255,255,0.05)] rounded-2xl"
        >
          {navItems.map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-4 py-2 rounded-full text-gray-400 hover:text-cyan-400 
                  cursor-pointer transition-colors duration-200"
                activeClass="bg-cyan-500/10 text-cyan-400"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <div className="fixed top-5 right-5 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md bg-[#111]/80 border border-cyan-500/20 text-cyan-400"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
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
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: "#5eead4" }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-5}
                  duration={500}
                  className="text-gray-400 cursor-pointer text-xl transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeNavbar;
