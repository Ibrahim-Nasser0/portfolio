"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, personalInfo } from "@/data/portfolioData";
import { GraduationCap, Mail, MapPin, Phone, Download, Sparkles, Globe2, Award } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/TiltCard";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* About Page Hero Header */}
      <div className="space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>About & Engineering Background</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.02]">
          Driven by Clean Architecture & <br className="hidden sm:block" />
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
            Modular Mobile Systems.
          </span>
        </h1>

        <p className="max-w-3xl text-gray-300 text-base sm:text-lg font-light leading-relaxed">
          I am a Software Engineer and Full-Stack Mobile Developer studying Computer Science at Suez Canal University. I specialize in architecting scalable, maintainable mobile applications using Flutter, BLoC state management, .NET APIs, and SOLID design patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Profile Image Column (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <TiltCard className="h-full">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#E58A2B]/60 bg-[#15171E] shadow-2xl shadow-black/90 transition-all duration-700 h-full">
              <Image
                src="/assets/images/me1.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/20 to-transparent opacity-85" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#E58A2B] text-black font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                  Software Engineer & Flutter Lead
                </span>
                <h3 className="font-display text-2xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-gray-300 font-mono">{personalInfo.location}</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Info Column (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          {/* Education Card */}
          <div className="p-8 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-[#E58A2B]">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-white">Education & Degree</h4>
                <p className="text-xs text-gray-400 font-mono">Academic CS Specialty</p>
              </div>
            </div>

            <div className="border-l-2 border-[#E58A2B] pl-4 py-1 space-y-1">
              <p className="text-xl font-bold text-white">{education.university}</p>
              <p className="text-sm text-[#E58A2B] font-medium">{education.degree}</p>
              <p className="text-xs text-gray-400 font-mono">{education.year} · Expected {education.expectedGraduation}</p>
            </div>

            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {personalInfo.summaryDetails}
            </p>
          </div>

          {/* Contact & Bio Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="font-bold text-white truncate block hover:text-[#E58A2B] transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Direct Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="font-bold text-white hover:text-[#E58A2B] transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Location</span>
                <span className="font-bold text-white">{personalInfo.location}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Spoken Languages</span>
                <span className="font-bold text-white">Arabic (Native), English (Proficient)</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E58A2B] hover:bg-[#F5A642] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#E58A2B]/20 transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Résumé ↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
