import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fjord Travel",
  description: "Book your ferry departure",
  icons: {
    icon: "data:,",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
