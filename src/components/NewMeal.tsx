import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Meal } from "../types/Meal";
import { MealForm } from "./MealForm";

async function createMeal(newMeal: Omit<Meal, "id">) {
  await fetch("/meal", {
    method: "POST",
    body: JSON.stringify(newMeal),
  });
}

export function NewMealForm() {
  const navigate = useNavigate();
  const meal = {
    id: "-1",
    name: "",
    description: "",
    rating: 5,
  };

  const [error, setError] = useState("");

  const onSubmitCallback = (meal: Meal) =>
    createMeal(meal).then(
      () => navigate("/"),
      (error: any) => setError(error?.message ?? "Something went wrong!")
    );

  return (
    <>
      {error.length > 0 ? { error } : null}
      <MealForm meal={meal} onSubmitCallback={onSubmitCallback} />
    </>
  );
}
