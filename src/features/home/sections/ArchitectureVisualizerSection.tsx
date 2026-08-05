"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, Database, Code2, CheckCircle2, Workflow, ChevronDown } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const ArchitectureVisualizerSection = () => {
  const { t } = useTranslation();
  const [activeLayer, setActiveLayer] = useState<"presentation" | "domain" | "data">("domain");
  const [showMobileCode, setShowMobileCode] = useState(false);

  const layers = [
    {
      id: "presentation",
      name: t("architectureVisualizer.layer1Name"),
      subtitle: t("architectureVisualizer.layer1Subtitle"),
      icon: Cpu,
      color: "from-amber-500/20 to-[#E58A2B]/10",
      borderColor: "border-[#E58A2B]",
      textColor: "text-[#E58A2B]",
      summary: t("architectureVisualizer.layer1Summary"),
      code: `// Presentation: Reactive BLoC State Builder
BlocBuilder<AuthBloc, AuthState>(
  builder: (context, state) => state.when(
    initial: () => const LoginScreen(),
    loading: () => const AppLoadingSpinner(),
    authenticated: (user) => HomeScreen(user: user),
    failure: (err) => ErrorBanner(message: err.message),
  ),
);`,
      highlights: [
        t("architectureVisualizer.layer1h1"),
        t("architectureVisualizer.layer1h2"),
        t("architectureVisualizer.layer1h3"),
      ],
    },
    {
      id: "domain",
      name: t("architectureVisualizer.layer2Name"),
      subtitle: t("architectureVisualizer.layer2Subtitle"),
      icon: ShieldCheck,
      color: "from-[#E58A2B]/20 to-amber-500/10",
      borderColor: "border-[#E58A2B]",
      textColor: "text-[#E58A2B]",
      summary: t("architectureVisualizer.layer2Summary"),
      code: `// Domain: Pure Business Use Case
class GetUserProfileUseCase implements UseCase<UserEntity, String> {
  final IUserRepository repository;
  const GetUserProfileUseCase(this.repository);

  @override
  Future<Either<Failure, UserEntity>> call(String userId) async {
    return await repository.getUserById(userId);
  }
}`,
      highlights: [
        t("architectureVisualizer.layer2h1"),
        t("architectureVisualizer.layer2h2"),
        t("architectureVisualizer.layer2h3"),
      ],
    },
    {
      id: "data",
      name: t("architectureVisualizer.layer3Name"),
      subtitle: t("architectureVisualizer.layer3Subtitle"),
      icon: Database,
      color: "from-[#E58A2B]/15 to-amber-500/5",
      borderColor: "border-[#E58A2B]/60",
      textColor: "text-[#E58A2B]",
      summary: t("architectureVisualizer.layer3Summary"),
      code: `// Data: Repository Implementation with Offline Cache Strategy
class UserRepositoryImpl implements IUserRepository {
  final DioClient dioClient;
  final HiveBox<UserDTO> localCache;

  @override
  Future<Either<Failure, UserEntity>> getUserById(String id) async {
    if (await networkInfo.isConnected) {
      final dto = await dioClient.fetchUser(id);
      await localCache.put(id, dto);
      return Right(dto.toDomainEntity());
    }
    final cached = localCache.get(id);
    return Right(cached!.toDomainEntity());
  }
}`,
      highlights: [
        t("architectureVisualizer.layer3h1"),
        t("architectureVisualizer.layer3h2"),
        t("architectureVisualizer.layer3h3"),
      ],
    },
  ];

  const current = layers.find((l) => l.id === activeLayer)!;

  return (
    <section id="architecture" className="py-12 sm:py-20 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <Workflow className="w-3.5 h-3.5" />
          <span className="text-[#94A3B8] font-mono font-bold">// 04</span>
          <span className="text-white/20">|</span>
          <span>{t("architectureVisualizer.badge")}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {t("architectureVisualizer.title")}
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-lg font-light leading-relaxed">
          {t("architectureVisualizer.subtitle")}
        </p>
      </div>

      {/* Layer Navigation Pipeline: Scrollable horizontal strip on Mobile, Grid on Desktop */}
      <div className="flex overflow-x-auto gap-2.5 sm:gap-4 mb-8 sm:mb-12 pb-2 md:pb-0 md:grid md:grid-cols-3 scrollbar-none">
        {layers.map((layer, idx) => {
          const Icon = layer.icon;
          const isSelected = activeLayer === layer.id;

          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id as typeof activeLayer)}
              className={`relative p-3.5 sm:p-6 rounded-2xl border text-left rtl:text-right transition-all duration-300 shrink-0 w-[70vw] sm:w-[260px] md:w-auto ${
                isSelected
                  ? `bg-[#15171E] ${layer.borderColor} shadow-2xl scale-[1.02]`
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className={`p-2 sm:p-3 rounded-xl bg-white/5 ${layer.textColor}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-display text-sm sm:text-lg font-bold text-white">{layer.name}</h3>
              <p className="text-[10px] sm:text-xs text-gray-400 font-mono mt-0.5 sm:mt-1 truncate">{layer.subtitle}</p>

              {isSelected && (
                <motion.div
                  layoutId="activeLayerIndicator"
                  className={`absolute -bottom-[2px] inset-x-4 sm:inset-x-6 h-[3px] rounded-full ${layer.textColor.replace(
                    "text-",
                    "bg-"
                  )}`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Layer Deep Dive Code & Spec Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 bg-[#15171E]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl"
        >
          {/* Left Column: Architectural Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 border border-white/10 ${current.textColor}`}>
                  {current.name}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {current.summary}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block">
                {t("architectureVisualizer.keyBenefits")}
              </span>
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-mono">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${current.textColor}`} />
                  <span>{h}</span>
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
                <span>{showMobileCode ? "Hide Dart Code" : "Show Dart Code Implementation"}</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showMobileCode ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Right Column: Code Snippet Viewer (Always visible on desktop, toggleable on mobile) */}
          <div className={`lg:col-span-7 bg-[#0C0D12] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner flex-col ${showMobileCode ? "flex" : "hidden lg:flex"}`}>
            <div className="flex items-center justify-between px-4 py-2.5 sm:py-3 bg-[#15171E] border-b border-white/10 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#E58A2B]" />
                <span className="text-white font-bold">{current.id}_impl.dart</span>
              </div>
              <span className="text-[10px] text-[#94A3B8] font-bold uppercase">Clean Arch</span>
            </div>
            <pre className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-amber-100/90 leading-relaxed overflow-x-auto whitespace-pre">
              <code>{current.code}</code>
            </pre>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
