import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getMuscleGroupColor = (muscleGroup: string) => {
  const colors: Record<string, string> = {
    Petto: "bg-red-500/20 text-red-500 border-red-500/30",
    Schiena: "bg-blue-500/20 text-blue-500 border-blue-500/30",
    Gambe: "bg-green-500/20 text-green-500 border-green-500/30",
    Spalle: "bg-purple-500/20 text-purple-500 border-purple-500/30",
    Bicipiti: "bg-orange-500/20 text-orange-500 border-orange-500/30",
    Tricipiti: "bg-pink-500/20 text-pink-500 border-pink-500/30",
    Addominali: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    Polpacci: "bg-teal-500/20 text-teal-500 border-teal-500/30",
  };
  return (
    colors[muscleGroup] || "bg-gray-500/20 text-gray-500 border-gray-500/30"
  );
};
