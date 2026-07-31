"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Star, ShieldCheck, Download } from "lucide-react";

export const ImpactMetricsSection = () => {
  const metrics = [
    {
      id: "downloads",
      title: "Active Users & Downloads",
      stat: "50,000+",
      desc: "Combined userbase across shipped mobile applications.",
      icon: Users,
      color: "text-[#E58A2B]",
      borderColor: "border-[#E58A2B]/30",
    },
    {
      id: "crashfree",
      title: "Crash-Free Users",
      stat: "99.9%",
      desc: "Measured via Firebase Crashlytics & Sentry error reporting.",
      icon: ShieldCheck,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
    {
      id: "rating",
      title: "Store Rating Average",
      stat: "4.8 ★",
      desc: "Consistently rated high across Google Play & Apple App Store.",
      icon: Star,
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
    },
    {
      id: "roi",
      title: "API Performance Gain",
      stat: "40%",
      desc: "Latency reduction through caching & optimistic UI updates.",
      icon: TrendingUp,
      color: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
  ];

  return (
    <section id="impact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Measurable Engineering Value</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Business Impact & Store Success
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          Delivering robust, scalable mobile products with verified store stability and high user engagement.
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
