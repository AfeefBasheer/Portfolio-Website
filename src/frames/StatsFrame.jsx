import React from "react";
import { motion } from "framer-motion";
import CertificationCard from "../components/CertificationCard.jsx";
import StatsCard from "../components/StatsCard.jsx";
import { certifications } from "../data/certifications.js";

const StatsFrame = () => {
  return (
    <section
      id="stats"
      className="relative min-h-screen py-24 px-6 md:px-16 bg-[#0d0d0d] text-gray-200 overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0e0e0e]" />
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-[0.05]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3 text-center">
          Certifications & Stats
        </h1>
        <p className="text-base md:text-lg text-gray-400 text-center max-w-xl mx-auto">
          Showcasing my certifications, coding achievements, and contributions.
        </p>
      </motion.div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 max-w-6xl mx-auto w-full lg:justify-between">
        {/* Left Section: Certifications Grid */}
        {/* UPDATED: Changed from lg:w-9/12 (75%) to lg:w-8/12 (66.67%) */}
        <div className="w-full lg:w-7/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <CertificationCard certification={cert} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section: Stats Card */}
        {/* UPDATED: Changed from lg:w-3/12 (25%) to lg:w-4/12 (33.33%) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-4/12"
        >
          <StatsCard />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsFrame;
