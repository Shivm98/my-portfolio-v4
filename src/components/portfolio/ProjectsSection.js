const tagClasses = {
  primary:
    "px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20",
  secondary:
    "px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20",
};

const iconButtonClasses = {
  primary:
    "w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors",
  secondary:
    "w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-secondary/20 transition-colors",
};

const iconSymbolClasses = {
  primary: "material-symbols-outlined text-primary text-xl",
  secondary: "material-symbols-outlined text-secondary text-xl",
};

export default function ProjectsSection({ data }) {
  const p = data.projects;
  return (
    <section className="py-32" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <h2 className="font-headline text-sm font-bold text-primary tracking-[0.4em] uppercase">
            {p.eyebrow}
          </h2>
          <h3 className="font-headline text-5xl font-bold text-on-surface">
            {p.title}
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {p.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative glass-card rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {item.layout === "image" ? (
                <div className="aspect-video relative overflow-hidden">
                  <img
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={item.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-950/90 to-transparent"></div>
                </div>
              ) : (
                <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-900/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-secondary/30 group-hover:scale-110 transition-transform duration-700">
                    {item.icon}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-950/90 to-transparent"></div>
                </div>
              )}
              <div className="p-10">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-headline text-2xl font-bold text-on-surface">
                    {item.title}
                  </h4>
                  <button
                    type="button"
                    className={iconButtonClasses[item.accent]}
                  >
                    <span className={iconSymbolClasses[item.accent]}>
                      north_east
                    </span>
                  </button>
                </div>
                <p className="text-on-surface-variant mb-8 leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className={tagClasses[item.accent]}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
