"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Download, Menu, X, Home, User, Briefcase, Award } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/SocialIcons";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export const Navbar = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Work", href: "/work", icon: Briefcase },
    { name: "About", href: "/about", icon: User },
    { name: "Credentials", href: "/recognition", icon: Award },
  ];

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 py-4 px-4 sm:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Ibrahim Nasser Home Page"
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#15171E]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40 group hover:border-[#E58A2B]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E58A2B] transition-all"
          >
            <div className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E58A2B]" />
            </div>
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white">
              Ibrahim<span className="text-[#E58A2B]">.Nasser</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#15171E]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              const isHovered = hoveredLink === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-medium transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E58A2B] ${
                    isActive || isHovered ? "text-white font-bold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="navbarPageIndicator"
                      className={`absolute inset-0 rounded-full z-[-1] ${
                        isActive ? "bg-[#E58A2B] text-black shadow-md shadow-[#E58A2B]/30" : "bg-white/10"
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-[#E58A2B]"}`} />
                  <span className={isActive ? "text-black" : "text-gray-200"}>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#15171E]/80 backdrop-blur-xl border border-white/10 shadow-lg">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-400 hover:text-[#E58A2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E58A2B] rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-400 hover:text-[#E58A2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E58A2B] rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#E58A2B] hover:bg-[#F5A642] rounded-full transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#E58A2B]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Résumé ↗</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-full bg-[#15171E]/90 border border-white/10 text-gray-300 hover:text-white backdrop-blur-md shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E58A2B]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E58A2B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="md:hidden pointer-events-auto mt-3 max-w-7xl mx-auto bg-[#15171E]/95 border border-white/10 rounded-2xl p-6 backdrop-blur-2xl shadow-2xl space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3.5 min-h-[48px] rounded-xl font-mono text-xs transition-all ${
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
                <div className="flex gap-4">
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
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-[#E58A2B]"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 min-h-[44px] flex items-center text-xs font-mono font-bold text-black bg-[#E58A2B] rounded-full shadow-md"
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
