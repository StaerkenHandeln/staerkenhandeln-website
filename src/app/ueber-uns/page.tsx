export default function UeberUns() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-emerald-800">Über uns</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Unsere Vision</h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          Ein Verein, in dem Menschen ihre Stärken erkennen, entfalten und gemeinsam
          nutzen – für sich selbst und für andere.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Unser Mission</h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          Wir fördern die individuellen Fähigkeiten unserer Mitglieder durch Workshops,
          Beratung und Gemeinschaftsaktivitäten. Jeder ist willkommen.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Das Team</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-emerald-50 rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-emerald-800">Vorstandsvorsitz</h3>
            <p className="text-sm text-stone-500">Demnächst verfügbar</p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-emerald-800">Stellvertretung</h3>
            <p className="text-sm text-stone-500">Demnächst verfügbar</p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-emerald-800">Schriftführer</h3>
            <p className="text-sm text-stone-500">Demnächst verfügbar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
