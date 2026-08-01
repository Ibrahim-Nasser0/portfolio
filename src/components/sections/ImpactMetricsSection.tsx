"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, LayoutGrid, Server, Database, Award } from "lucide-react";

export const ImpactMetricsSection = () => {
  const metrics = [
    {
      id: "screens",
      title: "Shipped App Screens & Modules",
      stat: "27+",
      desc: "10+ Desktop Admin screens + 12+ Mobile Donor screens + 5+ Bookly screens.",
      icon: LayoutGrid,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
    {
      id: "apis",
      title: "Integrated RESTful APIs",
      stat: "30+",
      desc: "Connected via Dio with token authentication, interceptors & error mappers.",
      icon: Server,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
    {
      id: "records",
      title: "Desktop System Capacity",
      stat: "500+",
      desc: "Student & Donor records managed with real-time analytics & CRUD storage.",
      icon: Database,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
    {
      id: "credentials",
      title: "Verified Certifications",
      stat: "21",
      desc: "Across Clean Architecture, BLoC/MVVM, SQL/NoSQL, and Flutter engineering.",
      icon: Award,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
  ];

  return (
    <section id="impact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span className="text-[#94A3B8] font-mono font-bold">// 01</span>
          <span className="text-white/20">|</span>
          <span>Verified Engineering Output</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Delivered Project Metrics & Scale
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          Tangible software deliverables, system integrations, and verified achievements from shipped projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl bg-[#15171E] border ${m.borderColor} shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-white/5 ${m.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  Metric 0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <span className={`font-display text-4xl sm:text-5xl font-extrabold block ${m.color}`}>
                  {m.stat}
                </span>
                <h3 className="font-display text-base font-bold text-white">{m.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
