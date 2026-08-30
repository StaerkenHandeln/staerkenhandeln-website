"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase-client";

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const { error: supabaseError } = await supabase.from("messages").insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (supabaseError) throw supabaseError;
      setSubmitted(true);
    } catch {
      setError(
        "Deine Nachricht konnte nicht gesendet werden. Bitte versuch es später erneut oder schreib uns direkt an office@staerkenhandeln.at."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-4xl text-[var(--color-navy)] mb-3">Kontakt</h1>
      <p className="text-stone-500 mb-8">
        Möchtest du uns kennenlernen, eine Frage stellen oder eine Idee besprechen? Wir freuen
        uns auf deine Nachricht.
      </p>

      {submitted ? (
        <div className="bg-white border border-stone-200 rounded-xl p-8 text-center">
          <h2 className="font-display text-2xl text-[var(--color-navy)] mb-2">Danke!</h2>
          <p className="text-stone-600">
            Deine Nachricht wurde gesendet. Wir melden uns bald bei dir.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-stone-200 rounded-xl p-8">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">E-Mail</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Nachricht</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[var(--color-maroon)] focus:border-[var(--color-maroon)] outline-none resize-none"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[var(--color-maroon)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--color-maroon-dark)] transition-colors disabled:opacity-60"
          >
            {sending ? "Wird gesendet..." : "Senden"}
          </button>
        </form>
      )}

      <div className="mt-10 text-sm text-stone-500 space-y-1">
        <p>office@staerkenhandeln.at</p>
        <p>+43 677 625 16 22</p>
        <p>Wien, Österreich</p>
      </div>
    </div>
  );
}
