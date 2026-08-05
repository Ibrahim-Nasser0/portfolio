"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCode, SearchCheck, Workflow, Rocket } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const ProcessWorkflowSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: "01",
      title: t("workflow.step1Title"),
      description: t("workflow.step1Desc"),
      icon: SearchCheck,
    },
    {
      step: "02",
      title: t("workflow.step2Title"),
      description: t("workflow.step2Desc"),
      icon: FileCode,
    },
    {
      step: "03",
      title: t("workflow.step3Title"),
      description: t("workflow.step3Desc"),
      icon: Workflow,
    },
    {
      step: "04",
      title: t("workflow.step4Title"),
      description: t("workflow.step4Desc"),
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="mb-16">
        <p className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em]">
          {t("workflow.badge")}
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t("workflow.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#E58A2B]">
                    {t("common.step")}{s.step}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                  {s.title}
                </h3>

                <p className="text-gray-300 text-xs font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

