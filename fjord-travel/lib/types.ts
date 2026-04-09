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

export type DepartureListProps = {
  from: string;
  to: string;
  date: string;
};

export type SummaryCardProps = {
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
};

export type TripParams = {
  id: string;
  from: string;
  to: string;
  date: string;
  dep: string;
  arr: string;
  dur: string;
  price: string;
  operator: string;
};

export type PassengerForm = {
  firstName: string;
  lastName: string;
  phone: string;
};