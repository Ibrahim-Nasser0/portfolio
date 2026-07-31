"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, CertificateModel } from "@/data/portfolioData";
import { Award, Eye, X, CheckCircle2, LayoutGrid, List, Sparkles, ExternalLink, Search } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import Image from "next/image";

export const CertificatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeCert, setActiveCert] = useState<CertificateModel | null>(null);

  const categories = ["All", "Mobile", "Backend", "UI/UX", "Tools & Core"];

  const getCategoryCount = (category: string) => {
    if (category === "All") return certifications.length;
    return certifications.filter((c) => c.category === category).length;
  };

  const filteredCerts = certifications.filter((cert) => {
    const matchesCategory =
      selectedCategory === "All" || cert.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.skillsAcquired.some((s) => s.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Header */}
      <div className="space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Verified Credentials & Certifications</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02]">
          Accredited Badges & <br className="hidden sm:block" />
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
            Technical Engineering Certifications.
          </span>
        </h1>

        <p className="max-w-2xl text-gray-300 text-base sm:text-lg font-light leading-relaxed">
          A verified collection of 25 accredited certificates in Mobile Architecture, Clean Code, Database Systems, API Design, and UI/UX Principles.
        </p>

        {/* Filters & View Mode Controls */}
        <div className="pt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-white/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#E58A2B] text-black shadow-lg shadow-[#E58A2B]/20 font-bold"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#E58A2B]/40"
                  }`}
                >
                  {cat} <span className="opacity-75 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Box & View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search credential or issuer..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[#15171E] border border-white/10 focus:border-[#E58A2B] text-xs font-mono text-white focus:outline-none placeholder:text-gray-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Switcher Buttons */}
            <div className="flex items-center p-1 rounded-full bg-[#15171E] border border-white/10 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#E58A2B] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-label="List View"
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "list"
                    ? "bg-[#E58A2B] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Mode */}
      {viewMode === "grid" && filteredCerts.length > 0 && (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full">
                  <div
                    onClick={() => setActiveCert(cert)}
                    className="group cursor-pointer rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/60 overflow-hidden transition-all duration-500 flex flex-col justify-between h-full hover:-translate-y-1 shadow-2xl space-y-4"
                  >
                    <div>
                      {/* Image Header Showcase */}
                      <div className="relative aspect-[16/10] w-full bg-[#0B0C10] overflow-hidden">
                        <Image
                          src={cert.imageUrl}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#15171E] via-transparent to-transparent opacity-85" />

                        {/* Top Badges Bar */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[#E58A2B] font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                            {cert.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-emerald-400 font-mono text-[10px] font-bold backdrop-blur-md flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>VERIFIED</span>
                          </span>
                        </div>

                        {/* Center Hover Lens */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E58A2B] text-black font-mono text-xs font-bold shadow-2xl shadow-[#E58A2B]/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <Eye className="w-4 h-4" />
                            <span>Inspect Credential</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-2.5">
                        <div className="flex items-center justify-between text-xs font-mono text-[#E58A2B]">
                          <span className="font-bold flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5" />
                            {cert.issuer}
                          </span>
                          <span className="text-gray-400">{cert.date}</span>
                        </div>

                        <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E58A2B] transition-colors leading-tight line-clamp-2">
                          {cert.title}
                        </h3>

                        {cert.credentialId && (
                          <p className="text-[11px] text-gray-400 font-mono truncate">
                            ID: <span className="text-gray-300">{cert.credentialId}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Skill Badges Footer */}
                    <div className="px-6 pb-6 pt-0">
                      <div className="flex flex-wrap gap-1 border-t border-white/10 pt-3">
                        {cert.skillsAcquired.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] text-gray-300 bg-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Verified List Mode */}
      {viewMode === "list" && filteredCerts.length > 0 && (
        <div className="space-y-4">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer p-6 rounded-2xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    {cert.issuer} · {cert.date} · <span className="text-[#E58A2B]">{cert.category}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end md:self-auto">
                <span className="text-xs font-mono text-[#E58A2B] font-bold group-hover:underline flex items-center gap-1">
                  <span>Inspect Certificate</span>
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* High-Res Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#15171E] border border-[#E58A2B]/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-y-auto space-y-6"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black text-gray-300 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[55vh] min-h-[320px] rounded-2xl overflow-hidden bg-black border border-white/10">
                <Image
                  src={activeCert.imageUrl}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#E58A2B]/20 text-[#E58A2B] font-bold uppercase">
                    {activeCert.category}
                  </span>
                  <span className="text-gray-300 font-bold">{activeCert.issuer} · {activeCert.date}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">{activeCert.title}</h3>

                {activeCert.credentialId && (
                  <p className="text-xs text-gray-400 font-mono">
                    Credential ID: <span className="text-[#E58A2B] font-bold">{activeCert.credentialId}</span>
                  </p>
                )}

                <div className="pt-2 flex flex-wrap gap-2">
                  {activeCert.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3.5 py-1 font-mono text-xs text-gray-300 bg-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
