import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fjord Travel",
  description: "Book your ferry departure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}