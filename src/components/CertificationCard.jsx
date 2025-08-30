"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="min-w-[320px] max-w-[320px] bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800 hover:border-red-600/50 netflix-card-hover netflix-red-glow cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="p-4 bg-green-600/20 rounded-lg">
          <Award className="text-green-400" size={32} />
        </div>
        <div className="flex-1">
          <h4 className="font-bebas text-xl text-white mb-3 line-clamp-2 tracking-wide uppercase">
            {cert.name}
          </h4>
          <p className="font-inter text-green-400 font-semibold mb-3 text-lg">
            {cert.platform}
          </p>
          <div className="flex justify-between items-center font-inter text-sm">
            {/* <span className="text-gray-400">ID: {cert.credentialId}</span> */}
            {/* <span className="text-green-300 font-semibold text-lg">{cert.year}</span> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
