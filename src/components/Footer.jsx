"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-sm border-t border-red-900/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">

        {/* Personal Motto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-2xl sm:text-3xl text-red-500 mb-6 italic netflix-text-shadow"
        >
          "Code is where logic meets creativity."
        </motion.p>

       

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} Sri Harshitha. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
