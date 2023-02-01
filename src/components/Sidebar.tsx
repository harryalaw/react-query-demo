import { NavLink } from "react-router-dom";
import { useMeals } from "../hooks/useMeals";

export function Sidebar() {
  return (
    <nav className="border-r px-4 pt-4 w-64">
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/meal/new"> New meal </NavLink>
        </li>
      </ul>
      <br />
      <TopMeals />
    </nav>
  );
}

function TopMeals() {
  const { meals, isError, isLoading } = useMeals();

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
      {isError ? (
        <span>Something went wrong!</span>
      ) : isLoading ? (
        <div> Loading ... </div>
      ) : (
        <ol className="pl-4">
          {[...(meals ?? [])]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5)
            .map((meal) => (
              <li key={meal.id}>
                <span className="overflow-hidden whitespace-nowrap">
                  {meal.rating} — {meal.name}
                </span>
              </li>
            ))}
        </ol>
      )}
    </>
  );
}
