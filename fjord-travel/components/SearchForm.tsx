"use client";
import { useState } from "react";
import { CustomSelect } from "@/components/CustomSelect";
import { useSearchParams } from "next/dist/client/components/navigation";


const PORTS = ["Bergen", "Stavanger", "Hirtshals", "Kristiansand"];

type SearchFormProps = {
  onSearch: (from: string, to: string, date: string) => void;
};

export default function SearchForm({ onSearch }: SearchFormProps) {
  // const router = useRouter();
  const searchParams = useSearchParams();

  // pre-fill from URL if coming back from results page
  const [from, setFrom] = useState(searchParams.get("from") || "");
  const [to, setTo]     = useState(searchParams.get("to")   || "");
  const [date, setDate] = useState(searchParams.get("date") || "");


  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!from || !to || !date) return;
    onSearch(from, to, date);
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full md:w-xl border border-gray-600 rounded-2xl p-4">
      {/* Departure */}
      <div className="flex flex-col m-2">
        <label className="text-l font-medium text-gray-900 mb-1 ml-3">
          Departure
        </label>
        <CustomSelect
          value={from}
          onChange={setFrom}
          options={PORTS}
          placeholder="Select departure"
        />
      </div>


      {/* Arrival */}
      <div className="flex flex-col m-2">
        <label className="text-l font-medium text-gray-900 mb-1 ml-3">
          Arrival
        </label>
        <CustomSelect
          value={to}
          onChange={setTo}
          options={PORTS.filter((p) => p !== from)}
          placeholder="Select arrival"
        />
      </div>

      {/* Date */}
      <div className="flex flex-col m-2 ">
        <label className="text-l font-medium text-gray-900 mb-1 ml-3">
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
        className="border rounded-2xl m-2 p-2 bg-green-700 hover:bg-green-800 text-white disabled:bg-gray-400">
        Search departures
      </button>
    </form>
  );
}
