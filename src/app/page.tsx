import Link from "next/link";

const pillars = [
  {
    icon: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/a2627e130_iconstrken.png",
    title: "STÄRKEN",
    text: "Jeder Mensch trägt Fähigkeiten und Potentiale in sich. Wir ermutigen sie, diese zu entdecken und weiterzuentwickeln.",
  },
  {
    icon: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/c1d9db7d4_iconverbinden.png",
    title: "VERBINDEN",
    text: "Begegnung, Austausch und Gemeinschaft eröffnen neue Perspektiven und lassen gemeinsam etwas entstehen.",
  },
  {
    icon: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/df56318ef_iconhandeln.png",
    title: "HANDELN",
    text: "Ideen werden wertvoll, wenn wir beginnen. Wir unterstützen dich dabei, Schritt für Schritt Verantwortung zu übernehmen.",
  },
];

const projects = [
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/e9ccec662_ChatGPTImage29Aug202620_23_33.png",
    title: "Die 7 Seelen",
    tagline: "Eine Stimme für SternenVäter",
  },
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/516b652c8_ChatGPTImage29Aug202620_29_04.png",
    title: "Mann & Weib in Einigkeit",
    tagline: "Verbindung und Miteinander",
  },
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/8a5555abd_ChatGPTImage29Aug202620_39_18.png",
    title: "Klangvoll leben",
    tagline: "Klang · Frequenz · Liebe",
  },
];

const team = [
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/b0cce7bf7_WhatsAppImage2026-08-28at201412.jpeg",
    name: "Tilo Juncken",
    role: "Präsident",
    text: "Initiator von StärkenHandeln und die Projekte. Sein Anliegen ist es, Menschen Raum zu geben, ihre Fähigkeiten zu entfalten und neue Wege zu gehen.",
  },
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/a981e2b71_ChatGPTImage28Aug202614_22_50.png",
    name: "Karen Hagen",
    role: "Vizepräsidentin",
    text: "Mit „Klangvoll leben“ bringt sie Klang, Frequenz und achtsame Begleitung unter das Dach von StärkenHandeln.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img
          src="https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/a44f1b9d0_ChatGPTImage29Aug202619_41_42.png"
          alt="Raum für Menschen. Raum für Ideen. Raum zum Wirken."
          className="w-full h-auto object-cover"
        />
        <div className="absolute left-6 md:left-12 bottom-6 md:bottom-10 flex flex-wrap gap-3">
          <Link
            href="/ueber-uns"
            className="bg-[var(--color-maroon)] text-white text-sm md:text-base font-semibold px-5 py-2.5 rounded-md hover:bg-[var(--color-maroon-dark)] transition-colors shadow-lg"
          >
            StärkenHandeln kennenlernen
          </Link>
          <Link
            href="/projekte"
            className="bg-white/90 text-[var(--color-navy)] text-sm md:text-base font-semibold px-5 py-2.5 rounded-md hover:bg-white transition-colors shadow-lg flex items-center gap-2"
          >
            <span className="inline-block w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-[var(--color-navy)]" />
            Unser Video ansehen
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {pillars.map((p) => (
            <div key={p.title} className="flex gap-4">
              <img src={p.icon} alt={p.title} className="w-14 h-14 flex-shrink-0" />
              <div>
                <h3 className="font-display tracking-wide text-[var(--color-maroon)] font-semibold mb-2">
                  {p.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projekte */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl text-[var(--color-navy)] mb-2">
              Unsere Projekte
            </h2>
            <p className="text-stone-500">Unterschiedliche Wege. Eine gemeinsame Haltung.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="rounded-xl overflow-hidden shadow-sm border border-stone-200 bg-white">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg text-[var(--color-navy)] mb-1">{p.title}</h3>
                  <p className="text-sm text-stone-500 mb-4">{p.tagline}</p>
                  <Link
                    href="/projekte"
                    className="text-[var(--color-maroon)] text-sm font-semibold hover:underline"
                  >
                    Projekt entdecken →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl text-[var(--color-navy)] text-center mb-10">
            Die Menschen hinter StärkenHandeln
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((t) => (
              <div key={t.name} className="flex gap-5 bg-[var(--color-cream)] rounded-xl p-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-display text-lg text-[var(--color-navy)]">{t.name}</h3>
                  <p className="text-sm text-[var(--color-maroon)] font-medium mb-2">{t.role}</p>
                  <p className="text-sm text-stone-600 leading-relaxed mb-2">{t.text}</p>
                  <Link href="/ueber-uns" className="text-sm font-semibold text-[var(--color-maroon)] hover:underline">
                    Mehr über {t.name.split(" ")[0]} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-white border border-stone-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-[var(--color-navy)] flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.4 1 1.1 1 1.8V17h6v-.5c0-.7.4-1.4 1-1.8A7 7 0 0 0 12 2z"/></svg>
            </div>
            <div>
              <h3 className="font-display text-lg text-[var(--color-navy)] mb-1">Mitwirken</h3>
              <p className="text-sm text-stone-600 mb-2">
                Du hast eine Idee, eine Fähigkeit oder ein Projekt? Bring sie ein und lass uns gemeinsam schauen, was daraus entstehen kann.
              </p>
              <Link href="/mitwirken" className="text-sm font-semibold text-[var(--color-maroon)] hover:underline">
                Mehr erfahren →
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white border border-stone-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-[var(--color-maroon)] flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </div>
            <div>
              <h3 className="font-display text-lg text-[var(--color-navy)] mb-1">Kontakt</h3>
              <p className="text-sm text-stone-600 mb-2">
                Möchtest du uns kennenlernen, eine Frage stellen oder eine Idee besprechen? Wir freuen uns auf deine Nachricht.
              </p>
              <Link href="/kontakt" className="text-sm font-semibold text-[var(--color-maroon)] hover:underline">
                Kontakt aufnehmen →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
