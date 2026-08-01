"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SectionConfig {
  id: string;
  label: string;
}

export const RightSectionNav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  // Determine sections dynamically based on active page route
  const getPageSections = (): SectionConfig[] => {
    if (pathname === "/") {
      return [
        { id: "hero", label: "INTRO" },
        { id: "impact", label: "IMPACT" },
        { id: "projects", label: "WORK" },
        { id: "playground", label: "ENGINE" },
        { id: "architecture", label: "ARCHITECTURE" },
        { id: "performance", label: "BENCHMARKS" },
        { id: "about", label: "ABOUT" },
        { id: "contact", label: "CONTACT" },
      ];
    } else if (pathname === "/work") {
      return [
        { id: "projects", label: "CASE STUDIES" },
        { id: "contact", label: "CONTACT" },
      ];
    } else if (pathname === "/about") {
      return [
        { id: "about", label: "BIO MATRIX" },
        { id: "experience", label: "TIMELINE" },
        { id: "skills", label: "CAPABILITIES" },
        { id: "contact", label: "CONTACT" },
      ];
    } else if (pathname === "/playground") {
      return [
        { id: "playground", label: "FLUTTER ENGINE" },
        { id: "contact", label: "CONTACT" },
      ];
    } else if (pathname === "/stack") {
      return [
        { id: "stack", label: "WORKSPACE" },
        { id: "contact", label: "CONTACT" },
      ];
    } else if (pathname === "/changelog") {
      return [
        { id: "changelog", label: "ACTIVITY STREAM" },
        { id: "contact", label: "CONTACT" },
      ];
    } else if (pathname === "/recognition") {
      return [
        { id: "certificates", label: "CREDENTIALS" },
        { id: "contact", label: "CONTACT" },
      ];
    } else if (pathname === "/insights") {
      return [
        { id: "insights", label: "PUBLICATIONS" },
        { id: "contact", label: "CONTACT" },
      ];
    }
    return [
      { id: "hero", label: "INTRO" },
      { id: "contact", label: "CONTACT" },
    ];
  };

  const sections = getPageSections();

  useEffect(() => {
    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Floating section navigation"
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-5 pointer-events-auto"
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="group flex items-center justify-end gap-3 py-1 cursor-pointer"
          >
            {/* Label Text */}
            <span
              className={`whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                isActive
                  ? "text-[#E58A2B] opacity-100 translate-x-0"
                  : "text-[#94A3B8] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              }`}
            >
              {sec.label}
            </span>

            {/* Dash Bar Line (GPU-accelerated scale-x transform) */}
            <span
              className={`w-8 h-[2px] rounded-full origin-right transition-transform duration-300 ${
                isActive
                  ? "bg-[#E58A2B] scale-x-100"
                  : "bg-white/30 scale-x-50 group-hover:scale-x-100 group-hover:bg-white/70"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};
