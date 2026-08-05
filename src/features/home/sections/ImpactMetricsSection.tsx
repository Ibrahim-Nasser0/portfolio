"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Layers, Smartphone, Monitor, Award, ChevronDown } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const ImpactMetricsSection = () => {
  const { t } = useTranslation();
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);

  const metrics = [
    {
      id: "totalProjects",
      title: t("impact.totalProjects"),
      stat: t("impact.totalProjectsStat"),
      desc: t("impact.totalProjectsDesc"),
      icon: Layers,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
    {
      id: "mobileApps",
      title: t("impact.mobileApps"),
      stat: t("impact.mobileAppsStat"),
      desc: t("impact.mobileAppsDesc"),
      icon: Smartphone,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
    {
      id: "desktopApps",
      title: t("impact.desktopApps"),
      stat: t("impact.desktopAppsStat"),
      desc: t("impact.desktopAppsDesc"),
      icon: Monitor,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
    {
      id: "crashFreeRate",
      title: t("impact.crashFreeRate"),
      stat: t("impact.crashFreeStat"),
      desc: t("impact.crashFreeDesc"),
      icon: Award,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedMetric(expandedMetric === id ? null : id);
  };

  return (
    <section id="impact" className="py-12 sm:py-20 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span className="text-[#94A3B8] font-mono font-bold">// 01</span>
          <span className="text-white/20">|</span>
          <span>{t("impact.badge")}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {t("impact.title")}
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-lg font-light leading-relaxed">
          {t("impact.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          const isExpanded = expandedMetric === m.id;

          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => toggleExpand(m.id)}
              className={`p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#15171E]/90 border transition-all duration-300 group cursor-pointer backdrop-blur-xl flex flex-col justify-between ${
                isExpanded
                  ? "border-[#E58A2B] shadow-[0_0_25px_rgba(229,138,43,0.3)] bg-[#1c1f28]"
                  : "border-white/10 hover:border-[#E58A2B]/60 shadow-2xl hover:-translate-y-1.5"
              }`}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 group-hover:bg-[#E58A2B] group-hover:text-black transition-all duration-300">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <span className="font-display text-2xl sm:text-5xl font-extrabold block text-white group-hover:text-[#E58A2B] transition-colors">
                  {m.stat}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xs sm:text-base font-bold text-white leading-tight">{m.title}</h3>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#E58A2B] sm:hidden transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </div>

                <p className="text-[10px] sm:text-xs text-gray-300 font-light leading-relaxed hidden sm:block">{m.desc}</p>
                
                {/* Mobile Tap-to-Expand Description Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[11px] text-amber-200/90 font-light leading-tight sm:hidden pt-1 border-t border-white/10"
                    >
                      {m.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
