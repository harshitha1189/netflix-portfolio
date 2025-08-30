"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import SkillCard from "./SkillCard";
import portfolioData from "@/data/portfolioData";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="SKILLS & TECHNOLOGIES" subtitle="Technical Arsenal" />

        <Carousel title="Programming Languages & Frameworks">
          {portfolioData.skills.slice(0, 8).map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </Carousel>

        <div className="mt-16">
          <Carousel title="Tools & Databases">
            {portfolioData.skills.slice(8).map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
