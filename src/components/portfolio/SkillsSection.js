const SKILL_CATEGORIES = [
  {
    title: "Frontend & UI",
    color: "text-primary",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
  },
  {
    title: "State & Logic",
    color: "text-secondary",
    skills: ["Redux Toolkit", "Context API", "Zustand", "SEO/SSR"],
  },
  {
    title: "Backend & APIs",
    color: "text-tertiary",
    skills: ["Node.js", "Express", "PostgreSQL", "WebSockets"],
  },
  {
    title: "Cloud & Ops",
    color: "text-on-surface-variant",
    skills: ["AWS / GCP", "Docker", "CI/CD", "Git"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-32" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="h-1 w-12 bg-secondary"></div>
            <h2 className="font-headline text-sm font-bold text-secondary tracking-[0.3em] uppercase">
              Technical Arsenal
            </h2>
            <h3 className="font-headline text-4xl font-bold">
              The Stack of Choice
            </h3>
          </div>
          <p className="text-on-surface-variant max-w-sm text-right font-light leading-relaxed">
            A modern and robust tech stack curated for performance, developer
            experience, and scalability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
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
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md text-xs border border-black/5 dark:border-white/5"
                  >
                    {s}
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
