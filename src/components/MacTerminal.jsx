import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const MacTerminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-surface/40 border border-teal-900 shadow-md px-8 py-6 text-center backdrop-blur-lg"
    >
      <TypeAnimation
        sequence={[
          "I build scalable systems.",
          2000,
          "I design with logic and intent.",
          2000,
          "I craft intelligent products.",
          2000,
          "I solve problems that matter.",
          2000,
        ]}
        wrapper="h2"
        cursor={true}
        repeat={Infinity}
        className="text-lg md:text-xl font-semibold text-primary"
      />
    </motion.div>
  );
};

export default MacTerminal;
