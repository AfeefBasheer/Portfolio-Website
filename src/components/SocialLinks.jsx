import React, { useState } from "react";
import { Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/afeef-basheer-a74a06226",
    },
    { icon: Github, href: "https://github.com/AfeefBasheer" },
    { icon: Twitter, href: "https://www.x.com/in/AfeefMB" },
    { icon: Instagram, href: "https://www.instagram.com/AfeefMB" },
    {
      icon: Mail,
      onClick: () => {
        navigator.clipboard.writeText("afeefmb.4221@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // disappears after 2s
      },
    },
  ];

  const iconVariants = {
    hover: { scale: 1.15, y: -3 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-row items-center justify-center md:justify-start 
                   w-full gap-6 p-4"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href || "#"}
            target={link.href ? "_blank" : undefined}
            rel={link.href ? "noopener noreferrer" : undefined}
            onClick={link.onClick}
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative flex items-center justify-center 
                       w-12 h-12 md:w-14 md:h-14 rounded-xl border border-white/20 
                       bg-surface/40 backdrop-blur-sm text-secondary 
                       shadow-md transition-all duration-300 
                       hover:border-primary/50 hover:bg-surface/70 cursor-pointer"
          >
            <link.icon
              size={24}
              className="transition-colors duration-300 group-hover:text-primary"
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom--5 left-1/2 transform -translate-x-1/2 
                       mb-4 px-4 py-2 rounded-lg bg-primary/10 text-white 
                       text-sm shadow-lg backdrop-blur-sm"
          >
            Email copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialLinks;
