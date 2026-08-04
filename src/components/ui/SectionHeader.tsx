"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  index?: string;
  badge: string;
  title: string;
  highlightTitle?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  badge,
  title,
  highlightTitle,
  subtitle,
  align = "center",
}) => {
  const isCentered = align === "center";

  return (
    <div className={`space-y-4 mb-16 ${isCentered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {/* Badge Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold">
        {index && (
          <>
            <span className="text-[#94A3B8] font-mono font-bold">{index}</span>
            <span className="text-white/20">|</span>
          </>
        )}
        <Sparkles className="w-3.5 h-3.5" />
        <span>{badge}</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
        {title}{" "}
        {highlightTitle && (
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors block sm:inline">
            {highlightTitle}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
