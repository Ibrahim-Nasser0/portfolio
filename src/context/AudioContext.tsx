"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";

interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const GlobalAudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggleAudio: () => {},
});

export const GlobalAudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Persistent audio element across root layout & route changes
    const audio = new Audio("/assets/audio/leberch-sad-510083.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  return (
    <GlobalAudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </GlobalAudioContext.Provider>
  );
};

export const useAudio = () => useContext(GlobalAudioContext);
