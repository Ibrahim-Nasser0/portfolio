import dynamic from "next/dynamic";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { RightSectionNav } from "@/components/shared/RightSectionNav";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { Footer } from "@/components/shared/Footer";

// Dynamic Client-Side Component Lazy Imports (Below-the-fold Code Splitting)
const CustomCursor = dynamic(() =>
  import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor)
);

const DeveloperTerminalModal = dynamic(() =>
  import("@/components/shared/DeveloperTerminalModal").then(
    (mod) => mod.DeveloperTerminalModal
  )
);

const ServicesCapabilitiesSection = dynamic(() =>
  import("@/features/home/sections/ServicesCapabilitiesSection").then(
    (mod) => mod.ServicesCapabilitiesSection
  )
);

const ImpactMetricsSection = dynamic(() =>
  import("@/features/home/sections/ImpactMetricsSection").then(
    (mod) => mod.ImpactMetricsSection
  )
);

const FeaturedProjectsSection = dynamic(() =>
  import("@/features/home/sections/FeaturedProjectsSection").then(
    (mod) => mod.FeaturedProjectsSection
  )
);

const ArchitectureVisualizerSection = dynamic(() =>
  import("@/features/home/sections/ArchitectureVisualizerSection").then(
    (mod) => mod.ArchitectureVisualizerSection
  )
);

const ArchitecturePrinciplesSection = dynamic(() =>
  import("@/features/home/sections/ArchitecturePrinciplesSection").then(
    (mod) => mod.ArchitecturePrinciplesSection
  )
);

const PerformanceMatrixSection = dynamic(() =>
  import("@/features/home/sections/PerformanceMatrixSection").then(
    (mod) => mod.PerformanceMatrixSection
  )
);

const TestimonialsSection = dynamic(() =>
  import("@/features/recognition/sections/TestimonialsSection").then(
    (mod) => mod.TestimonialsSection
  )
);

const ToolsSetupSection = dynamic(() =>
  import("@/features/stack/sections/ToolsSetupSection").then(
    (mod) => mod.ToolsSetupSection
  )
);

const AboutSection = dynamic(() =>
  import("@/features/about/sections/AboutSection").then(
    (mod) => mod.AboutSection
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
