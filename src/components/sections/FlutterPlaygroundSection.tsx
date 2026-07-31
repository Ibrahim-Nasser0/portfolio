"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Layers, Cpu, Wifi, WifiOff, Sparkles, RefreshCw, Code2, Play, Activity, Sliders, Move } from "lucide-react";

export const FlutterPlaygroundSection = () => {
  const [activeTab, setActiveTab] = useState<"bloc" | "physics" | "painter" | "sync" | "glass">("bloc");
  const [showCode, setShowCode] = useState(false);

  // BLoC State variables
  const [counter, setCounter] = useState(42);
  const [blocState, setBlocState] = useState<"idle" | "loading" | "success">("idle");

  // Sync variables
  const [isOnline, setIsOnline] = useState(true);
  const [syncQueue, setSyncQueue] = useState<string[]>(["Order #104", "Profile Update"]);

  // Glass/Theme variables
  const [accentHue, setAccentHue] = useState(32); // Gold amber hue

  const triggerBlocAction = () => {
    setBlocState("loading");
    setTimeout(() => {
      setCounter((prev) => prev + 1);
      setBlocState("success");
      setTimeout(() => setBlocState("idle"), 1400);
    }, 800);
  };

  const addSyncItem = () => {
    const item = `Mutation #${Math.floor(Math.random() * 899 + 100)}`;
    setSyncQueue((prev) => [...prev, item]);
  };

  const dartCodeMap = {
    bloc: `// BLoC Event & State Emission
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(const CounterState.initial(42)) {
    on<IncrementEvent>((event, emit) async {
      emit(const CounterState.loading());
      await Future.delayed(const Duration(milliseconds: 800));
      emit(CounterState.success(state.count + 1));
    });
  }
}`,
    physics: `// Flutter Spring Physics & Gesture Friction
GestureDetector(
  onPanUpdate: (details) => setState(() => offset += details.delta),
  onPanEnd: (_) => animationController.animateWith(
    SpringSimulation(
      SpringDescription(mass: 1, stiffness: 180, damping: 12),
      offset.distance, 0, 0,
    ),
  ),
);`,
    painter: `// Skia/Impeller CustomPainter Lissajous Wave
class WavePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFE58A2B)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.0;
    
    final path = Path();
    for (double t = 0; t <= math.pi * 2; t += 0.05) {
      path.lineTo(size.width / 2 + math.sin(3 * t) * 60, size.height / 2 + math.cos(2 * t) * 60);
    }
    canvas.drawPath(path, paint);
  }
}`,
    sync: `// Hive Local Cache + Dio Interceptor Strategy
class SyncRepository {
  Future<void> submitMutation(MutationModel item) async {
    if (!await networkInfo.isConnected) {
      await hiveBox.add(item.toLocalDTO());
      return;
    }
    await dio.post('/api/mutations', data: item.toJson());
  }
}`,
    glass: `// Dynamic Glassmorphism Backdrop Filter
ClipRRect(
  borderRadius: BorderRadius.circular(24),
  child: BackdropFilter(
    filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20),
    child: Container(
      color: HSLColor.fromAHSL(0.15, ${accentHue}, 0.78, 0.53).toColor(),
    ),
  ),
);`,
  };

  return (
    <section id="playground" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Flutter Engine Simulator</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Flutter UI Mechanics & State Engine
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          Test live Flutter component mechanics, spring physics, BLoC state streams, and offline-first data sync in real time.
        </p>
      </div>

      {/* Simulator Controls & Phone Frame Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Interactive Feature Selector Tabs (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
              Select Showcase Module:
            </h3>
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-[11px] font-mono text-[#E58A2B] hover:underline flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{showCode ? "Hide Dart Code" : "Show Dart Code"}</span>
            </button>
          </div>

          {[
            {
              id: "bloc",
              title: "Reactive BLoC State Management",
              desc: "Observe unidirectional data flow and state emissions.",
              icon: Layers,
            },
            {
              id: "physics",
              title: "Physics & Spring Gestures",
              desc: "Interactive spring physics, dampening & velocity drag.",
              icon: Move,
            },
            {
              id: "painter",
              title: "Custom Painter & Canvas Shaders",
              desc: "Low-level Lissajous math rendering & Skia canvas.",
              icon: Cpu,
            },
            {
              id: "sync",
              title: "Offline-First Sync (Hive + Dio)",
              desc: "Network dropout simulation & optimistic local queue.",
              icon: isOnline ? Wifi : WifiOff,
            },
            {
              id: "glass",
              title: "Dynamic Glassmorphism Aesthetics",
              desc: "HSL accent color picker & specular reflections.",
              icon: Sliders,
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  isSelected
                    ? "bg-[#15171E] border-[#E58A2B] shadow-xl shadow-[#E58A2B]/10 scale-[1.01]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl ${
                    isSelected ? "bg-[#E58A2B] text-black" : "bg-white/5 text-gray-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold font-display ${isSelected ? "text-white" : "text-gray-300"}`}>
                    {tab.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-light mt-0.5 leading-relaxed">
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Phone Simulator Canvas + Dynamic Code Drawer (7 cols) */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/18] bg-[#0B0C0E] border-[8px] border-[#15171E] rounded-[48px] shadow-2xl shadow-black ring-1 ring-white/10 overflow-hidden flex flex-col">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-3 inset-x-0 flex justify-center z-30 pointer-events-none">
              <div className="w-28 h-4 bg-black rounded-full flex items-center justify-between px-2">
                <span className="w-2 h-2 rounded-full bg-blue-500/80 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* Simulated Mobile Screen Content */}
            <div className="relative flex-1 pt-12 pb-6 px-5 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#111319] via-[#0B0C0E] to-[#15171E]">
              {/* Screen Top Status Bar */}
              <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 mb-4 z-20">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">5G</span>
                  <div className="w-4 h-2 border border-gray-400 rounded-sm p-[1px] flex items-center">
                    <div className="h-full w-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Module Content View */}
              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === "bloc" && (
                    <motion.div
                      key="bloc"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-5 text-center"
                    >
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <span className="font-mono text-[10px] text-[#E58A2B] font-bold tracking-widest uppercase">
                          BLoC CounterState
                        </span>
                        <div className="text-5xl font-extrabold text-white font-mono">
                          {counter}
                        </div>
                        <p className="text-[11px] text-gray-400 font-mono">
                          Emit: <span className="text-emerald-400 font-bold">{blocState.toUpperCase()}</span>
                        </p>
                      </div>

                      <button
                        onClick={triggerBlocAction}
                        disabled={blocState === "loading"}
                        className="w-full py-3 px-4 rounded-xl bg-[#E58A2B] hover:bg-[#F5A642] text-black font-mono text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                      >
                        {blocState === "loading" ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Emitting State...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-current" />
                            <span>Dispatch CounterIncremented</span>
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}

                  {activeTab === "physics" && (
                    <motion.div
                      key="physics"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-4 text-center"
                    >
                      <p className="text-[11px] text-gray-400 font-mono">
                        👆 Drag card around to test spring recoil
                      </p>
                      <motion.div
                        drag
                        dragConstraints={{ left: -60, right: 60, top: -60, bottom: 60 }}
                        dragElastic={0.2}
                        dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
                        className="p-5 rounded-2xl bg-[#E58A2B] text-black font-bold text-xs shadow-2xl cursor-grab active:cursor-grabbing border border-amber-300 flex flex-col items-center gap-2"
                      >
                        <Move className="w-5 h-5 animate-bounce" />
                        <span>Interactive Spring Physics</span>
                      </motion.div>
                    </motion.div>
                  )}

                  {activeTab === "painter" && (
                    <motion.div
                      key="painter"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-4 text-center"
                    >
                      <div className="relative h-40 w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                        {/* Animated Canvas Wave Math */}
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute w-32 h-32 rounded-full border-2 border-dashed border-[#E58A2B]/40"
                        />
                        <motion.div
                          animate={{
                            rotate: [360, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                          className="absolute w-24 h-24 rounded-full border border-amber-400/30"
                        />
                        <span className="font-mono text-xs font-bold text-white z-10 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                          CustomPainter Lissajous
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "sync" && (
                    <motion.div
                      key="sync"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
                        <span className="text-gray-300">Network State:</span>
                        <button
                          onClick={() => setIsOnline(!isOnline)}
                          className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 transition-colors ${
                            isOnline
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          }`}
                        >
                          {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                          <span>{isOnline ? "ONLINE" : "OFFLINE"}</span>
                        </button>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 max-h-32 overflow-y-auto font-mono text-[11px]">
                        <div className="flex justify-between text-gray-400 font-bold">
                          <span>Hive Local Queue:</span>
                          <span>{syncQueue.length} Pending</span>
                        </div>
                        {syncQueue.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-gray-300 text-[10px]">
                            <span>{item}</span>
                            <span className={isOnline ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                              {isOnline ? "Synced ✓" : "Cached ⏳"}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={addSyncItem}
                        className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold border border-white/10 transition-all active:scale-95"
                      >
                        + Add Local Mutation
                      </button>
                    </motion.div>
                  )}

                  {activeTab === "glass" && (
                    <motion.div
                      key="glass"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-4"
                    >
                      <div
                        className="p-4 rounded-2xl border backdrop-blur-xl shadow-2xl space-y-2 transition-colors duration-300"
                        style={{
                          backgroundColor: `hsla(${accentHue}, 70%, 50%, 0.15)`,
                          borderColor: `hsla(${accentHue}, 80%, 60%, 0.4)`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm font-bold text-white">Dynamic Glass Card</span>
                          <span className="font-mono text-[10px] font-bold text-white">HUE {accentHue}°</span>
                        </div>
                        <p className="text-xs text-gray-300 font-light">
                          Backdrop blur with dynamic HSL color saturation.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-gray-400 flex justify-between">
                          <span>HSL Hue Accent Picker:</span>
                          <span>{accentHue}°</span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="360"
                          value={accentHue}
                          onChange={(e) => setAccentHue(Number(e.target.value))}
                          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E58A2B]"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="pt-4 flex justify-center">
                <div className="w-32 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>

          {/* Dynamic Code Snippet Drawer */}
          <AnimatePresence>
            {showCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-[380px] bg-[#0C0D12] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#15171E] border-b border-white/10 text-xs font-mono text-gray-400">
                  <span className="text-[#E58A2B] font-bold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{activeTab}_engine.dart</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">Dart 3.x</span>
                </div>
                <pre className="p-4 font-mono text-[11px] text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre">
                  <code>{dartCodeMap[activeTab]}</code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
