"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import portfolioData from "@/data/portfolioData";

const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle title="GET IN TOUCH" subtitle="Let's Build Something Amazing Together" />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-gray-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.  
          Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ y: -8 }}
            className="netflix-card-hover bg-gray-900/80 backdrop-blur-sm rounded-lg p-10 border border-gray-800 hover:border-red-600/50 netflix-red-glow text-center group"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
              <Mail className="text-red-500" size={32} />
            </div>
            <h3 className="font-bebas text-2xl text-white mb-3 tracking-wide uppercase">Email</h3>
            <p className="font-inter text-gray-400 group-hover:text-red-400 transition-colors text-lg">
              {contact.email}
            </p>
          </motion.a>

          <motion.a
            href={`tel:${contact.phone}`}
            whileHover={{ y: -8 }}
            className="netflix-card-hover bg-gray-900/80 backdrop-blur-sm rounded-lg p-10 border border-gray-800 hover:border-red-600/50 netflix-red-glow text-center group"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
              <Phone className="text-red-500" size={32} />
            </div>
            <h3 className="font-bebas text-2xl text-white mb-3 tracking-wide uppercase">Phone</h3>
            <p className="font-inter text-gray-400 group-hover:text-red-400 transition-colors text-lg">
              {contact.phone}
            </p>
          </motion.a>
        </div>

        <motion.div className="flex justify-center gap-8">
          <motion.a
            whileHover={{ scale: 1.2, y: -4 }}
            href={contact.github}
            className="p-6 bg-gray-900/80 rounded-full border border-gray-800 hover:border-red-600/50 text-white hover:text-red-400 transition-colors shadow-xl netflix-red-glow"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -4 }}
            href={contact.linkedin}
            className="p-6 bg-gray-900/80 rounded-full border border-gray-800 hover:border-red-600/50 text-white hover:text-red-400 transition-colors shadow-xl netflix-red-glow"
          >
            <Linkedin size={28} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
