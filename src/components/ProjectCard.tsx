import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  // "Die 7 Seelen" and "Klangvoll leben": small logo on the left with the
  // permanently red "Projekt entdecken" button right underneath it, live
  // text (title, tagline, description) on the right, kept small enough to
  // never grow taller than the logo beside it.
  if (project.slug === "die-7-seelen" || project.slug === "klangvoll-leben") {
    const textParagraphs = project.text.split("\n\n");
    return (
      <Link
        href={`/projekte/${project.slug}`}
        className="group block rounded-2xl overflow-hidden border border-stone-200/60 bg-gradient-to-br from-[var(--color-cream)] to-white hover:opacity-95 transition-opacity"
      >
        <div className="flex flex-row items-start gap-5 p-6 md:p-7">
          <div className="flex flex-col items-center shrink-0 gap-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-28 md:w-32 aspect-[2/3] object-cover rounded-xl"
            />
            <span className="inline-flex items-center justify-center h-9 gap-1 whitespace-nowrap rounded-full bg-[var(--color-maroon)] text-white text-[11px] font-medium px-3 group-hover:bg-[var(--color-maroon-dark)] transition-colors">
              Projekt entdecken <span aria-hidden>→</span>
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg md:text-xl leading-snug mb-1 text-[var(--color-navy)]">
              {project.title}
            </h3>
            <p className="uppercase tracking-wide text-[10px] font-semibold text-[var(--color-gold)] mb-2">
              {project.tagline}
            </p>
            {textParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="font-display italic text-amber-800/90 leading-relaxed text-[13px] last:mb-0 mb-2"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // "Mann & Weib in Einigkeit": bespoke side-by-side layout — the circle
  // artwork on the left, live text (title, tagline, description, button)
  // on the right.
  if (project.slug === "mann-weib-in-einigkeit") {
    return (
      <Link
        href={`/projekte/${project.slug}`}
        className="group block rounded-2xl overflow-hidden border border-stone-200/60 bg-gradient-to-br from-[var(--color-cream)] to-white hover:opacity-95 transition-opacity"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 md:p-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-40 h-40 md:w-48 md:h-48 object-contain shrink-0"
          />
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl md:text-3xl mb-1">
              <span className="text-[var(--color-navy)]">Mann</span>{" "}
              <span className="text-[var(--color-gold)]">&amp;</span>{" "}
              <span className="text-[var(--color-maroon)]">Weib</span>{" "}
              <span className="text-[var(--color-navy)]">in Einigkeit</span>
            </h3>
            <p className="uppercase tracking-wide text-xs font-semibold text-[var(--color-gold)] mb-3">
              {project.tagline}
            </p>
            <p className="font-display italic text-amber-800/90 leading-relaxed text-[15px] mb-4">
              {project.text}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center justify-center h-10 gap-1 rounded-full bg-[var(--color-maroon)] text-white text-xs font-medium px-4 group-hover:bg-[var(--color-maroon-dark)] transition-colors">
                Projekt entdecken <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Projects without a custom baked poster yet (e.g. still in Aufbau,
  // final artwork pending): fall back to the plain project.image plus the
  // title and tagline, same card shell as the other projects so the grid
  // stays visually consistent. imageFit "contain" (e.g. a square logo/badge
  // placeholder) is shown in full on a cream backdrop instead of cropped.
  return (
    <Link
      href={`/projekte/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-stone-200/60 bg-[var(--color-cream)] hover:opacity-95 transition-opacity"
    >
      <div className="relative aspect-[16/9] w-full bg-[var(--color-cream)]">
        <img
          src={project.image}
          alt={project.title}
          className={
            project.imageFit === "contain"
              ? "absolute inset-0 w-full h-full object-contain p-3"
              : "absolute inset-0 w-full h-full object-cover"
          }
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg text-[var(--color-navy)] mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-stone-500 mb-3">{project.tagline}</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-maroon)] text-white text-xs font-medium px-3 py-1.5 group-hover:bg-[var(--color-maroon-dark)] transition-colors">
          Projekt entdecken <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
