"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DepartureCard from "@/components/DepartureCard";
import { getDepartures } from "@/lib/mockData";
import { Departure, DepartureListProps } from "@/lib/types";



export default function DepartureList({ from, to, date }: DepartureListProps) {
  const departures = getDepartures(from, to, date);
  const router = useRouter();

  const [selected, setSelected] = useState<Departure | null>(null);

  function handleContinue() {
    if (!selected) return;
    const params = new URLSearchParams({
      id: selected.id,
      from,
      to,
      date,
      dep: selected.departureTime,
      arr: selected.arrivalTime,
      dur: String(selected.durationMinutes),
      price: String(selected.priceNOK),
      operator: selected.operator,
    });
    router.push(`/booking?${params}`);
  }

  if (departures.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <p className="text-gray-500">
          No departures found for {from} → {to} on {date}.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 text-green-700 underline text-sm"
        >
          ← Search again
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-6">

      {/* Header */}
      <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
        {from} <ArrowRight size={20} className="text-green-800" /> {to}
      </h2>
      <p className="text-gray-500 mb-6">
        {date} · {departures.length} departures
      </p>

      {/* Departure cards */}
      {departures.map((dep) => (
        <DepartureCard
          key={dep.id}
          departure={dep}
          isSelected={selected?.id === dep.id}
          onSelect={() => setSelected(dep)}
        />
      ))}

      {/* Bottom action bar */}
      {selected && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-sm text-gray-500">Selected departure</p>
            <p className="font-bold text-gray-900">
              {selected.departureTime} → {selected.arrivalTime} ·{" "}
              {selected.priceNOK} NOK
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.push(`/?from=${from}&to=${to}&date=${date}`)}
              className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <button
              onClick={handleContinue}
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2 rounded-lg transition-colors"
            >
              Continue
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

    </main>
  );
}