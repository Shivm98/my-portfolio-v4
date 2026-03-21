"use client";

export default function HeroSection({ onViewProjects }) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-28 flex flex-col md:flex-row items-center gap-16 relative">
      <div className="flex-1 space-y-10">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(83,221,252,0.4)]"></span>
          <span className="text-[10px] font-label text-secondary uppercase tracking-[0.2em] font-bold">
            Open for Architecture Consulting
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-on-surface">
          Senior Solution <br />
          <span className="text-gradient">Engineer</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg font-light">
          Frontend-Focused Full-Stack Developer specializing in delivering and
          scaling high-performance, production-ready web applications.
        </p>
        <div className="flex flex-wrap gap-5 pt-4">
          <button
            type="button"
            onClick={onViewProjects}
            className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all group"
          >
            View Projects{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
          <button
            type="button"
            className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-on-surface hover:bg-black/10 dark:hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="relative flex-shrink-0 w-full max-w-md group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-surface-container-low shadow-2xl aspect-[4/5]">
          <img
            alt="Shiv Shankar Mishra Profile"
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida/ADBb0ug-X6h9-7-NiSbHdB7qLVZI26n67nl8Y9893uGTuFOtPqd003KLUhvJ36VnOfrm4V2SYrX9iGved4IlwZ1CCg9PTEBt8lcD7ZOfGbPjfMQv1pRyeNltvkewaVQ5YaTHNOpLBzPk6NpWRn796cOzmdL9IHDuUjQMUQ-bokBk0G4KOVnMMwETV5Btchab_h6la-h8uPnmoWiKfCWedCGfAa6FWcTvVRHS4RoFTi08Yj2NPRZ3pH9ZwJQBPsJH7rXHUTWHyXNKIcuGrw"
          />
        </div>
        <div
          className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-xl animate-bounce"
          style={{ animationDuration: "4s" }}
        >
          <div className="text-3xl font-headline font-bold text-secondary">
            5.2+
          </div>
          <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
            Years Experience
          </div>
        </div>
        <div
          className="absolute -top-8 -right-8 glass-card p-6 rounded-2xl shadow-xl animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        >
          <div className="text-3xl font-headline font-bold text-primary">
            30+
          </div>
          <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
            Projects Delivered
          </div>
        </div>
      </div>
    </section>
  );
}
