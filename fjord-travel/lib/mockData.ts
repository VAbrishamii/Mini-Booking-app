import { Departure } from "./types";
import { v4 as uuidv4 } from "uuid";

const baseSchedule = [
  {
    from: "Bergen", to: "Stavanger",
    slots: [
      { dep: "07:00", arr: "11:30", dur: 270, price: 549 },
      { dep: "12:00", arr: "16:30", dur: 270, price: 649 },
      { dep: "17:30", arr: "22:00", dur: 270, price: 499 },
    ],
    operator: "Fjord Line",
  },
  {
    from: "Bergen", to: "Hirtshals",
    slots: [
      { dep: "14:00", arr: "05:00+1", dur: 900, price: 1299 },
    ],
    operator: "Fjord Line",
  },
  // Add reverse routes too: Stavanger→Bergen, Hirtshals→Bergen
];

export function getDepartures(from: string, to: string, date: string): Departure[] {
  const route = baseSchedule.find(
    r => r.from.toLowerCase() === from.toLowerCase() &&
         r.to.toLowerCase() === to.toLowerCase()
  );
  if (!route) return [];

  return route.slots.map(slot => ({
    id: uuidv4(),
    from: route.from,
    to: route.to,
    date,
    departureTime: slot.dep,
    arrivalTime: slot.arr,
    durationMinutes: slot.dur,
    priceNOK: slot.price,
    seatsAvailable: Math.floor(Math.random() * 80) + 5,
    operator: route.operator,
  }));
}