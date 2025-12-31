"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  postImg: string;
  postTitle: string;
  postDetails: string;
  postDate: string;
}

export function PostCard({ postImg, postTitle, postDetails, postDate }: PostCardProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Prevent scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isZoomed]);

  return (
    <>
      {/* Regular Card */}
      <article 
        className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl cursor-pointer"
        onClick={() => setIsZoomed(true)}
      >
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={postImg}
            alt={postTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col gap-3">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">{postDate}</span>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">{postTitle}</h3>
          <p className="text-muted-foreground line-clamp-3 text-sm">{postDetails}</p>
        </div>
      </article>

      {/* Zoomed View (Modal) */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[rgba(21,31,56,0.6)] backdrop-blur-xs animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-linear-to-b from-[rgb(var(--primary-10))] to-[rgb(var(--primary-20))] text-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute right-6 bottom-full px-3 py-2 bg-[#15213f] border-l border-[rgb(var(--primary-30))] rounded-t-xl shadow-[1px_-1px_0_rgb(var(--primary-30))] color-white transition-all z-10 group before:content-[''] before:absolute before:bottom-0 before:right-full before:h-3 before:w-6 before:pointer-events-none before:rounded-br-xl before:shadow-[-0.5rem_0.0625rem_0_0_#15213f,inset_0_-0.0625rem_0_0_rgb(var(--primary-30))] hover:before:shadow-[-0.5rem_0.0625rem_0_0_rgb(var(--primary-10)),inset_0_-0.0625rem_0_0_rgb(var(--primary-30))] after:content-[''] after:absolute after:bottom-0 after:left-full after:h-3 after:w-6 after:pointer-events-none after:rounded-bl-xl after:shadow-[0.5rem_0.0625rem_0_0_#15213f,inset_0_-0.0625rem_0_0_rgb(var(--primary-30))] hover:after:shadow-[0.5rem_0.0625rem_0_0_rgb(var(--primary-10)),inset_0_-0.0625rem_0_0_rgb(var(--primary-30))] hover:bg-[rgb(var(--primary-10))]"
              aria-label="Close"
            >
              <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
            </button>

            {/* Image Side */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <Image 
                src={postImg} 
                alt={postTitle} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col gap-6">
              <span className="text-sm font-medium text-primary-80 uppercase tracking-widest">
                {postDate}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {postTitle}
              </h2>
              <div className="h-1 w-20 bg-primary-80 rounded-full" />
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {postDetails}
                </p>
                {/* Placeholder for more content if needed */}
                <p className="text-gray-400 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
