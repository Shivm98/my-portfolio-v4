"use client";

import { useState } from "react";

const rowIconShell = {
  primary:
    "w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:bg-primary/10 transition-colors",
  secondary:
    "w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:bg-secondary/10 transition-colors",
  tertiary:
    "w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:bg-tertiary/10 transition-colors",
};

const rowIconClass = {
  primary: "material-symbols-outlined text-primary",
  secondary: "material-symbols-outlined text-secondary",
  tertiary: "material-symbols-outlined text-tertiary",
};

export default function ContactSection({ data }) {
  const c = data.contact;
  const f = c.form;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          company: honeypot,
        }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setFormState({ name: "", email: "", message: "" });
      setHoneypot("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-32 relative" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/60 dark:border-white/5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8 leading-tight text-on-surface">
                {c.headlineBefore} <br />
                <span className="text-gradient">{c.headlineGradient}</span>
              </h2>
              <p className="text-on-surface-variant text-xl mb-12 font-light leading-relaxed">
                {c.intro}
              </p>
              <div className="space-y-8">
                {c.rows.map((row, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className={rowIconShell[row.accent]}>
                      <span className={rowIconClass[row.accent]}>
                        {row.icon}
                      </span>
                    </div>
                    <div>
                      <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
                        {row.label}
                      </div>
                      <div className="text-lg font-semibold text-on-surface">
                        {row.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-200/30 dark:bg-slate-900/40 p-10 rounded-[2rem] border border-black/5 dark:border-white/10 backdrop-blur-xl">
              <form
                className="space-y-8 relative"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="sr-only">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-primary outline-none py-3 text-on-surface transition-all input-glow peer placeholder-transparent"
                      id="name"
                      name="name"
                      placeholder={f.namePlaceholder}
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => {
                        if (status === "success" || status === "error") {
                          setStatus("idle");
                        }
                        setFormState((s) => ({ ...s, name: e.target.value }));
                      }}
                    />
                    <label
                      className="absolute left-0 -top-4 text-[10px] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]"
                      htmlFor="name"
                    >
                      {f.nameLabel}
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-primary outline-none py-3 text-on-surface transition-all input-glow peer placeholder-transparent"
                      id="email"
                      name="email"
                      placeholder={f.emailPlaceholder}
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => {
                        if (status === "success" || status === "error") {
                          setStatus("idle");
                        }
                        setFormState((s) => ({ ...s, email: e.target.value }));
                      }}
                    />
                    <label
                      className="absolute left-0 -top-4 text-[10px] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]"
                      htmlFor="email"
                    >
                      {f.emailLabel}
                    </label>
                  </div>
                </div>
                <div className="relative group">
                  <textarea
                    className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-primary outline-none py-3 text-on-surface transition-all input-glow peer placeholder-transparent"
                    id="message"
                    name="message"
                    placeholder={f.messagePlaceholder}
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => {
                      if (status === "success" || status === "error") {
                        setStatus("idle");
                      }
                      setFormState((s) => ({ ...s, message: e.target.value }));
                    }}
                  ></textarea>
                  <label
                    className="absolute left-0 -top-4 text-[10px] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]"
                    htmlFor="message"
                  >
                    {f.messageLabel}
                  </label>
                </div>
                {(status === "success" || status === "error") && (
                  <p
                    className={`text-sm font-light leading-relaxed ${
                      status === "success"
                        ? "text-secondary"
                        : "text-on-surface-variant"
                    }`}
                    role={status === "error" ? "alert" : "status"}
                  >
                    {status === "success" ? f.submitSuccess : f.submitError}
                  </p>
                )}
                <button
                  className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center gap-3 group disabled:opacity-60 disabled:pointer-events-none"
                  type="submit"
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                >
                  {f.submit}{" "}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
