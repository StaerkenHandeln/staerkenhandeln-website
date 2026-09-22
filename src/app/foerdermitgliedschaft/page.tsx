export default function Foerdermitgliedschaft() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-3">
        Fördermitgliedschaft
      </h1>
      <p className="text-stone-500 mb-8">Diese Seite befindet sich im Aufbau.</p>

      <div className="text-stone-600">
        <p>
          Wir arbeiten gerade daran, dir hier die Fördermitgliedschaft von StärkenHandeln
          vorzustellen. Schau bald wieder vorbei oder{" "}
          <a
            href="mailto:hallo.staerkenhandeln@proton.me"
            className="text-[var(--color-maroon)] hover:underline"
          >
            schreib uns
          </a>
          , wenn du in der Zwischenzeit Fragen dazu hast.
        </p>
      </div>
    </div>
  );
}
