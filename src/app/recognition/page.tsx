import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Credentials & Certifications · Ibrahim Nasser",
  description: "Verified certificates and credentials in Flutter, Clean Architecture, Database Design, and UI/UX.",
};

export default function RecognitionPage() {
  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <div className="pt-16">
        <CertificatesSection />
        <ContactSection />
      </div>
      <Footer />
    </AuroraBackground>
  );
}
