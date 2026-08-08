"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const SplashScreen = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(t("splash.stage1"));

  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    // Check if user has already seen splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("has_seen_splash");

    if (!hasSeenSplash) {
      setIsVisible(true);

      // Smooth progress counter from 0 to 100 over 1000ms
      const startTime = performance.now();
      const duration = 1000;

      const updateProgress = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
        setProgress(currentProgress);

        // Update stage status message based on progress thresholds
        if (currentProgress < 25) {
          setStage(t("splash.stage1"));
        } else if (currentProgress < 55) {
          setStage(t("splash.stage2"));
        } else if (currentProgress < 85) {
          setStage(t("splash.stage3"));
        } else {
          setStage(t("splash.stage4"));
        }

        if (elapsed < duration) {
          requestAnimationFrame(updateProgress);
        } else {
          // Auto exit after progress reaches 100%
          setTimeout(() => {
            handleComplete();
          }, 200);
        }
      };

      requestAnimationFrame(updateProgress);
    }
  }, [t]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.15);
    setRotateY(x * 0.15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleComplete = () => {
    setIsVisible(false);
    sessionStorage.setItem("has_seen_splash", "true");
  };

  if (!isVisible) return null;

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.04,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  const devName = "IBRAHIM NASSER".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            opacity: 0.95,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="fixed inset-0 z-[100] bg-[#0B0C0E] text-white flex flex-col items-center justify-between p-6 sm:p-12 overflow-hidden selection:bg-[#E58A2B] selection:text-black cursor-default"
        >
          {/* Background Ambient Aura Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#E58A2B]/15 via-[#E58A2B]/5 to-transparent pointer-events-none blur-3xl rounded-full" />

          {/* Top Header Navigation Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between z-10">
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E58A2B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E58A2B]" />
              </span>
              <span className="font-mono text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">
                {t("splash.systemInit")}
              </span>
            </div>

            <button
              onClick={handleComplete}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-white font-mono text-xs font-semibold backdrop-blur-md transition-all group cursor-pointer shadow-lg"
            >
              <span>{t("splash.skipIntro")}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E58A2B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Center Interactive 3D Emblem & Branding */}
          <div className="relative flex flex-col items-center justify-center z-10 space-y-7 text-center my-auto">
            {/* Spinning Gold Halo Ring Accent */}
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-dashed border-[#E58A2B]/30 animate-[spin_12s_linear_infinite] pointer-events-none" />

            {/* 3D Glassmorphic Emblem Badge */}
            <motion.div
              ref={cardRef}
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#15171E] border border-[#E58A2B]/60 shadow-[0_0_60px_rgba(229,138,43,0.3)] flex items-center justify-center group"
            >
              {/* Shimmer Light Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

              <span className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-white via-[#E58A2B] to-[#F5A642] bg-clip-text text-transparent tracking-tight">
                IN
              </span>

              {/* Sparkle Badge */}
              <div className="absolute -top-3 -right-3 p-2 rounded-full bg-[#0B0C0E] border border-[#E58A2B]/50 text-[#E58A2B] shadow-lg">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
            </motion.div>

            {/* Kinetic Letter-by-Letter Staggered Name */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-1 font-mono text-base sm:text-lg font-extrabold text-white uppercase tracking-[0.25em]">
                {devName.map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className={char === " " ? "mr-2" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex items-center justify-center gap-2 font-mono text-xs text-[#94A3B8] font-medium uppercase tracking-[0.2em]"
              >
                <span>{t("splash.role1")}</span>
                <span className="text-[#E58A2B]">•</span>
                <span>{t("splash.role2")}</span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Dynamic Stage Status & Progress Bar */}
          <div className="w-full max-w-sm space-y-2.5 z-10">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#94A3B8] font-semibold tracking-wider transition-all duration-300">
                {stage}
              </span>
              <span className="text-[#E58A2B] font-extrabold">{progress}%</span>
            </div>

            {/* Glowing Linear Progress Bar Track */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E58A2B] via-amber-400 to-[#F5A642] rounded-full shadow-[0_0_12px_rgba(229,138,43,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

