'use client";'

import { use } from "react";
import DepartureList from "@/components/DepartureListe";

export default function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ from: string; to: string; date: string }>;
}) {
  const { from, to, date } = use(searchParams);

  return <DepartureList from={from} to={to} date={date} />;
}