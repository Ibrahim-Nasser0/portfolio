"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, CertificateModel } from "@/data/portfolioData";
import {
  Award,
  Eye,
  X,
  CheckCircle2,
  Sparkles,
  Search,
  Smartphone,
  Server,
  Palette,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CategoryGroup {
  name: string;
  categoryKey: 'Mobile' | 'Backend' | 'UI/UX' | 'Tools & Core';
  icon: React.ElementType;
  description: string;
}

export const CertificatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCert, setActiveCert] = useState<CertificateModel | null>(null);

  const categoryGroups: CategoryGroup[] = [
    {
      name: "Mobile Architecture & Flutter Engineering",
      categoryKey: "Mobile",
      icon: Smartphone,
      description: "Accredited credentials in Flutter, Dart, BLoC, Clean Architecture, and Cross-Platform Development.",
    },
    {
      name: "Backend, APIs & Data Systems",
      categoryKey: "Backend",
      icon: Server,
      description: "Certifications in MS SQL Server, MongoDB, RESTful APIs, Entity Framework Core, and Database Design.",
    },
    {
      name: "UI/UX & Product Design Systems",
      categoryKey: "UI/UX",
      icon: Palette,
      description: "Verified badges in Figma, Wireframing, Prototyping, and User-Centered Product Design.",
    },
    {
      name: "Tools, Core Principles & Version Control",
      categoryKey: "Tools & Core",
      icon: Wrench,
      description: "Certifications in Git/GitHub workflows, SOLID principles, OOP, and Clean Code practices.",
    },
  ];

  const getCategoryCount = (categoryKey: string) => {
    if (categoryKey === "All") return certifications.length;
    return certifications.filter((c) => c.category === categoryKey).length;
  };

  const categories = ["All", "Mobile", "Backend", "UI/UX", "Tools & Core"];

  return (
    <section id="certificates" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06] space-y-20">
      {/* Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Swiper Categorized Credentials Sliders</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.02]">
          Accredited Badges & <br className="hidden sm:block" />
          <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
            Technical Engineering Certifications.
          </span>
        </h1>

        <p className="max-w-2xl text-gray-300 text-base sm:text-lg font-light leading-relaxed">
          A verified collection of 25 accredited certificates organized into interactive Swiper carousel sliders for each domain category.
        </p>

        {/* Filter Controls & Search */}
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

          {/* Search Input */}
          <div className="relative md:w-72">
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
        </div>
      </div>

      {/* Categorized Swiper Clusters */}
      <div className="space-y-24">
        {categoryGroups.map((group) => {
          // Filter certs for this category
          const groupCerts = certifications.filter((cert) => {
            const matchesCategory =
              selectedCategory === "All" || cert.category === group.categoryKey;
            const matchesGroup = cert.category === group.categoryKey;

            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
              !query ||
              cert.title.toLowerCase().includes(query) ||
              cert.issuer.toLowerCase().includes(query) ||
              cert.skillsAcquired.some((s) => s.toLowerCase().includes(query));

            return matchesCategory && matchesGroup && matchesSearch;
          });

          if (groupCerts.length === 0) return null;

          const Icon = group.icon;
          const prevBtnId = `swiper-prev-${group.categoryKey.replace(/[^a-z0-9]/gi, '')}`;
          const nextBtnId = `swiper-next-${group.categoryKey.replace(/[^a-z0-9]/gi, '')}`;

          return (
            <div key={group.categoryKey} className="space-y-8">
              {/* Category Group Header & Navigation Controls */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#15171E] border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#E58A2B]/10 text-[#E58A2B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {group.name}
                    </h2>
                    <p className="text-xs font-mono text-gray-400 mt-1">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start md:self-auto">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E58A2B] font-mono text-xs font-bold mr-2">
                    {groupCerts.length} Badges
                  </span>

                  {/* Custom Swiper Controls */}
                  <button
                    id={prevBtnId}
                    aria-label="Previous Slide"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    id={nextBtnId}
                    aria-label="Next Slide"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Swiper Slider for Category */}
              <div className="relative">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1.1}
                  breakpoints={{
                    640: { slidesPerView: 2.1 },
                    1024: { slidesPerView: 3 },
                  }}
                  navigation={{
                    prevEl: `#${prevBtnId}`,
                    nextEl: `#${nextBtnId}`,
                  }}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="pb-4"
                >
                  {groupCerts.map((cert) => (
                    <SwiperSlide key={cert.id} className="h-auto">
                      <TiltCard className="h-full">
                        <div
                          onClick={() => setActiveCert(cert)}
                          className="group cursor-pointer rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/60 overflow-hidden transition-all duration-500 flex flex-col justify-between h-full hover:-translate-y-1.5 shadow-2xl space-y-4 min-h-[420px]"
                        >
                          <div>
                            {/* Card Media Header */}
                            <div className="relative aspect-[16/10] w-full bg-[#0B0C10] overflow-hidden">
                              <Image
                                src={cert.imageUrl}
                                alt={cert.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                unoptimized
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#15171E] via-transparent to-transparent opacity-85" />

                              {/* Top Badges */}
                              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                                <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[#E58A2B] font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                                  {cert.category}
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-emerald-400 font-mono text-[10px] font-bold backdrop-blur-md flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>VERIFIED</span>
                                </span>
                              </div>

                              {/* Hover Lens */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E58A2B] text-black font-mono text-xs font-bold shadow-2xl shadow-[#E58A2B]/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                  <Eye className="w-4 h-4" />
                                  <span>Inspect Credential</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          );
        })}
      </div>

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
