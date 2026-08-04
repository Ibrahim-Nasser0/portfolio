"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectModel } from "@/data/portfolioData";
import {
  Layers,
  ShieldAlert,
  X,
  CheckCircle2,
  ArrowUpRight,
  Search,
  LayoutGrid,
  List,
  Sparkles,
  ExternalLink,
  Code,
} from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeProject, setActiveProject] = useState<ProjectModel | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"overview" | "architecture" | "challenges">("overview");

  const categories = [
    { key: "All", label: t("projects.all") },
    { key: "Mobile", label: t("projects.mobile") },
    { key: "Desktop", label: t("projects.desktop") },
    { key: "Other", label: t("projects.other") },
  ];

  const getCategoryCount = (categoryKey: string) => {
    if (categoryKey === "All") return projects.length;
    return projects.filter((p) => p.category === categoryKey).length;
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.name.toLowerCase().includes(query) ||
      project.heroDescription.toLowerCase().includes(query) ||
      project.skillsUsed.some((s) => s.toLowerCase().includes(query)) ||
      project.techMobile.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Work Page Hero Header */}
      <div className="space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{t("projects.badge")}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.02]">
          {t("projects.title")} <br className="hidden sm:block" />
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
            {t("projects.subtitle")}
          </span>
        </h1>

        <p className="max-w-2xl text-gray-300 text-base sm:text-lg font-light leading-relaxed">
          {t("featuredProjects.subtitle")}
        </p>

        {/* Live Search & Filter Bar Controls */}
        <div className="pt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-white/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = getCategoryCount(cat.key);
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                    selectedCategory === cat.key
                      ? "bg-[#E58A2B] text-black shadow-lg shadow-[#E58A2B]/20 font-bold"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#E58A2B]/40"
                  }`}
                >
                  {cat.label} <span className="opacity-75 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Box & View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stack, tech, or title..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[#15171E] border border-white/10 focus:border-[#E58A2B] text-xs font-mono text-white focus:outline-none placeholder:text-gray-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Switcher Buttons */}
            <div className="flex items-center p-1 rounded-full bg-[#15171E] border border-white/10 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#E58A2B] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-label="List View"
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "list"
                    ? "bg-[#E58A2B] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* No Results Fallback */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center space-y-3 bg-[#15171E] rounded-2xl border border-white/10">
          <Code className="w-12 h-12 text-[#E58A2B] mx-auto opacity-80" />
          <h3 className="font-display text-xl font-bold text-white">No projects found</h3>
          <p className="text-gray-400 text-sm font-mono">
            No case studies match &quot;{searchQuery}&quot;. Try resetting your search filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-2 px-5 py-2 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black font-mono text-xs text-gray-300 font-bold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 3D Grid Mode */}
      {viewMode === "grid" && filteredProjects.length > 0 && (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onQuickView={(p) => {
                    setActiveProject(p);
                    setActiveModalTab("overview");
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Executive List Mode */}
      {viewMode === "list" && filteredProjects.length > 0 && (
        <div className="space-y-4">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group p-6 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-sm font-bold text-[#E58A2B] shrink-0">
                  0{idx + 1}
                </span>

                <div className="space-y-1">
                  <Link href={`/project/${project.id}`}>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                      {project.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-400 font-mono">
                    {project.category} · {project.skillsUsed.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end md:self-auto">
                <Link
                  href={`/project/${project.id}`}
                  className="text-xs font-mono text-[#E58A2B] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Explore Case</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* High-End Multi-Tab Case Study Modal */}
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

              {/* Modal Banner Header */}
              <div>
                <span className="px-3 py-1 rounded-full bg-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-bold uppercase">
                  {activeProject.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
                  {activeProject.name}
                </h3>
                <p className="text-gray-300 text-sm mt-2 font-light leading-relaxed">
                  {activeProject.heroDescription}
                </p>
              </div>

              {/* Modal Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <button
                  onClick={() => setActiveModalTab("overview")}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs transition-colors ${
                    activeModalTab === "overview"
                      ? "bg-[#E58A2B] text-black font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Features & Details
                </button>
                <button
                  onClick={() => setActiveModalTab("architecture")}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs transition-colors ${
                    activeModalTab === "architecture"
                      ? "bg-[#E58A2B] text-black font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Technologies Stack
                </button>
                {activeProject.challenges.length > 0 && (
                  <button
                    onClick={() => setActiveModalTab("challenges")}
                    className={`px-4 py-1.5 rounded-full font-mono text-xs transition-colors ${
                      activeModalTab === "challenges"
                        ? "bg-[#E58A2B] text-black font-bold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Engineering Solutions
                  </button>
                )}
              </div>

              {/* Tab 1: Overview & Features */}
              {activeModalTab === "overview" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold text-[#E58A2B] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Core Application Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-300">
                    {activeProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5 font-light">
                        <span className="text-[#E58A2B] font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tab 2: Architecture & Stack */}
              {activeModalTab === "architecture" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold text-[#E58A2B] uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Software Engineering Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techMobile.concat(activeProject.techBackend, activeProject.techTools).map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Challenges */}
              {activeModalTab === "challenges" && activeProject.challenges.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> Architecture Challenges & Resolved Solutions
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
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/project/${activeProject.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E58A2B] hover:underline"
                >
                  <span>Dedicated Case Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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
