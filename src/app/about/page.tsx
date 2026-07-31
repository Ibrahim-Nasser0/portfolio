import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About & Experience · Ibrahim Nasser",
  description: "Learn more about Ibrahim Nasser, Full-Stack Mobile Developer & Flutter Lead with 3+ years of experience.",
};

export default function AboutPage() {
  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <div className="pt-16 space-y-12">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </AuroraBackground>
  );
}
