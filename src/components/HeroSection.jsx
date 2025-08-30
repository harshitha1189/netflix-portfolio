"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import portfolioData from "@/data/portfolioData";


const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
      <div className="absolute inset-0 netflix-vignette"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #dc2626 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, #dc2626 0%, transparent 50%)`,
          backgroundSize: '600px 600px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl netflix-red-glow border-4 border-red-600">
  <img
    src="/images/Profile.jpg"  
    alt="Profile Picture"
    className="w-full h-full object-cover"
  />
</div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center"
        >
          <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 netflix-text-shadow tracking-wider">
            <span className="text-white">HI, I'M </span>
            <span className="text-red-600 block sm:inline">{hero.name.toUpperCase()}</span>
            <span className="ml-4 text-4xl sm:text-6xl">👩🏻‍💻</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-inter text-lg sm:text-xl text-gray-300 mb-6 font-medium text-center tracking-wide"
        >
          {hero.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-inter text-base sm:text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed text-center"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={hero.links.github}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-inter text-white font-semibold text-lg shadow-xl netflix-red-glow transition-all duration-300 uppercase tracking-wide"
          >
            <Github size={24} />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={hero.links.linkedin}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-inter text-white font-semibold text-lg shadow-xl netflix-red-glow transition-all duration-300 uppercase tracking-wide"
          >
            <Linkedin size={24} />
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={hero.links.resume}
            className="flex items-center gap-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-md font-inter font-semibold text-lg shadow-xl transition-all duration-300 uppercase tracking-wide"
          >
            <Download size={24} />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
