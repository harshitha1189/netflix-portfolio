"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import AchievementCard from "./AchievementCard";
import portfolioData from "@/data/portfolioData";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="ACHIEVEMENTS" subtitle="Milestones & Recognition" />

        <Carousel title="Key Achievements">
          {portfolioData.achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default AchievementsSection;
