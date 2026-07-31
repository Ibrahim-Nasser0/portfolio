"use client";

import React, { useEffect, useRef } from "react";

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
}

export const AuroraBackground = ({ children }: { children?: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;
    let currentMouseX = -1000;
    let currentMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const particles: DustParticle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < count; i++) {
        const maxAlpha = Math.random() * 0.4 + 0.05;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.2 + 0.4,
          alpha: maxAlpha,
          maxAlpha,
        });
      }
    };

    let tick = 0;

    const render = () => {
      tick += 0.01;

      // Smooth mouse lerp
      currentMouseX += (mouseX - currentMouseX) * 0.08;
      currentMouseY += (mouseY - currentMouseY) * 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Dark Charcoal Base (#0B0C0E)
      ctx.fillStyle = "#0B0C0E";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Interactive Mouse Torch Spotlight
      if (currentMouseX > 0 && currentMouseY > 0) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";

        const mouseGlow = ctx.createRadialGradient(
          currentMouseX,
          currentMouseY,
          0,
          currentMouseX,
          currentMouseY,
          350
        );
        mouseGlow.addColorStop(0, "rgba(229, 138, 43, 0.10)"); // Subtle warm gold
        mouseGlow.addColorStop(0.5, "rgba(180, 95, 20, 0.03)");
        mouseGlow.addColorStop(1, "rgba(11, 12, 14, 0)");

        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      // 3. Micro Dust Particles (Sparse & Subtle)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const twinkle = Math.sin(tick + p.x) * 0.08;
        const alpha = Math.max(0.02, Math.min(0.6, p.alpha + twinkle));

        ctx.fillStyle = `rgba(240, 240, 245, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0B0C0E] text-[#F3F4F6] overflow-x-hidden font-sans grain-overlay">
      {/* Canvas for interactive dust specks & mouse spotlight */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Top-Right Ambient Warm Gold Radial Glow (Exact match to surendarselvaraj.com) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-[8%] top-[15%] z-0 h-[65vh] w-[65vh] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #E58A2B 0%, transparent 65%)",
        }}
      />

      {/* Bottom-Left Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-[5%] bottom-[10%] z-0 h-[50vh] w-[50vh] rounded-full opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #1E2D50 0%, transparent 65%)",
        }}
      />

      {/* Main Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
