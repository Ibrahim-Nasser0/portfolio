"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, personalInfo } from "@/data/portfolioData";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="mb-16">
        <p className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em]">
          [ About & Background ]
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Architecting robust mobile & desktop solutions.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Profile Image Column (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 bg-[#15171E] group shadow-2xl min-h-[380px]"
        >
          <Image
            src="/assets/images/me1.jpeg"
            alt={personalInfo.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E58A2B] text-black font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
              Software Engineer
            </span>
            <h3 className="font-display text-2xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-xs text-gray-400 font-mono mt-1">{personalInfo.title}</p>
          </div>
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
          <div className="p-8 rounded-2xl bg-[#15171E] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#E58A2B]">
              <GraduationCap className="w-6 h-6" />
              <h4 className="font-display text-xl font-bold text-white">Education & Academic Focus</h4>
            </div>
            <div className="border-l-2 border-[#E58A2B] pl-4 py-1 space-y-1">
              <p className="text-lg font-bold text-white">{education.university}</p>
              <p className="text-sm text-[#E58A2B] font-medium">{education.degree}</p>
              <p className="text-xs text-gray-400 font-mono">{education.year} · {education.expectedGraduation}</p>
            </div>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              {personalInfo.summaryDetails}
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#E58A2B]/10 text-[#E58A2B]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-white truncate block hover:text-[#E58A2B]">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#E58A2B]/10 text-[#E58A2B]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold text-white hover:text-[#E58A2B]">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              Full-Stack Developer
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              Clean Architecture
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              SOLID Principles
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              BLoC / Cubit / Provider
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
