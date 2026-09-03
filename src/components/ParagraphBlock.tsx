const HEADING_PATTERN = /^♡.*♡$/;

export function ParagraphBlock({ text }: { text: string }) {
  const lines = text.split("\n");
  const firstLine = lines[0]?.trim() ?? "";
  const isHeading = HEADING_PATTERN.test(firstLine);

  if (isHeading) {
    const rest = lines.slice(1).join("\n").trim();
    return (
      <div className="mb-4">
        <p className="font-display not-italic text-amber-800 font-bold text-xl md:text-2xl mb-2">
          {firstLine}
        </p>
        {rest && (
          <p className="font-display italic text-amber-800/90 leading-relaxed text-[15px] md:text-base whitespace-pre-line">
            {rest}
          </p>
        )}
      </div>
    );
  }

  return (
    <p className="font-display italic text-amber-800/90 leading-relaxed text-[15px] md:text-base mb-4 whitespace-pre-line">
      {text}
    </p>
  );
}
