import GoogleFontsStyle from "@/components/GoogleFontsStyle";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GoogleFontsStyle />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
