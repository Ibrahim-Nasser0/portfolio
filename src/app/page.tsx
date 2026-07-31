import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { RightSectionNav } from "@/components/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DeveloperTerminalModal } from "@/components/ui/DeveloperTerminalModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ImpactMetricsSection } from "@/components/sections/ImpactMetricsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { FlutterPlaygroundSection } from "@/components/sections/FlutterPlaygroundSection";
import { ArchitectureVisualizerSection } from "@/components/sections/ArchitectureVisualizerSection";
import { PerformanceMatrixSection } from "@/components/sections/PerformanceMatrixSection";
import { ArchitecturePrinciplesSection } from "@/components/sections/ArchitecturePrinciplesSection";
import { ToolsSetupSection } from "@/components/sections/ToolsSetupSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Ibrahim Nasser · Software Engineer & Full-Stack Mobile Developer",
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
        <ImpactMetricsSection />
        <FeaturedProjectsSection />
        <FlutterPlaygroundSection />
        <ArchitectureVisualizerSection />
        <PerformanceMatrixSection />
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
