import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMeal } from "../hooks/useMeal";
import { Meal } from "../types/Meal";
import { MealForm } from "./MealForm";

async function updateMeal(meal: Meal) {
  const response = await fetch(`/meal/${meal.id}`, {
    method: "PATCH",
    body: JSON.stringify(meal),
  });

  if (!response.ok) {
    throw new Error("Failed to update the meal");
  }
}

export function EditMeal() {
  const { id } = useParams() as { id: string };
  const { data: meal, isLoading, isError } = useMeal(id);

  const navigate = useNavigate();
  const [error, setError] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>An error happened!</div>;
  }

  const onSubmitCallback = (meal: Meal) =>
    updateMeal(meal)
      .then(() => navigate(-1))
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
      <MealForm meal={meal!} onSubmitCallback={onSubmitCallback} />
    </>
  );
}
