import { useEffect, useState } from "react";
import { Meal } from "../types/Meal";

export async function fetchMealById(id: string) {
  const response = await fetch(`/meal/${id}`);
  if (!response.ok) {
    throw new Error("Could not find a meal with this id");
  }
  return (await response.json()) as Promise<Meal>;
}

export function useMeal(id: string) {
  const [meal, setMeals] = useState<Meal>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      await fetchMealById(id).then(
        (data) => setMeals(data),
        () => setIsError(true)
      );
      setIsLoading(false);
    }
    fetch();
  }, []);

  return { data: meal, isError, isLoading };
}
