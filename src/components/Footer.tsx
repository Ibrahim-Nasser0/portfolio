"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Copy, Check, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/SocialIcons";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#090A0D]/90 backdrop-blur-2xl text-gray-300 pt-20 pb-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Big Call To Action Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[#E58A2B]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Available for Freelance & Mobile Engineering Roles</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s build something <span className="text-[#E58A2B]">extraordinary</span> together.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg font-light max-w-2xl">
              Got an ambitious mobile or desktop application in mind? Reach out directly to discuss architecture, development, or design collaboration.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E58A2B] hover:bg-[#F5A642] text-black font-mono font-bold text-sm shadow-xl shadow-[#E58A2B]/20 transition-all text-center flex items-center justify-center gap-2 group"
            >
              <Mail className="w-4 h-4" />
              <span>Send Me an Email ↗</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] font-mono text-xs text-gray-300 hover:text-white transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#E58A2B]" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Multi-Column Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-16">
          {/* Brand Info & Local Time (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight text-white block">
              Ibrahim Nasser<span className="text-[#E58A2B]">.</span>
            </Link>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Full-Stack Mobile Developer & Flutter Lead specializing in Clean Architecture, BLoC, and SOLID software principles.
            </p>

            <div className="pt-2 space-y-2 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E58A2B]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Local Time: {currentTime || "Ismailia (UTC+3)"}</span>
              </div>
            </div>
          </div>

          {/* Sitemap Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  Work / Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  About & Experience
                </Link>
              </li>
              <li>
                <Link href="/recognition" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  Credentials & Badges
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Systems (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em]">
              Featured Work
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <Link href="/project/hungry-app" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  Hungry (E-Commerce Food App)
                </Link>
              </li>
              <li>
                <Link href="/project/donors-management" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  Donors Management System
                </Link>
              </li>
              <li>
                <Link href="/project/portfolio-web" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  Interactive Developer Portfolio
                </Link>
              </li>
              <li>
                <Link href="/project/bookly" className="text-gray-400 hover:text-[#E58A2B] transition-colors">
                  Bookly (E-Book Store)
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Connections (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em]">
              Connect
            </h4>
            <div className="space-y-2.5 font-mono text-sm">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#E58A2B] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub ↗</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#E58A2B] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn ↗</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[#E58A2B] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Phone ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Ibrahim Nasser Ibrahim. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Designed & Built with Next.js</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E58A2B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
