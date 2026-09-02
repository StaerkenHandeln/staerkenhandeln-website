import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

const team = [
  {
    image:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/6f4e1a71a_37bced5a4_WhatsAppImage2026-08-28at201412.jpg",
    name: "Tilo Juncken",
    role: "Präsident",
    bio: "Initiator von StärkenHandeln und der Projekte. Sein Anliegen ist es, Menschen Raum zu geben, ihre Fähigkeiten zu entfalten und neue Wege zu gehen.",
    linkLabel: "Mehr über Tilo →",
  },
  {
    image:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/aca8b77ca_70e14c604_ChatGPTImage28Aug202614_22_50.png",
    name: "Karen Hagen",
    role: "Vizepräsidentin",
    bio: 'Mit "Klangvoll leben" bringt sie Klang, Frequenz und achtsame Begleitung unter das Dach von StärkenHandeln.',
    linkLabel: "Mehr über Karen →",
  },
];

const symbolLogo =
  "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/c15d3cf86_106f0378c_SH_Logo_nur_Zeichnung_hellblau_transparent.png";

const heroImage =
  "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/85c94da7f_hero_ref.png";

const mannWeib = projects.find((p) => p.slug === "mann-weib-in-einigkeit")!;
const die7Seelen = projects.find((p) => p.slug === "die-7-seelen")!;
const klangvollLeben = projects.find((p) => p.slug === "klangvoll-leben")!;

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Raum für Menschen. Raum für Ideen. Raum zum Wirken. Das original StärkenHandeln-Zeichen im Sonnenaufgang über Bergen und einem See."
          className="w-full h-auto object-cover"
        />
        <h1 className="sr-only">
          Raum für Menschen. Raum für Ideen. Raum zum Wirken.
        </h1>
        <p className="sr-only">
          Wir stärken Fähigkeiten. Verbinden Menschen. Und unterstützen Ideen
          dabei, in die Welt zu kommen.
        </p>
      </section>

      <WaveDivider className="-mt-6 md:-mt-8" />

      {/* Video */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 -mt-4 md:-mt-6">
        <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block bg-[var(--color-navy)]"
          >
            <source
              src="https://twffopnohdndyzhmmgag.supabase.co/storage/v1/object/public/videos/StaerkenHandeln_Vorstellungsvideo_V1%20(1).mp4"
              type="video/mp4"
            />
          </video>
          <div className="px-6 py-5 text-center">
            <h3 className="font-display text-lg">
              <span className="text-[var(--color-maroon)]">Stärken</span>
              <span className="text-[var(--color-navy)]">Handeln</span>{" "}
              <span className="text-[var(--color-blue)]">Entdecken</span>
            </h3>
            <div className="mx-auto mt-2 h-[2px] w-16 bg-gradient-to-r from-[var(--color-maroon)] to-[var(--color-blue)] rounded-full" />
          </div>
        </div>
      </section>

      <WaveDivider className="mt-2" flip />

      {/* Projekte */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-2 pb-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-[var(--color-navy)] mb-2">
            Unsere Projekte
          </h2>
          <p className="text-stone-500">
            Unterschiedliche Wege. Eine gemeinsame Haltung.
          </p>
        </div>

        <div className="flex flex-col gap-6 mb-6">
          <ProjectCard project={mannWeib} />
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard project={die7Seelen} />
            <ProjectCard project={klangvollLeben} />
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white text-[var(--color-navy)] text-sm font-medium px-4 py-2 hover:border-[var(--color-navy)] transition-colors"
          >
            Weitere Projekte <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <WaveDivider className="mt-2" />

      {/* Team */}
      <section className="relative overflow-hidden py-10">
        {/* Fine decorative accent lines only (no large color fills) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0 340 C 160 260, 140 160, 300 130 C 420 105, 400 40, 520 10"
            fill="none"
            stroke="var(--color-maroon)"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M1200 340 C 1040 260, 1060 160, 900 130 C 780 105, 800 40, 680 10"
            fill="none"
            stroke="var(--color-blue)"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>

        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl text-[var(--color-navy)] mb-2">
            Die Menschen hinter StärkenHandeln
          </h2>
          <p className="text-stone-500 mb-12">Verantwortung hat ein Gesicht.</p>

          <div className="flex items-start justify-center gap-10 md:gap-24 flex-wrap">
            <div className="flex flex-col items-center w-44 md:w-52">
              <img
                src={team[0].image}
                alt={team[0].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover mb-3 border border-stone-200 shadow-sm"
              />
              <h3 className="font-display text-base text-[var(--color-navy)]">
                {team[0].name}
              </h3>
              <p className="text-xs text-[var(--color-maroon)] font-medium mb-2">
                {team[0].role}
              </p>
              <p className="text-xs text-stone-500 leading-relaxed mb-2">
                {team[0].bio}
              </p>
              <Link
                href="/ueber-uns"
                className="text-xs font-medium text-stone-500 hover:text-[var(--color-maroon)] transition-colors"
              >
                {team[0].linkLabel}
              </Link>
            </div>

            <img
              src={symbolLogo}
              alt="StärkenHandeln Zeichen"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mt-6 shrink-0"
            />

            <div className="flex flex-col items-center w-44 md:w-52">
              <img
                src={team[1].image}
                alt={team[1].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover mb-3 border border-stone-200 shadow-sm"
              />
              <h3 className="font-display text-base text-[var(--color-navy)]">
                {team[1].name}
              </h3>
              <p className="text-xs text-[var(--color-maroon)] font-medium mb-2">
                {team[1].role}
              </p>
              <p className="text-xs text-stone-500 leading-relaxed mb-2">
                {team[1].bio}
              </p>
              <Link
                href="/ueber-uns"
                className="text-xs font-medium text-stone-500 hover:text-[var(--color-maroon)] transition-colors"
              >
                {team[1].linkLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
