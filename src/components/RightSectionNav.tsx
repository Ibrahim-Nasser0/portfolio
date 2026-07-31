"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const RightSectionNav = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const sections = [
    { id: "hero", label: "INTRO" },
    { id: "projects", label: "WORK" },
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "CAREER" },
    { id: "skills", label: "STACK" },
    { id: "certificates", label: "CREDENTIALS" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
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
  }, []);

  return (
    <nav
      aria-label="Section shortcuts"
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
              className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ${
                isActive
                  ? "text-[#E58A2B] opacity-100 font-bold translate-x-0"
                  : "text-gray-400 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              }`}
            >
              {sec.label}
            </span>

            {/* Dash Bar Line */}
            <span
              className={`h-[2px] rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-[#E58A2B] shadow-sm shadow-[#E58A2B]/50"
                  : "w-4 bg-white/20 group-hover:w-8 group-hover:bg-white/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};
