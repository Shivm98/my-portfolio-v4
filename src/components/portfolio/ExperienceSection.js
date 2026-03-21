import ExperienceYearsNote from "./ExperienceYearsNote";

export default function ExperienceSection({ data }) {
  const e = data.experience;
  return (
    <section
      className="py-32 bg-slate-100/40 dark:bg-slate-950/40 relative overflow-hidden"
      id="experience"
    >
      <div className="absolute inset-0 engineer-grid opacity-20"></div>
      <div className="max-w-5xl mx-auto px-8 relative">
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-headline text-sm font-bold text-primary tracking-[0.4em] uppercase">
            {e.eyebrow}
          </h2>
          <h3 className="font-headline text-5xl font-bold text-on-surface">
            {e.title}
          </h3>
          <ExperienceYearsNote />
        </div>
        <div className="space-y-20 relative before:absolute before:left-8 md:before:left-1/2 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-transparent before:via-black/10 dark:before:via-white/10 before:to-transparent before:-translate-x-1/2">
          {e.items.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col ${exp.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-start md:items-center justify-between group`}
            >
              <div
                className={`hidden md:block w-[42%] ${exp.align === "right" ? "text-left pl-12" : "text-right pr-12"}`}
              >
                <time className="font-label text-xs text-secondary font-bold uppercase tracking-widest">
                  {exp.date}
                </time>
              </div>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10 z-10 transition-transform group-hover:scale-150"></div>
              <div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[42%] p-8 rounded-2xl glass-card hover:bg-white dark:hover:bg-white/[0.05] transition-all">
                <time className="md:hidden block font-label text-xs text-secondary font-bold uppercase tracking-widest mb-2">
                  {exp.date}
                </time>
                <h4 className="font-headline text-xl font-bold text-on-surface">
                  {exp.title}
                </h4>
                <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">
                  {exp.company}
                </p>
                {Array.isArray(exp.points) && exp.points.length > 0 ? (
                  <ul className="text-on-surface-variant text-sm leading-relaxed font-light list-disc list-outside pl-5 space-y-2">
                    {exp.points.map((line, li) => (
                      <li key={li}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                    {exp.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
