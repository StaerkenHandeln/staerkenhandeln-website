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

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            8. Mitgliederportal und Authentifizierung
          </h2>
          <p className="mb-4">
            Fördermitglieder können sich über ein Mitgliederportal einloggen. Die
            Authentifizierung erfolgt über ein technisch notwendiges httpOnly-Cookie
            (4vg_member_token), das ein kryptografisch signiertes JWT (JSON Web Token) enthält.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Verarbeitete Daten:</strong>{" "}
            E-Mail-Adresse, Mitgliedsnummer (für den Login), sowie Member-ID, Vorname und
            Ablaufzeitpunkt im JWT.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Authentifizierung und
            Zugangskontrolle für das Mitgliederportal.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung — Bereitstellung des Mitgliederportals).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Cookie-Eigenschaften:</strong> httpOnly
            (nicht per JavaScript abrufbar), secure (nur über HTTPS), sameSite=lax, Gültigkeit
            30 Tage.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Speicherdauer:</strong> Das Cookie hat
            eine Gültigkeit von 30 Tagen und wird nach Ablauf automatisch gelöscht. Bei
            Abmeldung wird das Cookie sofort gelöscht.
          </p>
          <p>
            Es werden keine weiteren Tracking-Cookies, Analytics-Cookies oder
            Marketing-Cookies gesetzt. Es wird kein Local Storage oder Session Storage für
            personenbezogene Daten verwendet.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            9. Fördermitgliedschaft
          </h2>
          <p className="mb-3">
            Bei Abschluss einer Fördermitgliedschaft werden folgende personenbezogene Daten
            erhoben und verarbeitet:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Vor- und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Adresse (Straße, Hausnummer, PLZ, Ort, Land) — sofern im Formular angegeben</li>
            <li>Telefonnummer — sofern im Formular angegeben</li>
            <li>Gewählter Mitgliedsbeitrag und Zahlungsintervall (monatlich/jährlich)</li>
            <li>Stripe-Kunden-ID und Stripe-Abonnement-ID</li>
            <li>Mitgliedsnummer (automatisch generiert)</li>
            <li>Beitrittsdatum</li>
          </ul>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Verwaltung der
            Mitgliedschaft, Abbuchung der Mitgliedsbeiträge, Bereitstellung des
            Mitgliederportals, Versand von Informations-E-Mails.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung) für die Vertragsdaten; die erteilten
            Einwilligungen (Satzung, Beitragsordnung, Datenschutz) basieren auf Art. 6 Abs. 1
            lit. a DSGVO.
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Speicherdauer:</strong> Mitgliedsdaten
            werden für die Dauer der Mitgliedschaft gespeichert. Nach Austritt oder Kündigung
            werden die Daten gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten
            (insbesondere steuer- und handelsrechtlicher Natur) entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            10. Projektbeiträge
          </h2>
          <p className="mb-3">
            Bei der Abgabe eines Projektbeitrags über die Website werden folgende
            personenbezogene Daten verarbeitet:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Name (angegeben im Stripe Checkout)</li>
            <li>E-Mail-Adresse (angegeben im Stripe Checkout)</li>
            <li>Beitragsbetrag und gewähltes Projekt</li>
            <li>Stripe-Transaktions-IDs (Session-ID, Payment-Intent, Customer-ID)</li>
            <li>Referenznummer (automatisch generiert)</li>
          </ul>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Erfassung und
            Zuordnung von Projektbeiträgen, Bestätigungs-E-Mail, Nachvollziehbarkeit der
            Mittelverwendung.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an transparenter Mittelverwendung).
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Speicherdauer:</strong> Beitragsdaten
            werden für die Dauer gesetzlicher Aufbewahrungspflichten gespeichert.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            11. Partnerschaftsanfragen
          </h2>
          <p className="mb-4">
            Über das Kontaktformular auf der Seite /mitmachen/partnerschaft können Interessenten
            eine Partnerschaftsanfrage an den Verein richten. Dabei werden folgende
            personenbezogene Daten verarbeitet:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Vor- und Nachname (Pflichtfeld)</li>
            <li>E-Mail-Adresse (Pflichtfeld)</li>
            <li>Unternehmen / Organisation (Pflichtfeld)</li>
            <li>Art der Partnerschaft (Pflichtfeld)</li>
            <li>Nachricht (Pflichtfeld)</li>
            <li>Website (optional)</li>
            <li>Telefonnummer (optional)</li>
          </ul>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Zweck:</strong> Bearbeitung der
            Partnerschaftsanfrage und persönliche Kontaktaufnahme durch den Verein. Die
            Verarbeitung erfolgt ausschließlich auf Grundlage der durch den Interessenten
            erteilten Einwilligung (Datenschutz-Checkbox im Formular).
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. a DSGVO (Einwilligung). Die Einwilligung bezieht sich ausschließlich auf die
            Bearbeitung der konkreten Anfrage und kann jederzeit widerrufen werden.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Übermittlung:</strong> Die Anfrage wird
            über die Base44-Backend-Infrastruktur verarbeitet und per E-Mail an den Verein
            weitergeleitet. Es erfolgt keine dauerhafte Speicherung der Anfragedaten in einer
            Datenbank. Die E-Mail-Übermittlung erfolgt über die in Abschnitt 6 beschriebene
            E-Mail-Infrastruktur.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Bestätigungs-E-Mail:</strong> Der
            Interessent erhält eine automatische Bestätigungs-E-Mail über den Eingang seiner
            Anfrage. Diese E-Mail wird ebenfalls über die Base44-Backend-Infrastruktur
            versendet.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">Speicherdauer:</strong> [Speicherfrist
            vom Verein festzulegen]
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Keine weitergehende Verarbeitung:</strong>{" "}
            Die über das Formular erhobenen Daten werden nicht für Marketingzwecke, Profiling,
            Tracking oder Newsletter-Versand verwendet. Es erfolgt keine Weitergabe an Dritte zu
            Werbezwecken.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            12. Externe Bildquellen
          </h2>
          <p className="mb-4">
            Diese Website verwendet Bildmaterial von externen Quellen. Beim Aufruf dieser
            Bilder kann eine Verbindung zu den Servern der jeweiligen Anbieter hergestellt
            werden, bei der die IP-Adresse des Nutzers verarbeitet werden kann.
          </p>
          <p className="mb-4">
            <strong className="text-[var(--color-navy)]">
              Unsplash (images.unsplash.com):
            </strong>{" "}
            Stock-Fotografie-Anbieter, Unsplash Inc., USA. Bilder werden über das Next.js
            Image-Optimierungs-System geladen.
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">Base44 Media CDN:</strong> Eigenes
            Bildmaterial und Projekt-Uploads, bereitgestellt über die Base44-Plattform.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            13. Social-Media-Links
          </h2>
          <p className="mb-4">
            Auf der Website befinden sich Links zu Social-Media-Profilen (Instagram, TikTok).
            Diese Links führen zu externen Plattformen. Beim Aufruf dieser Links werden keine
            Daten an die Social-Media-Plattformen übertragen, sofern der Nutzer nicht auf den
            Link klickt.
          </p>
          <p>
            Beim Klick auf einen Social-Media-Link verlässt der Nutzer unsere Website und
            befindet sich auf dem Gebiet des jeweiligen Plattformbetreibers. Für die dortige
            Datenverarbeitung ist ausschließlich der jeweilige Plattformbetreiber
            verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            14. Ihre Rechte als betroffene Person
          </h2>
          <p className="mb-3">Sie haben folgende Rechte nach der DSGVO:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>
              <strong className="text-[var(--color-navy)]">Auskunft (Art. 15 DSGVO):</strong>{" "}
              Sie können Auskunft über die zu Ihrer Person verarbeiteten Daten verlangen.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Berichtigung (Art. 16 DSGVO):</strong>{" "}
              Sie können die Berichtigung unrichtiger personenbezogener Daten verlangen.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Löschung (Art. 17 DSGVO):</strong>{" "}
              Sie können die Löschung Ihrer personenbezogenen Daten verlangen, sofern keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Einschränkung (Art. 18 DSGVO):</strong>{" "}
              Sie können die Einschränkung der Verarbeitung verlangen.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">
                Datenübertragbarkeit (Art. 20 DSGVO):
              </strong>{" "}
              Sie können die Herausgabe Ihrer Daten in einem strukturierten, gängigen und
              maschinenlesbaren Format verlangen.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">Widerspruch (Art. 21 DSGVO):</strong>{" "}
              Sie können der Verarbeitung widersprechen, die auf Grundlage des berechtigten
              Interesses erfolgt.
            </li>
            <li>
              <strong className="text-[var(--color-navy)]">
                Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO):
              </strong>{" "}
              Eine erteilte Einwilligung können Sie jederzeit widerrufen.
            </li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a
              href="mailto:4visionglobal.faireint@gmail.com"
              className="text-[var(--color-maroon)] hover:underline"
            >
              4visionglobal.faireint@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            15. Zuständige Aufsichtsbehörde
          </h2>
          <p className="mb-4">
            Bei Beschwerden können Sie sich an die zuständige Datenschutzaufsichtsbehörde
            wenden:
          </p>
          <p>
            <strong className="text-[var(--color-navy)]">
              Der Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
            </strong>
            <br />
            Barichgasse 40-42
            <br />
            1030 Wien
            <br />
            Österreich
            <br />
            <a
              href="https://www.dsb.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-maroon)] hover:underline"
            >
              www.dsb.gv.at
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            16. SSL-Verschlüsselung
          </h2>
          <p>
            Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung
            vertraulicher Inhalte, wie beispielsweise der Anmeldedaten im Mitgliederportal,
            eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
            dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
            Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            17. Kein Tracking, keine Analyse-Tools
          </h2>
          <p className="mb-4">
            Wir setzen kein Tracking ein. Es gibt keine Cookies von Drittanbietern, keine
            Werbetracking-Tools und keine versteckten Analysedienste.
          </p>
          <p>
            Die einzigen Cookies, die gesetzt werden, sind technisch notwendige Cookies für die
            Authentifizierung im Mitgliederportal.
          </p>
        </section>
        </section>
      </div>
    </div>
  );
}
