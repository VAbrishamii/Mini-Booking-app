"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, User, Phone } from "lucide-react";
import type { PassengerForm, TripParams } from "@/lib/types";

type PassengerFormProps = {
  tripParams: TripParams;
};

export default function PassengerForm({ tripParams }: PassengerFormProps) {
  const router = useRouter();

  const [form, setForm] = useState<PassengerForm>({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<PassengerForm>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate(): boolean {
    const newErrors: Partial<PassengerForm> = {};

    if (!form.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!form.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleContinue() {
    if (!validate()) return;
    const summaryParams = new URLSearchParams({
      ...tripParams,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
    });
    router.push(`/summary?${summaryParams}`);
  }

  function handleBack() {
    router.push(`/results?from=${tripParams.from}&to=${tripParams.to}&date=${tripParams.date}`);
  }

  return (
    <main className="w-full md:w-xl mx-auto p-6">

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Passenger Details
      </h1>
      <p className="text-gray-500 mb-8">
        {tripParams.from} → {tripParams.to} · {tripParams.date}
      </p>

      {/* Form card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">

        {/* First name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First name
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              className={`w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.firstName ? "border-red-400" : "border-gray-300"
              }`}
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last name
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={`w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.lastName ? "border-red-400" : "border-gray-300"
              }`}
            />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+47 123 45 678"
              className={`w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.phone ? "border-red-400" : "border-gray-300"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

      </div>

      {/* Action buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
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

    </main>
  );
}