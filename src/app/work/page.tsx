import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Selected Case Studies & Work · Ibrahim Nasser",
  description: "Enterprise mobile, desktop, and cross-platform applications built with Flutter, Clean Architecture, and SOLID principles.",
};

export default function WorkPage() {
  return (
    <AuroraBackground>
      <Navbar />
      <div className="pt-16">
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </AuroraBackground>
  );
}
