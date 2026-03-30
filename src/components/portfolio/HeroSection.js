"use client";

import { useCallback, useEffect, useState } from "react";
import { formatYearsPlus, getCareerYearsElapsed } from "@/lib/careerYears";

function initialsFromName(name) {
  const parts = String(name ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (
    parts[0][0] + parts[parts.length - 1][0]
  ).toUpperCase();
}

export default function HeroSection({ data, onViewProjects }) {
  const h = data.hero;
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [h.imageUrl]);

  const onImageError = useCallback(() => {
    setImageFailed(true);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-28 flex flex-col-reverse md:flex-row items-center gap-16 relative">
      <div className="flex-1 w-full space-y-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(83,221,252,0.4)]"></span>
          <span className="text-[10px] font-label text-secondary uppercase tracking-[0.2em] font-bold">
            {h.badge}
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-on-surface">
          {h.titleLine1} <br />
          <span className="text-gradient">{h.titleGradient}</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg font-light">
          {h.subtitle}
        </p>
        <div className="flex flex-wrap gap-5 pt-4">
          <button
            type="button"
            onClick={onViewProjects}
            className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all group"
          >
            {h.primaryCta}{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
          {h.resumePath ? (
            <a
              href={h.resumePath}
              download
              className="inline-flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-on-surface hover:bg-black/10 dark:hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {h.secondaryCta}
            </a>
          ) : (
            <button
              type="button"
              className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-on-surface hover:bg-black/10 dark:hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {h.secondaryCta}
            </button>
          )}
        </div>
      </div>
      <div className="relative flex-shrink-0 w-full max-w-md group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-surface-container-low shadow-2xl aspect-[4/5]">
          {!imageFailed && h.imageUrl ? (
            <img
              alt={h.imageAlt}
              className="w-full h-full object-cover object-top transition-all duration-700 scale-110 group-hover:scale-100"
              src={h.imageUrl}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onError={onImageError}
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container-low text-center px-6"
              role="img"
              aria-label={h.imageAlt}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-secondary/20 opacity-90" />
              <span className="relative font-headline text-5xl sm:text-6xl font-bold tracking-tight text-gradient select-none">
                {initialsFromName(data.brand?.name)}
              </span>
            </div>
          )}
        </div>
        {h.metrics.map((m, i) => (
          <div
            key={i}
            className={`absolute glass-card p-6 rounded-2xl shadow-xl animate-bounce ${i === 0 ? "-bottom-8 -left-8" : "-top-8 -right-8"}`}
            style={{
              animationDuration: m.animationDuration,
              animationDelay: m.animationDelay,
            }}
          >
            <div className={`text-3xl font-headline font-bold ${m.valueClass}`}>
              {m.dynamicFrom
                ? formatYearsPlus(getCareerYearsElapsed())
                : m.value}
            </div>
            <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
