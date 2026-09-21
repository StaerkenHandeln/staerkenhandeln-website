export default function Barrierefreiheit() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-3">Barrierefreiheit</h1>
      <p className="text-stone-500 mb-8">
        Erklärung zur Zugänglichkeit der Website staerkenhandeln.com.
      </p>

      <div className="space-y-10 text-stone-600">
        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">Einleitung</h2>
          <p>
            Wir bemühen uns, die Website staerkenhandeln.com für alle Menschen zugänglich zu
            gestalten. Diese Erklärung beschreibt den aktuellen Stand der Barrierefreiheit auf
            Grundlage einer technischen Überprüfung des Codes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Technisch umgesetzt
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-[var(--color-navy)]">Semantische HTML-Struktur:</strong>{" "}
              Die Website verwendet semantische HTML-Elemente (header, main, footer, nav,
              section, article) für eine klare Dokumentstruktur.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Überschriftenhierarchie:</strong>{" "}
              Überschriften (h1–h6) werden in einer logischen, hierarchischen Reihenfolge
              verwendet.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Tastaturbedienung:</strong> Alle
              interaktiven Elemente (Links, Buttons, Formularfelder) sind per Tastatur
              erreichbar und bedienbar.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Fokuszustände:</strong> Sichtbare
              Fokuszustände sind global über :focus-visible mit orangefarbenem Outline (2px
              solid) definiert.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Formular-Labels:</strong>{" "}
              Formularfelder in der Fördermitgliedschaft und im Login sind mit Labels verknüpft.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Alt-Texte für Bilder:</strong>{" "}
              Informative Bilder verfügen über Alt-Texte; dekorative Bilder sind als
              aria-hidden markiert.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">SSL-Verschlüsselung:</strong> Die
              gesamte Website wird über HTTPS ausgeliefert.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Responsives Design:</strong> Die
              Website ist für Desktop, Tablet und Smartphone optimiert (Mobile-First-Ansatz).
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Semantische Buttons:</strong>{" "}
              Aktions-Buttons und Navigations-Links werden semantisch korrekt eingesetzt.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">
                Keine ausschließliche Farbcodierung:
              </strong>{" "}
              Informationen werden nicht ausschließlich über Farbe vermittelt; es werden
              zusätzlich Text und Icons verwendet.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Aktuell noch nicht vollständig geprüft
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong className="text-[var(--color-navy)]">Kontrastprüfung:</strong> Eine
              systematische Prüfung aller Text- und Hintergrundkombinationen nach WCAG 2.1 AA
              wurde noch nicht durchgeführt. Die verwendete Farbpalette (dunkles Grün, Orange,
              Creme) ist grundsätzlich auf Kontrast ausgelegt, einzelne Bereiche (insbesondere
              Footer mit niedriger Text-Opacity) könnten jedoch den Mindestkontrast
              unterschreiten.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Screenreader-Test:</strong> Eine
              umfassende Testung mit gängigen Screenreadern (NVDA, VoiceOver) wurde noch nicht
              durchgeführt.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">ARIA-Erweiterungen:</strong> Einige
              interaktive Komponenten (z. B. Mobile-Menü, Dropdown) verwenden ARIA-Attribute,
              jedoch wurde keine vollständige ARIA-Überprüfung für alle Komponenten
              durchgeführt.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">
                Fehlermeldungen in Formularen:
              </strong>{" "}
              Formularvalidierung gibt Fehlermeldungen aus, jedoch ist die programmatische
              Verknüpfung mit den jeweiligen Feldern (aria-describedby) nicht vollständig
              umgesetzt.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Skip-Link:</strong> Ein „Skip to
              Content“-Link für Tastaturnutzer ist aktuell nicht implementiert.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Stripe-Checkout:</strong> Der
              Übergang zum Stripe Checkout leitet auf eine externe Seite weiter.
            </li>
          </ul>
          <p className="border-l-2 border-stone-300 pl-4 italic">
            Die Barrierefreiheit dieser Seite obliegt Stripe; eine Überprüfung wurde von unserer
            Seite nicht durchgeführt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Rechtlicher Rahmen
          </h2>
          <p className="mb-3">
            Für österreichische Websites kann das Bundesgesetz über die Gleichstellung von
            Menschen mit Behinderungen (Bundes-Behindertengleichstellungsgesetz – BGStG) sowie
            ggf. das Gesetz über die Gleichstellung von Menschen mit Behinderungen im Bereich
            des Bundes (Behinderteneinstellungsgesetz – BEinstG) relevant sein.
          </p>
          <p className="mb-3">
            Ob die strengen Anforderungen des BGStG (insbesondere die
            Zugänglichkeitsanforderungen nach WCAG 2.1 AA) auf die konkrete Website von
            4VisionGlobal anwendbar sind, ist rechtlich zu prüfen. Eine abschließende
            rechtliche Bewertung kann an dieser Stelle nicht gegeben werden.
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Hinweis:</strong> Diese Erklärung
            beschreibt den tatsächlichen technischen Stand und stellt keine rechtliche
            Bewertung der Compliance dar.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Feedback und Kontakt
          </h2>
          <p className="mb-3">
            Wenn Sie Barrieren auf unserer Website feststellen oder Verbesserungsvorschläge
            haben, kontaktieren Sie uns unter:
          </p>
          <p className="mb-3">
            <a
              href="mailto:hallo.staerkenhandeln@proton.me"
              className="text-[var(--color-maroon)] hover:underline"
            >
              hallo.staerkenhandeln@proton.me
            </a>
          </p>
          <p>Wir bemühen uns, festgestellte Barrieren nach Möglichkeit zeitnah zu beheben.</p>
        </section>
      </div>
    </div>
  );
}
