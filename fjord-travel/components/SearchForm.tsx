"use client";
import { useState } from "react";

// In a real app, these would come from an API or config file, but hardcoding for simplicity.

const PORTS = ["Bergen", "Stavanger", "Hirtshals", "Oslo"];

type SearchFormProps = {
  onSearch: (from: string, to: string, date: string) => void;
};

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!from || !to || !date) return;
    onSearch(from, to, date);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-lg border border-gray-400 rounded-2xl p-4 ">
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border rounded-2xl border-gray-300 m-2 p-2 text-gray-500">
        <option value="">Departure</option>
        {PORTS.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      {/* <button type="button" onClick={handleSwap}>
        ⇄
      </button> */}

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border rounded-2xl border-gray-300 m-2 p-2 text-gray-500">
        <option value="">Destination</option>
        {PORTS.filter((p) => p !== from).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        min={today}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded-2xl border-gray-300 m-2 p-2 text-gray-500"
      />

      <button
        type="submit"
        disabled={!from || !to || !date}
        className="border rounded-2xl m-2 p-2 bg-red-600 text-white disabled:bg-red-300">
        Search departures
      </button>
    </form>
  );
}
