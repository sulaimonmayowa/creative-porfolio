'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ endValue, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startTime;
    let observer;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(timestamp - startTime, duration);

      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress / duration, 4);

      setCount(Math.floor(endValue * easeProgress));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animateCount);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endValue, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
