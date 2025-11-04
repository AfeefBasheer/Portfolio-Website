import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center 
                 px-8 md:px-20 py-24 bg-[#0d0d0d] text-gray-200 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0e0e0e]" />
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-[0.05]" />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-16">
        {/* Left: About Me (60%) */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex-[0.6] text-gray-300 space-y-6 z-10 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-400">
            I’m{" "}
            <span className="text-teal-400 font-semibold">Afeef Basheer</span>,
            a developer who enjoys working on the parts most people don’t see,
            that is backend systems, cloud setups, and the logic that keeps
            everything running smoothly. I like solving the small, quiet
            problems that make everything else work better.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            I like building things that make sense, stay reliable, and don’t
            fall apart when they grow. Lately, I’ve been learning how AI can fit
            into that world, and how to build systems that actually help.
          </p>

          <p className="text-lg leading-relaxed text-gray-400">
            Right now, I’m focused on{" "}
            <span className="text-teal-400 font-semibold">
              {" "}
              backend, cloud, and AI{" "}
            </span>{" "}
            — but I’m still exploring. I like figuring things out, and I’m open
            to where that curiosity takes me next.
          </p>
        </motion.div>

        {/* Right: Resume (40%) */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex-[0.4] flex justify-center items-center z-10"
        >
          <div className="flex flex-col items-center justify-center text-center w-full max-w-sm space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-3">
                My Resume
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-sm mx-auto">
                For a deeper look at my education, projects, and the path I’m
                currently shaping, here’s a closer view of my work and learning
                journey.
              </p>
            </div>

            <Card className="w-full bg-[#1a1a1a]/60 border border-white/10 backdrop-blur-md shadow-xl p-8">
              <div className="flex flex-col items-center justify-center space-y-6">
                <a href="/Afeef_Basheer_Resume.pdf" download>
                  <Button
                    className="px-8 py-3 font-semibold bg-teal-500 text-black rounded-full 
                                     hover:bg-teal-400 transition-all duration-300 flex items-center gap-2"
                  >
                    <Download
                      href="/Afeef_Basheer_Resume.pdf"
                      className="w-5 h-5"
                    />
                    Download Resume
                  </Button>
                </a>

                {/* Premium subtle details */}
                <div className="grid grid-cols-2 gap-6 text-sm text-gray-400 mt-2">
                  <div className="flex flex-col items-center">
                    <span className="text-teal-400 font-semibold">Stack</span>
                    <span className="opacity-70">Web Dev, Cloud, AI</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-teal-400 font-semibold">Focus</span>
                    <span className="opacity-70">AI Systems, Design</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-teal-400 font-semibold">Mindset</span>
                    <span className="opacity-70">Consistency, Simplicity</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-teal-400 font-semibold">Goal</span>
                    <span className="opacity-70">Build What Scales</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
