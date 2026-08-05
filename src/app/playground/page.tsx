"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DeveloperTerminalModal } from "@/components/shared/DeveloperTerminalModal";
import { FlutterPlaygroundSection } from "@/features/playground/sections/FlutterPlaygroundSection";
import { Footer } from "@/components/shared/Footer";
import { useTranslation } from "@/context/LanguageContext";

export default function PlaygroundPage() {
  const { t } = useTranslation();

  const labHighlights = [
    {
      title: "CustomPainter & Skia Shaders",
      desc: "Mathematical curve paths and Lissajous wave rendering directly on the canvas context.",
      tech: "CustomPainter / Impeller",
    },
    {
      title: "Spring Physics & Gesture Mechanics",
      desc: "Mass, stiffness, and dampening simulation for native mobile drag-to-dismiss interactions.",
      tech: "PhysicsSimulation",
    },
    {
      title: "Unidirectional BLoC Event Stream",
      desc: "Immutable state trees with reactive UI rebuilding and zero business logic inside widgets.",
      tech: "flutter_bloc 8.x",
    },
    {
      title: "Offline Sync (Hive DB + Dio)",
      desc: "Optimistic local mutation queue with automatic background sync upon internet reconnection.",
      tech: "Hive / Dio Client",
    },
  ];

  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <main className="pt-20 space-y-16">
        <FlutterPlaygroundSection />

        {/* Extra Interactive Lab Modules Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("playground.labTitle")}
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base font-light">
              {t("playground.labSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labHighlights.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#15171E] border border-white/10 space-y-3 shadow-xl hover:border-[#E58A2B]/40 transition-colors">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-[10px] font-bold">
                  {item.tech}
                </span>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <DeveloperTerminalModal />
      <Footer />
    </AuroraBackground>
  );
}
