"use client";
import React from "react";

const GoogleFontsStyle = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

    .font-bebas {
      font-family: 'Bebas Neue', cursive;
      letter-spacing: 0.05em;
    }

    .font-inter {
      font-family: 'Inter', sans-serif;
    }

    .netflix-text-shadow {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }

    .netflix-vignette {
      background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%);
    }

    .netflix-red-glow {
      box-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
    }

    .netflix-red-glow:hover {
      box-shadow: 0 0 30px rgba(229, 9, 20, 0.5);
    }

    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .netflix-card-hover {
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .netflix-card-hover:hover {
      transform: scale(1.08) translateY(-5px);
    }
  `}</style>
);

export default GoogleFontsStyle;
