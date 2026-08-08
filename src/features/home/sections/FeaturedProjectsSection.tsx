"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectModel } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, Layers, ShieldAlert, X } from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export const FeaturedProjectsSection = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<ProjectModel | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "desktop", label: "Desktop & Web" },
  ];

  // Filter projects by category
  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "all") return p.isFeatured;
    if (selectedCategory === "mobile") return p.category.toLowerCase().includes("mobile") || p.techMobile.length > 0;
    if (selectedCategory === "desktop") return p.category.toLowerCase().includes("desktop") || p.category.toLowerCase().includes("web");
    return p.isFeatured;
  }).slice(0, 3);

  return (
    <section id="projects" className="py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-3">
            <span className="text-[#94A3B8] font-mono font-bold">// 03</span>
            <span className="text-white/20">|</span>
            <span className="uppercase tracking-wider">{t("featuredProjects.badge")}</span>
          </div>
          <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t("featuredProjects.title")}
          </h2>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] font-mono text-xs font-semibold transition-all self-start md:self-auto"
        >
          <span>{t("featuredProjects.viewAll")} ({projects.length})</span>
          <ArrowUpRight className="w-4 h-4 text-[#E58A2B] rtl:rotate-180" />
        </Link>
      </div>

      {/* Clean Category Filter Tab Bar (No Horizontal Overflow Scroll) */}
      <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all border ${
                isSelected
                  ? "bg-[#E58A2B] text-black border-[#E58A2B] shadow-md shadow-[#E58A2B]/20"
                  : "bg-white/5 text-gray-300 border-white/10 hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
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
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="px-3 py-1 rounded-full bg-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-bold uppercase">
                  {activeProject.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">{activeProject.name}</h3>
                <p className="text-gray-300 text-sm mt-2 font-light">{activeProject.heroDescription}</p>
              </div>

              {/* Features */}
              <div>
                <p className="text-xs font-mono font-bold text-[#E58A2B] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> {t("featuredProjects.coreFeatures")}
                </p>
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
                <p className="text-xs font-mono font-bold text-[#E58A2B] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> {t("featuredProjects.technologiesUsed")}
                </p>
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
                  <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> {t("featuredProjects.engineeringSolutions")}
                  </p>
                  <div className="space-y-3">
                    {activeProject.challenges.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#0B0C10] border border-white/10 space-y-1 text-xs sm:text-sm">
                        <p className="text-amber-300 font-semibold">{t("common.challenge")} {item.challenge}</p>
                        <p className="text-gray-300 font-light">{t("common.solutionLabel")} {item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center flex-wrap gap-3">
                <Link
                  href={`/project/${activeProject.id}`}
                  className="font-mono text-xs font-bold text-[#E58A2B] hover:underline"
                >
                  {t("featuredProjects.dedicatedCase")}
                </Link>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#E58A2B] text-black font-bold text-sm hover:bg-[#F5A642] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{t("featuredProjects.viewRepo")}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
