export default function WaveDivider({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none w-full overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className={`w-full h-16 md:h-24 ${flip ? "-scale-y-100" : ""}`}
      >
        <path
          d="M0 60 C 220 5, 380 100, 600 40 S 1000 10, 1200 55"
          fill="none"
          stroke="var(--color-maroon)"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M0 75 C 260 25, 460 105, 700 50 S 1020 15, 1200 70"
          fill="none"
          stroke="var(--color-navy)"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
