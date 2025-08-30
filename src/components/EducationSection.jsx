"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import portfolioData from "@/data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="EDUCATION" subtitle="Academic Foundation" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="netflix-card-hover bg-gray-900/60 backdrop-blur-sm rounded-lg p-8 border border-gray-800 hover:border-red-600/50 netflix-red-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-red-600/20 rounded-lg">
                  <GraduationCap className="text-red-500" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bebas text-2xl text-white mb-2 tracking-wide uppercase">
                    {edu.degree}
                  </h3>
                  <p className="font-inter text-red-500 font-semibold mb-3 text-lg">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center font-inter text-sm text-gray-400 mb-2">
                    <span>{edu.duration}</span>
                    <span className="font-semibold text-green-400">
                      {edu.cgpa || edu.percentage}
                    </span>
                  </div>
                  <p className="font-inter text-gray-500">{edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
