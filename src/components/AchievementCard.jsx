"use client";
import React from "react";
import { motion } from "framer-motion";

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`min-w-[300px] max-w-[300px] bg-gradient-to-br ${achievement.color} rounded-lg p-8 border border-gray-800 hover:border-red-600/50 netflix-card-hover netflix-red-glow cursor-pointer text-center`}
    >
      <div className="text-5xl mb-6">{achievement.icon}</div>
      <h4 className="font-bebas text-2xl text-white mb-4 tracking-wide uppercase netflix-text-shadow">
        {achievement.title}
      </h4>
      <div className="font-bebas text-4xl text-white mb-4 netflix-text-shadow tracking-wide">
        {achievement.metric}
      </div>
      <p className="font-inter text-gray-200 text-sm leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  );
};

export default AchievementCard;
