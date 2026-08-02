import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { RightSectionNav } from "@/components/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Accredited Certifications & Recommendations · Ibrahim Nasser",
  description: "Verified certifications and LinkedIn peer recommendations in Flutter, Clean Architecture, Database Systems, and API Design.",
};

export default function RecognitionPage() {
  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <RightSectionNav />
      <div className="pt-16">
        <CertificatesSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
    </AuroraBackground>
  );
}
