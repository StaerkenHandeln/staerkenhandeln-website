import Link from "next/link";

function Eyebrow({ text, light }: { text: string; light?: boolean }) {
  const lineColor = light ? "bg-white/25" : "bg-stone-300";
  const textColor = light ? "text-[var(--color-gold)]" : "text-[var(--color-maroon)]";
  return (
    <div className="flex items-center justify-center gap-4 mb-5">
      <span className={`h-px w-10 ${lineColor}`} />
      <span className={`text-xs font-semibold uppercase tracking-widest ${textColor}`}>
        {text}
      </span>
      <span className={`h-px w-10 ${lineColor}`} />
    </div>
  );
}

type Partner = {
  logo?: string;
  name: string;
  description: string;
  tag: string;
  location: string;
  since: string;
  website?: string;
};

const partners: Partner[] = [
  {
    logo:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/b80a87fba_hgmd_logo.png",
    name: "HGMD",
    description: "Motion Designer mit Herz und Seele",
    tag: "Netzwerkpartner",
    location: "Schweiz",
    since: "Partner seit 2026",
  },
  {
    logo:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/7f57720cb_verein_liga_logo.png",
    name: "Verein Liga der Kreativen",
    description:
      "Achtsamkeit als Lebens Einstellung Wer achtsam lebt, lernt spontan und nicht aufgrund von Ängsten vergangener Erfahrungen zu denken und zu entscheiden.",
    tag: "Gemeinsame Initiative",
    location: "Wien, Österreich",
    since: "Partner seit 2025",
  },
];

export default function Partner() {
  return (
    <div className="px-6 md:px-12 py-12">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto mb-10 text-sm text-stone-400">
        <Link href="/" className="hover:text-[var(--color-maroon)] transition-colors">
          Startseite
        </Link>
        <span className="mx-2">›</span>
        <span className="text-stone-500">Unsere Partner</span>
      </div>

      {/* Hero */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <Eyebrow text="Über StärkenHandeln · Unsere Partner" />
        <h1 className="font-display text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
          Gemeinsam mehr bewegen.
        </h1>
        <p className="text-stone-600 leading-relaxed mb-4">
          Wir glauben daran, dass Veränderung dort entsteht, wo Menschen, Ideen und
          Organisationen sich verbinden.
        </p>
        <p className="text-stone-600 leading-relaxed mb-4">
          StärkenHandeln kooperiert mit Menschen, Vereinen, Unternehmen, Initiativen und
          anderen Organisationen, die unsere Vision teilen oder mit ihren eigenen Stärken zu
          einer besseren Welt beitragen möchten.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Dabei geht es nicht darum, wer im Mittelpunkt steht. Es geht darum, was wir
          miteinander möglich machen.
        </p>
      </div>

      {/* Unsere Partnerschaften */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <Eyebrow text="Unsere Partnerschaften" />
          <h2 className="font-display text-3xl text-[var(--color-navy)]">
            Unsere Partnerschaften
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col"
            >
              {p.logo && (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-16 h-16 rounded-lg object-cover mb-4"
                />
              )}
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">{p.name}</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-grow">
                {p.description}
              </p>
              <span className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-[var(--color-maroon)] bg-[var(--color-maroon)]/10 px-3 py-1 rounded-full mb-4">
                {p.tag}
              </span>
              <div className="text-xs text-stone-400 space-y-1 mb-4">
                <p>{p.location}</p>
                <p>{p.since}</p>
              </div>
              {p.website ? (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-maroon)] transition-colors"
                >
                  Website besuchen ↗
                </a>
              ) : (
                <span className="text-sm font-medium text-stone-300">Website besuchen ↗</span>
              )}
            </div>
          ))}

          {/* Freier Platz für einen weiteren Partner */}
          <div className="border-2 border-dashed border-stone-200 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[220px]">
            <span className="w-12 h-12 rounded-full border-2 border-dashed border-stone-300 flex items-center justify-center text-stone-300 text-2xl mb-4">
              +
            </span>
            <p className="text-sm text-stone-400 leading-relaxed">
              Hier ist noch Platz für eine weitere Partnerschaft.
            </p>
          </div>
        </div>
      </div>

      {/* Haltung */}
      <div className="max-w-2xl mx-auto text-center mb-24">
        <Eyebrow text="Haltung" />
        <h2 className="font-display text-3xl text-[var(--color-navy)] mb-8">
          Miteinander statt nebeneinander.
        </h2>
        <div className="text-stone-600 leading-relaxed space-y-5">
          <p>Eine Partnerschaft bedeutet für uns nicht einfach, zwei Logos nebeneinander zu setzen.</p>
          <p>Wir möchten Stärken miteinander verbinden.</p>
          <p>
            Ein Partner bringt vielleicht Wissen mit.
            <br />
            Ein anderer Menschen und Erfahrungen.
            <br />
            Ein anderer Ideen, Infrastruktur oder Möglichkeiten.
          </p>
          <p>
            Wir unterstützen uns gegenseitig, teilen Wissen, öffnen Türen und entwickeln
            gemeinsam neue Möglichkeiten.
          </p>
          <p>So entsteht aus einzelnen Beiträgen etwas, das allein vielleicht nicht möglich wäre.</p>
        </div>
      </div>

      {/* Mitmachen / CTA */}
      <div className="max-w-4xl mx-auto bg-[var(--color-navy)] rounded-xl p-10 md:p-14 text-center">
        <Eyebrow text="Mitmachen" light />
        <h2 className="font-display text-3xl text-white mb-6">
          Lass uns gemeinsam etwas bewegen.
        </h2>
        <p className="text-blue-100/80 leading-relaxed mb-8">
          Du bist Teil eines Vereins, einer Initiative, eines Unternehmens oder einer
          Organisation?
          <br />
          Du hast eine Idee für eine Zusammenarbeit?
          <br />
          Dann sprich mit uns.
        </p>
        <Link
          href="/partner/anfragen"
          className="inline-flex items-center gap-2 bg-[var(--color-maroon)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-maroon-dark)] transition-colors"
        >
          Partnerschaft anfragen ↗
        </Link>
      </div>
    </div>
  );
}
