"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Palette, GitBranch, Cpu, Database } from "lucide-react";

export const ToolsSetupSection = () => {
  const tools = [
    { name: "VS Code & Android Studio", category: "IDE & Editor", icon: Code },
    { name: "Flutter DevTools & Profiler", category: "Debugging & Performance", icon: Cpu },
    { name: "Git & GitHub Workflow", category: "Version Control", icon: GitBranch },
    { name: "Figma UI/UX Mockups", category: "Design System", icon: Palette },
    { name: "Postman & Swagger API", category: "API Testing", icon: Terminal },
    { name: "Hive & SQLite Inspector", category: "Local Databases", icon: Database },
  ];

  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-3">
          <span className="text-[#94A3B8] font-mono font-bold">// 08</span>
          <span className="text-white/20">|</span>
          <span className="uppercase tracking-wider">Development Workspace</span>
        </div>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Everyday Engineering Environment & Tools
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((t, idx) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all text-center space-y-3 group shadow-lg"
            >
              <div className="p-3 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] mx-auto w-fit group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-display text-xs font-bold text-white group-hover:text-[#E58A2B] transition-colors leading-tight">
                {t.name}
              </p>
              <span className="text-[10px] font-mono text-gray-500 block">
                {t.category}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
