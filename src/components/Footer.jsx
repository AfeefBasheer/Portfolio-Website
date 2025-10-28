import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16 border-t border-gray-700/50">
      <div className="container mx-auto text-center text-secondary">
        <p>&copy; {new Date().getFullYear()} Afeef MB. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;