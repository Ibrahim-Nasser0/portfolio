"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Code, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      id: 1,
      value: "3+",
      label: t("stats.yearsLabel"),
      subtext: t("stats.yearsSubtext"),
      icon: Briefcase,
    },
    {
      id: 2,
      value: "06",
      label: t("stats.casesLabel"),
      subtext: t("stats.casesSubtext"),
      icon: Code,
    },
    {
      id: 3,
      value: "25",
      label: t("stats.badgesLabel"),
      subtext: t("stats.badgesSubtext"),
      icon: Award,
    },
    {
      id: 4,
      value: "100%",
      label: t("stats.archLabel"),
      subtext: t("stats.archSubtext"),
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-3.5 sm:p-6 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all duration-300 group shadow-xl"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">
                  0{stat.id}
                </span>
              </div>

              <div className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white group-hover:text-[#E58A2B] transition-colors tracking-tight">
                {stat.value}
              </div>

              <p className="mt-1.5 sm:mt-2 font-display text-xs sm:text-sm font-bold text-gray-200">
                {stat.label}
              </p>
              <p className="mt-0.5 sm:mt-1 font-mono text-[10px] sm:text-[11px] text-gray-400 font-light truncate">
                {stat.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
