"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Activity, Layers, CheckCircle2, Code2, ChevronDown, Copy, Check } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const PerformanceMatrixSection = () => {
  const { t } = useTranslation();
  const [activeBenchmark, setActiveBenchmark] = useState(0);
  const [showMobileCode, setShowMobileCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [viewState, setViewState] = useState<"after" | "before">("after");

  const benchmarks = [
    {
      id: "isolates",
      title: t("performanceMatrix.b1Title"),
      subtitle: t("performanceMatrix.b1Subtitle"),
      metric: t("performanceMatrix.b1Metric"),
      comparison: t("performanceMatrix.b1Comparison"),
      icon: Cpu,
      badge: t("performanceMatrix.b1Badge"),
      problem: t("performanceMatrix.b1Problem"),
      solution: t("performanceMatrix.b1Solution"),
      code: `// Offloading Heavy JSON Processing to Background Isolate
Future<List<ProductEntity>> parseProductsAsync(String rawJson) async {
  return await Isolate.run(() {
    final List<dynamic> decoded = jsonDecode(rawJson);
    return decoded.map((item) => ProductModel.fromJson(item).toEntity()).toList();
  });
}`,
      stats: [
        { label: t("performanceMatrix.b1s1Label"), value: "60 FPS" },
        { label: t("performanceMatrix.b1s2Label"), value: "0 ms" },
        { label: t("performanceMatrix.b1s3Label"), value: "5,000+ Items" },
      ],
    },
    {
      id: "repaint",
      title: t("performanceMatrix.b2Title"),
      subtitle: t("performanceMatrix.b2Subtitle"),
      metric: t("performanceMatrix.b2Metric"),
      comparison: t("performanceMatrix.b2Comparison"),
      icon: Layers,
      badge: t("performanceMatrix.b2Badge"),
      problem: t("performanceMatrix.b2Problem"),
      solution: t("performanceMatrix.b2Solution"),
      code: `// RepaintBoundary Node Sub-Tree Isolation
Widget buildAnimatedBadge() {
  return const RepaintBoundary(
    child: AnimatedPulseBadge(
      child: Icon(Icons.shopping_cart_outlined),
    ),
  );
}`,
      stats: [
        { label: t("performanceMatrix.b2s1Label"), value: "5% (Was 100%)" },
        { label: t("performanceMatrix.b2s2Label"), value: "+300%" },
        { label: t("performanceMatrix.b2s3Label"), value: "-40%" },
      ],
    },
    {
      id: "bloc_filter",
      title: t("performanceMatrix.b3Title"),
      subtitle: t("performanceMatrix.b3Subtitle"),
      metric: t("performanceMatrix.b3Metric"),
      comparison: t("performanceMatrix.b3Comparison"),
      icon: Zap,
      badge: t("performanceMatrix.b3Badge"),
      problem: t("performanceMatrix.b3Problem"),
      solution: t("performanceMatrix.b3Solution"),
      code: `// BLoC Stream Predicate Rebuild Filter
BlocBuilder<CheckoutBloc, CheckoutState>(
  buildWhen: (previous, current) => 
      previous.cartTotal != current.cartTotal ||
      previous.status != current.status,
  builder: (context, state) {
    return OrderSummaryTile(total: state.cartTotal);
  },
);`,
      stats: [
        { label: t("performanceMatrix.b3s1Label"), value: "85% Saved" },
        { label: t("performanceMatrix.b3s2Label"), value: "Minimal GC" },
        { label: t("performanceMatrix.b3s3Label"), value: "< 1 ms" },
      ],
    },
    {
      id: "binary_opt",
      title: t("performanceMatrix.b4Title"),
      subtitle: t("performanceMatrix.b4Subtitle"),
      metric: t("performanceMatrix.b4Metric"),
      comparison: t("performanceMatrix.b4Comparison"),
      icon: Activity,
      badge: t("performanceMatrix.b4Badge"),
      problem: t("performanceMatrix.b4Problem"),
      solution: t("performanceMatrix.b4Solution"),
      code: `// Release ABI Splitting Command
flutter build apk --split-per-abi --release --tree-shake-icons

// Deferred Initialization Callback
WidgetsBinding.instance.addPostFrameCallback((_) {
  initAnalyticsService();
});`,
      stats: [
        { label: t("performanceMatrix.b4s1Label"), value: "1.8 sec" },
        { label: t("performanceMatrix.b4s2Label"), value: "14.2 MB" },
        { label: t("performanceMatrix.b4s3Label"), value: "99.9%" },
      ],
    },
  ];

  const current = benchmarks[activeBenchmark];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="performance" className="py-12 sm:py-20 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <span className="text-[#94A3B8] font-mono font-bold">// 06</span>
          <span className="text-white/20">|</span>
          <span>{t("performanceMatrix.badge")}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {t("performanceMatrix.title")}
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-lg font-light leading-relaxed">
          {t("performanceMatrix.subtitle")}
        </p>
      </div>

      {/* Benchmark Selector Grid: 2 Columns on Mobile (No Nested Scroll) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 sm:mb-10">
        {benchmarks.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeBenchmark === idx;

          return (
            <button
              key={item.id}
              onClick={() => setActiveBenchmark(idx)}
              className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border text-left rtl:text-right transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-[#15171E] border-[#E58A2B] shadow-xl scale-[1.02]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl ${isSelected ? "bg-[#E58A2B]/20 text-[#E58A2B]" : "bg-white/5 text-gray-400"}`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-mono text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider hidden sm:inline">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-display text-xs sm:text-base font-bold text-white leading-tight truncate">{item.title}</h3>
              </div>

              <div className="mt-2.5 sm:mt-4 pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs sm:text-sm font-extrabold text-[#E58A2B]">{item.metric}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Benchmark Deep-Dive Panel */}
      <div className="bg-[#15171E] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Problem & Solution Breakdown */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                {current.badge}
              </span>

              {/* Interactive Before / After Switch */}
              <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setViewState("after")}
                  className={`px-3 py-1 rounded-full font-bold transition-all ${
                    viewState === "after" ? "bg-[#E58A2B] text-black shadow-md" : "text-gray-400 hover:text-white"
                  }`}
                >
                  After
                </button>
                <button
                  onClick={() => setViewState("before")}
                  className={`px-3 py-1 rounded-full font-bold transition-all ${
                    viewState === "before" ? "bg-rose-500 text-white shadow-md" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Before
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{current.title}</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] font-mono">{current.subtitle}</p>
            </div>

            {/* Metric Highlight Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0C0E] border border-[#E58A2B]/40 space-y-1">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#E58A2B]">{current.metric}</div>
              <p className="text-xs text-gray-300 font-light">{current.comparison}</p>
            </div>

            {/* Problem & Solution Toggleable View */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-light">
              {viewState === "before" ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 sm:p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1"
                >
                  <span className="text-rose-400 font-mono text-[11px] sm:text-xs font-bold uppercase">{t("performanceMatrix.profilingBefore")}</span>
                  <p className="text-gray-300 leading-relaxed">{current.problem}</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#E58A2B]/10 border border-[#E58A2B]/30 space-y-1"
                >
                  <span className="text-[#E58A2B] font-mono text-[11px] sm:text-xs font-bold uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A2B]" /> {t("performanceMatrix.optimizationAfter")}
                  </span>
                  <p className="text-gray-200 leading-relaxed">{current.solution}</p>
                </motion.div>
              )}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              {current.stats.map((stat, i) => (
                <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-[#0B0C0E] border border-white/5 text-center space-y-0.5">
                  <div className="font-mono text-[11px] sm:text-xs font-extrabold text-white">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile Code Snippet Toggle */}
            <button
              onClick={() => setShowMobileCode(!showMobileCode)}
              className="lg:hidden flex items-center justify-between w-full p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-[#E58A2B]"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>{showMobileCode ? "Hide Code" : "Show Dart Profiling Code"}</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showMobileCode ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Right Column: DevTools Dart Code Snippet */}
          <div className={`lg:col-span-7 bg-[#0C0D12] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner flex-col ${showMobileCode ? "flex" : "hidden lg:flex"}`}>
            <div className="flex items-center justify-between px-4 py-2.5 sm:py-3 bg-[#15171E] border-b border-white/10 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E58A2B]" />
                <span className="text-white font-bold">{current.id}_optimization.dart</span>
              </div>

              {/* 1-Tap Copy Code Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#E58A2B] hover:text-black transition-colors text-gray-300 font-mono text-[10px] font-bold"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>
            <pre className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-amber-100/90 leading-relaxed overflow-x-auto whitespace-pre">
              <code>{current.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
