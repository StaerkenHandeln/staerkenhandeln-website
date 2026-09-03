import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ParagraphBlock } from "@/components/ParagraphBlock";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const positionOrder = { left: 0, middle: 1, right: 2 } as const;

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

  const poemParagraphs = project.poem?.split("\n\n") ?? [];

  const allSubProjects = project.subProjects ?? [];
  const gridSubProjects = [...allSubProjects.filter((sp) => sp.position !== "bottom")].sort(
    (a, b) => positionOrder[a.position as "left" | "middle" | "right"] - positionOrder[b.position as "left" | "middle" | "right"]
  );
  const bottomSubProjects = allSubProjects.filter((sp) => sp.position === "bottom");

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
          <p className="font-display italic text-amber-800/90 leading-relaxed text-[15px] md:text-base mb-8">{project.detail}</p>

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

      {poemParagraphs.length > 0 && (
        <div className="mt-14 max-w-xl mx-auto text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-amber-300" />
          {poemParagraphs.map((para, i) => (
            <ParagraphBlock key={i} text={para} />
          ))}
          <div className="mx-auto mt-8 h-px w-16 bg-amber-300" />
        </div>
      )}

      {gridSubProjects.length > 0 && (
        <div className="mt-16">
          <div
            className={
              gridSubProjects.length === 1
                ? "grid grid-cols-1 max-w-sm mx-auto gap-10"
                : gridSubProjects.length === 2
                ? "grid grid-cols-2 gap-6 md:gap-10"
                : "grid grid-cols-3 gap-4 md:gap-8"
            }
          >
            {gridSubProjects.map((sp) => (
              <div key={sp.position}>
                {sp.image && (
                  <img
                    src={sp.image}
                    alt={sp.title}
                    className="w-full aspect-[4/3] object-cover rounded-xl mb-4"
                  />
                )}
                <h3 className="font-display italic text-amber-800 text-sm md:text-lg text-center mb-2 md:mb-3">
                  {sp.title}
                </h3>
                <p className="font-display italic text-amber-800/90 leading-relaxed text-xs md:text-sm text-center whitespace-pre-line">
                  {sp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {bottomSubProjects.map((sp) => {
        const pitchParagraphs = sp.text.split("\n\n");
        return (
          <div key={sp.slug} className="mt-16 max-w-xl mx-auto text-center">
            <div className="mx-auto mb-8 h-px w-16 bg-amber-300" />
            <h3 className="font-display italic text-amber-800 text-lg md:text-xl mb-5">
              {sp.title}
            </h3>
            {pitchParagraphs.map((para, i) => (
              <ParagraphBlock key={i} text={para} />
            ))}
            {sp.slug && (
              <Link
                href={`/projekte/${project.slug}/${sp.slug}`}
                className={`inline-block ${accentBg} text-white font-semibold px-6 py-3 rounded-lg ${accentBgHover} transition-colors mt-4`}
              >
                Projekt entdecken
              </Link>
            )}
            <div className="mx-auto mt-8 h-px w-16 bg-amber-300" />
          </div>
        );
      })}
    </div>
  );
}
