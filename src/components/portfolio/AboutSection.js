import { formatYearsProse, getCareerYearsElapsed } from "@/lib/careerYears";

function segmentClass(type) {
  switch (type) {
    case "name":
      return "text-on-surface font-semibold border-b border-primary/40";
    case "secondary":
    case "experienceYears":
      return "text-secondary font-bold";
    case "primary":
      return "text-primary font-bold";
    default:
      return "";
  }
}

export default function AboutSection({ data }) {
  const a = data.about;

  return (
    <section
      className="py-32 bg-black/[0.01] dark:bg-white/[0.02]"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <div className="space-y-4">
            <div className="h-1 w-12 bg-primary"></div>
            <h2 className="font-headline text-sm font-bold text-primary tracking-[0.3em] uppercase">
              {a.eyebrow}
            </h2>
            <h3 className="font-headline text-5xl font-bold leading-tight">
              {a.titleLine1} <br />
              <span className="text-on-surface-variant opacity-40">
                {a.titleMuted}
              </span>
            </h3>
          </div>
        </div>
        <div className="md:col-span-7 space-y-8">
          {a.paragraphs.map((para, pi) => (
            <p
              key={pi}
              className={
                pi === 0
                  ? "text-2xl text-on-surface-variant font-light leading-relaxed"
                  : "text-on-surface-variant leading-relaxed text-lg"
              }
            >
              {para.segments.map((seg, i) => (
                <span key={i} className={segmentClass(seg.type)}>
                  {seg.type === "experienceYears"
                    ? formatYearsProse(getCareerYearsElapsed())
                    : seg.text}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
