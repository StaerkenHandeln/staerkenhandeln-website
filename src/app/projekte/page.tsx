import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projekte() {
  const mannWeib = projects.find((p) => p.slug === "mann-weib-in-einigkeit")!;
  const rest = projects.filter((p) => p.slug !== "mann-weib-in-einigkeit");

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl text-[var(--color-navy)] mb-2">
          Unsere Projekte
        </h1>
        <p className="text-stone-500">
          Unterschiedliche Wege. Eine gemeinsame Haltung.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <ProjectCard project={mannWeib} wide />
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
