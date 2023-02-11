import { NavLink } from "react-router-dom";
import { useMeals } from "../hooks/useMeals";

export function Sidebar() {
  return (
    <div className="border-r px-4 pt-4 w-64 bg-[#54D1DB]">
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/meal/new"> New meal </NavLink>
          </li>
        </ul>
      </nav>
      <br />
      <TopMeals />
    </div>
  );
}

function TopMeals() {
  const { meals, isError, isLoading } = useMeals();

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
      <ol className="pl-4">
        {top5Meals.map((meal) => (
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
