'use client';

import { useState } from 'react';

export default function NetworkToggle() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Fixed Floating Pill — bottom-right */}
      <a
        href="http://localhost:3001"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 glass-panel rounded-full border border-on-surface/10 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer"
      >
        {/* Live Pulse Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
        </span>

        {/* Label (expands on hover) */}
        <span
          className={`overflow-hidden transition-all duration-300 font-medium text-sm text-on-surface whitespace-nowrap ${
            hovered ? 'max-w-[200px] opacity-100 mr-1' : 'max-w-0 opacity-0'
          }`}
        >
          Switch to Engineering Portfolio
        </span>

        {/* Arrow */}
        <span className="material-symbols-outlined text-primary text-xl transition-transform duration-300 group-hover:translate-x-0.5">
          arrow_forward
        </span>
      </a>
    </>
  );
}
