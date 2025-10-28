import React from 'react';
import Heading from '../ui/Heading.jsx';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import { Github, Code, Award } from 'lucide-react';

const stats = [
  { icon: <Github />, title: "GitHub Repos", value: "50+" },
  { icon: <Code />, title: "LeetCode Solved", value: "300+" },
  { icon: <Award />, title: "Certifications", value: "5+" },
];

const StatsResumeFrame = () => {
  return (
    <section id="stats" className="min-h-screen py-16 flex items-center">
      <div className="container mx-auto px-4">
        <Heading>Stats & Resume</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Stats Section */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              My Contributions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <Card key={stat.title} className="text-center">
                  <div className="flex justify-center text-accent mb-3">
                    {React.cloneElement(stat.icon, { size: 36 })}
                  </div>
                  <h4 className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-secondary">{stat.title}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Resume Section */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              My Resume
            </h3>
            <Card className="w-full max-w-md text-center">
              <p className="text-secondary mb-6">
                Check out my full resume for a more detailed look at my
                experience, projects, and skills.
              </p>
              <a href="/path-to-your-resume.pdf" download>
                <Button>Download Resume</Button>
              </a>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StatsResumeFrame;