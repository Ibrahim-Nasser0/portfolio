"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Download, Menu, X, Home, User, Briefcase, Award, BookOpen, Code2, Cpu, History, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/SocialIcons";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AmbientAudioPlayer } from "@/components/ui/AmbientAudioPlayer";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Navbar = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Core sleek primary navigation links
  const primaryLinks = [
    { name: "Work", href: "/work", icon: Briefcase },
    { name: "Playground", href: "/playground", icon: Code2 },
    { name: "About", href: "/about", icon: User },
    { name: "Insights", href: "/insights", icon: BookOpen },
  ];

  // Secondary sub-pages under "More ▾"
  const secondaryLinks = [
    { name: "Stack & Setup", href: "/stack", icon: Cpu, desc: "Tools, Hardware & IDE plugins" },
    { name: "Changelog", href: "/changelog", icon: History, desc: "Commits, articles & talks log" },
    { name: "Credentials", href: "/recognition", icon: Award, desc: "Certificates & recommendations" },
  ];

  const allLinks = [
    { name: "Home", href: "/", icon: Home },
    ...primaryLinks,
    ...secondaryLinks,
  ];

  const isMoreActive = secondaryLinks.some((l) => l.href === pathname);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnterMore = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMoreDropdownOpen(true);
  };

  const handleMouseLeaveMore = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 350); // 350ms delay so dropdown never closes abruptly while moving mouse!
  };

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 py-4 px-4 sm:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Ibrahim Nasser Home Page"
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#15171E]/90 backdrop-blur-xl border border-white/10 shadow-xl group hover:border-[#E58A2B]/50 transition-all"
          >
            <div className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E58A2B]" />
            </div>
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white">
              Ibrahim<span className="text-[#E58A2B]">.Nasser</span>
            </span>
          </Link>

          {/* Sleek Desktop Navigation (Compact 4 Core Links + More Dropdown) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#15171E]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            {/* Home Icon Button */}
            <Link
              href="/"
              className={`p-2 rounded-full text-xs font-mono transition-colors ${
                pathname === "/" ? "bg-[#E58A2B] text-black" : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              title="Home"
            >
              <Home className="w-4 h-4" />
            </Link>

            {primaryLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors z-10 ${
                    isActive ? "text-black font-bold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-[#E58A2B] z-[-1] shadow-md shadow-[#E58A2B]/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-[#E58A2B]"}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Robust Click & Hover Sticky "More" Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnterMore}
              onMouseLeave={handleMouseLeaveMore}
            >
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  isMoreActive || moreDropdownOpen
                    ? "bg-white/10 text-[#E58A2B] font-bold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#E58A2B] transition-transform duration-300 ${moreDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Popover Dropdown with Invisible Bridge Padding */}
              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 pt-2 w-64 z-50"
                  >
                    <div className="bg-[#15171E] border border-white/15 rounded-2xl p-2 shadow-2xl backdrop-blur-2xl space-y-1 ring-1 ring-black/50">
                      {secondaryLinks.map((item) => {
                        const Icon = item.icon;
                        const isSubActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMoreDropdownOpen(false)}
                            className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                              isSubActive
                                ? "bg-[#E58A2B]/15 border border-[#E58A2B]/40 text-[#E58A2B]"
                                : "hover:bg-white/10 text-gray-300 hover:text-white"
                            }`}
                          >
                            <Icon className="w-4 h-4 mt-0.5 text-[#E58A2B] shrink-0" />
                            <div>
                              <div className="text-xs font-mono font-bold text-white">{item.name}</div>
                              <div className="text-[10px] text-gray-400 font-light mt-0.5">{item.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <AmbientAudioPlayer />

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#15171E]/90 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] backdrop-blur-xl shadow-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <MagneticButton href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#E58A2B] hover:bg-[#F5A642] rounded-full transition-all shadow-lg shadow-[#E58A2B]/25">
                <Download className="w-3.5 h-3.5" />
                <span>Résumé ↗</span>
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <AmbientAudioPlayer />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-full bg-[#15171E]/90 border border-white/10 text-gray-300 hover:text-white backdrop-blur-md shadow-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E58A2B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Categorized Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="md:hidden pointer-events-auto mt-3 max-w-7xl mx-auto bg-[#15171E]/95 border border-white/10 rounded-2xl p-6 backdrop-blur-2xl shadow-2xl space-y-4"
            >
              <div className="grid grid-cols-2 gap-2.5">
                {allLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl font-mono text-xs transition-all ${
                        isActive
                          ? "bg-[#E58A2B] text-black font-bold"
                          : "bg-white/5 border border-white/5 text-gray-300 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-[#E58A2B]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-mono font-bold text-black bg-[#E58A2B] rounded-full shadow-md"
                >
                  Résumé ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
