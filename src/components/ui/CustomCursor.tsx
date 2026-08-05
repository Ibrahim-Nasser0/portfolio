"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop / pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });

        const target = e.target as HTMLElement | null;
        if (!target) {
          setIsHovered(false);
          return;
        }

        const tag = target.tagName;
        const isClickable =
          tag === "BUTTON" ||
          tag === "A" ||
          tag === "INPUT" ||
          target.role === "button" ||
          target.dataset?.cursor === "hover" ||
          (target.parentElement && (target.parentElement.tagName === "BUTTON" || target.parentElement.tagName === "A"));

        setIsHovered(!!isClickable);
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#E58A2B] pointer-events-none z-[999] shadow-sm shadow-[#E58A2B]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#E58A2B]/40 pointer-events-none z-[998] backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "rgba(229, 138, 43, 0.8)" : "rgba(229, 138, 43, 0.3)",
          backgroundColor: isHovered ? "rgba(229, 138, 43, 0.12)" : "rgba(229, 138, 43, 0)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.2 }}
      />
    </>
  );
};
