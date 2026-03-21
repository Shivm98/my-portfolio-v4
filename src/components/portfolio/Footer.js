export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/5 bg-white dark:bg-slate-950/80 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4">
            <span className="text-3xl font-black text-on-surface dark:text-white font-headline tracking-tighter">
              Shiv.dev
            </span>
            <p className="text-on-surface-variant text-sm font-light">
              © 2024 Shiv Shankar Mishra. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-12">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
              href="https://linkedin.com/in/shivshankar-mishra"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
              href="https://github.com/Shivm98"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 hidden md:block"></div>
            <span className="text-on-surface-variant/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              Crafted for high performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
