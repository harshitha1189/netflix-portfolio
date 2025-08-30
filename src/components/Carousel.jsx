"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ children, title }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const { current } = scrollRef;
    if (current) {
      current.addEventListener("scroll", checkScrollButtons);
      return () => current.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  return (
    <div className="relative group">
      <h3 className="font-bebas text-2xl text-white mb-8 tracking-wider uppercase netflix-text-shadow">
        {title}
      </h3>

      {/* Left Button */}
      {canScrollLeft && (
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(229, 9, 20, 0.9)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 hover:bg-red-600 text-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </motion.button>
      )}

      {/* Right Button */}
      {canScrollRight && (
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(229, 9, 20, 0.9)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 hover:bg-red-600 text-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </motion.button>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
