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
          className="fixed inset-0 z-100 flex items-center justify-center p-4 post-card-zoom-overlay animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-linear-to-b from-[rgb(var(--primary-10))] to-[rgb(var(--primary-20))] text-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsZoomed(false)}
              className="post-close-btn group"
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
