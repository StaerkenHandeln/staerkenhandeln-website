import Link from "next/link";
import type { Project } from "@/lib/projects";

// Final, user-approved landscape poster graphics (title + tagline baked
// directly into the artwork). These are the exact images the user supplied
// — used as-is, never cropped for content, only fit to a shared landscape
// frame.
const posterImages: Record<string, string> = {
  "die-7-seelen":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/5523241eb_789524c12_ChatGPTImage31Aug202613_53_39.png",
  "klangvoll-leben":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/c88341cb7_449b1ad9f_ChatGPTImage31Aug202614_11_14.png",
};

export function ProjectCard({ project }: { project: Project }) {
  const image = posterImages[project.slug];

  // "Mann & Weib in Einigkeit": bespoke side-by-side layout — the circle
  // artwork on the left, live text (title, tagline, description, button)
  // on the right. Kept as real text (not baked into an image) so future
  // wording changes always show up immediately.
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
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-maroon)] text-white text-xs font-medium px-4 py-2 group-hover:bg-[var(--color-maroon-dark)] transition-colors">
              Projekt entdecken <span aria-hidden>→</span>
            </span>
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
  if (!image) {
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

  // "Die 7 Seelen" and "Klangvoll leben": same fixed landscape frame so both
  // cards match in size. The small "Projekt entdecken" button sits below
  // the artwork (not on top of it) so it never covers the baked-in title —
  // no extra paragraph text, just image + button.
  return (
    <Link
      href={`/projekte/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-stone-200/60 bg-[var(--color-cream)] hover:opacity-95 transition-opacity"
    >
      <div className="relative aspect-[16/9] w-full">
        <img
          src={image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-maroon)] text-white text-xs font-medium px-3 py-1.5 group-hover:bg-[var(--color-maroon-dark)] transition-colors">
          Projekt entdecken <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
