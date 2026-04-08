export type Route = {
  from: string;
  to: string;
};

export type Departure = {
  id: string;
  from: string;
  to: string;
  date: string;           // "YYYY-MM-DD"
  departureTime: string;  // "08:30"
  arrivalTime: string;    // "12:45"
  durationMinutes: number;
  priceNOK: number;
  seatsAvailable: number;
  operator: string;
};