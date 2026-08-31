import Link from "next/link";
import type { Project } from "@/lib/projects";

// Cropped, text-free artwork cut from the original final posters so the
// image blends into the card instead of sitting in a boxed frame.
// Title/tagline/text below are the untouched original project copy,
// rendered as real HTML so nothing is duplicated inside the image.
const cropImages: Record<string, string> = {
  "mann-weib-in-einigkeit":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/48e974b23_mann_weib_crop1.png",
  "die-7-seelen":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/b58714d11_die7_crop2.png",
  "klangvoll-leben":
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/1ab967102_klangvoll_crop2.png",
};

const cardStyles: Record<
  string,
  { bg: string; fadeHex: string; title: string; sub: string; body: string }
> = {
  "die-7-seelen": {
    bg: "bg-[var(--color-navy)]",
    fadeHex: "#0f1e40",
    title: "text-white",
    sub: "text-[var(--color-gold)]",
    body: "text-stone-200",
  },
  "mann-weib-in-einigkeit": {
    bg: "bg-[var(--color-cream)]",
    fadeHex: "#faf7f1",
    title: "text-[var(--color-navy)]",
    sub: "text-[var(--color-maroon)]",
    body: "text-stone-600",
  },
  "klangvoll-leben": {
    bg: "bg-[var(--color-cream)]",
    fadeHex: "#faf7f1",
    title: "text-[var(--color-navy)]",
    sub: "text-[var(--color-maroon)]",
    body: "text-stone-600",
  },
};

export function ProjectCard({
  project,
  wide = false,
}: {
  project: Project;
  wide?: boolean;
}) {
  const style = cardStyles[project.slug];
  const image = cropImages[project.slug];

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-stone-200/60 ${style.bg} grid grid-cols-1 ${
        wide ? "md:grid-cols-[1fr_1.35fr]" : "md:grid-cols-[0.85fr_1.15fr]"
      }`}
    >
      <div className="relative h-44 md:h-auto">
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `linear-gradient(to right, transparent 30%, ${style.fadeHex} 94%)`,
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${style.fadeHex} 96%)`,
          }}
        />
      </div>

      <div className="relative z-10 p-6 md:p-7 flex flex-col justify-center">
        <h3 className={`font-display text-xl md:text-2xl ${style.title} mb-1`}>
          {project.title}
        </h3>
        <p
          className={`text-xs uppercase tracking-widest font-semibold mb-3 ${style.sub}`}
        >
          {project.tagline}
        </p>
        <p className={`text-sm leading-relaxed mb-5 ${style.body}`}>
          {project.text}
        </p>
        <div>
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
