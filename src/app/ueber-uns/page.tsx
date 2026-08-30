export default function UeberUns() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-8">Über uns</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="font-display text-2xl text-[var(--color-maroon)] mb-4">Unsere Vision</h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          Raum für Menschen. Raum für Ideen. Raum zum Wirken. StärkenHandeln ist ein Institut,
          in dem Menschen ihre Stärken erkennen, entfalten und gemeinsam nutzen – für sich selbst
          und für andere.
        </p>

        <h2 className="font-display text-2xl text-[var(--color-maroon)] mb-4">Unsere Mission</h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          Wir stärken Fähigkeiten, verbinden Menschen und unterstützen Ideen dabei, in die Welt
          zu kommen. Durch Begegnung, Beratung und gemeinsame Projekte fördern wir individuelles
          Wachstum und schaffen Raum für echte Wirkung.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[var(--color-cream)] rounded-xl p-6 text-center">
            <img
              src="https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/a2627e130_iconstrken.png"
              alt="Stärken"
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="font-display text-[var(--color-navy)]">Stärken</h3>
            <p className="text-sm text-stone-500 mt-1">
              Eigene Fähigkeiten wahrnehmen und ihnen Raum geben.
            </p>
          </div>
          <div className="bg-[var(--color-cream)] rounded-xl p-6 text-center">
            <img
              src="https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/c1d9db7d4_iconverbinden.png"
              alt="Verbinden"
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="font-display text-[var(--color-navy)]">Verbinden</h3>
            <p className="text-sm text-stone-500 mt-1">
              Menschen, Erfahrungen und Perspektiven miteinander in Beziehung bringen.
            </p>
          </div>
          <div className="bg-[var(--color-cream)] rounded-xl p-6 text-center">
            <img
              src="https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/df56318ef_iconhandeln.png"
              alt="Handeln"
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="font-display text-[var(--color-navy)]">Handeln</h3>
            <p className="text-sm text-stone-500 mt-1">
              Aus einer Idee einen ersten konkreten Schritt entstehen lassen.
            </p>
          </div>
        </div>

        <h2 className="font-display text-2xl text-[var(--color-maroon)] mb-4">Das Team</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[var(--color-cream)] rounded-xl p-6 flex gap-5 items-center">
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
          <div className="bg-[var(--color-cream)] rounded-xl p-6 flex gap-5 items-center">
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
      </div>
    </div>
  );
}
