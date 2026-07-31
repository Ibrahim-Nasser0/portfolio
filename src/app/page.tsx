import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { RightSectionNav } from "@/components/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DeveloperTerminalModal } from "@/components/ui/DeveloperTerminalModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { ArchitecturePrinciplesSection } from "@/components/sections/ArchitecturePrinciplesSection";
import { ToolsSetupSection } from "@/components/sections/ToolsSetupSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
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
      <CustomCursor />
      <Navbar />
      <RightSectionNav />
      <main className="space-y-6">
        <HeroSection />
        <StatsSection />
        <FeaturedProjectsSection />
        <ArchitecturePrinciplesSection />
        <ToolsSetupSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <DeveloperTerminalModal />
      <Footer />
    </AuroraBackground>
  );
}
