"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Server, Zap, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { TiltCard } from "@/components/ui/TiltCard";

export const ServicesCapabilitiesSection = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      id: "mobile",
      title: t("services.mobileTitle"),
      subtitle: t("services.mobileSubtitle"),
      stat: t("services.mobileStat"),
      icon: Smartphone,
      description: t("services.mobileDesc"),
      deliverables: [
        t("services.mobileD1"),
        t("services.mobileD2"),
        t("services.mobileD3"),
        t("services.mobileD4"),
      ],
      tags: ["Flutter & Dart", "Clean Architecture", "BLoC Engine", "Offline Sync"],
    },
    {
      id: "desktop",
      title: t("services.desktopTitle"),
      subtitle: t("services.desktopSubtitle"),
      stat: t("services.desktopStat"),
      icon: Monitor,
      description: t("services.desktopDesc"),
      deliverables: [
        t("services.desktopD1"),
        t("services.desktopD2"),
        t("services.desktopD3"),
        t("services.desktopD4"),
      ],
      tags: ["Flutter Desktop", "Multi-Window", "SQLite Local", "PDF/Excel Export"],
    },
    {
      id: "backend",
      title: t("services.backendTitle"),
      subtitle: t("services.backendSubtitle"),
      stat: t("services.backendStat"),
      icon: Server,
      description: t("services.backendDesc"),
      deliverables: [
        t("services.backendD1"),
        t("services.backendD2"),
        t("services.backendD3"),
        t("services.backendD4"),
      ],
      tags: ["C# & .NET Core", "ASP.NET Web API", "SQL Server", "Firebase & Supabase"],
    },
    {
      id: "profiling",
      title: t("services.profilingTitle"),
      subtitle: t("services.profilingSubtitle"),
      stat: t("services.profilingStat"),
      icon: Zap,
      description: t("services.profilingDesc"),
      deliverables: [
        t("services.profilingD1"),
        t("services.profilingD2"),
        t("services.profilingD3"),
        t("services.profilingD4"),
      ],
      tags: ["DevTools Profiler", "Dart Isolates", "Memory Tuning", "60 FPS Lock"],
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="text-[#94A3B8] font-mono font-bold">// 02</span>
            <span className="text-white/20">|</span>
            <span>{t("services.badge")}</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("services.title")}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#E58A2B] bg-[#15171E] text-gray-300 hover:text-[#E58A2B] font-mono text-xs font-semibold transition-all duration-300 self-start md:self-auto hover:shadow-[0_0_20px_rgba(229,138,43,0.2)] shrink-0"
        >
          <span>{t("services.exploreCaseStudies")}</span>
        </Link>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="relative p-8 rounded-3xl bg-[#15171E]/90 border border-white/10 hover:border-[#E58A2B]/60 transition-all duration-500 flex flex-col justify-between h-full group shadow-2xl space-y-6 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(229,138,43,0.18)] backdrop-blur-xl overflow-hidden">
                  
                  {/* Card Header & Stat Badge */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3.5 rounded-2xl bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] group-hover:bg-[#E58A2B] group-hover:text-black transition-all duration-300 group-hover:scale-110">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] font-bold text-[#E58A2B] uppercase tracking-widest block">
                            {item.subtitle}
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#E58A2B] transition-colors mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E58A2B] font-mono text-[10px] font-bold uppercase tracking-wider group-hover:border-[#E58A2B]/40 transition-colors">
                        {item.stat}
                      </span>
                    </div>

                    {/* Product Description */}
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Deliverables Checklist */}
                    <div className="pt-2 space-y-2.5">
                      <span className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-wider block">
                        {t("services.keyDeliverables")}
                      </span>
                      <ul className="grid grid-cols-1 gap-2">
                        {item.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#E58A2B] shrink-0 mt-0.5" />
                            <span className="leading-snug">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Tech Tags */}
                  <div className="pt-5 border-t border-white/10 flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-gray-300 group-hover:border-[#E58A2B]/30 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
