"use client";

import { cn } from "@/lib/utils";

interface SpecialHeadingProps {
  children: React.ReactNode;
  backgroundText?: string;
  className?: string;
  backgroundClassName?: string;
}

export function SpecialHeading({
  children,
  backgroundText,
  className,
  backgroundClassName,
}: SpecialHeadingProps) {
  return (
    <h2 className={cn("special-heading relative mb-16 text-center font-bold", className)}>
      {children}
      {backgroundText && (
        <span 
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-primary/5 uppercase md:text-8xl whitespace-nowrap",
            backgroundClassName
          )}
          aria-hidden="true"
        >
          {backgroundText}
        </span>
      )}
    </h2>
  );
}
