"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/context/LanguageContext";

interface SectionConfig {
  id: string;
  label: string;
}

export const RightSectionNav = () => {
  const pathname = usePathname();
  const { isRTL, t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("");

  // Determine sections dynamically based on active page route
  const getPageSections = (): SectionConfig[] => {
    if (pathname === "/") {
      return [
        { id: "hero", label: t("rightNav.intro") },
        { id: "capabilities", label: t("rightNav.solutions") },
        { id: "impact", label: t("rightNav.impact") },
        { id: "projects", label: t("rightNav.work") },
        { id: "architecture", label: t("rightNav.architecture") },
        { id: "performance", label: t("rightNav.profiling") },
        { id: "testimonials", label: t("rightNav.testimonials") },
        { id: "stack", label: t("rightNav.stack") },
        { id: "about", label: t("rightNav.about") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    } else if (pathname === "/work") {
      return [
        { id: "projects", label: t("rightNav.caseStudies") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    } else if (pathname === "/about") {
      return [
        { id: "about", label: t("rightNav.bioMatrix") },
        { id: "experience", label: t("rightNav.timeline") },
        { id: "skills", label: t("rightNav.capabilities") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    } else if (pathname === "/playground") {
      return [
        { id: "playground", label: t("rightNav.flutterEngine") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    } else if (pathname === "/stack") {
      return [
        { id: "stack", label: t("rightNav.workspace") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    } else if (pathname === "/changelog") {
      return [
        { id: "changelog", label: t("rightNav.activityStream") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    } else if (pathname === "/recognition") {
      return [
        { id: "certificates", label: t("rightNav.credentials") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    } else if (pathname === "/insights") {
      return [
        { id: "insights", label: t("rightNav.publications") },
        { id: "contact", label: t("rightNav.contact") },
      ];
    }
    return [
      { id: "hero", label: t("rightNav.intro") },
      { id: "contact", label: t("rightNav.contact") },
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

  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Navbar height offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Floating section navigation"
      className="fixed top-1/2 -translate-y-1/2 right-8 z-40 hidden xl:flex flex-col gap-5 items-end pointer-events-auto dir-ltr"
      dir="ltr"
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={(e) => handleSectionClick(e, sec.id)}
            className="group flex items-center justify-end gap-3 py-1 cursor-pointer"
          >
            {/* Label Text (Always on the inside / left side of the dash line) */}
            <span
              className={`whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                isActive
                  ? "text-[#E58A2B] opacity-100 translate-x-0"
                  : "text-[#94A3B8] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              }`}
            >
              {sec.label}
            </span>

            {/* Dash Bar Line (Always on the outside / right edge) */}
            <span
              className={`w-8 h-[2px] rounded-full transition-transform duration-300 origin-right ${
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
