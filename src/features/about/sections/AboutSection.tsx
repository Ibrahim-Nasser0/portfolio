"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, personalInfo } from "@/data/portfolioData";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Download,
  Sparkles,
  Globe2,
  ShieldCheck,
  Zap,
  Code,
} from "lucide-react";
import { Github, Linkedin, Whatsapp } from "@/components/icons/SocialIcons";
import Image from "next/image";
import { TiltCard } from "@/components/ui/TiltCard";
import { useTranslation } from "@/context/LanguageContext";

export const AboutSection = () => {
  const { t } = useTranslation();

  const engineeringValues = [
    {
      title: t("about.value1Title"),
      description: t("about.value1Desc"),
      icon: ShieldCheck,
    },
    {
      title: t("about.value2Title"),
      description: t("about.value2Desc"),
      icon: Zap,
    },
    {
      title: t("about.value3Title"),
      description: t("about.value3Desc"),
      icon: Code,
    },
  ];

  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`;

  return (
    <section id="about" className="py-12 sm:py-20 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Hero Header */}
      <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <span className="text-[#94A3B8] font-mono font-bold">// 09</span>
          <span className="text-white/20">|</span>
          <span>{t("about.badge")}</span>
        </div>

        <h2 className="font-display text-2xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
          {t("about.title")} <br className="hidden sm:block" />
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
            {t("about.titleAccent")}
          </span>
        </h2>

        <p className="max-w-3xl text-gray-300 text-sm sm:text-lg font-light leading-relaxed">
          {t("about.bio")}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Portrait Card & Quick Actions (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-5"
        >
          <TiltCard className="h-full">
            <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-none mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#E58A2B]/60 bg-[#15171E] shadow-2xl shadow-black/90 transition-all duration-700">
              <Image
                src="/assets/images/me1.jpeg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/20 to-transparent opacity-85" />

              {/* Floating Status Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0C10]/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-[#E58A2B] font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
                  </span>
                  <span>{t("about.portraitPill")}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-gray-300 font-mono">{personalInfo.location}</p>
              </div>
            </div>
          </TiltCard>

          {/* Direct 1-Tap Contact Action Dock */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#15171E] border border-white/10 flex flex-wrap items-center justify-between gap-2.5 font-mono text-xs">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl bg-[#E58A2B] text-black font-bold hover:bg-[#F5A642] transition-colors flex items-center justify-center gap-1.5 shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t("about.resumeCta")}</span>
            </a>

            <div className="flex items-center gap-1.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#E58A2B] hover:border-[#E58A2B]/40 transition-all"
                aria-label="WhatsApp"
              >
                <Whatsapp className="w-4 h-4 text-[#E58A2B]" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#E58A2B] hover:border-[#E58A2B]/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#E58A2B] hover:border-[#E58A2B]/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Specification Matrix & Education (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Education & Academic Specialty Card */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-[#E58A2B]">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-[#E58A2B]/10">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white">{t("about.academicTitle")}</h3>
                <p className="text-xs text-gray-400 font-mono">{t("about.university")}</p>
              </div>
            </div>

            <div className="border-l-2 border-[#E58A2B] rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4 pl-4 py-1 space-y-1">
              <p className="text-base sm:text-xl font-bold text-white">{t("about.university")}</p>
              <p className="text-xs sm:text-sm text-[#E58A2B] font-medium">{t("about.degreeValue")}</p>
              <p className="text-xs text-gray-400 font-mono">{t("about.yearValue")} · {t("about.expectedGraduation")}</p>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              {t("about.summaryDetails")}
            </p>
          </div>

          {/* Contact Specs 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">{t("about.emailLabel")}</span>
                <a href={`mailto:${personalInfo.email}`} className="font-bold text-white truncate block hover:text-[#E58A2B] transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">{t("about.phoneLabel")}</span>
                <a href={`tel:${personalInfo.phone}`} className="font-bold text-white hover:text-[#E58A2B] transition-colors dir-ltr inline-block" dir="ltr">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">{t("about.locationLabel")}</span>
                <span className="font-bold text-white">{personalInfo.location}</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#15171E] border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">{t("about.languagesLabel")}</span>
                <span className="font-bold text-white">{t("about.languagesValue")}</span>
              </div>
            </div>
          </div>

          {/* Core Engineering Values */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#15171E] border border-white/10 space-y-4">
            <p className="font-mono text-xs font-bold text-[#E58A2B] uppercase tracking-[0.2em]">
              {t("about.pillarsTitle")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {engineeringValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                    <div className="p-2 rounded-lg bg-[#E58A2B]/10 text-[#E58A2B] w-fit">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h5 className="font-display text-sm font-bold text-white">{val.title}</h5>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
