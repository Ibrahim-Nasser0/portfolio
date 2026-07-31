import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { RightSectionNav } from "@/components/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About & Engineering Background · Ibrahim Nasser",
  description: "Software Engineer & Flutter Developer specializing in Clean Architecture, BLoC state management, and SOLID principles.",
};

export default function AboutPage() {
  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <RightSectionNav />
      <div className="pt-16">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </AuroraBackground>
  );
}
