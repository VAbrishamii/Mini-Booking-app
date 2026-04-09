"use client";
import { use } from "react";
import SummaryCard from "@/components/SummeryCard";

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
    firstName: string;
    lastName: string;
    phone: string;
  }>;
}) {
  const params = use(searchParams);

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
      firstName={params.firstName}
      lastName={params.lastName}
      phone={params.phone}
    />
  );
}