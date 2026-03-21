export default function Footer({ data }) {
  const f = data.footer;
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/5 bg-white dark:bg-slate-950/80 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <span className="text-3xl font-black text-on-surface dark:text-white font-headline tracking-tighter">
              {data.brand.name}
            </span>
            <p className="text-on-surface-variant text-sm font-light">
              {f.copyright}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-x-12 gap-y-4 md:justify-end">
            {f.links.map((link) => (
              <a
                key={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
            <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10 hidden md:block"></div>
            <span className="text-on-surface-variant/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              {f.tagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
