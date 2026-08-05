"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Download, Menu, X, Home, User, Briefcase, Award, BookOpen, Cpu, History, ChevronDown, Mail, MessageSquare, ExternalLink, Globe } from "lucide-react";
import { Github, Linkedin, Whatsapp } from "@/components/icons/SocialIcons";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AmbientAudioPlayer } from "@/components/ui/AmbientAudioPlayer";
import { useTranslation } from "@/context/LanguageContext";

export const Navbar = () => {
  const pathname = usePathname();
  const { locale, toggleLocale, t } = useTranslation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [contactPopoverOpen, setContactPopoverOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Primary navigation links including Home
  const primaryLinks = [
    { name: t("nav.home"), href: "/", icon: Home },
    { name: t("nav.work"), href: "/work", icon: Briefcase },
    { name: t("nav.about"), href: "/about", icon: User },
    { name: t("nav.insights"), href: "/insights", icon: BookOpen },
  ];

  // Secondary sub-pages under "More ▾"
  const secondaryLinks = [
    { name: t("nav.stack"), href: "/stack", icon: Cpu, desc: t("nav.stackDesc") },
    { name: t("nav.changelog"), href: "/changelog", icon: History, desc: t("nav.changelogDesc") },
    { name: t("nav.credentials"), href: "/recognition", icon: Award, desc: t("nav.credentialsDesc") },
  ];

  const allLinks = [...primaryLinks, ...secondaryLinks];
  const isMoreActive = secondaryLinks.some((l) => l.href === pathname);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setContactPopoverOpen(false);
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
    }, 350);
  };

  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`;

  const contactChannels = [
    {
      name: t("nav.whatsappDirect"),
      desc: personalInfo.phone,
      href: whatsappUrl,
      icon: Whatsapp,
    },
    {
      name: t("nav.linkedinProfile"),
      desc: t("nav.linkedinDesc"),
      href: personalInfo.linkedinUrl,
      icon: Linkedin,
    },
    {
      name: t("nav.githubRepos"),
      desc: t("nav.githubDesc"),
      href: personalInfo.githubUrl,
      icon: Github,
    },
    {
      name: t("nav.emailInbox"),
      desc: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      name: t("nav.downloadCV"),
      desc: t("nav.cvDesc"),
      href: personalInfo.cvUrl,
      icon: Download,
    },
  ];

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 py-3.5 px-3.5 sm:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left: Brand Logo Pill */}
          <Link
            href="/"
            aria-label="Ibrahim Nasser Home Page"
            className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#15171E]/90 backdrop-blur-xl border border-white/10 shadow-xl group hover:border-[#E58A2B]/50 transition-all shrink-0"
          >
            <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#E58A2B]" />
            </div>
            <span dir="ltr" className="dir-ltr font-display text-sm sm:text-lg font-bold tracking-tight text-white">
              Ibrahim<span className="text-[#E58A2B]">.Nasser</span>
            </span>
          </Link>

          {/* Center: Desktop Primary Navigation Pill */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#15171E]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
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

            {/* Sticky "More" Dropdown */}
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
                <span>{t("nav.more")}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#E58A2B] transition-transform duration-300 ${moreDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Popover Dropdown */}
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

          {/* Right: Symmetrical Desktop CTA Actions Dock */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Desktop Language Toggle Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#15171E] border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-white font-mono text-xs transition-all cursor-pointer shadow-md active:scale-95"
              title="Switch Language (EN / AR)"
            >
              <Globe className="w-3.5 h-3.5 text-[#E58A2B]" />
              <span className="font-bold uppercase">{locale === "en" ? "AR" : "EN"}</span>
            </button>

            <AmbientAudioPlayer />

            {/* Symmetrical Connect CTA Button */}
            <div ref={contactRef} className="relative">
              <button
                onClick={() => setContactPopoverOpen(!contactPopoverOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 font-mono text-xs shadow-lg ${
                  contactPopoverOpen
                    ? "bg-[#E58A2B] text-black font-bold border-[#E58A2B]"
                    : "bg-[#E58A2B] hover:bg-[#F5A642] text-black font-bold border-transparent shadow-[#E58A2B]/20"
                }`}
                aria-expanded={contactPopoverOpen}
              >
                <MessageSquare className="w-3.5 h-3.5 text-black" />
                <span>{t("nav.connect")}</span>
                <ChevronDown className={`w-3 h-3 text-black transition-transform duration-300 ${contactPopoverOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Complete Contact Channels & Résumé Popover */}
              <AnimatePresence>
                {contactPopoverOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-[#15171E] border border-white/15 rounded-3xl p-4 shadow-2xl backdrop-blur-2xl space-y-3 z-50 ring-1 ring-black/50"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <span className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-wider">
                        {t("nav.contactChannels")}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/30 text-[#E58A2B] text-[10px] font-mono font-bold tracking-wider">
                        {t("nav.direct")}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {contactChannels.map((chan) => {
                        const Icon = chan.icon;
                        return (
                          <a
                            key={chan.name}
                            href={chan.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setContactPopoverOpen(false)}
                            className="group/item flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-[#E58A2B]/40 transition-all duration-300"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-xl bg-white/5 text-[#E58A2B] group-hover/item:bg-[#E58A2B] group-hover/item:text-black transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-mono font-bold text-white group-hover/item:text-[#E58A2B] transition-colors">
                                  {chan.name}
                                </div>
                                <div className="text-[10px] text-gray-400 font-mono truncate max-w-[160px]">
                                  {chan.desc}
                                </div>
                              </div>
                            </div>

                            <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-white transition-colors" />
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Navigation Controls & Language Switcher */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Top-Bar Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#15171E]/95 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-white font-mono text-xs transition-all cursor-pointer shadow-md active:scale-95 shrink-0"
              title="Switch Language (EN / AR)"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#E58A2B]" />
              <span className="font-bold uppercase">{locale === "en" ? "AR" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-[#15171E]/90 border border-white/10 text-gray-300 hover:text-white backdrop-blur-md shadow-lg"
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
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden pointer-events-auto mt-3 max-w-7xl mx-auto bg-[#15171E]/95 border border-white/10 rounded-2xl p-5 backdrop-blur-2xl shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            >
              <div className="grid grid-cols-2 gap-2">
                {allLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 p-3 min-h-[44px] rounded-xl font-mono text-xs transition-all ${
                        isActive
                          ? "bg-[#E58A2B] text-black font-bold shadow-md shadow-[#E58A2B]/20"
                          : "bg-white/5 border border-white/5 text-gray-300 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Direct Quick Contact Buttons inside Drawer */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="font-mono text-[10px] font-bold text-[#E58A2B] uppercase tracking-wider block">
                  {t("nav.contactChannels")}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-mono font-medium hover:border-[#E58A2B]/40"
                  >
                    <Whatsapp className="w-4 h-4 text-[#E58A2B]" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-mono font-medium hover:border-[#E58A2B]/40"
                  >
                    <Mail className="w-4 h-4 text-[#E58A2B]" />
                    <span className="truncate">Email</span>
                  </a>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2.5">
                {/* Mobile Drawer Audio & Language Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleLocale}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white font-mono text-xs font-bold active:scale-95 transition-all"
                  >
                    <Globe className="w-4 h-4 text-[#E58A2B]" />
                    <span>{locale === "en" ? "العربية (AR)" : "English (EN)"}</span>
                  </button>

                  <AmbientAudioPlayer />
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#E58A2B]"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#E58A2B]"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-mono font-bold text-black bg-[#E58A2B] hover:bg-[#F5A642] rounded-full shadow-md transition-all block"
                >
                  {t("nav.resume")} ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
