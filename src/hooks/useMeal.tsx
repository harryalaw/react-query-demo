import { useEffect, useState } from "react";
import { Meal } from "../types/Meal";

export async function fetchMealById(id: string) {
  return await fetch(`/meal/${id}`).then((res) => res.json() as Promise<Meal>);
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

  return { meal, isError, isLoading };
}
