import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { RightSectionNav } from "@/components/RightSectionNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Ibrahim Nasser · Full-Stack Mobile Developer & Flutter Lead",
  description:
    "Detail-oriented Flutter Developer & Software Engineer experienced in architecting modular mobile, web, and desktop solutions using BLoC, Clean Architecture, and SOLID principles.",
};

export default function HomePage() {
  return (
    <AuroraBackground>
      <Navbar />
      <RightSectionNav />
      <main className="space-y-6">
        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </AuroraBackground>
  );
}
