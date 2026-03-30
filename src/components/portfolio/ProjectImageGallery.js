"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/bodyScrollLock";

const OPEN_GUARD_MS = 600;

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
  const ignoreOpenUntilRef = useRef(0);
  const detailTitleId = useId();

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

  const closeDetails = useCallback(() => {
    ignoreOpenUntilRef.current = Date.now() + OPEN_GUARD_MS;
    setDetailsOpen(false);
  }, []);

  const openDetails = useCallback(() => {
    if (Date.now() < ignoreOpenUntilRef.current) return;
    setDetailsOpen(true);
  }, []);

  useEffect(() => {
    if (!detailsOpen) return;
    lockBodyScroll();
    const onKey = (e) => {
      if (e.key === "Escape") closeDetails();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockBodyScroll();
    };
  }, [detailsOpen, closeDetails]);

  const handleBackdropPointerDown = useCallback(
    (e) => {
      if (e.target !== e.currentTarget) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      closeDetails();
    },
    [closeDetails]
  );

  if (!images.length || !current) return null;

  const showDetailsCta =
    detailModal &&
    (detailModal.paragraphs?.length > 0 || detailModal.highlights?.length > 0);

  const canPortal =
    typeof document !== "undefined" && Boolean(document.body);

  const modalNode =
    detailsOpen &&
    detailModal &&
    canPortal &&
    createPortal(
      <div
        className="pointer-events-none fixed inset-0 z-[200] flex min-h-0 items-center justify-center overscroll-none"
        style={{
          paddingLeft: "max(0.75rem, env(safe-area-inset-left, 0px))",
          paddingRight: "max(0.75rem, env(safe-area-inset-right, 0px))",
          paddingTop: "max(0.75rem, env(safe-area-inset-top, 0px))",
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
        }}
      >
        {/* Opaque dimmer only — no backdrop-filter (prevents hover / repaint flicker) */}
        <div
          className="pointer-events-auto absolute inset-0 bg-[rgb(2_6_16/0.82)]"
          aria-hidden="true"
          onPointerDown={handleBackdropPointerDown}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={detailTitleId}
          className="pointer-events-auto relative z-10 mx-auto flex max-h-[min(90dvh,calc(100dvh-2rem))] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-container-high shadow-2xl lg:max-w-3xl"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex flex-shrink-0 items-start justify-between gap-3 border-b border-white/10 bg-surface-container-low/80 px-4 py-3 sm:px-5 sm:py-4 dark:bg-slate-950/50">
              <h2
                id={detailTitleId}
                className="font-headline min-w-0 flex-1 pr-2 text-base font-bold text-on-surface sm:text-lg md:text-xl"
              >
                {title}
              </h2>
              <button
                type="button"
                onClick={closeDetails}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-black/5 bg-black/5 text-on-surface hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
                aria-label="Close details"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-4 [-webkit-overflow-scrolling:touch] sm:px-5 sm:py-5">
              <div className="space-y-6">
                {detailModal.paragraphs?.length ? (
                  <div className="space-y-3 text-sm font-light leading-relaxed text-on-surface-variant sm:text-base">
                    {detailModal.paragraphs.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                ) : null}

                {detailModal.highlights?.length ? (
                  <div>
                    <h3 className="mb-3 font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Highlights
                    </h3>
                    <ul className="list-inside list-disc space-y-2 text-sm font-light text-on-surface-variant sm:text-base">
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
                  <h3 className="mb-3 font-headline text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:mb-4">
                    Screenshots ({images.length})
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {images.map((img, i) => (
                      <figure
                        key={`modal-${img.url}-${i}`}
                        className="rounded-xl border border-white/10 bg-black/20 p-2 dark:bg-black/40 sm:p-3"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setActive(i);
                            closeDetails();
                          }}
                          className="flex min-h-[120px] w-full items-center justify-center overflow-hidden rounded-lg bg-slate-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:min-h-[160px]"
                        >
                          <img
                            alt={img.alt}
                            src={img.url}
                            className="max-h-[200px] w-full object-contain sm:max-h-[240px]"
                            loading="lazy"
                            draggable={false}
                          />
                        </button>
                        {img.alt ? (
                          <figcaption className="mt-2 line-clamp-2 text-xs font-light text-on-surface-variant/90">
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
        </div>
      </div>,
      document.body
    );

  return (
    <>
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative flex flex-col overflow-hidden rounded-t-2xl border-b border-black/5 bg-slate-100/90 dark:border-white/10 dark:bg-slate-950/80 sm:rounded-t-[1.75rem]">
        <div className="relative flex max-h-[min(58vh,480px)] min-h-[200px] items-center justify-center px-2 py-3 sm:min-h-[240px] sm:px-4 sm:py-4 md:min-h-[260px]">
          <img
            alt={current.alt}
            src={current.url}
            className="max-h-[min(52vh,440px)] w-full select-none object-contain"
            draggable={false}
          />
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-on-surface shadow-md hover:bg-white dark:border-white/15 dark:bg-slate-900/90 dark:hover:bg-slate-800 sm:left-2 sm:h-9 sm:w-9"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-on-surface shadow-md hover:bg-white dark:border-white/15 dark:bg-slate-900/90 dark:hover:bg-slate-800 sm:right-2 sm:h-9 sm:w-9"
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
          <div className="flex flex-col gap-2 border-t border-black/5 bg-white/50 px-2 py-2 dark:border-white/10 dark:bg-slate-900/40 sm:px-3 sm:py-2.5">
            {images.length > 1 ? (
              <div
                className="-mx-0.5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-0.5 pb-1 [-webkit-overflow-scrolling:touch]"
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
                    className={`flex h-16 w-16 flex-shrink-0 snap-start items-center justify-center overflow-hidden rounded-xl border-2 bg-slate-200/60 p-1 transition-all dark:bg-slate-800/60 sm:h-[4.75rem] sm:w-[4.75rem] ${
                      i === safe
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-transparent opacity-80 hover:border-black/15 hover:opacity-100 dark:hover:border-white/20"
                    }`}
                  >
                    <img
                      alt=""
                      src={img.url}
                      className="pointer-events-none h-auto max-h-full w-auto max-w-full object-contain"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            ) : null}
            {showDetailsCta ? (
              <button
                type="button"
                onClick={openDetails}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary px-4 py-2.5 text-sm font-bold tracking-wide text-on-primary shadow-sm transition-opacity hover:opacity-90 sm:w-auto sm:self-end"
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
    </div>
    {modalNode}
    </>
  );
}
