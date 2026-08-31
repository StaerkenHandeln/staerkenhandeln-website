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
        className={`w-full h-16 md:h-20 ${flip ? "-scale-y-100" : ""}`}
      >
        <path
          d="M0 55 C 180 15, 340 85, 540 45 S 900 20, 1200 55"
          fill="none"
          stroke="var(--color-maroon)"
          strokeWidth="2.5"
          opacity="0.22"
        />
        <path
          d="M0 65 C 220 35, 420 95, 640 55 S 980 35, 1200 65"
          fill="none"
          stroke="var(--color-blue)"
          strokeWidth="2.5"
          opacity="0.22"
        />
        <path
          d="M0 45 C 300 70, 500 10, 760 40 S 1040 60, 1200 40"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          opacity="0.18"
        />
      </svg>
    </div>
  );
}
