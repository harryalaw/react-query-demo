import { Link, useParams } from "react-router-dom";
import { useMeal } from "../hooks/useMeal";

export function MealPage() {
  const { id } = useParams() as { id: string };

  const { meal, isError, isLoading } = useMeal(id);

  if (isError) {
    return <div> No meal for this id! </div>;
  }

  if (isLoading) {
    return <div> Loading meal... </div>;
  }

  return (
    <>
      <h2 className="text-4xl">{meal?.name} </h2>
      <p className="text-xl">{meal?.rating}/10</p>
      <p className="py-4">{meal?.description} </p>
      <Link to={"edit"} className="bg-[#84C5F4] px-3 py-2 rounded-xl">
        Edit
      </Link>
    </>
  );
}
