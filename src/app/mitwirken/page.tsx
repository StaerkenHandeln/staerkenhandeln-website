import Link from "next/link";

export default function Mitwirken() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-6">Mitwirken</h1>
      <p className="text-stone-600 leading-relaxed mb-8">
        Du hast eine Idee, eine Fähigkeit oder ein Projekt, das du einbringen möchtest? Bei
        StärkenHandeln ist Raum für Menschen, die ihre Stärken sichtbar machen und gemeinsam mit
        anderen etwas bewegen wollen. Ob als Projektpartner, Ehrenamtliche:r oder mit einer ganz
        eigenen Idee – wir freuen uns, gemeinsam mit dir zu schauen, was daraus entstehen kann.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border border-stone-200 rounded-xl p-6">
          <h3 className="font-display text-[var(--color-navy)] mb-2">Idee einbringen</h3>
          <p className="text-sm text-stone-600">
            Du trägst ein Projekt oder eine Vision in dir? Erzähl uns davon.
          </p>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-6">
          <h3 className="font-display text-[var(--color-navy)] mb-2">Mitarbeiten</h3>
          <p className="text-sm text-stone-600">
            Unterstütze eines unserer bestehenden Projekte mit deiner Zeit oder Fähigkeit.
          </p>
        </div>
        <div className="bg-white border border-stone-200 rounded-xl p-6">
          <h3 className="font-display text-[var(--color-navy)] mb-2">Netzwerken</h3>
          <p className="text-sm text-stone-600">
            Lerne Menschen aus der StärkenHandeln-Gemeinschaft kennen.
          </p>
        </div>
      </div>

      <div className="bg-[var(--color-navy)] rounded-xl p-8 text-center">
        <h2 className="font-display text-xl text-white mb-3">Bereit, dich einzubringen?</h2>
        <p className="text-blue-100/80 mb-5 text-sm">
          Schreib uns kurz, was dich bewegt – wir melden uns persönlich zurück.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-[var(--color-maroon)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-maroon-dark)] transition-colors"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  );
}
