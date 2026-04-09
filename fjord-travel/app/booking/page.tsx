"use client";
import { use } from "react";
import PassengerForm from "@/components/PassengerForm";

export default function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{
    id: string;
    from: string;
    to: string;
    date: string;
    dep: string;
    arr: string;
    dur: string;
    price: string;
    operator: string;
  }>;
}) {
  const tripParams = use(searchParams);

  return <PassengerForm tripParams={tripParams} />;
}