import { supabase } from "@/lib/supabase-client";

export const revalidate = 60;

async function getEvents() {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  if (error || !data) return [];
  return data;
}

export default async function Termine() {
  const events = await getEvents();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-emerald-800">Termine & Veranstaltungen</h1>

      {events.length === 0 ? (
        <div className="bg-emerald-50 rounded-xl p-8 text-center">
          <p className="text-stone-500 text-lg">
            Aktuell sind keine Veranstaltungen geplant.
          </p>
          <p className="text-stone-400 mt-2">
            Schau bald wieder vorbei – neue Termine folgen!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event: any) => (
            <div
              key={event.id}
              className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col md:flex-row gap-4 shadow-sm"
            >
              <div className="bg-emerald-100 rounded-lg px-4 py-3 text-center min-w-[100px]">
                <p className="text-2xl font-bold text-emerald-800">
                  {new Date(event.date).toLocaleDateString("de-DE", { day: "numeric" })}
                </p>
                <p className="text-sm text-emerald-600">
                  {new Date(event.date).toLocaleDateString("de-DE", { month: "short" })}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-emerald-800">{event.title}</h3>
                <p className="text-stone-600 mt-1">{event.description}</p>
                {event.location && (
                  <p className="text-sm text-stone-400 mt-2">📍 {event.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
