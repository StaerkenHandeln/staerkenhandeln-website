import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projekte() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl text-[var(--color-navy)] mb-2">Unsere Projekte</h1>
        <p className="text-stone-500">Unterschiedliche Wege. Eine gemeinsame Haltung.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-xl overflow-hidden shadow-sm border border-stone-200 bg-white flex flex-col"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full aspect-[2/3] object-cover object-top"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="font-display text-xl text-[var(--color-navy)] mb-1">{p.title}</h2>
              <p
                className={`text-sm font-medium mb-3 ${
                  p.accent === "navy" ? "text-[var(--color-navy)]" : "text-[var(--color-maroon)]"
                }`}
              >
                {p.tagline}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">{p.text}</p>
              <Link
                href={`/projekte/${p.slug}`}
                className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all ${
                  p.accent === "navy" ? "text-[var(--color-navy)]" : "text-[var(--color-maroon)]"
                }`}
              >
                Projekt entdecken
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
