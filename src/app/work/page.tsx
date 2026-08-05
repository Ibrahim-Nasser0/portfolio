import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { RightSectionNav } from "@/components/shared/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ProjectsSection } from "@/features/work/sections/ProjectsSection";
import { ProcessWorkflowSection } from "@/features/home/sections/ProcessWorkflowSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { Footer } from "@/components/shared/Footer";

export const metadata = {
  title: "Selected Case Studies & Work · Ibrahim Nasser",
  description: "Enterprise mobile, desktop, and cross-platform applications built with Flutter, Clean Architecture, and SOLID principles.",
};

export default function WorkPage() {
  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <RightSectionNav />
      <div className="pt-16">
        <ProjectsSection />
        <ProcessWorkflowSection />
        <ContactSection />
      </div>
      <Footer />
    </AuroraBackground>
  );
}
