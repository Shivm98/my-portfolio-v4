const EXPERIENCE = [
  {
    date: "04/2025 – Present",
    title: "Senior Solution Engineer",
    company: "GammaStack",
    desc: "Leading delivery of production applications, owning frontend architecture (Next.js), and mentoring teams.",
    align: "left",
  },
  {
    date: "04/2023 – 03/2025",
    title: "Solution Engineer",
    company: "GammaStack",
    desc: "Scaled casino platforms with WebSockets, optimized backoffice systems, and enhanced SEO performance.",
    align: "right",
  },
  {
    date: "05/2021 – 03/2023",
    title: "Full Stack Web Developer",
    company: "Celebal Technologies",
    desc: "Led frontend for Enterprise Chatbots using MS Bot Framework. Managed a team of 7.",
    align: "left",
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="py-32 bg-slate-100/40 dark:bg-slate-950/40 relative overflow-hidden"
      id="experience"
    >
      <div className="absolute inset-0 engineer-grid opacity-20"></div>
      <div className="max-w-5xl mx-auto px-8 relative">
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-headline text-sm font-bold text-primary tracking-[0.4em] uppercase">
            Professional Evolution
          </h2>
          <h3 className="font-headline text-5xl font-bold text-on-surface">
            Career Trajectory
          </h3>
        </div>
        <div className="space-y-20 relative before:absolute before:left-8 md:before:left-1/2 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-transparent before:via-black/10 dark:before:via-white/10 before:to-transparent before:-translate-x-1/2">
          {EXPERIENCE.map((exp, idx) => (
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
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
