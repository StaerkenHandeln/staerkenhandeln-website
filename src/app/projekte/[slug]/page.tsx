import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const accentText =
    project.accent === "navy" ? "text-[var(--color-navy)]" : "text-[var(--color-maroon)]";
  const accentBg =
    project.accent === "navy" ? "bg-[var(--color-navy)]" : "bg-[var(--color-maroon)]";
  const accentBgHover =
    project.accent === "navy" ? "hover:bg-[var(--color-navy-light)]" : "hover:bg-[var(--color-maroon-dark)]";

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
      <Link
        href="/projekte"
        className="text-sm text-stone-500 hover:text-[var(--color-maroon)] mb-8 inline-flex items-center gap-1.5"
      >
        <span aria-hidden>←</span> Alle Projekte
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl object-cover aspect-[2/3]"
        />
        <div>
          <h1 className="font-display text-3xl text-[var(--color-navy)] mb-2">
            {project.title}
          </h1>
          <p className={`font-medium mb-6 ${accentText}`}>{project.tagline}</p>
          <p className="text-stone-600 leading-relaxed mb-8">{project.detail}</p>

          <Link
            href="/kontakt"
            className={`inline-block ${accentBg} text-white font-semibold px-6 py-3 rounded-lg ${accentBgHover} transition-colors`}
          >
            Frag uns nach diesem Projekt
          </Link>
        </div>
      </div>

      {project.video && (
        <div className="mt-12">
          <div className="rounded-xl overflow-hidden border border-stone-200 bg-[var(--color-navy)]">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
