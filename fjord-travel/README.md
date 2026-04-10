# Fjord Travel 🚢

A mini ferry booking application built as a technical assignment.

**Live demo:** [mini-booking-app](https://mini-booking-app-nine.vercel.app/)

---

## Getting started

```bash
git clone https://github.com/VAbrishamii/Mini-Booking-app.git
cd fjord-travel
npm install
npm run dev
```
---

## Features

- Search ferry departures by route and date
- Browse available departures with time, duration and price
- Select a departure and fill in passenger details
- Review and confirm booking with a summary page
- Fully responsive — works on mobile and desktop

---

## Tech stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 (App Router) | Frontend + backend |
| TypeScript | Type safety throughout |
| Tailwind CSS | Styling and responsive design |
| Lucide React | Icons |
| React Hot Toast | Booking confirmation feedback |

---

## Project structure

app/
├── page.tsx              # Search page
├── results/page.tsx      # Departure results
├── booking/page.tsx      # Passenger details
├── summary/page.tsx      # Booking summary
└── api/departures/       # REST API endpoint
components/
├── SearchForm.tsx         # Search form with custom dropdowns
├── CustomSelect.tsx       # Reusable dropdown component
├── DepartureList.tsx      # Results list with selection logic
├── DepartureCard.tsx      # Single departure card
├── PassengerForm.tsx      # Passenger details form
└── SummaryCard.tsx        # Booking summary and confirmation
lib/
├── types.ts              # Shared TypeScript types
└── mockData.ts           # Mock departure data

---

## Architecture decisions

**Why Next.js App Router?**
Co-locates frontend and backend in one project. Server components handle data fetching without extra API calls, keeping the code simple and fast.

**Why URL search params for state?**
Passing state through URL params makes every page bookmarkable and shareable without needing a state management library like Redux or Zustand. It also means pages work correctly on refresh.

**Why mock data instead of a database?**
The task specified no database was needed. Mock data is generated programmatically in `mockData.ts` making it easy to extend with new routes and time slots without touching any other code.

**Why a custom select dropdown?**
Native browser `<select>` dropdowns cannot be styled consistently across browsers — the options list ignores CSS width rules. A custom dropdown built with React state gives full control over styling and ensures a consistent experience.

**Why thin pages and fat components?**
Each `page.tsx` only unwraps URL params and passes them to a component. All logic lives in the component. This makes components reusable, independently testable and easier to read.

---

## Available routes

| From | To |
|------|----|
| Bergen | Stavanger |
| Stavanger | Bergen |
| Bergen | Hirtshals |
| Hirtshals | Bergen |

---

## Challenges

**Next.js 15 breaking change**
`searchParams` became a Promise in Next.js 15. Server components need `await searchParams` and client components need `React.use(searchParams)` to unwrap it.

**Hydration mismatch**
Using `Math.random()` for seat numbers caused a hydration error because the server and client generated different values. Fixed by using deterministic fixed values in the mock data.

**Client vs server components**
Pages with `useState` or event handlers must be client components. I kept pages as thin server components and moved all interactive logic into dedicated client components to get the best of both worlds.

**Native select styling**
Browser native dropdowns cannot be styled with CSS. Built a custom dropdown component from scratch using React state and a click-outside handler.

---

## What I would do differently with more time

- **Real database** — PostgreSQL with Prisma for actual seat inventory and booking persistence
- **Authentication** — user accounts with booking history
- **Return trip selection** — book outbound and return in one flow
- **Email confirmation** — send booking details to passenger email
- **E2E tests** — Playwright for full user journey testing
- **Better error handling** — error boundaries and proper error pages
- **Seat selection** — visual seat map for choosing specific seats

---

## Author

**Vahideh Abri**
[github.com/VAbrishami](hhttps://github.com/VAbrishamii)
