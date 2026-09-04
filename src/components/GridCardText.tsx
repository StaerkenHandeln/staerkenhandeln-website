const HEADING_PATTERN = /^♡.*♡$/;

export function GridCardText({ text }: { text: string }) {
  const lines = text.split("\n");
  const firstLine = lines[0]?.trim() ?? "";
  const isHeading = HEADING_PATTERN.test(firstLine);

  if (isHeading) {
    const rest = lines.slice(1).join("\n").trim();
    return (
      <div>
        <p className="font-display not-italic text-amber-800 font-bold text-sm md:text-base text-center mb-2">
          {firstLine}
        </p>
        {rest && (
          <p className="font-display italic text-amber-800/90 leading-relaxed text-xs md:text-sm text-center whitespace-pre-line">
            {rest}
          </p>
        )}
      </div>
    );
  }

  return (
    <p className="font-display italic text-amber-800/90 leading-relaxed text-xs md:text-sm text-center whitespace-pre-line">
      {text}
    </p>
  );
}
