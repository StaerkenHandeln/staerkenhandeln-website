const HEADING_PATTERN = /^♡.*♡$/;
const BOLD_PATTERN = /^\*\*([\s\S]+)\*\*$/;

export function ParagraphBlock({
  text,
  compact = false,
  navyHeading = false,
}: {
  text: string;
  compact?: boolean;
  navyHeading?: boolean;
}) {
  const boldMatch = text.trim().match(BOLD_PATTERN);
  if (boldMatch) {
    return (
      <p
        className={
          compact
            ? "font-display not-italic text-amber-800 font-bold text-lg md:text-xl leading-relaxed mb-4 whitespace-pre-line"
            : "font-display not-italic text-amber-800 font-bold text-xl md:text-3xl leading-relaxed mb-4 whitespace-pre-line"
        }
      >
        {boldMatch[1]}
      </p>
    );
  }

  const lines = text.split("\n");
  const firstLine = lines[0]?.trim() ?? "";
  const isHeading = HEADING_PATTERN.test(firstLine);

  if (isHeading) {
    const rest = lines.slice(1).join("\n").trim();
    return (
      <div className="mb-4">
        <p
          className={
            navyHeading
              ? "font-display not-italic text-[var(--color-navy)] font-bold text-lg md:text-2xl mb-2 whitespace-nowrap"
              : compact
              ? "font-display not-italic text-amber-800 font-bold text-base md:text-lg mb-2"
              : "font-display not-italic text-amber-800 font-bold text-xl md:text-2xl mb-2"
          }
        >
          {firstLine}
        </p>
        {rest && (
          <p
            className={
              compact
                ? "font-display italic text-amber-800/90 leading-relaxed text-[13px] md:text-sm whitespace-pre-line"
                : "font-display italic text-amber-800/90 leading-relaxed text-[15px] md:text-base whitespace-pre-line"
            }
          >
            {rest}
          </p>
        )}
      </div>
    );
  }

  return (
    <p
      className={
        compact
          ? "font-display italic text-amber-800/90 leading-relaxed text-[13px] md:text-sm mb-4 whitespace-pre-line"
          : "font-display italic text-amber-800/90 leading-relaxed text-[15px] md:text-base mb-4 whitespace-pre-line"
      }
    >
      {text}
    </p>
  );
}
