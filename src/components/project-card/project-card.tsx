"use client";

import { useState } from "react";
import { Monitor, Tablet, Smartphone, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  desc: string;
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  technologies: React.ReactNode[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ 
  title, 
  desc, 
  images, 
  technologies, 
  liveUrl, 
  githubUrl 
}: ProjectCardProps) {
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const devices = [
    { id: "desktop", icon: Monitor, label: "Desktop" },
    { id: "tablet", icon: Tablet, label: "Tablet" },
    { id: "mobile", icon: Smartphone, label: "Mobile" },
  ] as const;

  return (
    <div className="relative group/card before:content-[''] before:absolute before:z-[-1] before:bg-linear-to-b before:from-[rgb(var(--primary-10))] before:to-[rgb(var(--primary-20))] before:rounded-[0.625rem] before:right-0 before:bottom-0 before:h-full before:w-full md:before:h-[85%] md:before:w-[85%]">
      <div className="flex flex-col gap-4">
        {/* Card Top: Viewer + Tech Sidebar */}
        <div className="flex items-start">
          {/* Main Viewer */}
          <div className="flex-1">
            {/* Device Switcher */}
            <div className="flex justify-center gap-1 mb-0.5">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setActiveDevice(device.id)}
                  className={cn(
                    "relative rounded-t-[0.75rem] px-3 py-1 transition-all cursor-pointer z-1 flex items-center gap-2",
                    activeDevice === device.id 
                      ? "bg-[#15213f] text-white before:content-[''] before:absolute before:bottom-0 before:right-full before:w-6 before:h-3 before:z-[-1] before:pointer-events-none before:rounded-br-[0.75rem] before:shadow-[0.5rem_0_0_0_#15213f] after:content-[''] after:absolute after:bottom-0 after:left-full after:w-6 after:h-3 after:z-[-1] after:pointer-events-none after:rounded-bl-[0.75rem] after:shadow-[-0.5rem_0_0_0_#15213f]" 
                      : "text-gray-400 hover:text-gray-200"
                  )}
                >
                  <device.icon className="h-4 w-4" />
                  <span className="text-xs font-medium hidden sm:inline">{device.label}</span>
                </button>
              ))}
            </div>

            {/* Image Container */}
            <div className="group/img relative h-80 w-full bg-[#15213f] rounded-lg overflow-hidden border-2 border-[#15213f] shadow-inner">
              <div className="absolute top-0 left-0 w-full h-fit min-h-full transition-transform duration-[10s] ease-linear delay-[1s] group-hover/img:translate-y-[calc(100%-20rem)]">
                <Image 
                  src={images[activeDevice]} 
                  alt={`${title} ${activeDevice} view`}
                  width={800}
                  height={2000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Tech Sidebar */}
          <div className="w-12 pt-16">
            <ul className="flex flex-col gap-4 p-2 bg-transparent border-[#15213f] border-r-2 border-b-[5px] rounded-r-[0.375rem] border-solid">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Bottom: Info + Actions */}
        <div className="ml-auto w-[85%] md:w-[85%] bg-card/60 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.15)] hover:bg-card/80">
          <div className="p-6 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
              <p className="text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{desc}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <Button variant="legacy-primary" size="sm" asChild className="shadow-sm">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="legacy" size="sm" asChild className="bg-white/5 hover:bg-white/10 border-white/10">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
