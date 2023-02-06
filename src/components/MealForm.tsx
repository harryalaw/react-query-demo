import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Meal } from "../types/Meal";

type MealFormProps = {
  meal: Meal;
  onSubmitCallback: (meal: Meal) => Promise<void> | void;
};

export function MealForm({ meal, onSubmitCallback }: MealFormProps) {
  const navigate = useNavigate();

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [rating, setRating] = useState(meal.rating);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMeal = { name, description, rating, id: meal.id };

    onSubmitCallback(newMeal);
  };

  return (
    <form className="flex flex-col items-start gap-2" onSubmit={onSubmit}>
      <label className="flex">
        <span className="w-32"> Meal Name </span>
        <input
          name="Meal name"
          type="text"
          value={name}
          required
          placeholder="Pizza"
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl p-2"
        />
      </label>
      <label className="flex">
        <span className="w-32">Notes</span>
        <textarea
          name="Notes"
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-xl p-2"
        />
      </label>
      <label className="flex">
        <span className="w-32">Rating</span>
        <input
          type="range"
          name="Rating"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(+e.target.value)}
        />
        <span> {rating} / 10</span>
      </label>

      <div>
        <button
          type="submit"
          className="bg-[#84C5F4] rounded-xl px-3 py-2 ml-32"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-[#F29B9B] rounded-xl px-3 py-2 ml-8"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
