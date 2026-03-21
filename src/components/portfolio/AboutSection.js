export default function AboutSection() {
  return (
    <section
      className="py-32 bg-black/[0.01] dark:bg-white/[0.02]"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-20">
        <div className="md:col-span-5">
          <div className="space-y-4">
            <div className="h-1 w-12 bg-primary"></div>
            <h2 className="font-headline text-sm font-bold text-primary tracking-[0.3em] uppercase">
              The Narrative
            </h2>
            <h3 className="font-headline text-5xl font-bold leading-tight">
              From Code to <br />
              <span className="text-on-surface-variant opacity-40">
                Architecture
              </span>
            </h3>
          </div>
        </div>
        <div className="md:col-span-7 space-y-8">
          <p className="text-2xl text-on-surface-variant font-light leading-relaxed">
            I’m{" "}
            <span className="text-on-surface font-semibold border-b border-primary/40">
              Shiv Shankar Mishra
            </span>
            , a Frontend-focused Full Stack Developer with over{" "}
            <span className="text-secondary font-bold">5 years</span> of
            experience building scalable systems.
          </p>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            I’ve worked on{" "}
            <span className="text-primary font-bold">30+ projects</span> across
            gaming and enterprise domains. Currently a Senior Solution Engineer,
            I specialize in React, Next.js, and modern frontend architecture.
            Beyond coding, I mentor developers and collaborate closely with
            stakeholders to deliver real business impact.
          </p>
        </div>
      </div>
    </section>
  );
}
