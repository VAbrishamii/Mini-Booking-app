"use client";
import { useRouter } from "next/navigation";
import SearchForm from "@/components/SearchForm";
import { Ship } from "lucide-react";
import { Suspense } from "react";

export default function HomePage() {
  const router = useRouter();

  function handleSearch(from: string, to: string, date: string) {
    router.push(`/results?from=${from}&to=${to}&date=${date}`);
  }

  return (
    <main>
      <Suspense
        fallback={
          <div className="flex items-center justify-center p-4">Loading...</div>
        }>
        <div className="flex flex-col items-center">
          <h1 className="size-full flex items-center justify-center p-4 font-bold text-2xl text-red-600">
            Fjord Travel <Ship size={24} className="ml-2" />
          </h1>
          <div className="p-4 flex items-center justify-center">
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
      </Suspense>
    </main>
  );
}
