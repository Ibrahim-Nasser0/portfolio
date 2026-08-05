"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/shared/Navbar";
import { RightSectionNav } from "@/components/shared/RightSectionNav";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { articles, ArticleModel } from "@/data/insightsData";
import { BookOpen, Sparkles, Clock, ArrowUpRight, Search, X, Check, Code, Share2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ContactSection } from "@/components/shared/ContactSection";
import { Footer } from "@/components/shared/Footer";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function InsightsPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<ArticleModel | null>(null);

  const categories = ["All", "Architecture", "Data Layer", "Software Engineering", "Performance"];

  const getCategoryCount = (category: string) => {
    if (category === "All") return articles.length;
    return articles.filter((a) => a.category === category).length;
  };

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" || art.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <RightSectionNav />

      <div id="insights" className="pt-28 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06] space-y-16">
        {/* Header Hero */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            <span>{t("insights.badge")}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.02]">
            {t("insights.title")} <br className="hidden sm:block" />
            <span className="text-gray-400 font-normal hover:text-[#E58A2B] transition-colors">
              {t("insights.subtitle")}
            </span>
          </h1>

          <p className="max-w-2xl text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            {t("insights.desc")}
          </p>
        </div>

        {/* Featured Article Hero Spotlight */}
        {featuredArticle && (
          <div
            onClick={() => setActiveArticle(featuredArticle)}
            className="group cursor-pointer p-8 sm:p-12 rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/60 transition-all duration-500 shadow-2xl space-y-6 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="px-3.5 py-1 rounded-full bg-[#E58A2B] text-black font-bold uppercase tracking-wider">
                {t("insights.featured")}
              </span>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-3.5 h-3.5 text-[#E58A2B]" />
                <span>{featuredArticle.readTime} · {featuredArticle.date}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white group-hover:text-[#E58A2B] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-300 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-white/10 font-mono text-xs">
              <div className="flex flex-wrap gap-2">
                {featuredArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-gray-300 bg-white/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <span className="font-bold text-[#E58A2B] group-hover:underline flex items-center gap-1">
                <span>{t("insights.readFeatured")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="pt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-white/10">
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
                  {cat === "All" ? t("insights.all") : cat} <span className="opacity-75 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="relative md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("insights.searchPlaceholder")}
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <TiltCard key={art.id} className="h-full">
              <div
                onClick={() => setActiveArticle(art)}
                className="cursor-pointer p-8 rounded-3xl bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/50 transition-all duration-500 flex flex-col justify-between h-full group shadow-2xl space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#E58A2B]/15 text-[#E58A2B] font-bold uppercase tracking-wider">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-[#E58A2B]" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#E58A2B] transition-colors leading-tight">
                    {art.title}
                  </h3>

                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between font-mono text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {art.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-gray-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <span className="font-bold text-[#E58A2B] group-hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#15171E] border border-[#E58A2B]/40 rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-6"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black text-gray-300 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#E58A2B]/20 text-[#E58A2B] font-bold uppercase">
                    {activeArticle.category}
                  </span>
                  <span className="text-gray-400">{activeArticle.readTime} · {activeArticle.date}</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  {activeArticle.title}
                </h2>

                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {activeArticle.excerpt}
                </p>
              </div>

              {/* Sample Code Snippet Block */}
              <div className="space-y-4">
                <h4 className="font-display text-xl font-bold text-white">
                  Architecture Implementation & Code Pattern
                </h4>

                <CodeBlock
                  language="dart"
                  code={`// Domain Entity & Repository Interface Contract
abstract class UserRepository {
  Future<Either<Failure, UserEntity>> getUserProfile(String userId);
}

class GetUserProfileUseCase {
  final UserRepository repository;
  GetUserProfileUseCase(this.repository);

  Future<Either<Failure, UserEntity>> call(String userId) async {
    return await repository.getUserProfile(userId);
  }
}`}
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/insights/${activeArticle.slug}`}
                  className="font-mono text-xs font-bold text-[#E58A2B] hover:underline flex items-center gap-1"
                >
                  <span>Open Dedicated Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#E58A2B] hover:text-black font-mono text-xs font-bold transition-colors"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ContactSection />
      <Footer />
    </AuroraBackground>
  );
}
