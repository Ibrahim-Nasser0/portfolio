import React from "react";
import { projects } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/features/project-detail/components/ProjectDetailClient";

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
    <ProjectDetailClient
      currentIndex={currentIndex}
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
