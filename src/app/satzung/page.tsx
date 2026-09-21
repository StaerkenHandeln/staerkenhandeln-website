export default function Satzung() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-3">Satzung</h1>
      <p className="text-stone-500 mb-8">Die Satzung des Vereins StärkenHandeln</p>

      <div className="space-y-4 text-stone-600">
        <section>
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-3">
            Satzung wird nicht auf der Website veröffentlicht
          </h2>
          <p className="mb-3">
            Die vollständige Satzung des Vereins 4VisionGlobal wird derzeit nicht auf dieser
            Website veröffentlicht. Auf Anfrage stellen wir die Satzung gerne zur Verfügung.
          </p>
          <p className="mb-3">
            Die Satzung ist die rechtliche Grundlage des Vereins und regelt insbesondere:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Name, Sitz und Zweck des Vereins</li>
            <li>Mitgliedschaftsarten und Voraussetzungen</li>
            <li>Rechte und Pflichten der Mitglieder</li>
            <li>Beitragsordnung</li>
            <li>Organe des Vereins (insbesondere Vorstand)</li>
            <li>Vertretungsregelungen</li>
            <li>Einberufung und Beschlussfassung von Versammlungen</li>
            <li>Beendigung der Mitgliedschaft</li>
            <li>Auflösung des Vereins</li>
          </ul>
          <p>
            Auf Anfrage stellen wir die Satzung gerne zur Verfügung. Kontaktieren Sie uns unter{" "}
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
