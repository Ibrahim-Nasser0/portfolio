"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Cpu,
  GitBranch,
  Palette,
  Terminal,
  Database,
  ShieldCheck,
  Flame,
  Cloud,
  Server,
  HardDrive,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { TiltCard } from "@/components/ui/TiltCard";

interface ToolItem {
  key: string;
  name: string;
  category: string;
  group: "ide" | "profiling" | "cloud" | "design" | "api";
  icon: React.ElementType;
}

export const ToolsSetupSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>("all");

  const rawTools: ToolItem[] = [
    { key: "tool1", name: t("toolsSetup.items.tool1.name"), category: t("toolsSetup.items.tool1.category"), group: "ide", icon: Code },
    { key: "tool2", name: t("toolsSetup.items.tool2.name"), category: t("toolsSetup.items.tool2.category"), group: "profiling", icon: Cpu },
    { key: "tool3", name: t("toolsSetup.items.tool3.name"), category: t("toolsSetup.items.tool3.category"), group: "profiling", icon: ShieldCheck },
    { key: "tool4", name: t("toolsSetup.items.tool4.name"), category: t("toolsSetup.items.tool4.category"), group: "ide", icon: GitBranch },
    { key: "tool5", name: t("toolsSetup.items.tool5.name"), category: t("toolsSetup.items.tool5.category"), group: "cloud", icon: Server },
    { key: "tool6", name: t("toolsSetup.items.tool6.name"), category: t("toolsSetup.items.tool6.category"), group: "cloud", icon: Flame },
    { key: "tool7", name: t("toolsSetup.items.tool7.name"), category: t("toolsSetup.items.tool7.category"), group: "cloud", icon: Cloud },
    { key: "tool8", name: t("toolsSetup.items.tool8.name"), category: t("toolsSetup.items.tool8.category"), group: "api", icon: Database },
    { key: "tool9", name: t("toolsSetup.items.tool9.name"), category: t("toolsSetup.items.tool9.category"), group: "api", icon: Database },
    { key: "tool10", name: t("toolsSetup.items.tool10.name"), category: t("toolsSetup.items.tool10.category"), group: "api", icon: HardDrive },
    { key: "tool11", name: t("toolsSetup.items.tool11.name"), category: t("toolsSetup.items.tool11.category"), group: "design", icon: Palette },
    { key: "tool12", name: t("toolsSetup.items.tool12.name"), category: t("toolsSetup.items.tool12.category"), group: "api", icon: Terminal },
  ];

  const categories = [
    { id: "all", label: t("toolsSetup.allTab") },
    { id: "ide", label: t("toolsSetup.ideTab") },
    { id: "profiling", label: t("toolsSetup.profilingTab") },
    { id: "cloud", label: t("toolsSetup.cloudTab") },
    { id: "design", label: t("toolsSetup.designTab") },
    { id: "api", label: t("toolsSetup.apiTab") },
  ];

  const filteredTools =
    activeTab === "all"
      ? rawTools
      : rawTools.filter((tool) => tool.group === activeTab);

  return (
    <section id="stack" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <span className="text-[#94A3B8] font-mono font-bold">// 08</span>
          <span className="text-white/20">|</span>
          <span>{t("toolsSetup.badge")}</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t("toolsSetup.title")}
        </h2>

        <p className="max-w-3xl text-gray-300 text-base font-light leading-relaxed">
          {t("toolsSetup.subtitle")}
        </p>
      </div>

      {/* Category Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 shrink-0 ${
                isActive
                  ? "bg-[#E58A2B] text-black shadow-[0_0_20px_rgba(229,138,43,0.35)] scale-105"
                  : "bg-[#15171E] border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Tools */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredTools.map((tItem, idx) => {
            const Icon = tItem.icon;
            return (
              <motion.div
                key={tItem.key}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
              >
                <TiltCard className="h-full">
                  <div className="relative h-full p-6 rounded-3xl bg-[#15171E]/90 border border-white/10 hover:border-[#E58A2B]/60 transition-all duration-500 flex items-center gap-5 group shadow-xl hover:shadow-[0_0_35px_rgba(229,138,43,0.18)] hover:-translate-y-1.5 backdrop-blur-xl overflow-hidden">
                    <div className="p-4 rounded-2xl bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] group-hover:bg-[#E58A2B] group-hover:text-black transition-all duration-300 group-hover:scale-110 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1 min-w-0">
                      <h3 className="font-display text-base font-bold text-white group-hover:text-[#E58A2B] transition-colors truncate">
                        {tItem.name}
                      </h3>
                      <p className="text-xs font-mono text-gray-400 truncate">
                        {tItem.category}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
