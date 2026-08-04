"use client";

import React from "react";
import { ArticleModel } from "@/data/insightsData";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/context/LanguageContext";

interface InsightDetailClientProps {
  article: ArticleModel;
}

export const InsightDetailClient = ({ article }: InsightDetailClientProps) => {
  const { t } = useTranslation();

  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />

      <div className="pt-28 pb-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto space-y-12">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15171E] border border-white/10 hover:border-[#E58A2B] text-gray-300 hover:text-[#E58A2B] font-mono text-xs font-semibold transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform text-[#E58A2B] rtl:rotate-180" />
            <span>{t("insightDetail.backToAll")}</span>
          </Link>

          <span className="px-3.5 py-1 rounded-full bg-[#E58A2B]/15 text-[#E58A2B] font-mono text-xs font-bold uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        {/* Article Container */}
        <article className="p-8 sm:p-12 rounded-3xl bg-[#15171E] border border-white/10 shadow-2xl space-y-8">
          {/* Header Banner */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
              <span className="text-[#E58A2B] font-bold">Ibrahim Nasser</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <div className="flex items-center gap-1 text-[#E58A2B]">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tTag) => (
              <span
                key={tTag}
                className="rounded-full border border-white/10 px-3.5 py-1 font-mono text-xs text-gray-300 bg-white/5"
              >
                #{tTag}
              </span>
            ))}
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-gray-300 text-sm sm:text-base font-light leading-relaxed">
            <p>
              {t("insightDetail.bodyIntro")}
            </p>

            <h3 className="font-display text-2xl font-bold text-white pt-4">
              {t("insightDetail.keyImpl")}
            </h3>

            <p>
              {t("insightDetail.bodyP2")}
            </p>

            <CodeBlock
              language="dart"
              code={`// Example Repository Abstract Contract & Domain UseCase
abstract class UserRepository {
  Future<Either<Failure, UserEntity>> getUserProfile(String id);
}

class GetUserProfileUseCase {
  final UserRepository repository;
  GetUserProfileUseCase(this.repository);

  Future<Either<Failure, UserEntity>> call(String id) async {
    return await repository.getUserProfile(id);
  }
}`}
            />

            <p>
              {t("insightDetail.bodyP3")}
            </p>
          </div>

          {/* Author Meta Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E58A2B] text-black font-bold flex items-center justify-center font-display text-base">
                IN
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-white">Ibrahim Nasser</h4>
                <p className="text-xs font-mono text-gray-400">{t("insightDetail.authorRole")}</p>
              </div>
            </div>

            <Link
              href="/insights"
              className="text-xs font-mono font-bold text-[#E58A2B] hover:underline"
            >
              {t("insightDetail.moreArticles")}
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </AuroraBackground>
  );
};
