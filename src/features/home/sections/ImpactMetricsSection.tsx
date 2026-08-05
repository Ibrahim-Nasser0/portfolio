"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Layers, Smartphone, Monitor, Award } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const ImpactMetricsSection = () => {
  const { t } = useTranslation();

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

  return (
    <section id="impact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span className="text-[#94A3B8] font-mono font-bold">// 01</span>
          <span className="text-white/20">|</span>
          <span>{t("impact.badge")}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t("impact.title")}
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          {t("impact.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-[#15171E]/90 border border-white/10 hover:border-[#E58A2B]/60 shadow-2xl hover:shadow-[0_0_30px_rgba(229,138,43,0.15)] flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500 group backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-2xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 group-hover:bg-[#E58A2B] group-hover:text-black transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  {t("common.metric")}0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold block text-white group-hover:text-[#E58A2B] transition-colors">
                  {m.stat}
                </span>
                <h3 className="font-display text-base font-bold text-white">{m.title}</h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
