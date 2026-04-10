"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import DepartureCard from "@/components/DepartureCard";
import { getDepartures } from "@/lib/mockData";
import { Departure, DepartureListProps } from "@/lib/types";
import { formatDateToDisplay } from "@/app/utils/Date";

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

  //error handling if no departures found, with option to go back and edit search
  if (departures.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <p className="text-gray-500">
          No departures found for {from} → {to} on {formatDateToDisplay(date)}.
        </p>
        <button
          onClick={() => router.push(`/?from=${from}&to=${to}&date=${date}`)}
          className="mt-4 text-green-700 underline text-sm">
          ← Search again
        </button>
      </div>
    );
  }

  const handleEditSearch = () => {
    router.push(`/?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <main className="max-w-2xl mx-auto p-6 pb-32">
      {/* Header */}
      <div className="relative flex items-center justify-between gap-2 mb-4">
        <span className="absolute right-8 top-1/2 -translate-y-1/2 ">
          <Search size={16} />
        </span>

        <input
          type="text"
          value={from && to ? `${from} → ${to} ` : "Where do you want to go?"}
          readOnly
          onClick={handleEditSearch}
          onFocus={handleEditSearch}
          className="w-full border border-gray-300 hover:border-green-700 rounded-full py-3 pl-10 pr-4 cursor-pointer bg-white shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-green-700 caret-transparent"
        />
        <span className="absolute right-53 top-1/2 -translate-y-1/2 text-l text-gray-800">
          {formatDateToDisplay(date)}
        </span>
      </div>

      <h1 className="text-xl font-bold text-gray-900 mb-2 mt-8">
        Please select your ticket
      </h1>

      {/* Departure cards */}
      {departures.map((dep) => (
        <DepartureCard
          key={dep.id}
          departure={dep}
          isSelected={selected?.id === dep.id}
          onSelect={() => setSelected(dep)}
        />
      ))}

      {/* Bottom action bar  */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between shadow-lg">
        {/* Left side — shows hint or selected info */}
        <div>
          {selected ? (
            <>
              <p className="text-sm text-gray-500">Selected departure</p>
              <p className="font-bold text-gray-900">
                {selected.departureTime} → {selected.arrivalTime} ·{" "}
                {selected.priceNOK} NOK
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-400">No departure selected yet</p>
          )}
        </div>

        {/* Right side*/}
        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`flex items-center gap-2 font-medium px-5 py-2 rounded-lg transition-colors ${
            selected
              ? "bg-green-700 hover:bg-green-800 text-white cursor-pointer"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}>
          Continue
          <ArrowRight size={16} />
        </button>
      </div>
    </main>
  );
}
