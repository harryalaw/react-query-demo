import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Meal } from "../types/Meal";
import { MealForm } from "./MealForm";

async function createMeal(newMeal: Meal) {
  const response = await fetch("/meal", {
    method: "POST",
    body: JSON.stringify(newMeal),
  });

  if (!response.ok) {
    throw new Error("Failed to create the meal");
  }
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
    createMeal(meal)
      .then(() => navigate("/"))
      .catch((error: any) =>
        setError(error?.message ?? "Something went wrong!")
      );

  return (
    <>
      {error.length > 0 ? (
        <span role="alert" className="text-[#BA2525]">
          {error}
        </span>
      ) : null}
      <MealForm meal={meal} onSubmitCallback={onSubmitCallback} />
    </>
  );
}
