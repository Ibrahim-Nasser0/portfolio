"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Code, ShieldCheck } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "3+",
      label: "Years Engineering",
      subtext: "Flutter & .NET Development",
      icon: Briefcase,
    },
    {
      id: 2,
      value: "06",
      label: "Shipped Case Studies",
      subtext: "Enterprise Mobile & Desktop Apps",
      icon: Code,
    },
    {
      id: 3,
      value: "25",
      label: "Accredited Badges",
      subtext: "Verified Technical Certifications",
      icon: Award,
    },
    {
      id: 4,
      value: "100%",
      label: "Clean Architecture",
      subtext: "BLoC & SOLID Standards",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all duration-300 group shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  0{stat.id}
                </span>
              </div>

              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#E58A2B] transition-colors tracking-tight">
                {stat.value}
              </div>

              <p className="mt-2 font-display text-sm font-bold text-gray-200">
                {stat.label}
              </p>
              <p className="mt-1 font-mono text-[11px] text-gray-400 font-light">
                {stat.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
