import React from 'react';
import Card from '../ui/Card.jsx';
import Heading from '../ui/Heading.jsx';
import { Code, Database, Server, AppWindow } from 'lucide-react';

const skillsData = [
  {
    icon: <Code className="text-accent" size={32} />,
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "Tailwind CSS", "Framer Motion"]
  },
  {
    icon: <Server className="text-accent" size={32} />,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Flask", "REST APIs"]
  },
  {
    icon: <Database className="text-accent" size={32} />,
    title: "Databases & AI",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "TensorFlow", "OpenAI API"]
  },
  {
    icon: <AppWindow className="text-accent" size={32} />,
    title: "Other Tools",
    skills: ["Git & GitHub", "Docker", "Vercel", "Postman", "Figma"]
  }
];

const SkillsFrame = () => {
  return (
    <section id="skills" className="min-h-screen py-16 flex items-center">
      <div className="container mx-auto px-4">
        <Heading>My Tech Stack</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category) => (
            <Card key={category.title} className="text-center group
               hover:border-accent transition-all duration-300
               hover:shadow-glow-accent">
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-secondary">{skill}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsFrame;