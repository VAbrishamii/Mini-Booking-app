"use client";
import { useRouter } from "next/navigation";
import SearchForm from "@/components/SearchForm";
import { Ship } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  function handleSearch(from: string, to: string, date: string) {
    router.push(`/results?from=${from}&to=${to}&date=${date}`);
  }

  return (
    <main>
      <div className="flex flex-col m-4 p-4">
        <h1 className="size-full flex items-center justify-center p-4 font-bold text-lg">
          Fjord Travel <Ship  size={24} className="ml-2" />
        </h1>
        <div className="p-4 flex items-center justify-center">
          <SearchForm onSearch={handleSearch} />
        </div>
      </div>
    </main>
  );
}
