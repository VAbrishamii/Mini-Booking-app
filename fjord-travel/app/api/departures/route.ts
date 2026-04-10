// This is a Next.js API route that handles GET requests to fetch departures based on query parameters.
// It uses a mock data function to simulate fetching departure information.
//it validates the presence of required query parameters (from, to, date) and returns appropriate responses based on the validation results.

import { NextRequest, NextResponse } from "next/server";
import { getDepartures } from "@/lib/mockData";

export async function GET(req: NextRequest) {
  // read data FROM the request URL query parameters
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  // Validate required query parameters
  if (!from || !to || !date) {
    // build and send an error RESPONSE
    return NextResponse.json(
      { error: "Missing required params: from, to, date" },
      { status: 400 },
    );
  }
  // get the Data
  const departures = getDepartures(from, to, date);

  // Return the departures as a JSON response with a 200 status code
  return NextResponse.json({ departures }, { status: 200 });
}
