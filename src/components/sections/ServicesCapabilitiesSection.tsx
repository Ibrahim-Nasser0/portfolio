"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Server, Zap, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export const ServicesCapabilitiesSection = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      id: "mobile",
      title: t("services.mobileTitle"),
      subtitle: t("services.mobileSubtitle"),
      icon: Smartphone,
      description: t("services.mobileDesc"),
      deliverables: [
        t("services.mobileD1"),
        t("services.mobileD2"),
        t("services.mobileD3"),
        t("services.mobileD4"),
      ],
      tags: ["Flutter & Dart", "Clean Architecture", "BLoC Pattern", "Offline Sync"],
    },
    {
      id: "desktop",
      title: t("services.desktopTitle"),
      subtitle: t("services.desktopSubtitle"),
      icon: Monitor,
      description: t("services.desktopDesc"),
      deliverables: [
        t("services.desktopD1"),
        t("services.desktopD2"),
        t("services.desktopD3"),
        t("services.desktopD4"),
      ],
      tags: ["Flutter Desktop", "MVVM Pattern", "Local SQLite", "Desktop Grid"],
    },
    {
      id: "backend",
      title: t("services.backendTitle"),
      subtitle: t("services.backendSubtitle"),
      icon: Server,
      description: t("services.backendDesc"),
      deliverables: [
        t("services.backendD1"),
        t("services.backendD2"),
        t("services.backendD3"),
        t("services.backendD4"),
      ],
      tags: ["C# & .NET", "ASP.NET Core", "SQL Server", "RESTful APIs"],
    },
    {
      id: "profiling",
      title: t("services.profilingTitle"),
      subtitle: t("services.profilingSubtitle"),
      icon: Zap,
      description: t("services.profilingDesc"),
      deliverables: [
        t("services.profilingD1"),
        t("services.profilingD2"),
        t("services.profilingD3"),
        t("services.profilingD4"),
      ],
      tags: ["DevTools Profiler", "Dart Isolates", "Memory Management", "60 FPS Lock"],
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
            <span className="text-[#94A3B8] font-mono font-bold">// 02</span>
            <span className="text-white/20">|</span>
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("services.badge")}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] font-mono text-xs font-semibold transition-all self-start md:self-auto"
        >
          <span>{t("services.exploreCaseStudies")}</span>
          <ArrowUpRight className="w-4 h-4 text-[#E58A2B] rtl:rotate-180" />
        </Link>
      </div>

      {/* Capabilities 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xl hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Header Icon Bar */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#E58A2B]/10 text-[#E58A2B] border border-[#E58A2B]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {t("common.solution")}0{idx + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mt-1">{item.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    {t("common.keyDeliverables")}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-light text-gray-300">
                    {item.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A2B] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Tags Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-gray-300 group-hover:border-[#E58A2B]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

