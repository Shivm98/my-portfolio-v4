export default function SkillsSection({ data }) {
  const s = data.skills;
  return (
    <section className="py-32" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="h-1 w-12 bg-secondary"></div>
            <h2 className="font-headline text-sm font-bold text-secondary tracking-[0.3em] uppercase">
              {s.eyebrow}
            </h2>
            <h3 className="font-headline text-4xl font-bold">{s.title}</h3>
          </div>
          <p className="text-on-surface-variant max-w-sm text-right font-light leading-relaxed">
            {s.blurb}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-colors group"
            >
              <h4
                className={`font-headline ${cat.color} font-bold uppercase tracking-widest text-[10px] mb-6`}
              >
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md text-xs border border-black/5 dark:border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
