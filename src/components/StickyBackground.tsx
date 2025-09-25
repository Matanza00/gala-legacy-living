// src/components/StickyBackground.tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import textureBg from "@/assets/texture-bg.jpg";

type Props = {
  selector?: string;
  desktopBreakpoint?: number;
  repeatMode?: "cover" | "tile";
  debug?: boolean;
  showOverlay?: boolean;
  defaultOverlay?: string;
};

const StickyBackground: React.FC<Props> = ({
  selector = "[data-sticky-overlay-target]",
  desktopBreakpoint = 760,
  repeatMode = "cover",
  debug = false,
  showOverlay = true,
  defaultOverlay = "hsl(var(--luxury-purple) / 0.45)",
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const targets = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (!targets.length) {
      if (overlayRef.current) overlayRef.current.style.backgroundColor = defaultOverlay;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (best && best.isIntersecting && overlayRef.current && showOverlay) {
          const raw = (best.target as HTMLElement).getAttribute("data-sticky-overlay") || defaultOverlay;
          window.requestAnimationFrame(() => {
            if (!overlayRef.current) return;
            overlayRef.current.style.transition = `background-color 420ms ease`;
            overlayRef.current.style.backgroundColor = raw;
          });
        }
      },
      { threshold: [0, 0.15, 0.35, 0.6, 1] }
    );

    targets.forEach((t) => io.observe(t));

    // initial
    const initial = targets[0]?.getAttribute("data-sticky-overlay") || defaultOverlay;
    if (overlayRef.current) overlayRef.current.style.backgroundColor = initial;

    return () => io.disconnect();
  }, [mounted, selector, showOverlay, defaultOverlay]);

  if (!mounted) return null;
  if (typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <div
      className="sticky-bg-layer"
      aria-hidden="true"
      data-sticky-bg
      style={
        {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0, // base behind content
          pointerEvents: "none",
          outline: debug ? "2px dashed rgba(255,255,255,0.15)" : undefined,
        } as React.CSSProperties
      }
    >
      {/* background image (z = 0) */}
      <img
        src={textureBg}
        alt=""
        aria-hidden
        style={
          repeatMode === "tile"
            ? ({
                position: "absolute",
                top: 0,
                left: 0,
                width: "200px",
                height: "200px",
                objectFit: "cover",
                zIndex: 0,
              } as React.CSSProperties)
            : ({
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              } as React.CSSProperties)
        }
      />

      {/* overlay (z = 1) */}
      <div
        ref={overlayRef}
        className="sticky-bg-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          backgroundColor: "transparent", // will be set by IO to hsl(...) per section
        } as React.CSSProperties}
      />
    </div>,
    document.body
  );
};

export default StickyBackground;
