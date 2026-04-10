"use client";
// A custom select dropdown component with basic styling and behavior

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
};

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border border-gray-300 rounded-2xl p-2 text-left bg-white text-gray-500 hover:border-gray-400 transition-colors">
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown options — same width as trigger */}
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-50 text-sm transition-colors ${
                value === opt
                  ? "bg-green-50 text-green-700 font-medium"
                  : "text-gray-700"
              }`}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
