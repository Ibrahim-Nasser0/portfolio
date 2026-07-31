import React from "react";
import { projects } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, ShieldAlert } from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <AuroraBackground>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 transition-all text-sm font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-500/30 backdrop-blur-xl shadow-2xl space-y-8">
          {/* Header */}
          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">{project.name}</h1>
            <p className="text-gray-300 text-base mt-2 font-light">{project.heroDescription}</p>
          </div>

          {/* Project Image Banner */}
          <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-gray-900 border border-white/10">
            <Image
              src={project.mockupUrl || project.imageUrl}
              alt={project.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Description Points */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Overview</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-light">
              {project.descriptionPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
              {project.features.map((feat, i) => (
                <li key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" /> Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techMobile.concat(project.techBackend, project.techTools).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" /> Engineering Challenges & Solutions
              </h3>
              <div className="space-y-3">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 text-sm">
                    <p className="text-amber-300 font-semibold">Challenge: {item.challenge}</p>
                    <p className="text-gray-300 font-light">Solution: {item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-6 border-t border-white/10 flex justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Code Repository</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
