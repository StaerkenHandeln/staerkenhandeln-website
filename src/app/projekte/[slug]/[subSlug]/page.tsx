import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ParagraphBlock } from "@/components/ParagraphBlock";

export function generateStaticParams() {
  const params: { slug: string; subSlug: string }[] = [];
  for (const p of projects) {
    for (const sp of p.subProjects ?? []) {
      if (sp.position === "bottom" && sp.slug) {
        params.push({ slug: p.slug, subSlug: sp.slug });
      }
    }
  }
  return params;
}

export default async function SubProjectDetail({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}) {
  const { slug, subSlug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const subProject = project.subProjects?.find(
    (sp) => sp.position === "bottom" && sp.slug === subSlug
  );
  if (!subProject) notFound();

  const paragraphs = (subProject.fullText ?? subProject.text).split("\n\n");

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
      <Link
        href={`/projekte/${project.slug}`}
        className="text-sm text-stone-500 hover:text-[var(--color-maroon)] mb-8 inline-flex items-center gap-1.5"
      >
        <span aria-hidden>←</span> Zurück zu {project.title}
      </Link>

      {subProject.image && (
        <img
          src={subProject.image}
          alt={subProject.title}
          className="w-full rounded-xl object-cover aspect-[16/9] mb-10"
        />
      )}

      <div className="text-center">
        <h1 className="font-display italic text-amber-800 text-2xl md:text-3xl mb-8">
          {subProject.title}
        </h1>
        <div className="mx-auto mb-8 h-px w-16 bg-amber-300" />
        {paragraphs.map((para, i) => (
          <ParagraphBlock key={i} text={para} />
        ))}
        <div className="mx-auto mt-8 h-px w-16 bg-amber-300" />
      </div>
    </div>
  );
}
