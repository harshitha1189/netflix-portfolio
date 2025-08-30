"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="min-w-[350px] max-w-[350px] bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-red-600/50 netflix-card-hover netflix-red-glow cursor-pointer group"
    >
      {/* Top Section */}
      <div className="h-48 bg-gradient-to-br from-red-900/40 to-black/60 flex items-center justify-center relative overflow-hidden">
        <Code size={56} className="text-red-500 group-hover:scale-110 transition-transform" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-red-600 text-white font-inter text-xs rounded-full uppercase tracking-wide">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h4 className="font-bebas text-2xl text-white mb-3 group-hover:text-red-400 transition-colors tracking-wide uppercase">
          {project.title}
        </h4>

        {/* Short Overview */}
        <p className="font-inter text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded font-inter text-xs uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded font-inter text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide"
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-red-400 hover:text-red-300 transition-colors text-sm uppercase tracking-wide"
            >
              <ExternalLink size={16} />
              Live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
