'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    setIsTouch(prefersReducedMotion || isTouchDevice);
    
    const glow = glowRef.current;
    if (!glow || prefersReducedMotion || isTouchDevice) return;

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;

      // Adaptive glow: detect background darkness at cursor position
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;

      // Check if hovering over dark sections or purple elements
      const bg = window.getComputedStyle(el).backgroundColor;
      const isDark = el.closest('.bg-\\[\\#111111\\]') || el.closest('.bg-primary') || el.closest('[class*="bg-primary"]');
      const isPurpleBg = el.closest('.bg-primary-container') || el.closest('[class*="bg-primary/"]');

      glow.className = 'cursor-glow';
      if (isDark) {
        glow.classList.add('cursor-glow--dark');
      } else if (isPurpleBg || bg.includes('124') || bg.includes('99')) {
        glow.classList.add('cursor-glow--purple');
      } else {
        glow.classList.add('cursor-glow--light');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isTouch]);

  if (isTouch) return null;

  return <div id="cursor-glow" ref={glowRef} className="cursor-glow cursor-glow--light" />;
}
