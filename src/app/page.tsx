import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

const team = [
  {
    image:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/6f4e1a71a_37bced5a4_WhatsAppImage2026-08-28at201412.jpg",
    name: "Tilo Juncken",
    role: "Präsident",
  },
  {
    image:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/aca8b77ca_70e14c604_ChatGPTImage28Aug202614_22_50.png",
    name: "Karen Hagen",
    role: "Vizepräsidentin",
  },
];

const symbolLogo =
  "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/c15d3cf86_106f0378c_SH_Logo_nur_Zeichnung_hellblau_transparent.png";

const mannWeib = {
  slug: "mann-weib-in-einigkeit",
  title: "Mann & Weib in Einigkeit",
  image:
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/d9c4cab34_9fab4407b_ChatGPTImage29Aug202620_29_04.png",
  text: "Ein Projekt rund um Beziehung, Begegnung und das Zusammenspiel von Ich, Du und Wir – für mehr Verständnis zwischen Menschen.",
};

const die7Seelen = {
  slug: "die-7-seelen",
  title: "Die 7 Seelen",
  image:
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/806fbd66a_4cacb8bdc_ChatGPTImage29Aug202620_23_33.png",
  text: "Das Projekt, das Vätern eine Stimme gibt, die einen Verlust erlebt haben – und dem Fühlen, Trauer und Verbindung sichtbar zu machen.",
};

const klangvollLeben = {
  slug: "klangvoll-leben",
  title: "Klangvoll leben",
  image:
    "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/dbb8cc94b_b4ba30cc6_ChatGPTImage29Aug202620_39_18.png",
  text: "Achtsame Begleitung mit Klang und Klangschalen für mehr Harmonie und Balance im Leben – intuitiv und gelebt von Karen Hagen.",
};

function ProjectButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-maroon)] text-white text-sm font-medium px-4 py-2 hover:bg-[var(--color-maroon-dark)] transition-colors"
    >
      Projekt entdecken <span aria-hidden>→</span>
    </Link>
  );
}

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

        {/* Mann & Weib – breites Hauptelement */}
        <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white grid md:grid-cols-2 mb-6">
          <div className="flex items-center justify-center p-6 bg-stone-50">
            <img
              src={mannWeib.image}
              alt={mannWeib.title}
              className="w-full max-w-[220px] md:max-w-[240px] h-auto object-contain"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <p className="text-stone-600 text-sm leading-relaxed mb-5">
              {mannWeib.text}
            </p>
            <div>
              <ProjectButton href={`/projekte/${mannWeib.slug}`} />
            </div>
          </div>
        </div>

        {/* Die 7 Seelen + Klangvoll leben */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[die7Seelen, klangvollLeben].map((p) => (
            <div
              key={p.slug}
              className="rounded-2xl overflow-hidden border border-stone-200 bg-white flex flex-col"
            >
              <div className="flex items-center justify-center p-5 bg-stone-50">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full max-w-[200px] h-auto object-contain"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-stone-600 text-sm leading-relaxed mb-5">
                  {p.text}
                </p>
                <div className="mt-auto">
                  <ProjectButton href={`/projekte/${p.slug}`} />
                </div>
              </div>
            </div>
          ))}
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
      <section className="max-w-3xl mx-auto px-6 md:px-12 pt-2 pb-6 text-center">
        <h2 className="font-display text-3xl text-[var(--color-navy)] mb-2">
          Die Menschen hinter StärkenHandeln
        </h2>
        <p className="text-stone-500 mb-10">Verantwortung hat ein Gesicht.</p>

        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          <div className="flex flex-col items-center w-32">
            <img
              src={team[0].image}
              alt={team[0].name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover mb-3"
            />
            <h3 className="font-display text-base text-[var(--color-navy)]">
              {team[0].name}
            </h3>
            <p className="text-xs text-[var(--color-maroon)] font-medium mb-1">
              {team[0].role}
            </p>
            <Link
              href="/ueber-uns"
              className="text-xs font-medium text-stone-500 hover:text-[var(--color-maroon)] transition-colors"
            >
              Mehr über Tilo →
            </Link>
          </div>

          <img
            src={symbolLogo}
            alt="StärkenHandeln Zeichen"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />

          <div className="flex flex-col items-center w-32">
            <img
              src={team[1].image}
              alt={team[1].name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover mb-3"
            />
            <h3 className="font-display text-base text-[var(--color-navy)]">
              {team[1].name}
            </h3>
            <p className="text-xs text-[var(--color-maroon)] font-medium mb-1">
              {team[1].role}
            </p>
            <Link
              href="/ueber-uns"
              className="text-xs font-medium text-stone-500 hover:text-[var(--color-maroon)] transition-colors"
            >
              Mehr über Karen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
