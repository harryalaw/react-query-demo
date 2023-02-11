import { useQuery } from "@tanstack/react-query";
import { Meal } from "../types/Meal";

export async function fetchMealById(id: string) {
  const response = await fetch(`/meal/${id}`);
  if (!response.ok) {
    throw new Error("Could not find a meal with this id");
  }
  return (await response.json()) as Promise<Meal>;
}

export function useMeal(id: string) {
  return useQuery({
    queryFn: () => fetchMealById(id),
    queryKey: ["meals", id],
  })
}
