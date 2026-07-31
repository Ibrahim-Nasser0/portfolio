"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import { Smartphone, ShieldCheck, Server, Palette, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export const SkillsSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return Smartphone;
      case "ShieldCheck":
        return ShieldCheck;
      case "Server":
        return Server;
      case "Palette":
        return Palette;
      case "Wrench":
        return Wrench;
      default:
        return Smartphone;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Technical Competencies & Stack</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02]">
          Skills Matrix & <br className="hidden sm:block" />
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
            Engineering Capabilities.
          </span>
        </h2>

        <p className="max-w-2xl text-gray-300 text-base font-light leading-relaxed">
          A filtered, enterprise-grade taxonomy of skills across Mobile Architecture, Backend Systems, Database Administration, UI/UX Design, and Engineering Tools.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => {
          const Icon = getIcon(cat.iconName);

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <TiltCard className="h-full">
                <div className="p-8 rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/60 transition-all duration-500 flex flex-col justify-between h-full group shadow-2xl space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-gray-500 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#E58A2B] transition-colors leading-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200 hover:border-[#E58A2B]/40 hover:text-[#E58A2B] transition-colors flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#E58A2B]" />
                        <span>{skill}</span>
                      </span>
                    ))}
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
