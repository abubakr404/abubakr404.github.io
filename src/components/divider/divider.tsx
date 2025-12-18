import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <svg
      className={cn("h-24 w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 135 30"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="animate-[wave_7s_cubic-bezier(0.36,0.45,0.63,0.53)_-0.125s_infinite]" opacity="0.85">
        <use href="#gentle-wave" x="50" y="0" className="fill-primary/20" />
      </g>
      <g className="animate-[wave_10s_cubic-bezier(0.36,0.45,0.63,0.53)_-0.125s_infinite]" opacity="0.7">
        <use href="#gentle-wave" x="50" y="3" className="fill-primary/30" />
      </g>
      <g className="animate-[wave_13s_cubic-bezier(0.36,0.45,0.63,0.53)_-0.25s_infinite]" opacity="0.3">
        <use href="#gentle-wave" x="50" y="9" className="fill-primary/40" />
      </g>
      <g className="animate-[wave_20s_cubic-bezier(0.36,0.45,0.63,0.53)_infinite]">
        <use href="#gentle-wave" x="50" y="6" className="fill-primary/50" />
      </g>
    </svg>
  );
}
