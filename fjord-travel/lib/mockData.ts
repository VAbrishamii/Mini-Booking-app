const baseSchedule = [
  {
    from: "Bergen", to: "Stavanger",
    slots: [
      { dep: "07:00", arr: "11:30", dur: 270, price: 549, seats: 42 },
      { dep: "12:00", arr: "16:30", dur: 270, price: 649, seats: 18 },
      { dep: "17:30", arr: "22:00", dur: 270, price: 499, seats: 67 },
    ],
    operator: "Fjord Line",
  },
  {
    from: "Hirtshals", to: "Bergen",
    slots: [
      { dep: "08:00", arr: "12:30", dur: 270, price: 549, seats: 55 },
      { dep: "13:00", arr: "17:30", dur: 270, price: 649, seats: 23 },
      { dep: "18:30", arr: "23:00", dur: 270, price: 499, seats: 31 },
    ],
    operator: "Fjord Line",
  },
  {
    from: "Bergen", to: "Hirtshals",
    slots: [
      { dep: "14:00", arr: "05:00", dur: 900, price: 1299, seats: 88 },
    ],
    operator: "Fjord Line",
  },
  {
    from: "Stavanger", to: "Bergen",
    slots: [
      { dep: "16:00", arr: "07:00", dur: 900, price: 1299, seats: 74 },
    ],
    operator: "Fjord Line",
  },
  {
    from: "Bergen", to: "Kristiansand",
    slots: [
      { dep: "14:00", arr: "05:00", dur: 900, price: 1299, seats: 88 },
    ],
    operator: "Fjord Line",
  },
  {
    from: "Kristiansand", to: "Bergen",
    slots: [
      { dep: "15:00", arr: "06:00", dur: 900, price: 1299, seats: 62 },
    ],
    operator: "Fjord Line",
  },
];

// Function to get departures based on search criteria, returns an array of Departure objects
export function getDepartures(from: string, to: string, date: string) {
  const route = baseSchedule.find(
    r => r.from.toLowerCase() === from.toLowerCase() &&
         r.to.toLowerCase() === to.toLowerCase()
  );
  if (!route) return [];

  return route.slots.map((slot, index) => ({
    id: `${from}-${to}-${date}-${index}`, 
    from: route.from,
    to: route.to,
    date,
    departureTime: slot.dep,
    arrivalTime: slot.arr,
    durationMinutes: slot.dur,
    priceNOK: slot.price,
    seatsAvailable: slot.seats, 
    operator: route.operator,
  }));
}