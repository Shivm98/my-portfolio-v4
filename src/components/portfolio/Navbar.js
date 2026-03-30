"use client";

import Link from "next/link";

export default function Navbar({ data }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-headline"
        >
          {data.brand.name}
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {data.nav.items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors font-headline tracking-tight text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 text-sm"
          >
            {data.nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}
