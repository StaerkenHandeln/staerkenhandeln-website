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

const mannWeib = projects.find((p) => p.slug === "mann-weib-in-einigkeit")!;
const die7Seelen = projects.find((p) => p.slug === "die-7-seelen")!;
const klangvollLeben = projects.find((p) => p.slug === "klangvoll-leben")!;

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img
          src="https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/c7da82c54_4c60f64c3_Herobildfinish.png"
          alt="Raum für Menschen. Raum für Ideen. Raum zum Wirken. Das StärkenHandeln-Zeichen steht auf einem Felsen im Sonnenaufgang über Bergen und einem See."
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
          <div
            className="relative aspect-[16/7] flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 60% 35%, #24406e 0%, #132445 45%, #0a1530 100%)",
            }}
          >
            <button
              aria-label="Video abspielen"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" className="md:w-8 md:h-8">
                <path d="M8 5v14l11-7z" fill="var(--color-navy)" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 text-center">
            <h3 className="font-display text-lg text-[var(--color-navy)]">
              StärkenHandeln in 2 Minuten
            </h3>
            <p className="text-sm text-stone-500 mt-1">
              Lerne uns, unsere Haltung und unsere Vision kennen.
            </p>
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
      <section className="relative overflow-hidden py-4">
        {/* Side-swept red / blue accent waves */}
        <svg
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="teamRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-maroon)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--color-maroon)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="teamBlue" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 400 C 120 300, 60 180, 220 120 C 340 75, 300 20, 460 0 L 0 0 Z"
            fill="url(#teamRed)"
          />
          <path
            d="M0 340 C 160 260, 140 160, 300 130 C 420 105, 400 40, 520 10"
            fill="none"
            stroke="var(--color-maroon)"
            strokeWidth="2"
            opacity="0.35"
          />
          <path
            d="M1200 400 C 1080 300, 1140 180, 980 120 C 860 75, 900 20, 740 0 L 1200 0 Z"
            fill="url(#teamBlue)"
          />
          <path
            d="M1200 340 C 1040 260, 1060 160, 900 130 C 780 105, 800 40, 680 10"
            fill="none"
            stroke="var(--color-blue)"
            strokeWidth="2"
            opacity="0.35"
          />
        </svg>

        <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl text-[var(--color-navy)] mb-2">
            Die Menschen hinter StärkenHandeln
          </h2>
          <p className="text-stone-500 mb-10">Verantwortung hat ein Gesicht.</p>

          <div className="flex items-start justify-center gap-6 md:gap-12 flex-wrap">
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
              className="w-10 h-10 md:w-12 md:h-12 object-contain mt-8 shrink-0"
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
