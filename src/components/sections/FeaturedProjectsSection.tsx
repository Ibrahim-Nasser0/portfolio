"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectModel } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, Layers, ShieldAlert, X } from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";

export const FeaturedProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<ProjectModel | null>(null);

  // Take top 3 featured projects for the Home Landing page
  const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-3">
            <span className="text-[#94A3B8] font-mono font-bold">// 02</span>
            <span className="text-white/20">|</span>
            <span className="uppercase tracking-wider">Selected Case Studies</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Mobile & Desktop Systems — Shipped.
          </h2>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] font-mono text-xs font-semibold transition-all self-start md:self-auto"
        >
          <span>View All Case Studies ({projects.length})</span>
          <ArrowUpRight className="w-4 h-4 text-[#E58A2B]" />
        </Link>
      </div>

      {/* Featured Projects Grid (3 Items) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <ProjectCard
              project={project}
              index={idx}
              onQuickView={(p) => setActiveProject(p)}
            />
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#15171E] border border-[#E58A2B]/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-6"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="px-3 py-1 rounded-full bg-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-bold uppercase">
                  {activeProject.category}
                </span>
                <h3 className="font-display text-3xl font-bold text-white mt-2">{activeProject.name}</h3>
                <p className="text-gray-300 text-sm mt-2 font-light">{activeProject.heroDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xs font-mono font-bold text-[#E58A2B] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Core Features & Architecture
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                  {activeProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white/5 p-3 rounded-lg border border-white/5 font-light">
                      <span className="text-[#E58A2B] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono font-bold text-[#E58A2B] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techMobile.concat(activeProject.techBackend, activeProject.techTools).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              {activeProject.challenges.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> Engineering Solutions
                  </h4>
                  <div className="space-y-3">
                    {activeProject.challenges.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs sm:text-sm">
                        <p className="text-amber-300 font-semibold">Challenge: {item.challenge}</p>
                        <p className="text-gray-300 font-light">Solution: {item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <Link
                  href={`/project/${activeProject.id}`}
                  className="font-mono text-xs font-bold text-[#E58A2B] hover:underline"
                >
                  Dedicated Case Page →
                </Link>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#E58A2B] text-black font-bold text-sm hover:bg-[#F5A642] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository ↗</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
