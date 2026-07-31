import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { RightSectionNav } from "@/components/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Accredited Certifications & Badges · Ibrahim Nasser",
  description: "Verified certifications in Flutter, Clean Architecture, Database Systems, API Design, and UI/UX.",
};

export default function RecognitionPage() {
  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <RightSectionNav />
      <div className="pt-16">
        <CertificatesSection />
        <ContactSection />
      </div>
      <Footer />
    </AuroraBackground>
  );
}
