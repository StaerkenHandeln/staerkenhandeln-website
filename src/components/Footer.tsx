import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-cream)] text-stone-600 mt-6">
      <WaveDivider className="absolute -top-8 left-0 opacity-70" />
      <div className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/7e9021208_96e1b11fe_SH_Logo_Hellblau_originalgetreu.png"
              alt="StärkenHandeln Logo"
              className="h-14 w-auto object-contain mb-3"
            />
            <p className="text-sm text-stone-500">
              Institut zur Förderung und Stärkung von individuellem Wachstum
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[var(--color-navy)] mb-3">
              Schnellzugriff
            </h3>
            <ul className="space-y-2 text-sm text-stone-500">
              <li><Link href="/ueber-uns" className="hover:text-[var(--color-maroon)] transition-colors">Über uns</Link></li>
              <li><Link href="/projekte" className="hover:text-[var(--color-maroon)] transition-colors">Alle Projekte</Link></li>
              <li><Link href="/mitwirken" className="hover:text-[var(--color-maroon)] transition-colors">Mitwirken</Link></li>
              <li><Link href="/der-verein" className="hover:text-[var(--color-maroon)] transition-colors">Der Verein</Link></li>
              <li><Link href="/kontakt" className="hover:text-[var(--color-maroon)] transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[var(--color-navy)] mb-3">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-stone-500">
              <li>office@staerkenhandeln.at</li>
              <li>+43 677 625 16 22</li>
              <li>Wien, Österreich</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[var(--color-navy)] mb-3">
              Folge uns
            </h3>
            <div className="flex gap-3 text-[var(--color-navy)]">
              <a href="#" aria-label="Facebook" className="hover:text-[var(--color-maroon)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.4 0-1.7.6-1.7 1.6V12h3l-.4 2.9h-2.6v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[var(--color-maroon)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3.1 0 4.2.1 1.1 0 1.8.2 2.4.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.4.1 1.1.1 1.5.1 4.2s0 3.1-.1 4.2c0 1.1-.2 1.8-.5 2.4-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.4.5-1.1.1-1.5.1-4.2.1s-3.1 0-4.2-.1c-1.1 0-1.8-.2-2.4-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.2c0-1.1.2-1.8.5-2.4.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.4-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
              </a>
              <a href="#" aria-label="X" className="hover:text-[var(--color-maroon)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h4.6l4 5.4L16.4 3H21l-6.7 7.9L21.4 21H16.8l-4.4-6-5.4 6H2.4l7.2-8.4L3 3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 py-6 text-center">
          <p className="font-display text-sm">
            <span className="text-[var(--color-maroon)]">Stärken.</span>{" "}
            <span className="text-[var(--color-blue)]">Verbinden.</span>{" "}
            <span className="text-[var(--color-gold)]">Handeln.</span>
          </p>
          <p className="text-xs text-stone-400 mt-2">
            © {new Date().getFullYear()} StärkenHandeln e.V. — Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}
