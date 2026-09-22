import Link from "next/link";

export default function Beitragsordnung() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-3">Beitragsordnung</h1>
      <p className="text-stone-500 mb-8">Beitragsordnung des Vereins StärkenHandeln</p>

      <div className="space-y-4 text-stone-600">
        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Keine separate Beitragsordnung
          </h2>
          <p className="mb-3">
            Eine separate Beitragsordnung besteht derzeit nicht. Die Beitragsmodelle und
            Konditionen für die Fördermitgliedschaft werden direkt auf der Seite zur
            Fördermitgliedschaft angezeigt und sind dort maßgeblich.
          </p>
          <p className="mb-3">
            Eine Beitragsordnung regelt üblicherweise die Höhe und Fälligkeit der
            Mitgliedsbeiträge. Die von uns angebotenen Beitragsmodelle finden Sie auf der Seite
            zur Fördermitgliedschaft:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Monatliche Fördermitgliedschaften mit wählbaren Beitragsstufen</li>
            <li>Jährliche Fördermitgliedschaften mit wählbaren Beitragsstufen</li>
            <li>Frei wählbare Beitragshöhe (individueller Betrag)</li>
            <li>Zahlungsabwicklung über Stripe (wiederkehrende Abrechnung)</li>
            <li>Kündigung jederzeit möglich</li>
          </ul>
          <p className="mb-3">
            Die konkreten Beitragsstufen und Konditionen ergeben sich aus der jeweiligen
            Auswahl im Fördermitgliedschaftsformular. Die dort angezeigten Beträge sind
            maßgeblich.
          </p>
          <p>
            Bei Fragen zu den Beitragsmodellen kontaktieren Sie uns unter{" "}
            <a
              href="mailto:hallo.staerkenhandeln@proton.me"
              className="text-[var(--color-maroon)] hover:underline"
            >
              hallo.staerkenhandeln@proton.me
            </a>
            .
          </p>
        </section>

        <Link
          href="/foerdermitgliedschaft"
          className="inline-block font-medium text-[var(--color-maroon)] hover:underline"
        >
          Zur Fördermitgliedschaft <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
