"use client";
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="min-w-[140px] max-w-[140px] bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-red-600/50 netflix-card-hover netflix-red-glow text-center cursor-pointer"
    >
      {/* 👇 Render skillicons.dev image instead of emoji */}
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-12 h-12 mx-auto mb-4"
      />

      <h4 className="font-bebas text-lg text-white mb-3 tracking-wide uppercase">
        {skill.name}
      </h4>

      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 }}
          className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
        />
      </div>

      <span className="font-inter text-xs text-gray-400 font-medium">
        {skill.level}%
      </span>
    </motion.div>
  );
};

export default SkillCard;
