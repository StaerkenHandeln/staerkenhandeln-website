import Link from "next/link";
import type { Project } from "@/lib/projects";

// Final, user-approved landscape poster graphics (title + tagline, and for
// "Mann & Weib" also the full text + button, baked directly into the
// artwork). These are the exact images the user supplied — used as-is,
// never cropped for content, only fit to a shared landscape frame.
const posterImages: Record<string, string> = {
  "mann-weib-in-einigkeit":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/495237e14_mann_weib_flatter.png",
  "die-7-seelen":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/5523241eb_789524c12_ChatGPTImage31Aug202613_53_39.png",
  "klangvoll-leben":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/c88341cb7_449b1ad9f_ChatGPTImage31Aug202614_11_14.png",
  "wildwiesenwissen":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/9741cbc72_ea2243c9f_f897df37-6461-49b6-b8a9-e035b882455b.png",
};

// "Mann & Weib" already has its full text + button baked into the poster —
// the whole card is simply a clickable image, nothing else needed.
// "WildWiesenWissen" uses a provisional badge graphic (title + tagline
// already baked in) as a placeholder until final artwork is ready — same
// full-image treatment, no cropping.
const selfContained = new Set(["mann-weib-in-einigkeit", "wildwiesenwissen"]);

export function ProjectCard({ project }: { project: Project }) {
  const image = posterImages[project.slug];

  if (selfContained.has(project.slug)) {
    return (
      <Link
        href={`/projekte/${project.slug}`}
        className="block rounded-2xl overflow-hidden border border-stone-200/60 bg-[var(--color-cream)] hover:opacity-95 transition-opacity"
      >
        <img src={image} alt={project.title} className="w-full h-auto block" />
      </Link>
    );
  }

  // Projects without a custom baked poster yet (e.g. still in Aufbau,
  // final artwork pending): fall back to the plain project.image plus the
  // title and tagline, same card shell as the other projects so the grid
  // stays visually consistent.
  if (!image) {
    return (
      <Link
        href={`/projekte/${project.slug}`}
        className="group block rounded-2xl overflow-hidden border border-stone-200/60 bg-[var(--color-cream)] hover:opacity-95 transition-opacity"
      >
        <div className="relative aspect-[16/9] w-full">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
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
