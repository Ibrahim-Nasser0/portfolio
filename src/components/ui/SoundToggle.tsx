"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("soundEnabled");
    if (saved === "true") setSoundEnabled(true);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    localStorage.setItem("soundEnabled", String(nextState));

    if (nextState) {
      // Play brief high-tech click sound using Web Audio API
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
      } catch (e) {
        // AudioContext disabled or unsupported
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      aria-label="Toggle Sound Effects"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E58A2B]/50 text-xs font-mono text-gray-300 hover:text-white transition-colors"
    >
      {soundEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#E58A2B] animate-pulse" />
          <span className="hidden sm:inline text-[11px]">Sound: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-gray-400" />
          <span className="hidden sm:inline text-[11px]">Sound: OFF</span>
        </>
      )}
    </button>
  );
};
