export function formatDateToDisplay(dateString: string) {
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
}

export function formatDuration(mins: string | number): string {
  const m = typeof mins === "string" ? parseInt(mins) : mins;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}