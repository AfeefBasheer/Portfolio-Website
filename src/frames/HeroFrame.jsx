import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Button from "../ui/Button.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import MacTerminal from "../components/MacTerminal.jsx";
import Profile from "../components/Profile.jsx";
import { ChevronDown } from "lucide-react";

const HeroFrame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const gridSize = 40;
    let t = 0;
    let animationFrame;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(94, 234, 212, 0.08)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const wave =
            Math.sin((x + t) * 0.01) * 6 + Math.cos((y + t) * 0.01) * 6;
          ctx.beginPath();
          ctx.arc(x, y + wave, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(94, 234, 212, 0.25)";
          ctx.fill();
        }
      }

      t += 0.8;
      animationFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-16 pt-12 md:pt-20 bg-[#0d0d0d] text-gray-200"
    >
      {/* AB Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => window.location.reload()}
        className="absolute top-8 left-8 z-40 bg-[#1a1a1a]/80 backdrop-blur-md border border-[#5eead4]/10 
          px-5 py-2 rounded-full shadow-[0_0_10px_-2px_rgba(94,234,212,0.15)]
          cursor-pointer select-none hover:border-[#5eead4]/30 transition-all duration-300"
      >
        <h2 className="text-lg md:text-xl font-semibold text-gray-300 hover:text-[#5eead4] transition-colors duration-300">
          A<span className="text-[#5eead4]">B</span>
        </h2>
      </motion.div>

      {/* Background layers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0e0e0e]" />
      <div className="absolute inset-0 -z-30 bg-[url('/noise.svg')] opacity-[0.05]" />

      {/* Hero Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-20 mt-10">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left z-10"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 mb-6 leading-tight">
            Hi, I’m <span className="text-[#5eead4]">Afeef</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 font-light tracking-tight">
            Exploring how scalable, intelligent systems are built.
          </p>

          <div className="flex flex-col md:flex-row md:items-center items-center gap-8">
            <div className="max-w-sm w-full">
              <MacTerminal />
            </div>
            <div className="md:mt-4">
              <ScrollLink to="projects" smooth duration={500} offset={-70}>
                <Button
                  aria-label="See my work projects"
                  className="whitespace-nowrap px-8 py-3 bg-[#5eead4] text-black font-semibold rounded-full hover:bg-[#4bd8c3] transition-all"
                >
                  See My Projects
                </Button>
              </ScrollLink>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center md:items-start">
            <SocialLinks />
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center justify-center z-10 space-y-4"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <Profile />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base md:text-lg font-medium text-gray-400 tracking-wide text-center"
          >
            Currently Based in{" "}
            <span className="text-[#5eead4] font-semibold">INDIA</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#5eead4]/80 flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-sm md:text-base font-medium text-gray-400 tracking-wide"
        >
          Exploring{" "}
          <motion.span
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#5eead4] font-semibold"
          >
            What’s Next
          </motion.span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroFrame;
