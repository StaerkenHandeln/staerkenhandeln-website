"use client";

import { useRef, useState } from "react";

// Bold eighth-note glyph (black note, soft gold echo behind it for depth)
// used on the "Herzenslied" buttons — large and unmistakable inside the
// gold pill.
function NoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 28" className={`shrink-0 ${className}`} aria-hidden="true">
      {/* gold echo, offset behind the note for a little depth */}
      <g transform="translate(1.4,-1.1)" opacity="0.55">
        <ellipse cx="6.4" cy="22.4" rx="4.6" ry="3.3" transform="rotate(-18 6.4 22.4)" fill="none" stroke="#c9a24a" strokeWidth="1.1" />
        <path d="M10.6 22.4 V3.2" fill="none" stroke="#c9a24a" strokeWidth="1.1" />
        <path d="M10.6 3.2c3.3 0.7 4.9 3 4.2 5.8c-0.4-2.2-1.9-3.5-4.2-3.9z" fill="none" stroke="#c9a24a" strokeWidth="1.1" />
      </g>
      {/* main black note */}
      <g fill="#1c1c1c">
        <ellipse cx="6.9" cy="23.1" rx="5.1" ry="3.7" transform="rotate(-18 6.9 23.1)" />
        <rect x="11" y="3.8" width="1.9" height="19.6" />
        <path d="M12.9 3.8c3.7 0.8 5.5 3.3 4.7 6.4c-0.5-2.5-2.2-4-4.7-4.4v-2z" />
      </g>
    </svg>
  );
}

// Small standalone play/pause button used inside project cards that are
// themselves wrapped in a Next.js <Link>. Clicks are stopped from
// bubbling/navigating so tapping it just plays or pauses the song.
// Sizing (height/padding/font) is NOT baked in here — the caller passes a
// fixed height class (e.g. "h-10") via `className` so this button always
// matches its sibling "Projekt entdecken" pill exactly, pixel for pixel.
export function SongButton({
  src,
  className = "",
  iconClassName = "w-6 h-7",
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
        className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full text-[var(--color-navy)] font-medium shadow-[0_1px_4px_rgba(120,90,20,0.35)] hover:brightness-105 active:brightness-95 transition-[filter] bg-[linear-gradient(135deg,#f2d998_0%,#c9a24a_38%,#b8912f_62%,#f2d998_100%)] ${className}`}
      >
        <NoteIcon className={iconClassName} /> {playing ? "Pause" : "Herzenslied"}
      </button>
    </>
  );
}
