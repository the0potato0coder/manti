"use client";

import { useEffect, useRef } from "react";

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId: number | null = null;

    const shouldAnimate = () => {
      return window.scrollY < window.innerHeight && document.visibilityState === "visible";
    };

    const stopAnimation = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const startAnimation = () => {
      if (animationId !== null) return;
      animationId = requestAnimationFrame(animate);
    };

    const animate = () => {
      if (!shouldAnimate()) {
        stopAnimation();
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;

      stars.forEach((star) => {
        star.opacity += star.speed * 0.02;
        if (star.opacity > 1) star.opacity = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 226, 32, ${star.opacity})`;
        ctx.fill();

        if (star.size > 1 && window.innerWidth > 768) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(224, 226, 32, 0.5)";
        } else {
          ctx.shadowBlur = 0;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    const syncAnimationState = () => {
      if (shouldAnimate()) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    window.addEventListener("scroll", syncAnimationState, { passive: true });
    document.addEventListener("visibilitychange", syncAnimationState);
    syncAnimationState();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", syncAnimationState);
      document.removeEventListener("visibilitychange", syncAnimationState);
      stopAnimation();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};
