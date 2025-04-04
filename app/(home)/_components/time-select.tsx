"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const YEAR_OPTIONS = ["2023", "2024", "2025"];

function getCurrentMonthYear() {
  const now = new Date();
  return {
    month: String(now.getMonth() + 1).padStart(2, "0"),
    year: String(now.getFullYear()),
  };
}

const TimeSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const { month: defaultMonth, year: defaultYear } = getCurrentMonthYear();
  const month = searchParams.get("month") ?? defaultMonth;
  const year = searchParams.get("year") ?? defaultYear;

  const handleChange = (m: string = month, y: string = year) => {
    push(`/?month=${m}&year=${y}`);
  };

  return (
    <div className="flex gap-2">
      <Select defaultValue={month} onValueChange={(m) => handleChange(m, year)}>
        <SelectTrigger className="w-[140px] rounded-full">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>
        <SelectContent>
          {MONTH_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue={year} onValueChange={(y) => handleChange(month, y)}>
        <SelectTrigger className="w-[110px] rounded-full">
          <SelectValue placeholder="Ano" />
        </SelectTrigger>
        <SelectContent>
          {YEAR_OPTIONS.map((y) => (
            <SelectItem key={y} value={y}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeSelect;
