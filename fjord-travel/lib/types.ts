// The Route type
export type Route = {
  from: string;
  to: string;
};

// The Departure type
export type Departure = {
  id: string;
  from: string;
  to: string;
  date: string; // "DD.MM.YYYY"
  departureTime: string; // "08:30"
  arrivalTime: string; // "12:45"
  durationMinutes: number;
  priceNOK: number;
  seatsAvailable: number;
  operator: string;
};

// The TripParams type represents the URL parameters
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

// The PassengerForm type represents the form data for a passenger
export type PassengerForm = {
  firstName: string;
  lastName: string;
  phone: string;
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
