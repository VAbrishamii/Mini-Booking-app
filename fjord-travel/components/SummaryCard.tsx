"use client";
// This component displays a summary of the booking details including trip information and passenger details.

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Ship,
  User,
  Phone,
  MapPin,
  Clock,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import type { SummaryCardProps } from "@/lib/types";
import { formatDateToDisplay } from "@/lib/utils";
import { formatDuration } from "@/lib/utils";

export default function SummaryCard({
  from,
  to,
  date,
  dep,
  arr,
  dur,
  price,
  operator,
  firstName,
  lastName,
  phone,
}: SummaryCardProps) {
  const router = useRouter();


  // Handle continue button click, validate the form and navigate to summary page .
  function handleConfirm() {
    router.push("/bookingSuccess");
  }
  
  // Handle back button click
  function handleBack() {
    router.push(
      `/booking?from=${from}&to=${to}&date=${date}&dep=${dep}&arr=${arr}&dur=${dur}&price=${price}&operator=${operator}`,
    );
  }

  return (
    <main className="w-full md:w-xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Booking Summary</h1>
      <p className="text-gray-500 mb-6">
        Please review your booking before confirming
      </p>

      {/* Trip details card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Ship size={18} className="text-green-700" />
          <h2 className="font-semibold text-gray-900">Trip Details</h2>
        </div>

        <div className="space-y-3">
          {/* Route */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={14} />
              Route
            </div>
            <p className="font-medium text-gray-900">
              {from} → {to}
            </p>
          </div>

          {/* Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock size={14} />
              Date
            </div>
            <p className="font-medium text-gray-900">
              {formatDateToDisplay(date)}
            </p>
          </div>

          {/* Departure & arrival */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock size={14} />
              Departure
            </div>
            <p className="font-medium text-gray-900">
              {dep} → {arr} ({formatDuration(dur)})
            </p>
          </div>

          {/* Operator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Ship size={14} />
              Operator
            </div>
            <p className="font-medium text-gray-900">{operator}</p>
          </div>
        </div>
      </div>

      {/* Passenger details card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-4">
        <div className="flex items-center gap-2 mb-4">
          <User size={18} className="text-green-700" />
          <h2 className="font-semibold text-gray-900">Passenger Details</h2>
        </div>

        <div className="space-y-3">
          {/* Name */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <User size={14} />
              Full name
            </div>
            <p className="font-medium text-gray-900">
              {firstName} {lastName}
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Phone size={14} />
              Phone
            </div>
            <p className="font-medium text-gray-900">{phone}</p>
          </div>
        </div>
      </div>

      {/* Total price card */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-green-700" />
            <h2 className="font-semibold text-gray-900">Total Price</h2>
          </div>
          <p className="text-2xl font-bold text-green-700">{price} NOK</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium cursor-pointer px-4 py-2 rounded-lg transition-colors">
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium cursor-pointer px-5 py-2 rounded-lg transition-colors">
          <CheckCircle size={16} />
          Confirm booking
        </button>
      </div>
    </main>
  );
}
