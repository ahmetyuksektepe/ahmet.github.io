/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";
import type { MediumPost } from "@/data/medium-posts";

interface Blog3DCarouselProps {
  blogs: MediumPost[];
}

export default function Blog3DCarousel({ blogs }: Blog3DCarouselProps) {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number | null>(null);
  const [radius, setRadius] = useState(240);
  const [cardWidth, setCardWidth] = useState(250);

  // Only run on client — avoids any SSR/client mismatch
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(130);
        setCardWidth(180);
      } else if (window.innerWidth < 1024) {
        setRadius(180);
        setCardWidth(210);
      } else {
        setRadius(240);
        setCardWidth(250);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setMounted(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation frame loop — only runs after mount
  useEffect(() => {
    if (!mounted) return;
    const animate = () => {
      if (!isHovered) {
        setRotation((prev) => (prev + 0.18) % 360);
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mounted, isHovered]);

  if (!blogs || blogs.length === 0) return null;

  const carouselBlogs = blogs.slice(0, 6);
  const count = carouselBlogs.length;
  const angles = Array.from({ length: count }, (_, i) => (360 / count) * i);

  // Render a simple static grid on the server / before hydration
  if (!mounted) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full py-8 opacity-0">
        {carouselBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-border/60 rounded-2xl overflow-hidden bg-card h-40"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center overflow-visible select-none py-8"
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 30%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Ring Viewport */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {carouselBlogs.map((blog, idx) => {
          const baseAngle = angles[idx];
          const angle = (baseAngle + rotation) % 360;
          const angleRad = (angle * Math.PI) / 180;

          const x = Math.sin(angleRad) * radius;
          const z = Math.cos(angleRad) * radius;

          const depthFactor = (z + radius) / (2 * radius); // 0..1
          const scale = 0.78 + depthFactor * 0.22;
          const opacity = 0.38 + depthFactor * 0.62;
          const blur = Math.max(0, 2.5 - depthFactor * 2.5);
          const zIndex = Math.round(depthFactor * 10000);

          return (
            <div
              key={blog.id}
              className="absolute"
              style={{
                width: `${cardWidth}px`,
                transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                zIndex,
                opacity,
                filter: `blur(${blur}px)`,
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
              }}
            >
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full border border-border/60 hover:border-primary/40 rounded-2xl overflow-hidden bg-card/90 backdrop-blur-md shadow-xs hover:shadow-xl dark:hover:shadow-[0_12px_40px_rgba(255,255,255,0.02)] transition-all duration-300 group cursor-pointer"
              >
                {/* Cover Image */}
                <div className="aspect-video w-full overflow-hidden bg-muted relative shrink-0 border-b border-border/10 flex items-center justify-center">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  ) : (
                    <span className="text-[10px] text-muted-foreground font-mono">
                      Medium
                    </span>
                  )}
                  {blog.tags?.[0] && (
                    <span className="absolute bottom-2 left-2 text-[7px] font-bold tracking-wider uppercase font-mono bg-black/60 backdrop-blur-md border border-white/10 text-white px-2 py-0.5 rounded-full">
                      #{blog.tags[0]}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-3.5 sm:p-4 flex flex-col gap-2 flex-grow min-w-0 bg-linear-to-b from-card to-background/30">
                  <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-zinc-500 dark:text-zinc-400 font-mono leading-none">
                    <span>
                      {blog.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )
                        : ""}
                    </span>
                    <span>Medium</span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-foreground line-clamp-1 group-hover:text-primary transition-colors leading-snug">
                    {blog.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground line-clamp-2 leading-relaxed flex-grow">
                    {blog.summary}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
