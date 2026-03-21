export default function ProjectsSection() {
  return (
    <section className="py-32" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <h2 className="font-headline text-sm font-bold text-primary tracking-[0.4em] uppercase">
            Showcase
          </h2>
          <h3 className="font-headline text-5xl font-bold text-on-surface">
            Selected Case Studies
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group relative glass-card rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-video relative overflow-hidden">
              <img
                alt="Alibaba Arcade"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCm8JiOCXAQsa0pbUGMKu5oKjx2UIUwqDVHCCsRMSqYPTOlO3mx2_W_Wkt8sSgzi_FxgBAW7ucxjGY5Yl4LSRblfURkMBWQ63m-eV4ldncYig67ItpJtcBG0YPPSWG0MKFGIJzWPiMGqNLvTuNHhg8fEzPSnv7DyNGduARK33J5XExZ7BdX3T9lBE9_15YeD24dEfsCgN530M5auk-Iu3K3oBtklfaF07B4N6wKU68drUvRmmXTK5q-Oyff5dEV_dGPbILJQ1ejzs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-950/90 to-transparent"></div>
            </div>
            <div className="p-10">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-headline text-2xl font-bold text-on-surface">
                  Alibaba Arcade
                </h4>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-xl">
                    north_east
                  </span>
                </button>
              </div>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-light">
                High-concurrency gaming ecosystem optimized for global scale,
                ensuring production-readiness and sub-100ms latency.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "WebSockets", "Redux"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative glass-card rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-900/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl text-secondary/30 group-hover:scale-110 transition-transform duration-700">
                account_balance_wallet
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-950/90 to-transparent"></div>
            </div>
            <div className="p-10">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-headline text-2xl font-bold text-on-surface">
                  Vegas Coins
                </h4>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                >
                  <span className="material-symbols-outlined text-secondary text-xl">
                    north_east
                  </span>
                </button>
              </div>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-light">
                Secure digital wallet for gaming assets. Built with
                transactional integrity and multi-layer security.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Web3", "PostgreSQL"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
