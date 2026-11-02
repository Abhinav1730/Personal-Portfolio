import React, { useEffect, useRef } from "react";

const lerp = (from, to, amount) => from + (to - from) * amount;

// Unit sphere as rings of points. Drawn with Canvas 2D so it also runs in
// browsers where WebGL is unavailable.
const buildSphere = (rings, segments) => {
  const points = [];
  for (let ring = 1; ring < rings; ring++) {
    const polar = (ring / rings) * Math.PI;
    const row = [];
    for (let segment = 0; segment < segments; segment++) {
      const azimuth = (segment / segments) * Math.PI * 2;
      row.push([
        Math.sin(polar) * Math.cos(azimuth),
        Math.cos(polar),
        Math.sin(polar) * Math.sin(azimuth),
      ]);
    }
    points.push(row);
  }
  return points;
};

const VoiceCore = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const outer = buildSphere(18, 36);
    const inner = buildSphere(9, 18);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let smoothScroll = window.scrollY;
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    const project = (point, radius, spinY, spinX, time, amplitude) => {
      const [x, y, z] = point;
      const wave =
        1 +
        amplitude *
          (Math.sin(x * 2.2 + time * 2) * Math.cos(y * 2.4 + time * 1.6) +
            0.4 * Math.sin(z * 5 + time * 4));
      const x1 = x * Math.cos(spinY) + z * Math.sin(spinY);
      const z1 = z * Math.cos(spinY) - x * Math.sin(spinY);
      const y2 = y * Math.cos(spinX) - z1 * Math.sin(spinX);
      const z2 = z1 * Math.cos(spinX) + y * Math.sin(spinX);
      const perspective = 3.6 / (3.6 - z2 * wave);
      return [x1 * wave * radius * perspective, y2 * wave * radius * perspective];
    };

    const drawSphere = (rows, radius, color, alpha, spinY, spinX, time, amplitude) => {
      const projected = rows.map((row) =>
        row.map((point) => project(point, radius, spinY, spinX, time, amplitude))
      );
      context.beginPath();
      projected.forEach((row, ringIndex) => {
        row.forEach(([x, y], index) => {
          const next = row[(index + 1) % row.length];
          context.moveTo(x, y);
          context.lineTo(next[0], next[1]);
          const below = projected[ringIndex + 1]?.[index];
          if (below) {
            context.moveTo(x, y);
            context.lineTo(below[0], below[1]);
          }
        });
      });
      context.strokeStyle = color;
      context.globalAlpha = alpha;
      context.stroke();
    };

    const draw = (time) => {
      const scale = Math.min(window.devicePixelRatio, 1.5);
      const width = canvas.width / scale;
      const height = canvas.height / scale;
      const wide = width > height;
      // Eased scroll position, so the core glides after the wheel stops
      smoothScroll = reducedMotion
        ? window.scrollY
        : lerp(smoothScroll, window.scrollY, 0.08);
      const progress = Math.min(smoothScroll / window.innerHeight, 1);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const page = scrollable > 0 ? smoothScroll / scrollable : 0;

      // Past the hero the core weaves from side to side through the sections,
      // swelling and turning with the scroll
      const pathX = 0.5 + (wide ? 0.4 : 0.34) * Math.cos(page * Math.PI * 4);
      const pathY = 0.5 + 0.24 * Math.sin(page * Math.PI * 6);
      const centerX = width * lerp(wide ? 0.74 : 0.5, pathX, progress);
      const centerY = height * lerp(wide ? 0.5 : 0.28, pathY, progress);
      const size = Math.min(width, height) * (wide ? 0.33 : 0.3);
      const swell = 0.75 + 0.3 * Math.sin(page * Math.PI * 8);
      const radius = size * lerp(1, swell, progress);
      const strength = lerp(1, 0.38, progress);

      context.setTransform(scale, 0, 0, scale, 0, 0);
      context.clearRect(0, 0, width, height);
      context.translate(centerX, centerY);
      context.lineWidth = 1;

      const glow = context.createRadialGradient(0, 0, 0, 0, 0, radius * 1.5);
      glow.addColorStop(0, "rgba(57, 208, 195, 0.2)");
      glow.addColorStop(0.5, "rgba(255, 111, 89, 0.12)");
      glow.addColorStop(1, "rgba(255, 111, 89, 0)");
      context.globalAlpha = strength;
      context.fillStyle = glow;
      context.fillRect(-radius * 1.5, -radius * 1.5, radius * 3, radius * 3);

      const spinY = time * 0.25 + pointer.x + page * Math.PI * 6;
      const spinX = 0.35 + pointer.y * 0.5 + page * Math.PI * 2;
      const morph = 0.11 + 0.1 * Math.sin(page * Math.PI) * progress;
      drawSphere(inner, radius * 0.58, "#39d0c3", 0.55 * strength, -spinY * 1.4, spinX, time, 0.05);
      drawSphere(outer, radius, "#ff6f59", 0.7 * strength, spinY, spinX, time, morph);
    };

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      if (reducedMotion) draw(4);
    };
    resize();

    let frame;
    const loop = (ms) => {
      if (!document.hidden) draw(ms / 1000);
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    if (reducedMotion) {
      window.addEventListener("scroll", resize, { passive: true });
    } else {
      window.addEventListener("pointermove", onPointerMove);
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default VoiceCore;
