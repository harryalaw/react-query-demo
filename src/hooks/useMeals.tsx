import { useQuery } from "@tanstack/react-query";
import { Meal } from "../types/Meal";

export async function fetchMeals() {
  const response = await fetch(`/meal`);
  if (!response.ok) {
    throw new Error("Failed to fetch the meals");
  }
  return (await response.json()) as Promise<Meal[]>;
}

export function useMeals(select?: (meals: Meal[]) => Meal[]) {
  if (!select) {
    select = (meals) => meals;
  }

  return useQuery({
    queryFn: fetchMeals,
    queryKey: ["meals"],
    select: select,
  });
}
