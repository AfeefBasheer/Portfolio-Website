import React from 'react';
import Heading from '../ui/Heading.jsx';
import Card from '../ui/Card.jsx';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "M.S. in Artificial Intelligence",
    school: "Example University",
    years: "2023 - 2025",
  },
  {
    degree: "B.S. in Computer Science",
    school: "Another University",
    years: "2019 - 2023",
  },
  {
    degree: "High School Diploma",
    school: "My High School",
    years: "2017 - 2019",
  },
];

const EducationFrame = () => {
  return (
    <section id="education" className="min-h-screen py-16 flex items-center">
      <div className="container mx-auto px-4">
        <Heading>My Education</Heading>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 
                      bg-gray-700/50 -translate-x-1/2" />
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center w-full"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left Side */}
              <div className={`w-5/12 ${index % 2 === 0 ? '' : 'order-3'}`}>
                {index % 2 === 0 && (
                  <Card className="text-right">
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-accent">{edu.school}</p>
                    <p className="text-secondary text-sm">{edu.years}</p>
                  </Card>
                )}
              </div>
              
              {/* Center Dot */}
              <div className="z-10 order-2">
                <div className="w-4 h-4 rounded-full bg-accent shadow-glow-accent" />
              </div>

              {/* Right Side */}
              <div className={`w-5/12 ${index % 2 === 0 ? '' : 'order-1'}`}>
                {index % 2 !== 0 && (
                  <Card className="text-left">
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-accent">{edu.school}</p>
                    <p className="text-secondary text-sm">{edu.years}</p>
                  </Card>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationFrame;