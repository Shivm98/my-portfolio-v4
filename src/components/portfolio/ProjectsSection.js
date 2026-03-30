import ProjectImageGallery from "./ProjectImageGallery";

const tagClasses = {
  primary:
    "px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20",
  secondary:
    "px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20",
};

const iconButtonClasses = {
  primary:
    "w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors",
  secondary:
    "w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-secondary/20 transition-colors",
};

const iconSymbolClasses = {
  primary: "material-symbols-outlined text-primary text-xl",
  secondary: "material-symbols-outlined text-secondary text-xl",
};

function resolveImages(item) {
  if (item.images?.length) {
    return item.images.map((img) => ({
      url: img.url,
      alt: img.alt ?? item.title,
    }));
  }
  if (item.layout === "image" && item.imageUrl) {
    return [{ url: item.imageUrl, alt: item.imageAlt ?? item.title }];
  }
  return [];
}

function resolveDescriptionParagraphs(item) {
  if (item.descriptionParagraphs?.length) {
    return item.descriptionParagraphs;
  }
  if (item.description) {
    return [item.description];
  }
  return [];
}

function ProjectExternalControl({ item }) {
  const className = iconButtonClasses[item.accent];
  const icon = (
    <span className={iconSymbolClasses[item.accent]}>north_east</span>
  );
  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Open ${item.title} (external)`}
      >
        {icon}
      </a>
    );
  }
  return (
    <button type="button" className={className}>
      {icon}
    </button>
  );
}

function ProjectMedia({ item, detailModal }) {
  if (item.layout === "icon") {
    return (
      <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-900/50 flex items-center justify-center">
        <span className="material-symbols-outlined text-8xl text-secondary/30 group-hover:scale-110 transition-transform duration-700">
          {item.icon}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-950/90 to-transparent"></div>
      </div>
    );
  }

  const images = resolveImages(item);
  if (!images.length) {
    return null;
  }

  return (
    <ProjectImageGallery
      images={images}
      title={item.title}
      detailModal={detailModal}
    />
  );
}

export default function ProjectsSection({ data }) {
  const p = data.projects;
  const multiColumn = p.items.length > 1;

  return (
    <section className="py-16 sm:py-24 md:py-32" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12 sm:mb-20 md:mb-24 space-y-3 sm:space-y-4 text-left">
          <h2 className="font-headline text-sm font-bold text-primary tracking-[0.4em] uppercase">
            {p.eyebrow}
          </h2>
          <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface">
            {p.title}
          </h3>
        </div>
        <div
          className={
            multiColumn
              ? "grid md:grid-cols-2 gap-8 md:gap-12"
              : "max-w-3xl mx-auto w-full"
          }
        >
          {p.items.map((item, idx) => {
            const paragraphs = resolveDescriptionParagraphs(item);
            const images = resolveImages(item);
            const detailModal =
              images.length > 0 &&
              (paragraphs.length > 0 || item.highlights?.length > 0)
                ? {
                    paragraphs,
                    highlights: item.highlights,
                    tags: item.tags,
                    accent: item.accent,
                  }
                : undefined;
            const compactCardBody = Boolean(detailModal);

            return (
              <div
                key={idx}
                className="group relative glass-card rounded-2xl sm:rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <ProjectMedia item={item} detailModal={detailModal} />
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex justify-between items-start gap-4 mb-4 sm:mb-6">
                    <h4 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
                      {item.title}
                    </h4>
                    <ProjectExternalControl item={item} />
                  </div>
                  {compactCardBody ? (
                    <>
                      {paragraphs[0] ? (
                        <p className="text-on-surface-variant mb-5 sm:mb-6 leading-relaxed font-light text-sm sm:text-base line-clamp-3">
                          {paragraphs[0]}
                        </p>
                      ) : null}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span key={t} className={tagClasses[item.accent]}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-3 sm:space-y-4 text-on-surface-variant mb-5 sm:mb-6 leading-relaxed font-light text-sm sm:text-base">
                        {paragraphs.map((text, i) => (
                          <p key={i}>{text}</p>
                        ))}
                        {item.highlights?.length ? (
                          <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base">
                            {item.highlights.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span key={t} className={tagClasses[item.accent]}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
