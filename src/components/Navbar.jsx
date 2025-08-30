"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Achievements",
    "Certifications",
    "Contact",
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md"
          : "bg-gradient-to-b from-black/90 via-black/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bebas text-3xl font-bold text-red-600 netflix-text-shadow tracking-wider"
          >
            HARSHITHA
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className="font-inter text-sm font-medium text-white hover:text-red-500 transition-colors relative group uppercase tracking-wider"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Nav Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 backdrop-blur-md border-t border-red-900/30"
          >
            <nav className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-4 px-4 font-inter text-sm font-medium text-white hover:text-red-500 hover:bg-red-500/10 rounded transition-colors uppercase tracking-wider"
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
