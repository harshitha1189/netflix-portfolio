"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="relative">
        <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 netflix-text-shadow tracking-wider uppercase">
          {title}
        </h2>
        <div className="w-24 h-1 bg-red-600 mb-4"></div>
      </div>
      {subtitle && (
        <p className="font-inter text-gray-400 text-lg font-light tracking-wide">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
