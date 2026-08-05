import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { RightSectionNav } from "@/components/shared/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AboutSection } from "@/features/about/sections/AboutSection";
import { ExperienceSection } from "@/features/about/sections/ExperienceSection";
import { SkillsSection } from "@/features/about/sections/SkillsSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { Footer } from "@/components/shared/Footer";

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
