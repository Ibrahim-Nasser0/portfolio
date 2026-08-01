"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { recommendations, RecommendationModel } from "@/data/portfolioData";
import { Quote, Sparkles, X, CheckCircle2, ArrowUpRight, MessageSquareQuote } from "lucide-react";
import { Linkedin } from "@/components/icons/SocialIcons";
import { TiltCard } from "@/components/ui/TiltCard";

export const TestimonialsSection = () => {
  const [activeRecommendation, setActiveRecommendation] =
    useState<RecommendationModel | null>(null);

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Verified Peer Endorsements</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Recommendations & Team Endorsements
        </h2>

        <p className="max-w-2xl text-gray-300 text-base font-light leading-relaxed">
          Authentic LinkedIn recommendations written by backend engineers, full-stack developers, and teammates who have built software alongside Ibrahim.
        </p>
      </div>

      {/* Grid of Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recommendations.map((rec, idx) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <TiltCard className="h-full">
              <div
                onClick={() => setActiveRecommendation(rec)}
                className="cursor-pointer p-8 rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/60 transition-all duration-500 flex flex-col justify-between h-full group shadow-2xl space-y-6 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top Badge Bar */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0077B5]/15 border border-[#0077B5]/30 text-[#0077B5] font-mono text-[10px] font-bold uppercase tracking-wider">
                      <Linkedin className="w-3 h-3 fill-current" />
                      <span>LinkedIn Verified</span>
                    </span>

                    <span className="font-mono text-[11px] text-gray-400">
                      {rec.date}
                    </span>
                  </div>

                  {/* Recommendation Text Preview */}
                  <p className="text-gray-300 text-sm font-light leading-relaxed italic line-clamp-5">
                    &quot;{rec.text}&quot;
                  </p>
                </div>

                {/* Card Footer Author Meta */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                        {rec.name}
                      </h3>
                      <p className="text-xs font-mono text-gray-400 line-clamp-1 mt-0.5">
                        {rec.headline}
                      </p>
                    </div>

                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#E58A2B] text-gray-400 group-hover:text-black transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Highlight Chips */}
                  <div className="flex flex-wrap gap-1">
                    {rec.highlights.slice(0, 2).map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] text-gray-300 bg-white/5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Full Recommendation Modal */}
      <AnimatePresence>
        {activeRecommendation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#15171E] border border-[#E58A2B]/40 rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-6"
            >
              <button
                onClick={() => setActiveRecommendation(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black text-gray-300 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0077B5]/20 border border-[#0077B5]/40 text-[#0077B5] font-mono text-xs font-bold uppercase">
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                    <span>Verified LinkedIn Recommendation</span>
                  </span>
                  <span className="font-mono text-xs text-gray-400">
                    {activeRecommendation.date}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {activeRecommendation.name}
                  </h3>
                  <p className="text-xs font-mono text-[#E58A2B] mt-1">
                    {activeRecommendation.headline}
                  </p>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    {activeRecommendation.relationship}
                  </p>
                </div>
              </div>

              {/* Full Text */}
              <div className="space-y-4 text-gray-200 text-sm sm:text-base font-light leading-relaxed">
                <p className="whitespace-pre-line italic">
                  &quot;{activeRecommendation.text}&quot;
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-wider block">
                  Key Strengths Endorsed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeRecommendation.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A2B]" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/ibrahim-nasser-mobile/details/recommendations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-[#0077B5] hover:underline flex items-center gap-1"
                >
                  <span>Verify on LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setActiveRecommendation(null)}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black font-mono text-xs font-bold transition-colors"
                >
                  Close Endorsement
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
