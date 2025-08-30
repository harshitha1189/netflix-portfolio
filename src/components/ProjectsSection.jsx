"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";
import portfolioData from "@/data/portfolioData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="PROJECTS" subtitle="Featured Work" />

        <Carousel title="Featured Projects">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
