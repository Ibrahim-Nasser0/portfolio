import dynamic from "next/dynamic";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { RightSectionNav } from "@/components/RightSectionNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactMetricsSection } from "@/components/sections/ImpactMetricsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { PerformanceMatrixSection } from "@/components/sections/PerformanceMatrixSection";
import { ArchitecturePrinciplesSection } from "@/components/sections/ArchitecturePrinciplesSection";
import { ToolsSetupSection } from "@/components/sections/ToolsSetupSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/Footer";

const CustomCursor = dynamic(() =>
  import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor)
);

const DeveloperTerminalModal = dynamic(() =>
  import("@/components/ui/DeveloperTerminalModal").then(
    (mod) => mod.DeveloperTerminalModal
  )
);

const FlutterPlaygroundSection = dynamic(() =>
  import("@/components/sections/FlutterPlaygroundSection").then(
    (mod) => mod.FlutterPlaygroundSection
  )
);

const ArchitectureVisualizerSection = dynamic(() =>
  import("@/components/sections/ArchitectureVisualizerSection").then(
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
        <ImpactMetricsSection />
        <FeaturedProjectsSection />
        <FlutterPlaygroundSection />
        <ArchitectureVisualizerSection />
        <PerformanceMatrixSection />
        <ArchitecturePrinciplesSection />
        <ToolsSetupSection />
        <TestimonialsSection />
        <AboutSection />
      </main>

      <DeveloperTerminalModal />
      <Footer />
    </AuroraBackground>
  );
}

