import dynamic from "next/dynamic";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { RightSectionNav } from "@/components/shared/RightSectionNav";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { ServicesCapabilitiesSection } from "@/features/home/sections/ServicesCapabilitiesSection";
import { ImpactMetricsSection } from "@/features/home/sections/ImpactMetricsSection";
import { FeaturedProjectsSection } from "@/features/home/sections/FeaturedProjectsSection";
import { PerformanceMatrixSection } from "@/features/home/sections/PerformanceMatrixSection";
import { ArchitecturePrinciplesSection } from "@/features/home/sections/ArchitecturePrinciplesSection";
import { ToolsSetupSection } from "@/features/stack/sections/ToolsSetupSection";
import { TestimonialsSection } from "@/features/recognition/sections/TestimonialsSection";
import { AboutSection } from "@/features/about/sections/AboutSection";
import { Footer } from "@/components/shared/Footer";

const CustomCursor = dynamic(() =>
  import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor)
);

const DeveloperTerminalModal = dynamic(() =>
  import("@/components/shared/DeveloperTerminalModal").then(
    (mod) => mod.DeveloperTerminalModal
  )
);

const ArchitectureVisualizerSection = dynamic(() =>
  import("@/features/home/sections/ArchitectureVisualizerSection").then(
    (mod) => mod.ArchitectureVisualizerSection
  )
);

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
        <ServicesCapabilitiesSection />
        <ImpactMetricsSection />
        <FeaturedProjectsSection />
        <ArchitectureVisualizerSection />
        <ArchitecturePrinciplesSection />
        <PerformanceMatrixSection />
        <TestimonialsSection />
        <ToolsSetupSection />
        <AboutSection />
      </main>

      <DeveloperTerminalModal />
      <Footer />
    </AuroraBackground>
  );
}
