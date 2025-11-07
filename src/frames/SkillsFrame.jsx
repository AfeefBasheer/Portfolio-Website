import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card.jsx";
import Heading from "../ui/Heading.jsx";
import Tooltip from "../ui/Tooltip.jsx";

const skillsData = [
  {
    category: "Backend & Systems",
    skills: [
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "Jest",
 //     "Python",
      "MySQL",
      "C",
      "Java",
    ],
  },
  {
    category: "Frontend & UI Layer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
  {
    category: "AI & Cloud",
    skills: [
      "LangChain",
      "ChromaDB",
      "HuggingFace",
      "OpenAI API",
      "Gemini",
      "Docker",
 //     "Azure",
      "GitHub",
      "Vercel",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Postman", "Figma", "Notion", "VSCode", "Leetcode"],
  },
];

const customIcons = {
  Mongoose: "/skills/mongoose.svg",
  Express: "/skills/express.svg",
  LangChain: "/skills/langchain.svg",
  ChromaDB: "/skills/chromadb.svg",
  HuggingFace: "/skills/huggingface.svg",
  "OpenAI API": "/skills/openai.svg",
  Docker: "/skills/docker.svg",
  Vercel: "/skills/vercel.svg",
  Azure: "/skills/azure.svg",
  Jest: "/skills/jest.svg",
};

const SkillsFrame = () => {
  return (
    <section
      id="skills"
      // --- THIS IS THE FIX ---
      // Changed to 120vh
      className="relative min-h-[120vh] flex flex-col justify-center items-center px-8 md:px-24 bg-[#0d0d0d] text-gray-200 overflow-hidden"
    >
      {/* Background Layers */}{" "}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0e0e0e]" />{" "}
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-[0.05]" />
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <Heading>My Tech Stack</Heading>
        <p className="text-gray-400 text-base md:text-lg mt-3 max-w-2xl mx-auto text-center">
          These are the tools and technologies I work with daily.
        </p>
      </motion.div>
      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 w-full max-w-6xl justify-items-center cursor-pointer">
        {skillsData.map((block, index) => (
          <motion.div
            key={block.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="w-full min-w-[250px] max-w-[500px]"
          >
            <Card className="relative group h-full p-8 text-center bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-[#5eead4]/40 hover:shadow-[0_0_25px_-8px_rgba(94,234,212,0.3)]">
              <h3 className="text-2xl font-semibold text-[#5eead4] mb-8 tracking-wide">
                {block.category}
              </h3>

              <ul className="grid grid-cols-3 gap-y-8 gap-x-6 justify-items-center text-gray-400">
                {block.skills.map((skill) => {
                  const iconSrc =
                    customIcons[skill] || `/skills/${skill.toLowerCase()}.svg`;
                  return (
                    <li
                      key={skill}
                      className="relative flex flex-col items-center"
                    >
                      <img
                        src={iconSrc}
                        alt={skill}
                        className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100 transition-all"
                      />
                      <Tooltip text={skill} position="bottom" />{" "}
                      {/* tooltip below */}
                    </li>
                  );
                })}
              </ul>

              {/* Subtle Glow Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-2/3 h-[2px] bg-[#5eead4] transition-all duration-500" />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsFrame;
