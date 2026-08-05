"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectModel } from "@/data/portfolioData";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import { TiltCard } from "@/components/ui/TiltCard";
import { useTranslation } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: ProjectModel;
  index: number;
  onQuickView: (project: ProjectModel) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onQuickView,
}) => {
  const { t } = useTranslation();

  return (
    <TiltCard className="h-full">
      <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-[#15171E] hover:border-[#E58A2B]/60 transition-all duration-700 hover:-translate-y-1.5 shadow-2xl shadow-black/80">
        {/* Card Media Banner */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0C10]">
          <Image
            src={project.mockupUrl || project.imageUrl}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 360px, (max-width: 1024px) 360px, 360px"
            quality={65}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15171E] via-[#15171E]/20 to-transparent opacity-85" />

          {/* Top Badges Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-black/70 border border-white/10 text-[#E58A2B] font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/70 border border-white/10 text-white font-mono text-[11px] font-bold backdrop-blur-md">
              0{index + 1}
            </span>
          </div>

          {/* Hover Floating Action Center Pill */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E58A2B] text-black font-mono text-xs font-bold shadow-2xl shadow-[#E58A2B]/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>{t("projects.exploreCaseStudy")} ↗</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-7 flex flex-1 flex-col justify-between space-y-5">
          <div className="space-y-2.5">
            <div className="flex items-start justify-between gap-3">
              <Link href={`/project/${project.id}`} className="group-hover:text-[#E58A2B] transition-colors">
                <h3 className="font-display text-2xl font-bold text-white leading-tight tracking-tight">
                  {project.name}
                </h3>
              </Link>
              <Link
                href={`/project/${project.id}`}
                aria-label={`View ${project.name} Case Study`}
                className="p-2 rounded-full bg-white/5 group-hover:bg-[#E58A2B] text-gray-400 group-hover:text-black transition-all shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-gray-300 text-sm font-light leading-relaxed line-clamp-2">
              {project.heroDescription}
            </p>
          </div>

          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.skillsUsed.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-mono text-gray-300 bg-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Card Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs">
              <Link
                href={`/project/${project.id}`}
                className="font-bold text-[#E58A2B] hover:underline flex items-center gap-1"
              >
                <span>{t("services.exploreCaseStudies")}</span>
                <span>→</span>
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onQuickView(project)}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  aria-label="Quick View Modal"
                >
                  <Eye className="w-3.5 h-3.5 text-[#E58A2B]" />
                  <span>Quick View</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};
