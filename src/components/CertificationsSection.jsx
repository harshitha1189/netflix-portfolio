"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import CertificationCard from "./CertificationCard";
import portfolioData from "@/data/portfolioData";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="CERTIFICATIONS" subtitle="Professional Credentials" />

        <Carousel title="Industry Certifications">
          {portfolioData.certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CertificationsSection;
