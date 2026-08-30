const projects = [
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/e9ccec662_ChatGPTImage29Aug202620_23_33.png",
    title: "Die 7 Seelen",
    tagline: "Eine Stimme für SternenVäter",
    text: "Ein Projekt, das Vätern eine Stimme gibt, die einen Verlust erlebt haben – und Raum schafft, Trauer und Verbindung sichtbar zu machen.",
  },
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/516b652c8_ChatGPTImage29Aug202620_29_04.png",
    title: "Mann & Weib in Einigkeit",
    tagline: "Verbindung und Miteinander",
    text: "Ein Projekt rund um Beziehung, Begegnung und das Zusammenspiel von Ich, Du und Wir – für mehr Verständnis zwischen Menschen.",
  },
  {
    image: "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/8a5555abd_ChatGPTImage29Aug202620_39_18.png",
    title: "Klangvoll leben",
    tagline: "Klang · Frequenz · Liebe",
    text: "Achtsame Begleitung mit Klang und Klangschalen für mehr Harmonie im Leben – initiiert und geleitet von Karen Hagen.",
  },
];

export default function Projekte() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl text-[var(--color-navy)] mb-2">Unsere Projekte</h1>
        <p className="text-stone-500">Unterschiedliche Wege. Eine gemeinsame Haltung.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl overflow-hidden shadow-sm border border-stone-200 bg-white">
            <img src={p.image} alt={p.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h2 className="font-display text-xl text-[var(--color-navy)] mb-1">{p.title}</h2>
              <p className="text-sm text-[var(--color-maroon)] font-medium mb-3">{p.tagline}</p>
              <p className="text-sm text-stone-600 leading-relaxed">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
