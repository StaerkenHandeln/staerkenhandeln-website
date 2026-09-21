export default function Impressum() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-3">Impressum</h1>
      <p className="text-stone-500 mb-8">
        Anbieterkennzeichnung gemäß § 25 Mediengesetz (MedG) und § 5 E-Commerce-Gesetz (ECG).
      </p>

      <div className="space-y-10 text-stone-600">
        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">Verein</h2>
          <p className="mb-3">
            <strong className="text-[var(--color-navy)]">StärkenHandeln</strong> - Institut zur
            Förderung und Stärkung von individuellem Wachstum
          </p>
          <p className="mb-4">Verein mit Sitz in Österreich.</p>

          <p className="font-semibold text-[var(--color-navy)] mb-1">Vereinssitz:</p>
          <p className="mb-4">
            Ledererergasse 28-20<br />
            1080 Wien<br />
            Österreich
          </p>

          <p className="font-semibold text-[var(--color-navy)] mb-1">Zustelladresse / Außenstelle:</p>
          <p>
            Mühlenbergstraße 9<br />
            18461 Richtenberg<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Vertretungsbefugte Personen
          </h2>
          <p className="mb-3">Der Verein wird gesetzlich vertreten durch den Vorstand:</p>
          <ul className="list-disc pl-5 mb-6 space-y-1">
            <li>Tilo Juncken — Präsident</li>
            <li>Karen Hagen— Vizepräsidentin</li>
          </ul>

          <p className="font-semibold text-[var(--color-navy)] mb-1">
            Vertretungsregelung (gemäß Vereinsregisterauszug vom 15.09.2022; ein aktuellerer
            Auszug liegt noch nicht vor):
          </p>
          <p>
            Der/die Präsident/in oder der/die Vizepräsident/in vertreten den Verein gerichtlich
            und außergerichtlich und sind für den Verein zeichnungsberechtigt. Schriftliche
            Ausfertigungen bedürfen zu ihrer Gültigkeit der Unterschrift des/der Präsidenten/in
            oder des/der Vizepräsidenten/in. Geldangelegenheiten (Vermögens-Wert-Dispositionen)
            bedürfen zu ihrer Gültigkeit der Unterschrift des/der Präsidenten/in und/oder des/der
            Vizepräsidenten/in.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:hallo.staerkenhandeln@proton.me"
              className="text-[var(--color-maroon)] hover:underline"
            >
              hallo.staerkenhandeln@proton.me
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">Registrierung</h2>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">ZVR-Zahl:</strong> 1296206039
            <br />
            (Zentrales Vereinsregister, Österreich)
          </p>
          <p className="font-semibold text-[var(--color-navy)] mb-1">Zuständige Vereinsbehörde:</p>
          <p>
            Landespolizeidirektion Wien, Referat Vereins-, Versammlungs- und
            Medienrechtsangelegenheiten
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Verwendungszweck der Website
          </h2>
          <p>
            Die Website staerkenhandeln.com dient der Information über den Verein, seine Projekte
            und seine Aktivitäten.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Verantwortlich für den Inhalt
          </h2>
          <p className="mb-3">
            Verantwortlich für den Inhalt dieser Website im Sinne des § 25 Mediengesetzes:
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">StärkenHandeln</strong> - Institut zur
            Förderung und Stärkung von individuellem Wachstum
            <br />
            vertreten durch den Vorstand (Tilo Juncken, Präsident)
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Hinweis zur außergerichtlichen Streitbeilegung
          </h2>
          <p className="mb-3">
            Die europäische Online-Streitbeilegungs-Plattform (OS-Plattform) wurde mit 20. Juli
            2025 eingestellt und ist nicht mehr erreichbar.
          </p>
          <p>
            Für Fragen oder Anliegen wenden Sie sich bitte an:{" "}
            <a
              href="mailto:hallo.staerkenhandeln@proton.me"
              className="text-[var(--color-maroon)] hover:underline"
            >
              hallo.staerkenhandeln@proton.me
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
