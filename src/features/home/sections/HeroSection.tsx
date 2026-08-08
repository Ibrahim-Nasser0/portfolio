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
    <section id="hero" className="relative min-h-[auto] lg:min-h-[85vh] flex flex-col justify-center pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-16 md:pb-20 max-w-7xl mx-auto border-b border-white/[0.06] px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-center">
        
        {/* 1. BADGES: Order 1 on Mobile, Left Column Top on Desktop */}
        <div className="order-1 lg:order-1 lg:col-span-8 w-full text-center sm:text-left rtl:sm:text-right space-y-2 sm:space-y-4">
          
          {/* Eyebrow Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.14em] space-y-1 sm:space-y-1.5"
          >
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <div className="flex items-center gap-1 text-[#E58A2B] font-semibold text-[11px] sm:text-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t("hero.location")}</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="px-2.5 py-0.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/30 text-[#E58A2B] text-[11px] sm:text-xs font-medium flex items-center gap-1.5 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E58A2B]" />
                </span>
                <span>{t("hero.statusBadge")}</span>
              </div>
            </div>

            {/* Desktop Only Role Subtitle */}
            <p className="text-[#9CA3AF] font-semibold tracking-[0.12em] text-[10px] sm:text-xs uppercase pt-0.5 hidden lg:block">
              {t("hero.role")}
            </p>
          </motion.div>

          {/* Desktop Only Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden lg:block font-display leading-[0.95] rtl:leading-[1.15] tracking-[-0.03em] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white"
          >
            <span className="block">{t("hero.firstName")} </span>
            <span className="block text-[#9CA3AF] font-normal hover:text-[#E58A2B] transition-colors">
              {t("hero.lastName")}
            </span>
          </motion.h1>

          {/* Desktop Only: Tagline & CTAs embedded inside Left Column */}
          <div className="hidden lg:block space-y-4 pt-2">
            <p className="max-w-xl text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              {t("hero.tagline")}
            </p>

            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#6B7280] pt-0.5">
              {t("hero.metaLine")}
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex flex-row items-center justify-start gap-3.5 w-full">
                <MagneticButton href="#projects" className="w-auto">
                  <span className="relative overflow-hidden w-full justify-center rounded-full bg-[#E58A2B] hover:bg-[#F5A642] px-6 py-3 text-sm font-bold text-black transition-all shadow-lg shadow-[#E58A2B]/25 flex items-center gap-2 group">
                    <span className="relative z-10">{t("hero.viewWork")}</span>
                    <ArrowDown className="w-4 h-4 relative z-10 transition-transform group-hover:translate-y-0.5" />
                  </span>
                </MagneticButton>

                <MagneticButton href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="w-auto">
                  <span className="w-full text-center rounded-full border border-[#E58A2B]/40 px-6 py-3 text-sm font-medium text-[#E58A2B] hover:bg-[#E58A2B] hover:text-black transition-all block">
                    {t("hero.downloadResume")}
                  </span>
                </MagneticButton>
              </div>

              <div className="pt-1.5 flex items-center justify-start gap-2 font-mono text-[11px] text-gray-400">
                <Terminal className="w-3.5 h-3.5 text-[#E58A2B]" />
                <span>{t("hero.cliHint")}</span>
                <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white font-mono text-[10px]">
                  Ctrl + K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* 2. PORTRAIT PHOTO CARD: Order 2 on Mobile, Right Column (4 cols) on Desktop */}
        <div className="order-2 lg:order-2 lg:col-span-4 flex justify-center lg:justify-end w-full">
          <div className="relative group w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[320px] my-1 sm:my-0">
            {/* High-Tech Background Orbit Line */}
            <div className="absolute -inset-4 rounded-[32px] sm:rounded-[36px] border border-white/5 pointer-events-none hidden sm:block" />
            <div className="absolute -inset-6 rounded-[38px] sm:rounded-[42px] border border-[#E58A2B]/10 pointer-events-none animate-pulse hidden sm:block" />

            {/* Ambient Gold Halo Glow */}
            <div className="absolute -inset-2 rounded-[28px] sm:rounded-[32px] bg-gradient-to-tr from-[#E58A2B]/25 via-amber-500/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Tilt Container Frame */}
            <TiltCard className="w-full">
              <div className="relative aspect-[4/5] w-full rounded-[20px] sm:rounded-[28px] overflow-hidden border border-white/15 group-hover:border-[#E58A2B]/80 transition-all duration-500 shadow-2xl bg-[#0B0C0E]">
                {/* Instant First-Paint High Priority LCP Image */}
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 320px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={true}
                  fetchPriority="high"
                  quality={85}
                />

                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/20 opacity-80" />

                {/* Top-Right Floating Status Pill */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#0B0C0E]/80 border border-white/15 backdrop-blur-md text-[#E58A2B] font-mono text-[9px] sm:text-[11px] font-bold flex items-center gap-1 sm:gap-1.5 shadow-lg">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E58A2B]" />
                  </span>
                  <span>{t("hero.gdgBadge")}</span>
                </div>

                {/* Bottom Glass Pill Overlay */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-20 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#15171E]/85 backdrop-blur-xl border border-white/10 space-y-1 sm:space-y-1.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[10px] sm:text-sm font-bold text-white">
                      {t("hero.name")}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[11px] text-[#E58A2B] font-bold">
                      {t("hero.specialization")}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-0.5 sm:gap-1 pt-0.5">
                    {["Flutter", "Clean Arch", "BLoC", "C#"].map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[8px] sm:text-[10px] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* 3. MOBILE ONLY BOTTOM CONTENT: Display Name -> Role -> Tagline -> CTAs (Order 3 on Mobile, Hidden on Desktop) */}
        <div className="order-3 lg:hidden w-full text-center space-y-2.5 pt-2">
          {/* Display Name Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display leading-[1.05] tracking-[-0.03em] text-[30px] font-extrabold text-white"
          >
            <span>{t("hero.firstName")} </span>
            <span className="text-[#9CA3AF] font-normal">{t("hero.lastName")}</span>
          </motion.h1>

          {/* Role Subtitle below Name */}
          <p className="text-[#E58A2B] font-mono font-bold tracking-[0.14em] text-[11px] uppercase">
            {t("hero.role")}
          </p>

          {/* Tagline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-sm mx-auto text-[13px] text-gray-300 font-light leading-relaxed pt-0.5"
          >
            {t("hero.tagline")}
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-2 w-full pt-1.5"
          >
            <MagneticButton href="#projects" className="flex-1">
              <span className="relative overflow-hidden w-full justify-center rounded-full bg-[#E58A2B] hover:bg-[#F5A642] px-4 py-2.5 text-[11px] font-bold text-black transition-all shadow-lg shadow-[#E58A2B]/25 flex items-center gap-1.5 group">
                <span className="relative z-10">{t("hero.viewWork")}</span>
                <ArrowDown className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-y-0.5" />
              </span>
            </MagneticButton>

            <MagneticButton href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <span className="w-full text-center rounded-full border border-[#E58A2B]/40 px-4 py-2.5 text-[11px] font-medium text-[#E58A2B] hover:bg-[#E58A2B] hover:text-black transition-all block">
                {t("hero.downloadResume")}
              </span>
            </MagneticButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
