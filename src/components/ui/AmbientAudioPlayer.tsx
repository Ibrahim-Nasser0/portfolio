"use client";

import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

export const AmbientAudioPlayer = () => {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
      className="group relative flex items-center gap-1.5 p-2.5 rounded-full bg-[#15171E]/90 hover:bg-[#15171E] border border-white/10 hover:border-[#E58A2B]/60 backdrop-blur-xl text-xs font-mono transition-all duration-300 shadow-md active:scale-95"
    >
      <div className="relative flex items-center justify-center w-4 h-4 text-[#E58A2B]">
        {isPlaying ? (
          <Volume2 className="w-4 h-4 animate-pulse text-[#E58A2B]" />
        ) : (
          <VolumeX className="w-4 h-4 text-gray-400 group-hover:text-[#E58A2B] transition-colors" />
        )}
      </div>

      {/* Animated Equalizer Waveform Bars */}
      <div className="flex items-end gap-[2px] h-3 px-0.5">
        {[0.5, 1.0, 0.4, 0.8].map((_, i) => (
          <motion.span
            key={i}
            animate={
              isPlaying
                ? {
                    height: ["30%", "100%", "40%", "80%", "30%"],
                  }
                : { height: "25%" }
            }
            transition={{
              duration: 1.2 + i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className={`w-[2px] rounded-full transition-colors ${
              isPlaying ? "bg-[#E58A2B]" : "bg-white/20 group-hover:bg-[#E58A2B]/50"
            }`}
          />
        ))}
      </div>
    </button>
  );
};
