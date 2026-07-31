"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[88vh] flex flex-col justify-center py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs (7 cols) */}
        <div className="lg:col-span-7 z-10">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 space-y-1.5 font-mono text-xs uppercase tracking-[0.2em]"
          >
            <div className="flex items-center gap-2 text-[#E58A2B] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personalInfo.location}</span>
            </div>
            <p className="text-[#9CA3AF] font-medium">
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
            3+ Years · 3AMI Team Lead · Suez Canal University · Clean Architecture & BLoC
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="/work"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 shadow-lg shadow-white/10"
            >
              View work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#E58A2B] px-7 py-3 text-sm font-semibold text-[#E58A2B] hover:bg-[#E58A2B] hover:text-black transition-all"
            >
              Get in touch
            </a>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-gray-300 hover:border-[#E58A2B] hover:text-[#E58A2B] transition-colors"
            >
              Résumé ↗
            </a>
          </motion.div>
        </div>

        {/* Right Column: Luxury High-End Profile Photo Frame (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm group">
            {/* Ambient Radial Golden Glow Behind Frame */}
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#E58A2B]/30 via-[#F5A642]/10 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Main Photo Card Frame */}
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#E58A2B]/60 bg-[#15171E] shadow-2xl shadow-black/90 transition-all duration-700">
              <Image
                src="/assets/images/me1.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/20 to-transparent opacity-85" />

              {/* Bottom Floating Info Badge */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0C10]/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-gray-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
                  </span>
                  <span>Software Engineer & Flutter Lead</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  {personalInfo.name}
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Case Studies scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <a
          href="/work"
          className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.14em] text-gray-400 hover:text-[#E58A2B] transition-colors"
        >
          <span className="h-8 w-px bg-white/20 animate-pulse" />
          <span>Explore selected case studies</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E58A2B]" />
        </a>
      </motion.div>
    </section>
  );
};
