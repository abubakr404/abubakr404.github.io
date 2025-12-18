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
    <div className="project-card-bg relative group/card">
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
                    "device-tab flex items-center gap-2",
                    activeDevice === device.id ? "active" : "text-gray-400 hover:text-gray-200"
                  )}
                >
                  <device.icon className="h-4 w-4" />
                  <span className="text-xs font-medium hidden sm:inline">{device.label}</span>
                </button>
              ))}
            </div>

            {/* Image Container */}
            <div className="project-img-container relative h-[20rem] w-full bg-[#15213f] rounded-lg overflow-hidden border-2 border-[#15213f] shadow-inner">
              <div className="project-img-scroll absolute top-0 left-0 w-full h-fit min-h-full">
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
            <ul className="tech-sidebar flex flex-col gap-4 p-2 bg-transparent">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Bottom: Info + Actions */}
        <div className="ml-auto w-[85%] md:w-[85%] bg-card border rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
          <div className="p-6 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground mt-2 line-clamp-2">{desc}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <Button variant="legacy-primary" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="legacy" size="sm" asChild>
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
