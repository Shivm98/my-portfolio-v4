"use client";

import { useCallback, useEffect, useState } from "react";

const modalTagClasses = {
  primary:
    "px-3 py-1 rounded-lg bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/25",
  secondary:
    "px-3 py-1 rounded-lg bg-secondary/15 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/25",
};

export default function ProjectImageGallery({
  images,
  title,
  detailModal,
}) {
  const [active, setActive] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const safe = Math.min(Math.max(0, active), images.length - 1);
  const current = images[safe];

  const go = useCallback(
    (dir) => {
      setActive((i) => {
        const n = images.length;
        if (n === 0) return 0;
        return (i + dir + n) % n;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (!detailsOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setDetailsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [detailsOpen]);

  if (!images.length || !current) return null;

  const showDetailsCta =
    detailModal &&
    (detailModal.paragraphs?.length > 0 || detailModal.highlights?.length > 0);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col bg-slate-100/90 dark:bg-slate-950/80 border-b border-black/5 dark:border-white/10 rounded-t-2xl sm:rounded-t-[1.75rem] overflow-hidden">
        <div className="relative flex items-center justify-center px-2 py-3 sm:px-4 sm:py-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] max-h-[min(58vh,480px)]">
          <img
            alt={current.alt}
            src={current.url}
            className="max-h-[min(52vh,440px)] w-full object-contain select-none"
            draggable={false}
          />
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 dark:bg-slate-900/90 border border-black/10 dark:border-white/15 shadow-md flex items-center justify-center text-on-surface hover:bg-white dark:hover:bg-slate-800 transition-colors"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 dark:bg-slate-900/90 border border-black/10 dark:border-white/15 shadow-md flex items-center justify-center text-on-surface hover:bg-white dark:hover:bg-slate-800 transition-colors"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  chevron_right
                </span>
              </button>
            </>
          ) : null}
        </div>

        {images.length > 1 || showDetailsCta ? (
          <div className="flex flex-col gap-2 px-2 py-2 sm:px-3 sm:py-2.5 border-t border-black/5 dark:border-white/10 bg-white/50 dark:bg-slate-900/40">
            {images.length > 1 ? (
              <div
                className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] -mx-0.5 px-0.5"
                role="tablist"
                aria-label={`${title} screenshots`}
              >
                {images.map((img, i) => (
                  <button
                    key={`${img.url}-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === safe}
                    aria-label={
                      img.alt || `Screenshot ${i + 1} of ${images.length}`
                    }
                    onClick={() => setActive(i)}
                    className={`flex-shrink-0 snap-start rounded-xl border-2 overflow-hidden bg-slate-200/60 dark:bg-slate-800/60 p-1 w-16 h-16 sm:w-[4.75rem] sm:h-[4.75rem] flex items-center justify-center transition-all ${
                      i === safe
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-transparent opacity-80 hover:opacity-100 hover:border-black/15 dark:hover:border-white/20"
                    }`}
                  >
                    <img
                      alt=""
                      src={img.url}
                      className="max-w-full max-h-full w-auto h-auto object-contain pointer-events-none"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            ) : null}
            {showDetailsCta ? (
              <button
                type="button"
                onClick={() => setDetailsOpen(true)}
                className="w-full sm:w-auto sm:self-end inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide bg-primary text-on-primary border border-primary/40 hover:opacity-90 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined text-lg">
                  article
                </span>
                View more details
              </button>
            ) : null}
          </div>
        ) : null}
      </div>

      {detailsOpen && detailModal ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/55 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          onClick={() => setDetailsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl lg:max-w-3xl max-h-[min(92vh,840px)] flex flex-col rounded-2xl border border-white/10 bg-surface-container-high dark:bg-slate-900 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-shrink-0 flex items-start justify-between gap-3 px-5 py-4 border-b border-white/10 bg-surface-container-low/80 dark:bg-slate-950/50">
              <h2
                id="project-detail-title"
                className="font-headline text-lg sm:text-xl font-bold text-on-surface pr-2"
              >
                {title}
              </h2>
              <button
                type="button"
                onClick={() => setDetailsOpen(false)}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-on-surface flex items-center justify-center border border-black/5 dark:border-white/10"
                aria-label="Close details"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="overflow-y-auto flex-1 px-5 py-5 space-y-6">
              {detailModal.paragraphs?.length ? (
                <div className="space-y-3 text-on-surface-variant leading-relaxed font-light text-sm sm:text-base">
                  {detailModal.paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              ) : null}

              {detailModal.highlights?.length ? (
                <div>
                  <h3 className="font-headline text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
                    Highlights
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-on-surface-variant font-light">
                    {detailModal.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {detailModal.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {detailModal.tags.map((t) => (
                    <span
                      key={t}
                      className={
                        modalTagClasses[detailModal.accent] ??
                        modalTagClasses.primary
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div>
                <h3 className="font-headline text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                  Screenshots ({images.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {images.map((img, i) => (
                    <figure
                      key={`modal-${img.url}-${i}`}
                      className="rounded-xl border border-white/10 bg-black/20 dark:bg-black/40 p-2 sm:p-3"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setActive(i);
                          setDetailsOpen(false);
                        }}
                        className="w-full flex items-center justify-center min-h-[140px] sm:min-h-[180px] rounded-lg overflow-hidden bg-slate-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <img
                          alt={img.alt}
                          src={img.url}
                          className="max-h-[220px] sm:max-h-[260px] w-full object-contain"
                          loading="lazy"
                        />
                      </button>
                      {img.alt ? (
                        <figcaption className="mt-2 text-xs text-on-surface-variant/90 font-light line-clamp-2">
                          {img.alt}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
