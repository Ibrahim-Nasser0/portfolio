"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { MapPin, CheckCircle2, Terminal, ArrowDown } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { useTranslation } from "@/context/LanguageContext";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-[auto] lg:min-h-[90vh] flex flex-col justify-center py-12 sm:py-20 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 z-10 w-full text-center sm:text-left rtl:sm:text-right">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 sm:mb-6 space-y-2.5 sm:space-y-3 font-mono text-xs uppercase tracking-[0.16em]"
          >
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 text-[#E58A2B] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t("hero.location")}</span>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="px-3 py-0.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/30 text-[#E58A2B] text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
                </span>
                <span>{t("hero.statusBadge")}</span>
              </div>
            </div>
            <p className="text-[#9CA3AF] font-medium tracking-[0.18em]">
              {t("hero.role")}
            </p>
          </motion.div>

          {/* Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display leading-[1.08] sm:leading-[0.98] rtl:leading-[1.25] sm:rtl:leading-[1.18] tracking-[-0.02em] text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white"
          >
            <span className="block">{t("hero.firstName")}</span>
            <span className="block text-[#9CA3AF] font-normal hover:text-[#E58A2B] transition-colors mt-1 sm:mt-0">
              {t("hero.lastName")}
            </span>
          </motion.h1>

          {/* Tagline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-xl mx-auto sm:mx-0 text-sm sm:text-xl text-gray-300 font-light leading-relaxed"
          >
            {t("hero.tagline")}
          </motion.p>

          {/* Experience Meta Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 sm:mt-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#6B7280]"
          >
            {t("hero.metaLine")}
          </motion.p>

          {/* Magnetic CTAs & Developer CLI Hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 sm:mt-8 space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-3.5 w-full">
              <MagneticButton href="#projects" className="w-full sm:w-auto">
                <span className="w-full justify-center rounded-full bg-[#E58A2B] hover:bg-[#F5A642] px-7 py-3.5 text-xs sm:text-sm font-bold text-black transition-all shadow-lg shadow-[#E58A2B]/25 flex items-center gap-2">
                  <span>{t("hero.viewWork")}</span>
                  <ArrowDown className="w-4 h-4" />
                </span>
              </MagneticButton>

              <MagneticButton href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <span className="w-full text-center rounded-full border border-[#E58A2B]/40 px-7 py-3.5 text-xs sm:text-sm font-medium text-[#E58A2B] hover:bg-[#E58A2B] hover:text-black transition-all block">
                  {t("hero.downloadResume")} ↗
                </span>
              </MagneticButton>
            </div>

            {/* CLI Keyboard Shortcut Badge (Desktop Only) */}
            <div className="pt-2 hidden sm:flex items-center justify-start gap-2 font-mono text-[11px] text-gray-400">
              <Terminal className="w-3.5 h-3.5 text-[#E58A2B]" />
              <span>{t("hero.cliHint")}</span>
              <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white font-mono text-[10px]">
                Ctrl + K
              </kbd>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Floating Glass Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="relative group w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[380px]">
            {/* High-Tech Background Orbit Line */}
            <div className="absolute -inset-3 sm:-inset-6 rounded-[32px] sm:rounded-[44px] border border-white/5 pointer-events-none" />
            <div className="absolute -inset-6 sm:-inset-10 rounded-[38px] sm:rounded-[50px] border border-[#E58A2B]/10 pointer-events-none animate-pulse" />

            {/* Ambient Gold Halo Glow */}
            <div className="absolute -inset-2 rounded-[28px] sm:rounded-[36px] bg-gradient-to-tr from-[#E58A2B]/30 via-amber-500/10 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            {/* 3D Tilt Card Frame */}
            <TiltCard className="w-full">
              <div className="relative aspect-[4/5] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/15 group-hover:border-[#E58A2B]/80 transition-all duration-500 shadow-2xl bg-[#0B0C0E]">
                {/* High-Res Portrait Image */}
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 380px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={true}
                  fetchPriority="high"
                />

                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/20 opacity-80" />

                {/* Top-Right Floating Status Pill */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#0B0C0E]/80 border border-white/15 backdrop-blur-md text-[#E58A2B] font-mono text-[9px] sm:text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#E58A2B]" />
                  </span>
                  <span>{t("hero.gdgBadge")}</span>
                </div>

                {/* Top-Left Verification Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[#E58A2B] font-mono text-[8px] sm:text-[10px] font-bold flex items-center gap-1 shadow-lg">
                  <CheckCircle2 className="w-3 h-3 text-[#E58A2B]" />
                  <span>{t("hero.verifiedBadge")}</span>
                </div>

                {/* Bottom Glass Pill Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-20 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl bg-[#15171E]/85 backdrop-blur-xl border border-white/10 space-y-1 sm:space-y-2 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs sm:text-sm font-bold text-white">
                      {t("hero.name")}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#E58A2B] font-bold">
                      {t("hero.specialization")}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {["Flutter", "Clean Arch", "BLoC", "C#"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[8px] sm:text-[10px] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
