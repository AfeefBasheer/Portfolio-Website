import React from "react";
import HomeNavbar from "../components/HomeNavbar.jsx";
import HeroFrame from "../frames/HeroFrame.jsx";
import AboutFrame from "../frames/AboutFrame.jsx";
import SkillsFrame from "../frames/SkillsFrame.jsx";
import ProjectsFrame from "../frames/ProjectsFrame.jsx";
import StatsResumeFrame from "../frames/StatsResumeFrame.jsx";
import EducationFrame from "../frames/EducationFrame.jsx";
import ContactFrame from "../frames/ContactFrame.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <main className="flex-grow">
        <HeroFrame />
        <AboutFrame />
        <SkillsFrame />
        <ProjectsFrame />
        <StatsResumeFrame />
        <EducationFrame />
        <ContactFrame />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
