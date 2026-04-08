import { NextRequest, NextResponse } from "next/server"; 
import { getDepartures } from "@/lib/mockData";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  if (!from || !to || !date) {
    return NextResponse.json(
      { error: "Missing required params: from, to, date" },
      { status: 400 }
    );
  }

  const departures = getDepartures(from, to, date);

  return NextResponse.json({ departures }, { status: 200 });
}