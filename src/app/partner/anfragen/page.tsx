"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACT_EMAIL = "hallo.staerkenhandeln@proton.me";
const MAX_MESSAGE_LENGTH = 5000;

const partnershipTypes = [
  "Netzwerkpartner",
  "Gemeinsame Initiative",
  "Sponsoring / Förderung",
  "Sonstiges",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  partnershipType: string;
  website: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  partnershipType: "",
  website: "",
  phone: "",
  message: "",
};

export default function PartnerschaftAnfragen() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;

    const subject = `Partnerschaftsanfrage von ${form.firstName} ${form.lastName}`;
    const bodyLines = [
      `Vorname: ${form.firstName}`,
      `Nachname: ${form.lastName}`,
      `E-Mail-Adresse: ${form.email}`,
      `Unternehmen / Organisation: ${form.organization}`,
      `Art der Partnerschaft: ${form.partnershipType}`,
      form.website ? `Website: ${form.website}` : null,
      form.phone ? `Telefonnummer: ${form.phone}` : null,
      "",
      "Nachricht:",
      form.message,
    ].filter((line) => line !== null);

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="px-6 md:px-12 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Anfrage
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
          Partnerschaft anfragen
        </h1>
        <p className="text-stone-500 leading-relaxed">
          Sie möchten StärkenHandeln unterstützen, gemeinsam ein Projekt entwickeln oder eine
          langfristige Partnerschaft aufbauen? Erzählen Sie uns kurz, was Sie vorhaben. Wir
          melden uns persönlich bei Ihnen.
        </p>
      </div>

      {submitted ? (
        <div className="max-w-2xl mx-auto bg-white border border-stone-200 rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-2">Danke!</h2>
          <p className="text-stone-600">
            Dein Mailprogramm hat sich mit deiner Anfrage geöffnet. Bitte sende die E-Mail dort ab.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white border border-stone-200 rounded-2xl p-8 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Vorname <span className="text-[var(--color-maroon)]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Nachname <span className="text-[var(--color-maroon)]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              E-Mail-Adresse <span className="text-[var(--color-maroon)]">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              Unternehmen / Organisation <span className="text-[var(--color-maroon)]">*</span>
            </label>
            <input
              type="text"
              required
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              Art der Partnerschaft <span className="text-[var(--color-maroon)]">*</span>
            </label>
            <select
              required
              value={form.partnershipType}
              onChange={(e) => setForm({ ...form, partnershipType: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none bg-white text-stone-700"
            >
              <option value="" disabled>
                Bitte wählen …
              </option>
              {partnershipTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Website <span className="text-stone-400">(optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none placeholder:text-stone-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Telefonnummer <span className="text-stone-400">(optional)</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">
              Nachricht <span className="text-[var(--color-maroon)]">*</span>
            </label>
            <textarea
              required
              rows={5}
              maxLength={MAX_MESSAGE_LENGTH}
              placeholder="Erzählen Sie uns gerne, was Sie vorhaben, was Sie einbringen möchten oder wobei Sie Unterstützung suchen."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none resize-none placeholder:text-stone-400"
            />
            <p className="text-xs text-stone-400 text-right mt-1">
              {form.message.length}/{MAX_MESSAGE_LENGTH} Zeichen
            </p>
          </div>

          <label className="flex items-start gap-3 text-sm text-stone-600">
            <input
              type="checkbox"
              required
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[var(--color-maroon)]"
            />
            <span>
              Ich habe die{" "}
              <Link
                href="/datenschutz"
                className="underline text-[var(--color-maroon)] hover:text-[var(--color-maroon-dark)]"
              >
                Datenschutzerklärung
              </Link>{" "}
              gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage
              zu.
            </span>
          </label>

          <button
            type="submit"
            disabled={!privacyAccepted}
            className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-maroon)] text-white font-semibold py-3 rounded-full hover:bg-[var(--color-maroon-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Partnerschaft anfragen →
          </button>
        </form>
      )}
    </div>
  );
}
