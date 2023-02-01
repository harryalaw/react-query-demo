import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMeal } from "../hooks/useMeal";
import { Meal } from "../types/Meal";
import { MealForm } from "./MealForm";

async function updateMeal(meal: Meal) {
  await fetch(`/meal/${meal.id}`, {
    method: "PATCH",
    body: JSON.stringify(meal),
  });
}

export function EditMeal() {
  const { id } = useParams() as { id: string };
  const { meal, isLoading, isError } = useMeal(id);

  const navigate = useNavigate();
  const [error, setError] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>An error happened!</div>;
  }

  const onSubmitCallback = (meal: Meal) =>
    updateMeal(meal).then(
      () => navigate("/"),
      (error: any) => setError(error?.message ?? "Something went wrong!")
    );

  return (
    <>
      {error.length > 0 ? { error } : null}
      <MealForm meal={meal!} onSubmitCallback={onSubmitCallback} />
    </>
  );
}
