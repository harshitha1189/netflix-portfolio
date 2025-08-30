"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import portfolioData from "@/data/portfolioData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="EXPERIENCE" subtitle="Professional Journey" />

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="netflix-card-hover bg-gray-900/60 backdrop-blur-sm rounded-lg p-8 border border-gray-800 hover:border-red-600/50 netflix-red-glow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="font-bebas text-3xl text-white mb-2 tracking-wide uppercase">
                    {exp.role}
                  </h3>
                  <p className="font-inter text-red-500 font-semibold text-xl">
                    {exp.company}
                  </p>
                  <span className="inline-block px-4 py-1 bg-green-600/20 text-green-400 rounded-full font-inter text-sm mt-3 uppercase tracking-wide">
                    {exp.type}
                  </span>
                </div>
                <div className="text-right mt-4 lg:mt-0">
                  <p className="font-inter text-gray-400 font-semibold text-lg">
                    {exp.duration}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
