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
    <h2 className={cn(
      "relative mb-16 text-center text-[2rem] font-bold transition-all pb-5",
      "before:absolute before:right-1/2 before:-bottom-1.25 before:translate-x-1/2 before:translate-y-1/2 before:rounded-[10rem] before:transition-all before:h-0.75 before:w-20 before:bg-[rgb(var(--primary-80))]",
      "after:absolute after:right-1/2 after:-bottom-1.25 after:translate-x-1/2 after:translate-y-1/2 after:rounded-[10rem] after:transition-all after:h-2 after:w-6 after:bg-[rgb(var(--primary-10))] dark:after:bg-[rgb(var(--primary-90))]",
      className
    )}>
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
