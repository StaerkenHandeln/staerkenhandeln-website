export default function DerVerein() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-8">Der Verein</h1>

      <p className="text-stone-600 leading-relaxed mb-8">
        StärkenHandeln e.V. ist ein Institut zur Förderung und Stärkung von individuellem
        Wachstum mit Sitz in Wien, Österreich. Wir schaffen Raum für Menschen, Ideen und
        Wirken – durch Beratung, Begegnung und gemeinsame Projekte.
      </p>

      <h2 className="font-display text-2xl text-[var(--color-maroon)] mb-4">Vorstand</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border border-stone-200 rounded-xl p-6 flex gap-5 items-center">
          <img
            src="https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/b0cce7bf7_WhatsAppImage2026-08-28at201412.jpeg"
            alt="Tilo Juncken"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-[var(--color-navy)]">Tilo Juncken</h3>
            <p className="text-sm text-[var(--color-maroon)]">Präsident</p>
          </div>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-6 flex gap-5 items-center">
          <img
            src="https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/a981e2b71_ChatGPTImage28Aug202614_22_50.png"
            alt="Karen Hagen"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-[var(--color-navy)]">Karen Hagen</h3>
            <p className="text-sm text-[var(--color-maroon)]">Vizepräsidentin</p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl text-[var(--color-maroon)] mb-4">Unsere Werte</h2>
      <ul className="space-y-3 text-stone-600">
        <li>
          <strong className="text-[var(--color-navy)]">Stärken</strong> — Jeder Mensch trägt
          Fähigkeiten und Potentiale in sich, die es wert sind, entdeckt zu werden.
        </li>
        <li>
          <strong className="text-[var(--color-navy)]">Verbinden</strong> — Begegnung und
          Gemeinschaft eröffnen neue Perspektiven.
        </li>
        <li>
          <strong className="text-[var(--color-navy)]">Handeln</strong> — Aus Ideen entstehen
          konkrete Schritte, wenn wir beginnen.
        </li>
      </ul>
    </div>
  );
}
