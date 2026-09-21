export default function Datenschutz() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-3">Datenschutzerklärung</h1>
      <p className="text-stone-500 mb-8">
        Informationen zur Verarbeitung personenbezogener Daten gemäß Datenschutz-Grundverordnung
        (DSGVO).
      </p>

      <div className="space-y-10 text-stone-600">
        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">1. Verantwortlicher</h2>
          <p className="mb-4">
            Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
            Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">4VisionGlobal</strong>
            <br />
            Institut zur Vernetzung von Menschen, um ihre Stärken und Visionen zu unterstützen
          </p>

          <p className="font-semibold text-[var(--color-navy)] mb-1">Vereinssitz:</p>
          <p className="mb-4">
            Lederergasse 28-20<br />
            1080 Wien<br />
            Österreich
          </p>

          <p className="font-semibold text-[var(--color-navy)] mb-1">Zustelladresse / Außenstelle:</p>
          <p className="mb-4">
            Mühlenbergstraße 9<br />
            18461 Richtenberg<br />
            Deutschland
          </p>

          <p className="mb-1">
            <strong className="text-[var(--color-navy)]">ZVR-Zahl:</strong> 1296206039
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">E-Mail:</strong>{" "}
            <a
              href="mailto:hallo.staerkenhandeln@proton.me"
              className="text-[var(--color-maroon)] hover:underline"
            >
              hallo.staerkenhandeln@proton.me
            </a>
          </p>

          <p>
            <strong className="text-[var(--color-navy)]">Vertreten durch den Vorstand:</strong>{" "}
            Tilo Juncken (Präsident), Karen Hagen (Vizepräsidentin). Details zur
            Vertretungsregelung siehe{" "}
            <a href="/impressum" className="text-[var(--color-maroon)] hover:underline">
              Impressum
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p className="mb-4">
            Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
            zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
            Leistungen erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach
            Einwilligung der Nutzer oder, soweit dies für die Erfüllung eines Vertrags oder
            vorvertraglicher Maßnahmen erforderlich ist.
          </p>
          <p>
            Eine Verarbeitung personenbezogener Daten über den tatsächlichen Umfang zur
            Erfüllung des Zwecks hinaus findet nicht statt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            3. Hosting und Content Delivery (Vercel)
          </h2>
          <p className="mb-4">
            Diese Website wird bei Vercel Inc. gehostet. Vercel ist ein Cloud-Hosting-Anbieter,
            der die technische Infrastruktur für den Betrieb der Website bereitstellt.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Anbieter:</strong> Vercel Inc., 340 S
            Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Verarbeitete Daten:</strong> Bei jedem
            Aufruf der Website werden technisch bedingt Zugriffsdaten (IP-Adresse, Datum und
            Uhrzeit des Zugriffs, aufgerufene URL, Browser-Typ und -Version, ggf. Referrer-URL)
            in Server-Logfiles verarbeitet. Die Runtime-Logs der Serverless-Functions wurden
            bereinigt und enthalten keine personenbezogenen Daten (keine E-Mail-Adressen, Namen,
            Member-IDs oder vollständige Stripe-Referenz-IDs).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Bereitstellung der
            Website, Gewährleistung der Sicherheit und Stabilität der Infrastruktur,
            Fehlerdiagnose.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung und
            Sicherheit der Website).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Speicherdauer:</strong> Die
            Server-Logfiles werden für einen begrenzten Zeitraum gespeichert und anschließend
            gelöscht. Die genaue Speicherdauer richtet sich nach den Vorgaben von Vercel.
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Drittlandübermittlung:</strong> Vercel
            Inc. ist ein US-amerikanisches Unternehmen. Eine Übermittlung von personenbezogenen
            Daten in die USA kann nicht ausgeschlossen werden. Vercel bietet ein Data Processing
            Addendum (DPA) an und verwendet Standardvertragsklauseln (SCCs) für die
            Datenübermittlung. Weitere Informationen finden Sie unter{" "}
            <a
              href="https://vercel.com/legal/dpa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-maroon)] hover:underline"
            >
              vercel.com/legal/dpa
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            4. Backend und Datenbank (Base44)
          </h2>
          <p className="mb-4">
            Die Backend-Infrastruktur und Datenbank dieser Website wird über Base44 (Base44,
            Inc.) bereitgestellt. Base44 handelt als Auftragsverarbeiter (Art. 28 DSGVO) für die
            Speicherung und Verarbeitung von Mitglieds- und Beitragsdaten.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Anbieter:</strong> Base44, Inc. (gehört
            zu Wix.com Ltd.).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Verarbeitete Daten:</strong>{" "}
            Mitgliedsdaten (Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Adresse,
            Mitgliedsnummer, Mitgliedsstatus, Beitragshöhe, Zahlungsintervall, Beitrittsdatum),
            Beitragsdaten (Name und E-Mail-Adresse des Beitragenden, Betrag, Projekt,
            Referenznummer, Stripe-Transaktions-IDs) sowie Konfigurationsdaten für die
            Beitragslogik.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Verwaltung von
            Fördermitgliedschaften, Erfassung von Projektbeiträgen, Bereitstellung des
            Mitgliederportals, Versand von Transaktions-E-Mails.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen) für Mitglieds- und
            Beitragsdaten; Art. 6 Abs. 1 lit. f DSGVO für die technisch erforderliche
            Datenhaltung.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Serverstandort:</strong> Base44 nutzt
            standardmäßig eine US-Datenregion. Ob für dieses Projekt eine andere Region
            konfiguriert ist, ist derzeit nicht verifiziert.
          </p>
          <p className="mb-4">
            Base44 gibt an, dass alle Anbieter, die personenbezogene Daten von Base44 erhalten,
            durch Datenverarbeitungsvereinbarungen gebunden sind und Übermittlungen durch
            Standardvertragsklauseln (SCCs), das EU-US Data Privacy Framework oder andere
            geeignete Garantien abgedeckt sind. Base44 veröffentlicht zudem eine
            Subprocessor-Liste und stellt ein Data Processing Addendum (DPA) zur Verfügung.
          </p>
          <p className="mb-4">
            Einzelheiten zum Data Processing Addendum (DPA) von Base44 können unter{" "}
            <a
              href="https://base44.com/dpa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-maroon)] hover:underline"
            >
              base44.com/dpa
            </a>{" "}
            eingesehen werden.
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Speicherdauer:</strong> Mitgliedsdaten
            werden für die Dauer der Mitgliedschaft gespeichert. Beitragsdaten werden mindestens
            für den gesetzlich vorgeschriebenen Zeitraum zur Aufbewahrung von Buchungsbelegen
            gespeichert.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            5. Zahlungsabwicklung (Stripe)
          </h2>
          <p className="mb-4">
            Für die Abwicklung von Zahlungen (Fördermitgliedschaften und Projektbeiträge) nutzen
            wir den Zahlungsdienstleister Stripe.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Anbieter:</strong> Stripe Payments
            Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin 2, Irland (für
            europäische Kunden).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">An Stripe übermittelte Daten:</strong>{" "}
            Bei der Zahlungsabwicklung werden die für die Transaktion erforderlichen Daten an
            Stripe übermittelt. Dazu gehören die vom Nutzer im Stripe-Checkout angegebenen Daten
            (Name, E-Mail-Adresse) sowie die Zahlungsdaten (Kreditkartendaten oder
            Bankverbindung). Die Eingabe der Zahlungsdaten erfolgt ausschließlich auf der
            Stripe-Checkout-Seite, nicht auf unserer Website.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">
              Von Stripe erhaltene und bei uns gespeicherte Daten:
            </strong>{" "}
            Wir speichern ausschließlich Stripe-Referenz-IDs (Kunden-ID, Abonnement-ID,
            Preis-ID, Produkt-ID, Sitzungs-ID, Payment-Intent-ID) sowie die vom Nutzer
            angegebenen Metadaten (Name, E-Mail-Adresse, gewählter Beitrag, Projekt).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Nicht bei uns gespeichert:</strong> Wir
            speichern keine Kreditkartennummern, CVV-/CVC-Codes, Ablaufdaten oder
            Bankverbindungsdaten. Die vollständigen Zahlungsdaten werden ausschließlich von
            Stripe verarbeitet.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Abwicklung von
            Fördermitgliedschaften und Projektbeiträgen.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an einer sicheren Zahlungsabwicklung).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Speicherdauer:</strong> Die
            Speicherdauer von Zahlungsdaten richtet sich nach den Bedingungen von Stripe und den
            gesetzlichen Aufbewahrungspflichten.
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Drittlandübermittlung:</strong> Stripe
            verarbeitet Daten möglicherweise auch außerhalb der EU. Stripe Payments Europe Ltd.
            unterliegt jedoch den Vorgaben der DSGVO. Weitere Informationen finden Sie in der
            Datenschutzerklärung von Stripe:{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-maroon)] hover:underline"
            >
              stripe.com/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            6. E-Mail-Versand
          </h2>
          <p className="mb-4">
            Für den Versand von Transaktions-E-Mails (Willkommens-E-Mails,
            Beitragsbestätigungen) nutzen wir die E-Mail-Funktionen der Base44-Plattform. Die
            E-Mails werden durch Base44 Backend Functions versendet, nicht durch eine direkte
            Integration eines E-Mail-Dienstleisters in unsere Website.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Datenfluss:</strong> Die
            E-Mail-Versand wird durch die Base44-Backend-Infrastruktur ausgeführt. Base44 gibt
            an, dass E-Mails von Apps, die auf der Base44-Plattform gebaut sind, die Domain
            base44-apps.com verwenden.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Verarbeitete Daten:</strong>{" "}
            E-Mail-Adresse, Name sowie die für die jeweilige E-Mail erforderlichen Inhaltsdaten
            (Mitgliedsnummer, Beitragsinformationen, Referenznummer, Projektname).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Versand von
            Bestätigungs- und Informations-E-Mails an Fördermitglieder und Beitragende.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an der Kommunikation).
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Subprocessor-Hinweis:</strong> Base44
            veröffentlicht für bestimmte Kommunikationsdienste entsprechende
            Subprocessor-Informationen. Welcher konkrete E-Mail-Dienstleister von Base44 intern
            verwendet wird, ist aus der Anwendungsperspektive nicht direkt verifizierbar.
            Gegebenenfalls kann Base44 hierzu weitere Auskunft erteilen.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">7. Schriftarten</h2>
          <p>
            Diese Website verwendet die Schriftarten „Inter“ und „Plus Jakarta Sans“. Diese
            werden über die Next.js Font-Optimierung (next/font/google) geladen. Die
            Schriftdateien werden beim Build-Prozess heruntergeladen und lokal auf dem
            Webserver gehostet. Es findet bei der Darstellung der Schriftarten kein direkter
            Aufruf der Google-Server durch den Browser statt. Es werden keine Daten an Google
            LLC im Zusammenhang mit Schriftarten übertragen.
          </p>
        </section>
      </div>
    </div>
  );
}
