"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolioData";
import { Calendar, Sparkles, Building2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="space-y-4 mb-20 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Professional Experience & Leadership</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02]">
          Career Timeline & <br />
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
            Mobile Engineering Milestones.
          </span>
        </h2>
      </div>

      {/* Alternating Centered Timeline Container */}
      <div className="relative">
        {/* Central Vertical Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#E58A2B] via-[#E58A2B]/50 to-white/10" />

        {/* Mobile Left Line */}
        <div className="md:hidden absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#E58A2B] via-[#E58A2B]/50 to-white/10" />

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.date.toLowerCase().includes("present");
            const isEven = idx % 2 === 0; // Even items on Left, Odd items on Right

            return (
              <motion.div
                key={exp.title + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-stretch"
              >
                {/* Desktop Central Node Dot Marker */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-7 h-7 rounded-full border-2 items-center justify-center transition-transform z-20 hover:scale-125 ${
                    isCurrent
                      ? "bg-[#E58A2B] border-[#E58A2B] text-black shadow-lg shadow-[#E58A2B]/60"
                      : "bg-[#15171E] border-white/30 text-gray-300 hover:border-[#E58A2B]"
                  }`}
                >
                  {isCurrent ? (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                  )}
                </div>

                {/* Mobile Left Node Marker */}
                <div
                  className={`md:hidden absolute left-[5px] top-6 w-6 h-6 rounded-full border-2 flex items-center justify-center z-20 ${
                    isCurrent
                      ? "bg-[#E58A2B] border-[#E58A2B] text-black shadow-lg shadow-[#E58A2B]/60"
                      : "bg-[#15171E] border-white/30 text-gray-300"
                  }`}
                >
                  {isCurrent ? (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  )}
                </div>

                {/* LEFT HALF COLUMN */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12">
                  {isEven ? (
                    <TiltCard className="h-full">
                      <div className="relative p-7 sm:p-9 rounded-3xl bg-[#15171E] border border-white/10 group-hover:border-[#E58A2B]/60 transition-all duration-500 shadow-2xl space-y-6">
                        {/* Horizontal Desktop Connector Pointer */}
                        <div className="hidden md:block absolute right-0 top-10 translate-x-full w-12 h-0.5 bg-[#E58A2B]/40 group-hover:bg-[#E58A2B] transition-colors" />

                        {/* Card Header */}
                        <div className="space-y-3 border-b border-white/10 pb-5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs">
                              <Calendar className="w-3.5 h-3.5 text-[#E58A2B]" />
                              <span>{exp.date}</span>
                            </div>

                            {isCurrent && (
                              <span className="px-3 py-0.5 rounded-full bg-[#E58A2B] text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                                PRESENT ROLE
                              </span>
                            )}
                          </div>

                          <div>
                            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#E58A2B] transition-colors leading-tight">
                              {exp.title}
                            </h3>

                            <div className="flex items-center gap-2 font-mono text-xs text-[#E58A2B] font-bold mt-1.5">
                              <Building2 className="w-3.5 h-3.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bullet Points */}
                        <div className="space-y-2.5">
                          {exp.descriptionPoints.map((pt, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3 hover:border-[#E58A2B]/30 transition-colors text-left"
                            >
                              <span className="text-[#E58A2B] font-bold text-sm mt-0.5">•</span>
                              <span className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  ) : (
                    /* Empty Left Spacer for Odd items on desktop */
                    <div className="hidden md:block h-full" />
                  )}
                </div>

                {/* RIGHT HALF COLUMN */}
                <div className="w-full md:w-1/2 pl-12 md:pl-12 md:pr-0 mt-8 md:mt-0">
                  {!isEven ? (
                    <TiltCard className="h-full">
                      <div className="relative p-7 sm:p-9 rounded-3xl bg-[#15171E] border border-white/10 group-hover:border-[#E58A2B]/60 transition-all duration-500 shadow-2xl space-y-6">
                        {/* Horizontal Desktop Connector Pointer */}
                        <div className="hidden md:block absolute left-0 top-10 -translate-x-full w-12 h-0.5 bg-[#E58A2B]/40 group-hover:bg-[#E58A2B] transition-colors" />

                        {/* Card Header */}
                        <div className="space-y-3 border-b border-white/10 pb-5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs">
                              <Calendar className="w-3.5 h-3.5 text-[#E58A2B]" />
                              <span>{exp.date}</span>
                            </div>

                            {isCurrent && (
                              <span className="px-3 py-0.5 rounded-full bg-[#E58A2B] text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                                PRESENT ROLE
                              </span>
                            )}
                          </div>

                          <div>
                            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#E58A2B] transition-colors leading-tight">
                              {exp.title}
                            </h3>

                            <div className="flex items-center gap-2 font-mono text-xs text-[#E58A2B] font-bold mt-1.5">
                              <Building2 className="w-3.5 h-3.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bullet Points */}
                        <div className="space-y-2.5">
                          {exp.descriptionPoints.map((pt, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3 hover:border-[#E58A2B]/30 transition-colors text-left"
                            >
                              <span className="text-[#E58A2B] font-bold text-sm mt-0.5">•</span>
                              <span className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  ) : (
                    /* Empty Right Spacer for Even items on desktop */
                    <div className="hidden md:block h-full" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
