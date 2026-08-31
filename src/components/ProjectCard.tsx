import Link from "next/link";
import type { Project } from "@/lib/projects";

// Final, user-approved landscape poster graphics (title + tagline, and for
// "Mann & Weib" also the full text + button, baked directly into the
// artwork). These are the exact images the user supplied — used as-is,
// full width, never cropped or faded.
const posterImages: Record<string, string> = {
  "mann-weib-in-einigkeit":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/e455871dd_2741c5897_ChatGPTImage31Aug202613_48_04.png",
  "die-7-seelen":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/5523241eb_789524c12_ChatGPTImage31Aug202613_53_39.png",
  "klangvoll-leben":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/c88341cb7_449b1ad9f_ChatGPTImage31Aug202614_11_14.png",
};

// "Mann & Weib" already has its full text + button baked into the poster —
// the whole card is simply a clickable image. The other two only bake in
// the title/tagline, so we add the original project text + a button below.
const selfContained = new Set(["mann-weib-in-einigkeit"]);

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

  return (
    <div className="rounded-2xl overflow-hidden border border-stone-200/60 bg-[var(--color-cream)] flex flex-col h-full">
      <img src={image} alt={project.title} className="w-full h-auto block" />
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-stone-600 leading-relaxed mb-5">
          {project.text}
        </p>
        <div className="mt-auto">
          <Link
            href={`/projekte/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-maroon)] text-white text-sm font-medium px-4 py-2 hover:bg-[var(--color-maroon-dark)] transition-colors"
          >
            Projekt entdecken <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
