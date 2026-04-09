// This is a Next.js API route that handles GET requests to fetch departures based on query parameters.
// It uses a mock data function to simulate fetching departure information.

import { NextRequest, NextResponse } from "next/server";
import { getDepartures } from "@/lib/mockData";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  // Validate required query parameters
  if (!from || !to || !date) {
    return NextResponse.json(
      { error: "Missing required params: from, to, date" },
      { status: 400 },
    );
  }

  const departures = getDepartures(from, to, date);

  return NextResponse.json({ departures }, { status: 200 });
}
