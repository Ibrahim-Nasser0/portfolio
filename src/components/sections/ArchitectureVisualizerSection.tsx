"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, Database, ArrowRight, Code2, CheckCircle2, Workflow } from "lucide-react";

export const ArchitectureVisualizerSection = () => {
  const [activeLayer, setActiveLayer] = useState<"presentation" | "domain" | "data">("domain");

  const layers = [
    {
      id: "presentation",
      name: "Presentation Layer",
      subtitle: "UI Widgets & BLoC / Cubit State Handlers",
      icon: Cpu,
      color: "from-amber-500/20 to-[#E58A2B]/10",
      borderColor: "border-[#E58A2B]",
      textColor: "text-[#E58A2B]",
      summary: "Strictly decoupled from data sources. Rebuilds UI reactively based on immutable state emissions from BLoC events.",
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
        "Zero business logic in UI widgets",
        "Freezed immutable states & events",
        "Deterministic UI state testing",
      ],
    },
    {
      id: "domain",
      name: "Domain Layer (Core)",
      subtitle: "Use Cases, Business Entities & Contracts",
      icon: ShieldCheck,
      color: "from-[#E58A2B]/20 to-amber-500/10",
      borderColor: "border-[#E58A2B]",
      textColor: "text-[#E58A2B]",
      summary: "Pure Dart layer with zero external dependencies. Defines core business logic, entities, and abstract repository contracts.",
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
        "100% pure Dart (Framework independent)",
        "Single Responsibility Use Cases",
        "Dependency Inversion (DIP) via abstract interfaces",
      ],
    },
    {
      id: "data",
      name: "Data Layer",
      subtitle: "Dio REST Client, Hive Local Cache & Data Mappers",
      icon: Database,
      color: "from-[#E58A2B]/15 to-amber-500/5",
      borderColor: "border-[#E58A2B]/60",
      textColor: "text-[#E58A2B]",
      summary: "Handles network calls, caching, and serialization. Implements domain repository contracts and converts DTOs to Domain Entities.",
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
        "Optimistic local storage via Hive DB",
        "Dio Interceptors for JWT Refresh & Retries",
        "Data Transfer Objects (DTO) Mappers",
      ],
    },
  ];

  const current = layers.find((l) => l.id === activeLayer)!;

  return (
    <section id="architecture" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <Workflow className="w-3.5 h-3.5" />
          <span>Clean Architecture Blueprint</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          System Architecture & Data Flow
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          Interactive breakdown of Clean Architecture layers, ensuring maintainability, 100% testability, and decoupling.
        </p>
      </div>

      {/* Layer Navigation Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {layers.map((layer, idx) => {
          const Icon = layer.icon;
          const isSelected = activeLayer === layer.id;

          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id as typeof activeLayer)}
              className={`relative p-6 rounded-2xl border text-left transition-all duration-300 ${
                isSelected
                  ? `bg-[#15171E] ${layer.borderColor} shadow-2xl scale-[1.02]`
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-3 rounded-xl bg-white/5 ${layer.textColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  Layer 0{idx + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">{layer.name}</h3>
              <p className="text-xs text-gray-400 font-mono mt-1">{layer.subtitle}</p>

              {isSelected && (
                <motion.div
                  layoutId="activeLayerIndicator"
                  className={`absolute -bottom-[2px] inset-x-6 h-[3px] rounded-full ${layer.textColor.replace(
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#15171E]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
        >
          {/* Left Column: Architectural Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 border border-white/10 ${current.textColor}`}>
                  {current.name}
                </span>
              </div>
              <p className="text-base text-gray-300 font-light leading-relaxed">
                {current.summary}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block">
                Key Architectural Benefits:
              </span>
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-mono">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${current.textColor}`} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Snippet Viewer (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C0D12] border border-white/10 rounded-2xl overflow-hidden shadow-inner flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 bg-[#15171E] border-b border-white/10 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#E58A2B]" />
                <span className="text-white font-bold">{current.id}_impl.dart</span>
              </div>
              <span className="text-[10px] text-gray-500 font-bold uppercase">Clean Architecture</span>
            </div>
            <pre className="p-5 font-mono text-xs text-amber-100/90 leading-relaxed overflow-x-auto whitespace-pre">
              <code>{current.code}</code>
            </pre>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
