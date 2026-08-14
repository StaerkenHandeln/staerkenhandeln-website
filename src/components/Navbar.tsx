"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Start" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/termine", label: "Termine" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl text-emerald-800">
          StärkenHandeln
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-stone-600 hover:text-emerald-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-stone-600"
          aria-label="Menü"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-stone-600 hover:text-emerald-700"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
