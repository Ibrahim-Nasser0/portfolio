"use client";

import React, { useEffect, useRef } from "react";

export const ParticlePortraitCanvas = ({ imageSrc }: { imageSrc: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let mouseX = -1000;
    let mouseY = -1000;
    let clickPulseTime = 0;

    // IntersectionObserver to pause rendering loop when canvas is offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (!wasVisible && isVisible) {
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleClick = () => {
      clickPulseTime = 1.0; // Trigger shimmer pulse
    };

    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    interface Dot {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      alpha: number;
      baseAlpha: number;
      brightness: number;
    }

    const dots: Dot[] = [];

    img.onload = () => {
      const size = 480;
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offscreen.width = size;
      offscreen.height = size;

      // Calculate aspect ratio aspect-fit with padding to avoid over-zooming on face
      const imgAspect = img.width / img.height;
      let drawW = size;
      let drawH = size;
      let drawX = 0;
      let drawY = 0;

      if (imgAspect > 1) {
        drawH = size / imgAspect;
        drawY = (size - drawH) / 2;
      } else {
        drawW = size * imgAspect;
        drawX = (size - drawW) / 2;
      }

      // Draw original image nicely centered
      offCtx.drawImage(img, drawX, drawY, drawW, drawH);
      const imgData = offCtx.getImageData(0, 0, size, size);
      const data = imgData.data;

      const gap = 4; // High density dot matrix
      dots.length = 0;

      for (let y = 0; y < size; y += gap) {
        for (let x = 0; x < size; x += gap) {
          const index = (y * size + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const a = data[index + 3];

          if (a > 30) {
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
            if (brightness > 0.10) {
              dots.push({
                x,
                y,
                baseX: x,
                baseY: y,
                vx: 0,
                vy: 0,
                size: brightness * 1.8 + 0.4,
                baseSize: brightness * 1.8 + 0.4,
                alpha: brightness * 0.85 + 0.15,
                baseAlpha: brightness * 0.85 + 0.15,
                brightness,
              });
            }
          }
        }
      }

      if (isVisible) {
        render();
      }
    };

    let tick = 0;

    const render = () => {
      if (!isVisible) return;

      tick += 0.015;

      if (clickPulseTime > 0) {
        clickPulseTime -= 0.02;
        if (clickPulseTime < 0) clickPulseTime = 0;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const canvasCenter = 240;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Distance to cursor
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 80;

        let currentSize = dot.baseSize;
        let currentAlpha = dot.baseAlpha;

        // Mouse hover interaction: Slight magnetic wiggle & bright gold shimmer
        if (dist < maxDist) {
          const factor = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);

          dot.vx += Math.cos(angle + Math.PI) * factor * 0.3;
          dot.vy += Math.sin(angle + Math.PI) * factor * 0.3;

          currentSize += factor * 1.2;
          currentAlpha = Math.min(1.0, currentAlpha + factor * 0.4);
        }

        // Click pulse effect
        if (clickPulseTime > 0) {
          currentAlpha = Math.min(1.0, currentAlpha + clickPulseTime * 0.3);
          currentSize += Math.sin(tick * 5) * clickPulseTime * 0.5;
        }

        // Return to base position with smooth spring damping
        dot.vx += (dot.baseX - dot.x) * 0.06;
        dot.vy += (dot.baseY - dot.y) * 0.06;

        dot.vx *= 0.82;
        dot.vy *= 0.82;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Smooth radial edge vignette fade into dark slate background
        const distFromCenter = Math.sqrt(
          (dot.baseX - canvasCenter) * (dot.baseX - canvasCenter) +
            (dot.baseY - canvasCenter) * (dot.baseY - canvasCenter)
        );
        const maxRadius = 220;
        const edgeAlpha = Math.max(0, 1 - Math.pow(distFromCenter / maxRadius, 3));

        const finalAlpha = currentAlpha * edgeAlpha;

        if (finalAlpha > 0.01) {
          // Color rendering: Warm Gold/Amber for highlights, Soft Ice Blue-White for midtones
          if (dot.brightness > 0.55 || dist < maxDist) {
            ctx.fillStyle = `rgba(229, 138, 43, ${finalAlpha})`;
          } else {
            ctx.fillStyle = `rgba(235, 238, 245, ${finalAlpha * 0.85})`;
          }

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, Math.max(0.2, currentSize), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const container = canvas.parentElement;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove, { passive: true });
      container.addEventListener("mouseleave", handleMouseLeave, { passive: true });
      container.addEventListener("click", handleClick);
    }

    return () => {
      observer.disconnect();
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("click", handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc]);

  return (
    <div className="relative w-[480px] h-[480px] max-w-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={480}
        height={480}
        className="w-full h-full object-contain cursor-pointer transition-transform duration-300"
      />
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial from-[#E58A2B]/10 via-transparent to-transparent pointer-events-none blur-2xl z-[-1]" />
    </div>
  );
};

