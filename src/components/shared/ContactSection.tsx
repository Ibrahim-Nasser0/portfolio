"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Mail, MapPin, Send, CheckCircle, ExternalLink } from "lucide-react";
import { Github, Linkedin, Whatsapp } from "@/components/icons/SocialIcons";
import confetti from "canvas-confetti";
import { useTranslation } from "@/context/LanguageContext";

export const ContactSection = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E58A2B", "#F5A642", "#FFFFFF"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em]">
          [ {t("contact.badge")} ]
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t("contact.title")}
        </h2>
        <p className="mt-3 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-gray-300 text-base leading-relaxed font-light">
            {t("contact.availableDesc")}
          </p>

          <div className="space-y-4">
            {/* WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all text-white group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 transition-transform">
                  <Whatsapp className="w-5 h-5 text-[#E58A2B]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#E58A2B] uppercase tracking-wider block font-bold">
                    {t("contact.whatsappCardLabel")}
                  </span>
                  <span className="font-bold text-sm sm:text-base group-hover:text-[#E58A2B] transition-colors dir-ltr inline-block" dir="ltr">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#E58A2B] transition-colors" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between p-5 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all text-white group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#E58A2B] uppercase tracking-wider block font-bold">
                    {t("contact.emailCardLabel")}
                  </span>
                  <span className="font-bold text-sm sm:text-base group-hover:text-[#E58A2B] transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#E58A2B] transition-colors" />
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#15171E] border border-white/10 text-white shadow-lg">
              <div className="p-3 rounded-xl bg-white/5 text-[#E58A2B]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">{t("contact.location")}</span>
                <span className="font-bold text-sm sm:text-base">{t("hero.location")}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#15171E] border border-white/10 hover:border-[#E58A2B] hover:text-[#E58A2B] text-gray-300 font-mono text-xs font-semibold transition-all shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>{t("contact.githubProfile")}</span>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#15171E] border border-white/10 hover:border-[#E58A2B] hover:text-[#E58A2B] text-gray-300 font-mono text-xs font-semibold transition-all shadow-md"
            >
              <Linkedin className="w-4 h-4" />
              <span>{t("contact.linkedinProfile")}</span>
            </a>
          </div>
        </motion.div>

        {/* Interactive Message Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-8 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-6"
        >
          <h3 className="font-display text-2xl font-bold text-white">{t("contact.formTitle")}</h3>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle className="w-16 h-16 text-[#E58A2B] mx-auto animate-bounce" />
              <h4 className="font-display text-2xl font-bold text-white">{t("contact.successTitle")}</h4>
              <p className="text-gray-300 text-sm font-light">{t("contact.successMessage")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0C10] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0C10] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0C10] border border-white/10 focus:border-[#E58A2B] focus:outline-none text-white text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#E58A2B] hover:bg-[#F5A642] text-black font-bold text-sm shadow-lg shadow-[#E58A2B]/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>{t("contact.sendButton")}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
