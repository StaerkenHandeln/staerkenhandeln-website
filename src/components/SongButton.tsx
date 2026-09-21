"use client";

import { useRef, useState } from "react";

// Small vinyl-record glyph (dark disc, gold grooves, a soft shine highlight,
// and a gold note beside it) used on the "Herzenslied" buttons.
function VinylIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={`shrink-0 ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id="vinylShine" cx="35%" cy="28%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.65" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="10" cy="10" r="9" fill="#1c1c1c" />
      <circle cx="10" cy="10" r="9" fill="url(#vinylShine)" />
      <circle cx="10" cy="10" r="6.6" fill="none" stroke="#c9a24a" strokeWidth="0.7" strokeOpacity="0.65" />
      <circle cx="10" cy="10" r="4.6" fill="none" stroke="#c9a24a" strokeWidth="0.7" strokeOpacity="0.5" />
      <circle cx="10" cy="10" r="2.8" fill="#c9a24a" />
      <circle cx="10" cy="10" r="0.9" fill="#1c1c1c" />
      <g transform="translate(17,1.5)">
        <ellipse cx="2" cy="14.4" rx="2.1" ry="1.5" fill="#c9a24a" transform="rotate(-18 2 14.4)" />
        <rect x="3.5" y="2" width="1" height="12.6" fill="#c9a24a" />
        <path d="M4.5 2c2.6 0.4 3.6 2.1 3.2 4.4c-0.3-1.7-1.4-2.7-3.2-3z" fill="#c9a24a" />
      </g>
    </svg>
  );
}

// Small standalone play/pause button used inside project cards that are
// themselves wrapped in a Next.js <Link>. Clicks are stopped from
// bubbling/navigating so tapping it just plays or pauses the song.
// Font-size/padding are NOT baked in here — the caller passes them via
// `className` so this button always matches its sibling "Projekt
// entdecken" pill exactly, with no conflicting Tailwind utilities.
export function SongButton({
  src,
  className = "",
  iconClassName = "w-6 h-6",
}: {
  src: string;
  className?: string;
  iconClassName?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full text-[var(--color-navy)] font-medium shadow-[0_1px_4px_rgba(120,90,20,0.35)] hover:brightness-105 active:brightness-95 transition-[filter] bg-[linear-gradient(135deg,#f2d998_0%,#c9a24a_38%,#b8912f_62%,#f2d998_100%)] ${className}`}
      >
        <VinylIcon className={iconClassName} /> {playing ? "Pause" : "Herzenslied"}
      </button>
    </>
  );
}
