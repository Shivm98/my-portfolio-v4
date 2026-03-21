"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  return (
    <section className="py-32 relative" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/60 dark:border-white/5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8 leading-tight text-on-surface">
                Let&apos;s build <br />
                <span className="text-gradient">extraordinary.</span>
              </h2>
              <p className="text-on-surface-variant text-xl mb-12 font-light leading-relaxed">
                Whether you need technical consulting, a new MVP architected,
                or a partner for scale, I&apos;m ready to collaborate.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">
                      mail
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
                      Direct Email
                    </div>
                    <div className="text-lg font-semibold text-on-surface">
                      shiv.stn98@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:bg-secondary/10 transition-colors">
                    <span className="material-symbols-outlined text-secondary">
                      call
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
                      Phone
                    </div>
                    <div className="text-lg font-semibold text-on-surface">
                      +91 6376418291
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:bg-tertiary/10 transition-colors">
                    <span className="material-symbols-outlined text-tertiary">
                      location_on
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
                      Based In
                    </div>
                    <div className="text-lg font-semibold text-on-surface">
                      Indore, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-200/30 dark:bg-slate-900/40 p-10 rounded-[2rem] border border-black/5 dark:border-white/10 backdrop-blur-xl">
              <form
                className="space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-primary outline-none py-3 text-on-surface transition-all input-glow peer placeholder-transparent"
                      id="name"
                      placeholder="Name"
                      type="text"
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                    />
                    <label
                      className="absolute left-0 -top-4 text-[10px] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-primary outline-none py-3 text-on-surface transition-all input-glow peer placeholder-transparent"
                      id="email"
                      placeholder="Email"
                      type="email"
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                    />
                    <label
                      className="absolute left-0 -top-4 text-[10px] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                  </div>
                </div>
                <div className="relative group">
                  <textarea
                    className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-primary outline-none py-3 text-on-surface transition-all input-glow peer placeholder-transparent"
                    id="message"
                    placeholder="Message"
                    rows={4}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  ></textarea>
                  <label
                    className="absolute left-0 -top-4 text-[10px] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]"
                    htmlFor="message"
                  >
                    Project Details
                  </label>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center gap-3 group"
                  type="submit"
                >
                  Send Message{" "}
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
