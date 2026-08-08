"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import {
  ArrowUp,
  Copy,
  Check,
  Mail,
  MapPin,
  Download,
  Cpu,
  History,
  Send,
  CheckCircle2,
  Home,
  Briefcase,
  User,
  BookOpen,
  Utensils,
  HeartHandshake,
  Book,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Github, Linkedin, Whatsapp } from "@/components/icons/SocialIcons";
import confetti from "canvas-confetti";
import { useTranslation } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({
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
    if (!formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#E58A2B", "#F5A642", "#FFFFFF"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: "", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`;

  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-[#0B0C0E] text-gray-300 pt-14 sm:pt-16 pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[250px] bg-[#E58A2B]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 relative z-10">
        {/* Streamlined Contact Card */}
        <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all duration-500 shadow-2xl backdrop-blur-xl overflow-hidden group/card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (6 cols): Direct Contact Info & Uniform Icon Dock */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
                </span>
                <span>{t("footer.available")}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t("footer.headline")} <span className="text-[#E58A2B]">{t("footer.headlineAccent")}</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                {t("footer.desc")}
              </p>

              {/* Ultra-Clean Uniform Icon Action Dock (WhatsApp, LinkedIn, GitHub, Email, CV) */}
              <div className="flex items-center gap-3 pt-2">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] hover:bg-[#E58A2B]/10 hover:shadow-[0_0_20px_rgba(229,138,43,0.25)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0"
                  title="WhatsApp"
                >
                  <Whatsapp className="w-4 h-4 shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] hover:bg-[#E58A2B]/10 hover:shadow-[0_0_20px_rgba(229,138,43,0.25)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] hover:bg-[#E58A2B]/10 hover:shadow-[0_0_20px_rgba(229,138,43,0.25)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 shrink-0" />
                </a>

                {/* Copy Email Icon Button */}
                <button
                  onClick={handleCopyEmail}
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] hover:bg-[#E58A2B]/10 hover:shadow-[0_0_20px_rgba(229,138,43,0.25)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer relative group"
                  title={copied ? t("footer.emailCopied") : t("footer.copyEmail")}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#E58A2B] shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 shrink-0" />
                  )}
                </button>

                {/* Download CV PDF Icon Button */}
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] hover:bg-[#E58A2B]/10 hover:shadow-[0_0_20px_rgba(229,138,43,0.25)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0"
                  title={t("footer.cvPdf")}
                >
                  <Download className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Right Column (6 cols): Streamlined Direct Message Form */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-[#0B0C0E] border border-white/10 hover:border-[#E58A2B]/30 transition-all duration-300 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5" /> {t("footer.outreach")}
                </span>
                <span className="text-[10px] text-gray-400 font-mono">{t("footer.instantDispatch")}</span>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#E58A2B] mx-auto animate-bounce" />
                  <h4 className="font-display text-lg font-bold text-white">{t("contact.successTitle")}</h4>
                  <p className="text-gray-400 text-xs font-light">{t("contact.successMessage")}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-1">
                      {t("contact.emailLabel")}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#15171E] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-xs font-mono transition-all duration-300 hover:border-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-1">
                      {t("contact.messageLabel")}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("contact.messagePlaceholder")}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#15171E] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-xs font-mono transition-all duration-300 hover:border-white/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#E58A2B] hover:bg-[#F5A642] text-black font-mono font-bold text-xs shadow-lg shadow-[#E58A2B]/20 hover:shadow-[#E58A2B]/40 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t("contact.sendButton")}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Clean 3-Column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-16">
          {/* Brand Info & Local Time */}
          <div className="space-y-4">
            <Link
              href="/"
              dir="ltr"
              className="dir-ltr inline-flex items-center font-display text-3xl font-bold tracking-tight text-white group"
            >
              <span>Ibrahim</span>
              <span className="text-[#E58A2B] group-hover:translate-x-1 transition-transform">.Nasser</span>
            </Link>

            <p className="text-gray-400 text-sm font-light leading-relaxed">
              {t("hero.tagline")}
            </p>

            <div className="space-y-2 font-mono text-xs text-gray-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E58A2B]" />
                <span>{t("hero.location")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
                </span>
                <span>{t("footer.localTime")} {currentTime || "Ismailia (UTC+3)"}</span>
              </div>
            </div>
          </div>

          {/* Navigation Sitemap */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-[0.2em]">
              {t("footer.navigation")}
            </p>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <Home className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform" />
                  <span>{t("footer.home")}</span>
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <Briefcase className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform" />
                  <span>{t("footer.work")}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <User className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform" />
                  <span>{t("footer.about")}</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <BookOpen className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform" />
                  <span>{t("footer.insights")}</span>
                </Link>
              </li>
              <li>
                <Link href="/stack" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <Cpu className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform" />
                  <span>{t("footer.stack")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Systems / Case Studies */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-[0.2em]">
              {t("footer.caseStudies")}
            </p>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <Link href="/project/hungry-app" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group truncate">
                  <Utensils className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">Hungry (Food App)</span>
                </Link>
              </li>
              <li>
                <Link href="/project/donors-management" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group truncate">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">Donors System</span>
                </Link>
              </li>
              <li>
                <Link href="/project/bookly" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group truncate">
                  <Book className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">Bookly App</span>
                </Link>
              </li>
              <li>
                <Link href="/project/portfolio-web" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group truncate">
                  <Globe className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">Developer Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2.5 group truncate">
                  <History className="w-3.5 h-3.5 text-[#E58A2B] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">{t("footer.changelog")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Ibrahim Nasser Ibrahim. {t("footer.copyright")}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#15171E] border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <span>{t("footer.backToTop")}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E58A2B]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
