import React from "react";
import { projects } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldAlert,
  ExternalLink,
  Sparkles,
  Code,
  Smartphone,
  Server,
  Database,
  Terminal,
} from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} Case Study · Ibrahim Nasser`,
    description: project.heroDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentIndex = projects.findIndex((p) => p.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />

      <div className="pt-28 pb-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* Top Sticky Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15171E] border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] font-mono text-xs font-semibold transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#E58A2B]" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="flex items-center gap-3 font-mono text-xs text-[#E58A2B]">
            <span className="px-3 py-1 rounded-full bg-[#E58A2B]/15 border border-[#E58A2B]/30 font-bold uppercase">
              {project.category}
            </span>
            <span className="text-gray-400 font-bold">
              0{currentIndex + 1} / 0{projects.length}
            </span>
          </div>
        </div>

        {/* Hero Section Split: Editorial Title + Meta Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Title & Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Production Software Architecture</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.02]">
              {project.name}
            </h1>

            <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed">
              {project.heroDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E58A2B] hover:bg-[#F5A642] text-black font-mono font-bold text-sm shadow-xl shadow-[#E58A2B]/20 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Explore Source Code ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Metadata Matrix Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-6">
            <h3 className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-4">
              [ Case Specifications ]
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 uppercase">Role</span>
                <span className="font-bold text-white">Flutter Lead & Dev</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 uppercase">Architecture</span>
                <span className="font-bold text-[#E58A2B]">Clean Architecture</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 uppercase">State Pattern</span>
                <span className="font-bold text-white">BLoC / Cubit</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 uppercase">Target Platforms</span>
                <span className="font-bold text-gray-200">{project.category}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 uppercase">Code Quality</span>
                <span className="font-bold text-emerald-400">SOLID Standard</span>
              </div>
            </div>
          </div>
        </div>

        {/* High-Fidelity Mockup Showcase Frame */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#0B0C10] border border-white/10 shadow-2xl group">
          <Image
            src={project.mockupUrl || project.imageUrl}
            alt={project.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15171E] via-transparent to-transparent opacity-60" />
        </div>

        {/* Bento Grid Section 01: Product Strategy & Overview */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em] font-bold">
              01 // Scope & Overview
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-white">
            Product Purpose & Engineering Objectives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.descriptionPoints.map((pt, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#E58A2B] font-mono text-xs font-bold">
                  <span>Key Objective 0{i + 1}</span>
                </div>
                <p className="text-gray-300 text-sm font-light leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid Section 02: Core Application Features */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em] font-bold">
              02 // Feature Breakdown
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-white">
            Core Features & User Workflows
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#E58A2B]/40 transition-all space-y-3 group"
              >
                <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] w-fit group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                  {feat}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid Section 03: Technology Stack */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em] font-bold">
              03 // Engineering Stack
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-white">
            Technologies & Frameworks Breakdown
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            {/* Mobile Stack */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-[#E58A2B] font-bold">
                <Smartphone className="w-4 h-4" />
                <span>Mobile & UI Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techMobile.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Stack */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-[#E58A2B] font-bold">
                <Server className="w-4 h-4" />
                <span>Backend & APIs</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techBackend.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & DB Stack */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-[#E58A2B] font-bold">
                <Database className="w-4 h-4" />
                <span>Databases & Tools</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techTools.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Section 04: Resolved Architecture Challenges */}
        {project.challenges.length > 0 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold">
                04 // Problem Solving
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold text-white">
              Engineering Challenges & Resolved Architecture
            </h2>

            <div className="space-y-4">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <p className="text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                    Challenge: {item.challenge}
                  </p>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    Solution: {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dual Split Previous / Next Case Study Footer Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
          <Link
            href={`/project/${prevProject.id}`}
            className="p-6 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all group flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-[#E58A2B] group-hover:scale-110 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">
                Previous Case
              </span>
              <span className="font-display text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                {prevProject.name}
              </span>
            </div>
          </Link>

          <Link
            href={`/project/${nextProject.id}`}
            className="p-6 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all group flex items-center justify-between gap-4 text-right"
          >
            <div className="flex-1">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">
                Next Case
              </span>
              <span className="font-display text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                {nextProject.name}
              </span>
            </div>
            <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-[#E58A2B] group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </AuroraBackground>
  );
}
