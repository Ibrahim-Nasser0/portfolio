"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolioData";
import { Calendar } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="mb-16">
        <p className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em]">
          [ Career Timeline ]
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Leadership & Mobile Engineering Roles
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title + idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all shadow-xl space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{exp.title}</h3>
                <p className="text-sm font-mono text-[#E58A2B] mt-0.5">{exp.company}</p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono text-xs self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-[#E58A2B]" />
                <span>{exp.date}</span>
              </div>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm font-light leading-relaxed">
              {exp.descriptionPoints.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <span className="text-[#E58A2B] font-bold text-base mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
