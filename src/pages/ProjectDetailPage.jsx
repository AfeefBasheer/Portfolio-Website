import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectNavbar from "../components/ProjectNavbar.jsx";
import Footer from "../components/Footer.jsx";
// --- UPDATED: Import the new combined frame ---
import ProjectDetailFrame from "../frames/ProjectDetailFrame.jsx"; // Renamed from ProjectIntroFrame

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d] text-gray-200">
      <ProjectNavbar />

      {/* --- UPDATED THIS LINE --- */}
      {/* Removed max-w-4xl, mx-auto, px-4, and py-12/16 */}
      <main className="flex-grow w-full">
        {/* Render the single, combined frame */}
        <ProjectDetailFrame project={project} />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;