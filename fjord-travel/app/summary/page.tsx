"use client";
import { use, useState } from "react";
import SummaryCard from "@/components/SummaryCard";

export default function SummaryPage({
  searchParams,
}: {
  searchParams: Promise<{
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
  const params = use(searchParams);

  const [passenger] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
  }>(() => {
    if (typeof window !== "undefined") {
      const savedPassenger = sessionStorage.getItem("passengerDetails");
      if (savedPassenger) {
        try {
          return JSON.parse(savedPassenger);
        } catch (error) {
          console.error(
            "Error parsing passenger details from sessionStorage:",
            error,
          );
        }
      }
    }
    return { firstName: "", lastName: "", phone: "" };
  });

  return (
    <SummaryCard
      from={params.from}
      to={params.to}
      date={params.date}
      dep={params.dep}
      arr={params.arr}
      dur={params.dur}
      price={params.price}
      operator={params.operator}
      firstName={passenger.firstName}
      lastName={passenger.lastName}
      phone={passenger.phone}
    />
  );
}
