"use client";

import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Departure } from "@/lib/types";



function formatDuration(mins: number) {
  return `${Math.floor(mins / 60)}h ${mins % 60}m`;
}
type DepartureCardProps = {
  departure: Departure;
  isSelected: boolean;
  onSelect: () => void;
};

export default function DepartureCard({ departure, isSelected, onSelect }: DepartureCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`border rounded-xl p-5 mb-4 cursor-pointer transition-all ${
        isSelected
          ? "border-green-500 bg-green-50 shadow-md"
          : "border-gray-200 bg-white hover:shadow-md"
      }`}
    >
      {/* times row */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-bold text-gray-900">{departure.departureTime}</span>
        <ArrowRight size={20} className="text-green-800" />
        <span className="text-2xl font-bold text-gray-900">{departure.arrivalTime}</span>
        <span className="ml-auto text-sm text-gray-400">{departure.operator}</span>
      </div>

      {/* details row */}
      <div className="flex items-center gap-5 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Clock size={14} /> {formatDuration(departure.durationMinutes)}
        </span>
        <span className="flex items-center gap-1">
          <Users size={14} /> {departure.seatsAvailable} seats
        </span>
        <span className="ml-auto text-lg font-bold text-green-700">
          {departure.priceNOK} NOK
        </span>
      </div>

      {/* selected indicator */}
      {isSelected && (
        <div className="mt-3 pt-3 border-t border-green-200 flex items-center gap-2 text-green-600 text-sm font-medium">
          <CheckCircle size={16} />
          Selected
        </div>
      )}
    </div>
  );
}