import { useMeals } from "../hooks/useMeals";
import { Meal } from "../types/Meal";

function select(meals: Meal[]) {
  return [...meals].sort((a, b) => b.rating - a.rating).slice(0, 5);
}

export function TopMeals() {
  const { data: meals, isError, isLoading } = useMeals(select);

  if (isError) {
    return <span>Something went wrong!</span>;
  }
  if (isLoading) {
    return (
      <>
        <span className="text-lg font-bold"> Top Rated Meals</span>
        <div> Loading ... </div>
      </>
    );
  }

  return (
    <>
      <span className="text-lg font-bold"> Top Rated Meals</span>
      <ol>
        {meals.map((meal) => (
          <li key={meal.id}>
            <span className="overflow-hidden whitespace-nowrap">
              {meal.rating} — {meal.name}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
