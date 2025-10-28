import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const MacTerminal = () => {
  return (
    <motion.div 
      className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg shadow-2xl 
                 border border-gray-700/50 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center p-3 bg-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="flex-1 text-center text-sm text-gray-400">bash</span>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm text-green-400">
        <span className="text-white">$ </span>
        <span className="text-cyan-400">const</span>
        <span className="text-white"> role = </span>
        <span className="text-yellow-400">"</span>
        <TypeAnimation
          sequence={[
            'Developer', 1500,
            'Designer', 1500,
            'AI Product Developer', 1500,
            'Problem Solver', 1500,
            'Tech Enthusiast', 1500,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-yellow-400"
        />
        <span className="text-yellow-400">"</span>
      </div>
    </motion.div>
  );
};

export default MacTerminal;