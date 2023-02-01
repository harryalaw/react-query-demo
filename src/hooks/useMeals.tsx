import { useState, useEffect } from "react";
import { Meal } from "../types/Meal";

export async function fetchMeals() {
  return await fetch("/meal").then((res) => res.json() as Promise<Meal[]>);
}

export function useMeals() {
  const [meals, setMeals] = useState<Meal[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      await fetchMeals().then(
        (data) => setMeals(data),
        () => setIsError(true)
      );
      setIsLoading(false);
    }
    fetch();
  }, []);

  return { meals, isError, isLoading };
}
