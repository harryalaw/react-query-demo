import type { Meal } from "../types/Meal";

export let meals: Meal[] = [
  {
    id: "1",
    name: "Falafel",
    description: "Harry's oven baked falafels",
    rating: 8.5,
  },
  {
    id: "2",
    name: "Green Gnocchi",
    description: "Pesto inspired Gnocchi",
    rating: 8.7,
  },
  {
    id: "3",
    name: "Kung Pao Cauliflower",
    rating: 7.3,
  },
];

export function getMeals(): Meal[] {
  return meals;
}

export function addMeal(meal: Meal) {
  meals.push(meal);
}

export function editMeal(id: string, editedMeal: Meal) {
  meals = meals.map((meal) => {
    if (meal.id === id) {
      editedMeal.id = id;
      return editedMeal;
    }
    return meal;
  });
}

export function getById(id: string): Meal | null {
  const mealsWithId = meals.filter((meal) => meal.id === id);

  if (mealsWithId.length === 1) {
    return mealsWithId[0];
  }
  return null;
}
