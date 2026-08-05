"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, CornerDownLeft } from "lucide-react";
import { personalInfo, projects, skillCategories } from "@/data/portfolioData";
import { useTranslation } from "@/context/LanguageContext";

export const DeveloperTerminalModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: "welcome",
      output: (
        <div className="space-y-1 text-gray-300">
          <p className="text-[#E58A2B] font-bold">
            {t("terminal.welcomeTitle")}
          </p>
          <p>{t("terminal.welcomeHint")} <span className="text-[#E58A2B] font-bold">{t("terminal.helpCmd")}</span> {t("terminal.toListCmds")}</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-[#E58A2B] font-bold">{t("terminal.availableCmds")}</p>
            <p><span className="text-[#E58A2B] font-bold">{t("terminal.cmdProjects")}</span> {t("terminal.cmdProjectsDesc")}</p>
            <p><span className="text-[#E58A2B] font-bold">{t("terminal.cmdSkills")}</span> {t("terminal.cmdSkillsDesc")}</p>
            <p><span className="text-[#E58A2B] font-bold">{t("terminal.cmdBio")}</span> {t("terminal.cmdBioDesc")}</p>
            <p><span className="text-[#E58A2B] font-bold">{t("terminal.cmdContact")}</span> {t("terminal.cmdContactDesc")}</p>
            <p><span className="text-[#E58A2B] font-bold">{t("terminal.cmdClear")}</span> {t("terminal.cmdClearDesc")}</p>
            <p><span className="text-[#E58A2B] font-bold">{t("terminal.cmdExit")}</span> {t("terminal.cmdExitDesc")}</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-[#E58A2B] font-bold">{t("terminal.shippedProjects")} ({projects.length}):</p>
            {projects.map((p, i) => (
              <p key={p.id} className="text-gray-300">
                [{i + 1}] <span className="text-white font-bold">{p.name}</span> ({p.category}) — {p.skillsUsed.join(", ")}
              </p>
            ))}
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-[#E58A2B] font-bold">{t("terminal.engineeringStack")}</p>
            {skillCategories.map((c) => (
              <p key={c.title} className="text-gray-300">
                <span className="text-[#E58A2B] font-bold">{c.title}:</span> {c.skills.join(", ")}
              </p>
            ))}
          </div>
        );
        break;

      case "bio":
        response = (
          <p className="text-xs font-mono text-gray-300 leading-relaxed">
            {personalInfo.summaryDetails}
          </p>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-xs font-mono text-gray-300">
            <p>{t("terminal.emailLabel")} <a href={`mailto:${personalInfo.email}`} className="text-[#E58A2B] hover:underline">{personalInfo.email}</a></p>
            <p>{t("terminal.phoneLabel")} <span className="text-[#E58A2B]">{personalInfo.phone}</span></p>
            <p>{t("terminal.locationLabel")} <span className="text-white">{personalInfo.location}</span></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        setIsOpen(false);
        setInput("");
        return;

      default:
        response = (
          <p className="text-xs font-mono text-rose-400">
            {t("terminal.unknownCmd")} &quot;{cleanCmd}&quot;. {t("terminal.typeHelp")} <span className="text-white font-bold">{t("terminal.helpCmd")}</span> {t("terminal.forCommands")}
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: input, output: response }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#15171E]/90 border border-white/10 hover:border-[#E58A2B] text-xs font-mono text-gray-300 hover:text-white backdrop-blur-xl shadow-2xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E58A2B]"
        aria-label="Open Interactive Developer Terminal"
      >
        <Terminal className="w-4 h-4 text-[#E58A2B] group-hover:scale-110 transition-transform" />
        <span>{t("terminal.triggerLabel")}</span>
        <span className="hidden sm:inline-block ml-1 rtl:ml-0 rtl:mr-1 px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400 group-hover:text-white font-mono">
          Ctrl K
        </span>
      </button>

      {/* Terminal Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0C0D12] border border-[#E58A2B]/40 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col h-[85vh] sm:h-[480px]"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#15171E] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#E58A2B]/80 inline-block" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 ml-2 rtl:ml-0 rtl:mr-2">
                    ibrahim@portfolio:~
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-4">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    {item.cmd !== "welcome" && (
                      <div className="flex items-center gap-2 text-[#E58A2B]">
                        <span>ibrahim@portfolio:~$</span>
                        <span className="text-white font-bold">{item.cmd}</span>
                      </div>
                    )}
                    <div>{item.output}</div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input Form */}
              <form
                onSubmit={handleCommand}
                className="p-3 bg-[#15171E] border-t border-white/10 flex items-center gap-2 font-mono text-xs"
              >
                <span className="text-[#E58A2B] font-bold">ibrahim@portfolio:~$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("terminal.placeholder")}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-gray-500"
                  autoFocus
                />
                <button type="submit" className="text-gray-400 hover:text-[#E58A2B]">
                  <CornerDownLeft className="w-4 h-4 rtl:rotate-180" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

