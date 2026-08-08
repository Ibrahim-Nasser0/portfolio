"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Cpu, GitBranch, RefreshCw, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { useTranslation } from "@/context/LanguageContext";

export const ArchitecturePrinciplesSection = () => {
  const { t } = useTranslation();

  const principles = [
    {
      id: "01",
      title: t("architecturePrinciples.p1Title"),
      description: t("architecturePrinciples.p1Desc"),
      icon: Layers,
    },
    {
      id: "02",
      title: t("architecturePrinciples.p2Title"),
      description: t("architecturePrinciples.p2Desc"),
      icon: Cpu,
    },
    {
      id: "03",
      title: t("architecturePrinciples.p3Title"),
      description: t("architecturePrinciples.p3Desc"),
      icon: ShieldCheck,
    },
    {
      id: "04",
      title: t("architecturePrinciples.p4Title"),
      description: t("architecturePrinciples.p4Desc"),
      icon: GitBranch,
    },
    {
      id: "05",
      title: t("architecturePrinciples.p5Title"),
      description: t("architecturePrinciples.p5Desc"),
      icon: RefreshCw,
    },
    {
      id: "06",
      title: t("architecturePrinciples.p6Title"),
      description: t("architecturePrinciples.p6Desc"),
      icon: Lock,
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-3">
          <span className="text-[#94A3B8] font-mono font-bold">// 05</span>
          <span className="text-white/20">|</span>
          <span className="uppercase tracking-wider">{t("architecturePrinciples.badge")}</span>
        </div>
        <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {t("architecturePrinciples.title")}
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <TiltCard className="h-full">
                <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all duration-500 flex flex-col justify-between h-full group shadow-xl">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs text-gray-500 font-bold">
                        {p.id}
                      </span>
                    </div>

                    <h3 className="font-display text-xs sm:text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors leading-tight">
                      {p.title}
                    </h3>

                    <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed">
                      {p.description}
                    </p>
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
