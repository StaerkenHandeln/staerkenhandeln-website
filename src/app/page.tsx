import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">StärkenHandeln e.V.</h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            Gemeinsam Stärken erkennen und ins Handeln bringen
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-emerald-800 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Mitmachen
          </Link>
        </div>
      </section>

      {/* Über uns Teaser */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-emerald-800">Wer wir sind</h2>
        <p className="text-lg text-stone-600 leading-relaxed mb-6">
          StärkenHandeln ist ein Verein, der sich dafür einsetzt, die individuellen Stärken
          von Menschen zu fördern und gemeinsam positive Veränderungen zu bewirken.
          Wir glauben daran, dass jeder Mensch einzigartige Fähigkeiten besitzt, die
          wertvoll für die Gemeinschaft sind.
        </p>
        <Link href="/ueber-uns" className="text-emerald-700 font-semibold hover:underline">
          Mehr über uns →
        </Link>
      </section>

      {/* Aktivitäten */}
      <section className="bg-emerald-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-emerald-800">
            Unsere Angebote
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Workshops</h3>
              <p className="text-stone-600">
                Regelmäßige Workshops zur Stärkenentwicklung und persönlichen Entfaltung.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Gemeinschaft</h3>
              <p className="text-stone-600">
                Ein starkes Netzwerk von Menschen, die sich gegenseitig unterstützen.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Beratung</h3>
              <p className="text-stone-600">
                Individuelle Beratung und Begleitung bei der Stärkenentfaltung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
