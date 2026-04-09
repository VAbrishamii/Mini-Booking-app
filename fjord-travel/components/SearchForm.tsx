"use client";
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

// In a real app, these would come from an API or config file, but hardcoding for simplicity.

const PORTS = ["Bergen", "Stavanger", "Hirtshals", "Kristiansand"];

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

  // function handleSwap() {
  //   setFrom(to);
  //   setTo(from);
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-lg border border-gray-400 rounded-2xl p-4 ">
      {/* Departure */}
      <div className="flex flex-col m-2">
        <label className="text-sm font-medium text-gray-700 mb-1 ml-3">
          Departure
        </label>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border rounded-2xl border-gray-300 p-2 text-gray-500">
          <option value="">Select departure</option>
          {PORTS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* <button type="button" onClick={handleSwap} className="self-center my-2 p-1 rounded-full hover:bg-gray-200 transition-colors">
        <ArrowUpDown size={20} className="text-gray-400" />
      </button> */}

      {/* Arrival */}
      <div className="flex flex-col m-2">
        <label className="text-sm font-medium text-gray-700 mb-1 ml-3">
          Arrival
        </label>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded-2xl border-gray-300 p-2 text-gray-500">
          <option value="">Select arrival</option>
          {PORTS.filter((p) => p !== from).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div className="flex flex-col m-2">
        <label className="text-sm font-medium text-gray-700 mb-1 ml-3">
          Date
        </label>
        <input
          type="date"
          value={date}
          min={today}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-2xl border-gray-300 m-2 p-2 text-gray-500"
        />
      </div>

      <button
        type="submit"
        disabled={!from || !to || !date}
        className="border rounded-2xl m-2 p-2 bg-gray-600 text-white disabled:bg-gray-300">
        Search departures
      </button>
    </form>
  );
}
