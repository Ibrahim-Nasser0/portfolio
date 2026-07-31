"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCode, SearchCheck, Workflow, Rocket } from "lucide-react";

export const ProcessWorkflowSection = () => {
  const steps = [
    {
      step: "01",
      title: "Requirements & System Design",
      description:
        "Analyzing business rules, defining domain entities, drawing UI wireframes, and drafting API contracts with Clean Architecture boundaries.",
      icon: SearchCheck,
    },
    {
      step: "02",
      title: "Clean Code & BLoC Implementation",
      description:
        "Writing modular Dart code, constructing immutable BLoC states, enforcing SOLID principles, and building responsive UI widgets.",
      icon: FileCode,
    },
    {
      step: "03",
      title: "API Integration & Caching",
      description:
        "Connecting RESTful endpoints via Dio/Http interceptors, setting up Hive/SQLite local caching, and handling offline synchronization.",
      icon: Workflow,
    },
    {
      step: "04",
      title: "QA Testing & Production Release",
      description:
        "Conducting widget and unit tests, performing memory leak audits, building Android APKs / iOS bundles, and deploying to app stores.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="mb-16">
        <p className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em]">
          [ Engineering Workflow ]
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Development Process & Delivery Methodology
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#E58A2B]">
                    STEP {s.step}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                  {s.title}
                </h3>

                <p className="text-gray-300 text-xs font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
