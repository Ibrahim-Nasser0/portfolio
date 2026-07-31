"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, CertificateModel } from "@/data/portfolioData";
import { Award, Eye, X } from "lucide-react";
import Image from "next/image";

export const CertificatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCert, setActiveCert] = useState<CertificateModel | null>(null);

  const categories = ["All", "Mobile", "Backend", "UI/UX", "Tools & Core"];

  const filteredCerts =
    selectedCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === selectedCategory);

  return (
    <section id="certificates" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="font-mono text-xs text-[#E58A2B] uppercase tracking-[0.2em]">
            [ Accreditations & Badges ]
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & Verified Credentials
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#E58A2B] text-black shadow-lg shadow-[#E58A2B]/20"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#E58A2B]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="relative w-full h-44 bg-[#0B0C10] overflow-hidden">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="p-3 rounded-full bg-[#E58A2B] text-black opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B0C10]/90 border border-white/10 text-gray-300 font-mono text-[10px] uppercase">
                    {cert.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 text-[#E58A2B] font-mono text-xs">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#E58A2B] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {cert.credentialId && (
                    <p className="text-[11px] text-gray-400 font-mono mt-2 truncate">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <div className="flex flex-wrap gap-1">
                  {cert.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#15171E] border border-[#E58A2B]/40 rounded-2xl p-6 text-white shadow-2xl overflow-y-auto space-y-4"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black text-gray-300 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[50vh] min-h-[300px] rounded-xl overflow-hidden bg-black">
                <Image
                  src={activeCert.imageUrl}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#E58A2B]/20 text-[#E58A2B] font-bold uppercase">
                    {activeCert.category}
                  </span>
                  <span className="text-gray-400">{activeCert.issuer} · {activeCert.date}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">{activeCert.title}</h3>

                {activeCert.credentialId && (
                  <p className="text-xs text-gray-400 font-mono">
                    Credential ID: <span className="text-[#E58A2B]">{activeCert.credentialId}</span>
                  </p>
                )}

                <div className="pt-3 flex flex-wrap gap-2">
                  {activeCert.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-300"
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
