"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay (simulating page load)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[1000000000] flex items-center justify-center bg-background/50 backdrop-blur-sm transition-opacity duration-300">
      <span className="relative text-6xl md:text-7xl font-semibold uppercase tracking-[0.3125rem] leading-none">
        <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          loading...
        </span>
        <span 
          className="absolute inset-0 h-full w-20 bg-primary-95 mix-blend-difference animate-[loadingMove_5s_linear_infinite]"
          style={{ right: 'calc(100% - 5rem)' }}
        />
      </span>
    </div>
  );
}
