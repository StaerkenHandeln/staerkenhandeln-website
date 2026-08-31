"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Start", icon: HomeIcon },
  { href: "/ueber-uns", label: "Über uns", icon: UserIcon },
  { href: "/projekte", label: "Alle Projekte", icon: FolderIcon },
  { href: "/mitwirken", label: "Mitwirken", icon: PeopleIcon },
  { href: "/der-verein", label: "Der Verein", icon: ShieldIcon },
  { href: "/kontakt", label: "Kontakt", icon: MailIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-[var(--color-navy)] text-white px-4 h-16 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/56b1fec66_logo_wordmark_red_white.png"
            alt="StärkenHandeln Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü"
          className="p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 h-screen w-72 bg-[var(--color-navy)] text-white
          flex flex-col justify-between z-40 transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div>
          <div className="px-4 pt-8 pb-6 hidden md:block">
            <Link href="/" onClick={() => setOpen(false)}>
              <img
                src="https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/56b1fec66_logo_wordmark_red_white.png"
                alt="StärkenHandeln Logo"
                className="w-full object-contain"
              />
            </Link>
          </div>

          <nav className="mt-4 md:mt-2 px-4 space-y-1">
            {links.map((l) => {
              const active = pathname === l.href;
              const Icon = l.icon;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-[var(--color-maroon)] text-white"
                      : "text-blue-100/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-6 pb-8 text-sm">
          <div className="flex items-center gap-2 text-blue-100/70 mb-6">
            <PinIcon className="w-4 h-4" />
            <span>Wien, Österreich</span>
          </div>
          <p className="leading-relaxed font-display text-base">
            <span className="text-[var(--color-maroon)]">Stärken.</span>
            <br />
            <span className="text-[var(--color-blue)]">Verbinden.</span>
            <br />
            <span className="text-[var(--color-gold)]">Handeln.</span>
          </p>
          <HeartIcon className="w-4 h-4 mt-4 text-blue-100/50" />
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}
function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h6l2 2h10v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z" />
    </svg>
  );
}
function PeopleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M14.5 15c2.5.3 4.5 2 4.5 5" />
    </svg>
  );
}
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-8-5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-8 11-8 11z" />
    </svg>
  );
}
