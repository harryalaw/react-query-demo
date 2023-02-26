import { useMeals } from "../hooks/useMeals";

export function TopMeals() {
  const { data: meals, isError, isLoading } = useMeals();

  const top5Meals = [...(meals ?? [])]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

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
        {top5Meals.map((meal) => (
          <li key={meal.id}>
            <span className="truncate">
              {meal.rating} — {meal.name}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
