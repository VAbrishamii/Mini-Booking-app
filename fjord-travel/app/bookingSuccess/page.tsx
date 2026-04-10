"use client";
import Link from "next/link";

export default function BookingSuccess() {
  return (
    <div className="w-full md:w-xl flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center border border-gray-400 rounded-xl p-6 shadow-sm">
      <h1 className="text-2xl font-semibold">Booking confirmed</h1>

      <p className="text-gray-800">
        <span className="block">Thanks for choosing Fjord Travel!</span>
        <span className="block">
          We look forward to welcoming you on board.
        </span>
      </p>

      <div className="flex gap-4 mt-8">
        <Link href="/" className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
