"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Copy, Check, Mail, MapPin, Download, Code2, Cpu, History, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin, Whatsapp } from "@/components/icons/SocialIcons";
import confetti from "canvas-confetti";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#E58A2B", "#F5A642", "#FFFFFF"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`;

  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-[#090A0D]/95 backdrop-blur-2xl text-gray-300 pt-20 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Decorative Ambient Halo Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#E58A2B]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[200px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* All-in-One Top Contact & Direct Connect Hero Block */}
        <div className="relative p-8 sm:p-10 lg:p-12 rounded-[32px] bg-[#15171E]/90 border border-white/10 shadow-2xl overflow-hidden">
          {/* Ambient Halo Inside Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E58A2B]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column (6 cols): Headline, Availability & Full Social Action Dock */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Available for Freelance & Mobile Engineering Roles</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to build high-performance <span className="text-[#E58A2B]">mobile applications?</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Reach out directly via WhatsApp, LinkedIn, GitHub, or send a direct email to discuss architecture and development collaboration.
              </p>

              {/* Complete Direct Action Pill Dock (WhatsApp, LinkedIn, GitHub, Email, CV) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#E58A2B] hover:bg-[#F5A642] text-black font-mono font-bold text-xs shadow-md transition-all flex items-center gap-1.5 active:scale-95"
                  title="WhatsApp Chat"
                >
                  <Whatsapp className="w-4 h-4 text-black" />
                  <span>WhatsApp ↗</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/15 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/15 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-full bg-white/5 border border-white/15 hover:border-[#E58A2B] font-mono text-xs font-semibold text-gray-200 hover:text-white transition-all flex items-center gap-1.5 active:scale-95"
                  title="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#E58A2B]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white/5 border border-[#E58A2B]/40 text-[#E58A2B] hover:bg-[#E58A2B] hover:text-black font-mono font-bold text-xs transition-all flex items-center gap-1.5 active:scale-95"
                  title="Download Resume PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CV (PDF) ↗</span>
                </a>
              </div>
            </div>

            {/* Right Column (6 cols): Direct Email Form */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-[#0B0C10]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> Direct Email Outreach
                </span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">🟢 Instant Dispatch</span>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-[#E58A2B] mx-auto animate-bounce" />
                  <h4 className="font-display text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-gray-400 text-xs font-light">Thank you for reaching out. I will respond to your email promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#15171E] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-xs font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#15171E] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-xs font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#15171E] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-xs font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#E58A2B] hover:bg-[#F5A642] text-black font-mono font-bold text-xs shadow-lg shadow-[#E58A2B]/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Clean Balanced 3-Column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-16">
          {/* Brand Info & Local Time */}
          <div className="space-y-4">
            <Link href="/" className="font-display text-3xl font-bold tracking-tight text-white block group">
              Ibrahim<span className="text-[#E58A2B] group-hover:translate-x-1 inline-block transition-transform">.Nasser</span>
            </Link>

            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Flutter Developer & Cross-Platform Mobile Engineer specializing in Clean Architecture, BLoC, and SOLID software design principles.
            </p>

            <div className="space-y-2 font-mono text-xs text-gray-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E58A2B]" />
                <span>{personalInfo.location} · Suez Canal University</span>
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

          {/* Navigation Sitemap */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E58A2B] transition-colors" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E58A2B] transition-colors" />
                  <span>Work & Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/playground" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <Code2 className="w-3.5 h-3.5 text-[#E58A2B]" />
                  <span>Flutter Engine</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E58A2B] transition-colors" />
                  <span>About & Experience</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E58A2B] transition-colors" />
                  <span>Insights & Articles</span>
                </Link>
              </li>
              <li>
                <Link href="/stack" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <Cpu className="w-3.5 h-3.5 text-[#E58A2B]" />
                  <span>Stack & Setup</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Systems */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-[0.2em]">
              Case Studies
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <Link href="/project/hungry-app" className="text-gray-400 hover:text-white transition-colors block truncate">
                  Hungry (Food App)
                </Link>
              </li>
              <li>
                <Link href="/project/donors-management" className="text-gray-400 hover:text-white transition-colors block truncate">
                  Donors System
                </Link>
              </li>
              <li>
                <Link href="/project/bookly" className="text-gray-400 hover:text-white transition-colors block truncate">
                  Bookly App
                </Link>
              </li>
              <li>
                <Link href="/project/portfolio-web" className="text-gray-400 hover:text-white transition-colors block truncate">
                  Developer Portfolio
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-[#E58A2B] transition-colors flex items-center gap-1.5 pt-1">
                  <History className="w-3.5 h-3.5 text-[#E58A2B]" />
                  <span>Changelog</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Ibrahim Nasser Ibrahim. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Designed & Built with Next.js & Tailwind</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#15171E] border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] transition-all shadow-lg active:scale-95"
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
