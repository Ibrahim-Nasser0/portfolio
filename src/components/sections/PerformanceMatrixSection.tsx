"use client";

import React, { useState } from "react";

export const PerformanceMatrixSection = () => {
  const [sliderVal, setSliderVal] = useState(85); // 0 = unoptimized, 100 = fully optimized

  // Interpolated metrics based on slider position
  const fps = Math.round(35 + (sliderVal / 100) * 25); // 35fps to 60fps
  const startupTime = (3.4 - (sliderVal / 100) * 2.6).toFixed(1); // 3.4s down to 0.8s
  const memoryUsage = Math.round(145 - (sliderVal / 100) * 102); // 145MB down to 43MB

  return (
    <section id="performance" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
          <span>Performance Optimization Engine</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Optimization & Benchmark Matrix
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
          Drag the optimization slider to compare raw unoptimized code against isolate-driven, memoized Flutter engineering.
        </p>
      </div>

      {/* Interactive Slider Box */}
      <div className="bg-[#15171E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-400 uppercase">
            <span>Raw Unoptimized Code</span>
            <span className="text-[#E58A2B] font-bold">Optimization: {sliderVal}%</span>
            <span className="text-[#E58A2B]">High-Performance Engine</span>
          </div>

          <div className="relative flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full h-3 bg-[#0B0C0E] rounded-lg appearance-none cursor-pointer accent-[#E58A2B]"
            />
          </div>
        </div>

        {/* Real-Time Benchmark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: FPS Lock */}
          <div className="p-6 rounded-2xl bg-[#0B0C0E] border border-white/10 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-gray-400">
              <span className="font-mono text-xs font-bold uppercase">Render Refresh Rate</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-extrabold text-white">{fps}</span>
              <span className="font-mono text-sm text-[#E58A2B] font-bold">FPS</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#E58A2B] h-full transition-all duration-300"
                style={{ width: `${(fps / 60) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-gray-400 font-mono">
              {fps >= 58 ? "Locked 60 FPS Smooth Jank-Free" : "Frame drops during scroll"}
            </p>
          </div>

          {/* Card 2: App Startup Time */}
          <div className="p-6 rounded-2xl bg-[#0B0C0E] border border-white/10 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-gray-400">
              <span className="font-mono text-xs font-bold uppercase">Cold Boot Time</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-extrabold text-white">{startupTime}</span>
              <span className="font-mono text-sm text-[#E58A2B] font-bold">sec</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#E58A2B] h-full transition-all duration-300"
                style={{ width: `${100 - ((Number(startupTime) - 0.8) / 2.6) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-gray-400 font-mono">
              {Number(startupTime) <= 1.0 ? "Instant Cold Boot (< 1.0s)" : "Deferred initialization delay"}
            </p>
          </div>

          {/* Card 3: Memory Footprint */}
          <div className="p-6 rounded-2xl bg-[#0B0C0E] border border-white/10 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-gray-400">
              <span className="font-mono text-xs font-bold uppercase">RAM Footprint</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-extrabold text-white">{memoryUsage}</span>
              <span className="font-mono text-sm text-[#E58A2B] font-bold">MB</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#E58A2B] h-full transition-all duration-300"
                style={{ width: `${100 - ((memoryUsage - 43) / 102) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-gray-400 font-mono">
              {memoryUsage <= 50 ? "Zero Memory Leaks (Isolates)" : "High Garbage Collection churn"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

