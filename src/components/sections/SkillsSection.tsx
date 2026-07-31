"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import { Code, Smartphone, Layers, Globe, Database, Wrench } from "lucide-react";

export const SkillsSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-[#E58A2B]" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-[#E58A2B]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#E58A2B]" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-[#E58A2B]" />;
      case "Database":
        return <Database className="w-5 h-5 text-[#E58A2B]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-[#E58A2B]" />;
      default:
        return <Code className="w-5 h-5 text-[#E58A2B]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="mb-16">
        <p className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em]">
          [ Systems & Engineering Stack ]
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Capabilities & Architecture Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all shadow-xl group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 group-hover:scale-110 transition-transform">
                {getIcon(category.iconName)}
              </div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-xs text-gray-300 hover:text-white hover:border-[#E58A2B]/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
