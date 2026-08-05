import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { RightSectionNav } from "@/components/shared/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CertificatesSection } from "@/features/recognition/sections/CertificatesSection";
import { TestimonialsSection } from "@/features/recognition/sections/TestimonialsSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { Footer } from "@/components/shared/Footer";

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
