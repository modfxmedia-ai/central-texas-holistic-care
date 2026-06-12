"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
};

type Pulse = {
  from: number;
  to: number;
  t: number;
  speed: number;
};

const COLOR_NODE = "108, 190, 69"; // logo lime
const COLOR_LINE = "45, 80, 22"; // forest
const COLOR_PULSE = "157, 210, 112"; // bright leaf

export default function NeuralBackground({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let lastTime = performance.now();

    const seedNodes = () => {
      const isMobile = width < 640;
      const density = isMobile ? 9000 : 15000;
      const count = Math.max(28, Math.min(80, Math.floor((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.2 + Math.random() * 1.6,
        pulse: Math.random() * Math.PI * 2,
      }));
      pulses = [];
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      // pick a nearby node as target
      let bestIdx = -1;
      let bestDist = Infinity;
      const a = nodes[from];
      for (let i = 0; i < nodes.length; i++) {
        if (i === from) continue;
        const b = nodes[i];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = dx * dx + dy * dy;
        if (d < bestDist && d > 1) {
          bestDist = d;
          bestIdx = i;
        }
      }
      if (bestIdx === -1) return;
      pulses.push({
        from,
        to: bestIdx,
        t: 0,
        speed: 0.4 + Math.random() * 0.5,
      });
      if (pulses.length > 18) pulses.shift();
    };

    let pulseTimer = 0;

    const draw = (now: number) => {
      const dt = Math.min(48, now - lastTime) / 16.6667; // frames
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const maxDistSq = Math.max(70 * 70, Math.min(160, width / 8) ** 2);

      // update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduced) {
          n.x += n.vx * dt;
          n.y += n.vy * dt;
          n.pulse += 0.02 * dt;
          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;
        }
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDistSq) {
            const alpha = (1 - d2 / maxDistSq) * 0.28;
            ctx.strokeStyle = `rgba(${COLOR_LINE}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw nodes with subtle glow
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const breathe = 0.6 + Math.sin(n.pulse) * 0.4;
        // glow halo
        ctx.fillStyle = `rgba(${COLOR_NODE}, ${0.08 * breathe})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fill();
        // core
        ctx.fillStyle = `rgba(${COLOR_NODE}, ${0.55 + breathe * 0.3})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // spawn pulses
      if (!reduced) {
        pulseTimer += dt;
        if (pulseTimer > 14) {
          pulseTimer = 0;
          spawnPulse();
        }
      }

      // animate pulses along edges
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) {
          pulses.splice(i, 1);
          continue;
        }
        p.t += (p.speed * dt) / 60;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const fade = Math.sin(p.t * Math.PI);
        ctx.fillStyle = `rgba(${COLOR_PULSE}, ${0.85 * fade})`;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${COLOR_PULSE}, ${0.18 * fade})`;
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", resize);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
    />
  );
}
