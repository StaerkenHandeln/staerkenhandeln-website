"use client";

import { useRef, useState } from "react";

// Small standalone play/pause button used inside project cards that are
// themselves wrapped in a Next.js <Link>. Clicks are stopped from
// bubbling/navigating so tapping it just plays or pauses the song.
export function SongButton({
  src,
  className = "",
}: {
  src: string;
  className?: string;
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
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-medium px-4 py-2 hover:bg-[var(--color-gold)]/90 transition-colors ${className}`}
      >
        <span aria-hidden>♪</span> {playing ? "Pause" : "Herzenslied"}
      </button>
    </>
  );
}
