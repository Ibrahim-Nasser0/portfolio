"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DeveloperTerminalModal } from "@/components/shared/DeveloperTerminalModal";
import { ToolsSetupSection } from "@/features/stack/sections/ToolsSetupSection";
import { Footer } from "@/components/shared/Footer";
import { Cpu, Wrench } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export default function StackPage() {
  const { t } = useTranslation();

  const stackCategories = [
    {
      category: t("toolsSetup.mobileTrack"),
      items: [
        { name: "Flutter SDK", desc: "Channel Stable (v3.29.x) with Impeller engine enabled", tags: ["Mobile", "Desktop", "Web"] },
        { name: "Dart", desc: "Sound null safety, extension methods, records & pattern matching", tags: ["Language"] },
        { name: "VS Code & Android Studio", desc: "Customized keybindings, Flutter & Dart Extensions, BLoC plugin", tags: ["IDE"] },
        { name: "C# / .NET 8", desc: "ASP.NET Core Web API, EF Core, SQL Server for full-stack integration", tags: ["Backend"] },
      ],
    },
    {
      category: t("toolsSetup.architectureTrack"),
      items: [
        { name: "flutter_bloc & cubit", desc: "Unidirectional data flow, reactive UI state management", tags: ["State Engine"] },
        { name: "get_it & injectable", desc: "Service Locator & Compile-time Dependency Injection", tags: ["DIP"] },
        { name: "Freezed & json_serializable", desc: "Code generation for immutable data models and JSON DTOs", tags: ["Codegen"] },
        { name: "Hive & sqflite", desc: "High-performance local key-value & relational databases", tags: ["Offline Storage"] },
      ],
    },
    {
      category: t("toolsSetup.devopsTrack"),
      items: [
        { name: "GitHub Actions", desc: "Automated Flutter test, static code analysis & APK/IPA builds", tags: ["CI/CD"] },
        { name: "Firebase & Sentry", desc: "Crashlytics error tracking, analytics, and remote config", tags: ["Monitoring"] },
        { name: "Postman & Insomnia", desc: "REST API testing, OpenAPI specification, mock servers", tags: ["API Tools"] },
        { name: "Git & GitHub CLI", desc: "Feature branching, conventional commits, code review workflows", tags: ["Version Control"] },
      ],
    },
  ];

  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <main className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t("stack.badge")}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            {t("stack.title")}
          </h1>
          <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            {t("stack.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {stackCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#15171E] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <h2 className="font-display text-xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="p-2 rounded-xl bg-white/5 text-[#E58A2B]">
                  <Wrench className="w-5 h-5" />
                </span>
                <span>{cat.category}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div key={item.name} className="p-5 rounded-2xl bg-[#0B0C0E] border border-white/5 space-y-3 hover:border-[#E58A2B]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                      <div className="flex gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-[#E58A2B]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ToolsSetupSection />
      </main>
      <DeveloperTerminalModal />
      <Footer />
    </AuroraBackground>
  );
}
