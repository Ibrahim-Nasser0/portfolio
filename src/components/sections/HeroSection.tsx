"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { MapPin, CheckCircle2, Terminal, ArrowDown, Code2 } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs (7 cols) */}
        <div className="lg:col-span-7 z-10">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 space-y-3 font-mono text-xs uppercase tracking-[0.16em]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-[#E58A2B] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalInfo.location} · Cairo (UTC+3)</span>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="px-3 py-0.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/30 text-[#E58A2B] text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
                </span>
                <span>Available for Freelance & Mobile Roles</span>
              </div>
            </div>
            <p className="text-[#9CA3AF] font-medium tracking-[0.18em]">
              Full-Stack Mobile Developer / Flutter / .NET / Clean Architecture
            </p>
          </motion.div>

          {/* Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display leading-[0.92] tracking-[-0.03em] text-5xl sm:text-7xl md:text-8xl font-extrabold text-white"
          >
            <span className="block">Ibrahim</span>
            <span className="block text-[#9CA3AF] font-normal hover:text-[#E58A2B] transition-colors">
              Nasser
            </span>
          </motion.h1>

          {/* Tagline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg sm:text-xl text-gray-300 font-light leading-relaxed"
          >
            {personalInfo.summaryHeadline}
          </motion.p>

          {/* Experience Meta Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B7280]"
          >
            GDG Mobile Mentor · Suez Canal University · Clean Architecture & BLoC
          </motion.p>

          {/* Magnetic CTAs & Developer CLI Hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 space-y-4"
          >
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="#projects">
                <span className="rounded-full bg-[#E58A2B] hover:bg-[#F5A642] px-7 py-3 text-sm font-bold text-black transition-all shadow-lg shadow-[#E58A2B]/25 flex items-center gap-2">
                  <span>Explore Work</span>
                  <ArrowDown className="w-4 h-4" />
                </span>
              </MagneticButton>

              <MagneticButton href="/playground">
                <span className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#E58A2B]" />
                  <span>Flutter Engine</span>
                </span>
              </MagneticButton>

              <MagneticButton href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                <span className="rounded-full border border-[#E58A2B]/40 px-7 py-3 text-sm font-medium text-[#E58A2B] hover:bg-[#E58A2B] hover:text-black transition-all block">
                  Résumé ↗
                </span>
              </MagneticButton>
            </div>

            {/* CLI Keyboard Shortcut Badge */}
            <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-gray-400">
              <Terminal className="w-3.5 h-3.5 text-[#E58A2B]" />
              <span>Developer CLI:</span>
              <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-white font-mono text-[10px]">
                Ctrl + K
              </kbd>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Floating Glass Portrait Frame (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
            {/* High-Tech Background Orbit Line */}
            <div className="absolute -inset-6 rounded-[44px] border border-white/5 pointer-events-none" />
            <div className="absolute -inset-10 rounded-[50px] border border-[#E58A2B]/10 pointer-events-none animate-pulse" />

            {/* Ambient Gold Halo Glow */}
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-[#E58A2B]/30 via-amber-500/10 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            {/* 3D Tilt Card Frame */}
            <TiltCard className="w-full">
              <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden border border-white/15 group-hover:border-[#E58A2B]/80 transition-all duration-500 shadow-2xl bg-[#0B0C0E]">
                {/* High-Res Portrait Image */}
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 340px, 380px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/20 opacity-80" />

                {/* Top-Right Floating Status Pill */}
                <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#0B0C0E]/75 border border-white/15 backdrop-blur-md text-[#E58A2B] font-mono text-[11px] font-bold flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
                  </span>
                  <span>GDG Mentor</span>
                </div>

                {/* Top-Left Verification Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[#E58A2B] font-mono text-[10px] font-bold flex items-center gap-1.5 shadow-lg">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED PRO</span>
                </div>

                {/* Bottom Glass Pill Overlay (Tech Highlights) */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-[#15171E]/80 backdrop-blur-xl border border-white/10 space-y-2 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-white">
                      Ibrahim Nasser
                    </span>
                    <span className="font-mono text-[10px] text-[#E58A2B] font-bold">
                      FLUTTER & .NET
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Flutter", "Clean Architecture", "BLoC", "C#"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-gray-300"
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
