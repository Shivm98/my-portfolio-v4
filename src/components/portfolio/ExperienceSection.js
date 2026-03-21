import ExperienceYearsNote from "./ExperienceYearsNote";

/** Line and dots share this horizontal center (from container left). */
const TIMELINE_LEFT = "1.125rem";

export default function ExperienceSection({ data }) {
  const e = data.experience;
  return (
    <section
      className="py-32 bg-slate-100/40 dark:bg-slate-950/40 relative overflow-hidden"
      id="experience"
    >
      <div className="absolute inset-0 engineer-grid opacity-20"></div>
      <div className="max-w-5xl mx-auto px-8 relative">
        <div className="mb-24 space-y-4 text-left">
          <h2 className="font-headline text-sm font-bold text-primary tracking-[0.4em] uppercase">
            {e.eyebrow}
          </h2>
          <h3 className="font-headline text-5xl font-bold text-on-surface">
            {e.title}
          </h3>
          <ExperienceYearsNote />
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent dark:via-white/10"
            style={{ left: TIMELINE_LEFT }}
            aria-hidden
          />

          <div className="space-y-20">
            {e.items.map((exp, idx) => (
              <div key={idx} className="group relative pl-10 sm:pl-12">
                <div
                  className="absolute top-10 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/10 transition-transform group-hover:scale-150"
                  style={{ left: TIMELINE_LEFT }}
                />
                <div className="w-full rounded-2xl p-8 glass-card text-left transition-all hover:bg-white dark:hover:bg-white/[0.05]">
                  <time className="font-label mb-2 block text-xs font-bold uppercase tracking-widest text-secondary">
                    {exp.date}
                  </time>
                  <h4 className="font-headline text-xl font-bold text-on-surface">
                    {exp.title}
                  </h4>
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                    {exp.company}
                  </p>
                  {Array.isArray(exp.points) && exp.points.length > 0 ? (
                    <ul className="list-outside list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-on-surface-variant">
                      {exp.points.map((line, li) => (
                        <li key={li}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm font-light leading-relaxed text-on-surface-variant">
                      {exp.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
