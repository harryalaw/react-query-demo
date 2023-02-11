import { Link } from "react-router-dom";
import { useMeals } from "../hooks/useMeals";

export function IdeaDisplay() {
  const { data: meals, isError, isLoading } = useMeals();

  if (isError) {
    return <div> Oh no my fetch went wrong! </div>;
  }

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  return (
    <>
      <ul className="flex flex-row flex-wrap">
        {meals.map((meal) => (
          <MealIdeaCard
            name={meal.name}
            id={meal.id}
            key={meal.id}
            rating={meal.rating}
          />
        ))}
      </ul>
    </>
  );
}

function MealIdeaCard({
  name,
  id,
  rating,
}: {
  name: string;
  id: string;
  rating: number;
}) {
  return (
    <Link to={`/meal/${id}`}>
      <li className="border rounded-xl p-4 m-4 bg-[#D3CEC4] shadow-[4px_4px_0_#141414] border-black">
        <div className="text-lg">{name}</div>
        <div>{rating}</div>
      </li>
    </Link>
  );
}
