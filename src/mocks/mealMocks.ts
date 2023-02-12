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
  {
    id: "4",
    name: "Black Bean Burgers",
    rating: 8.1,
    description: "Kenji's black bean burgers",
  },
  {
    id: "5",
    name: "Coconut Dal",
    rating: 9.1,
    description: "Meera Sodha's coconut dal",
  },
  {
    id: "6",
    name: "Soup",
    rating: 4,
  },
  {
    id: "7",
    name: "Moussaka",
    rating: 5.2,
  },
  {
    id: "8",
    name: "Chipotle Fajita Wrap",
    rating: 6.1,
    description: "But how British am I?",
  },
  {
    id: "9",
    name: "Buffalo Chickpeas",
    rating: 6.8,
  },
  {
    id: "10",
    name: "Broccoli Malai Kari",
    rating: 8.9,
  },
  {
    id: "11",
    name: "Red Gnocchi",
    rating: 6.8,
  },
  {
    id: "12",
    name: "Toad in the hole",
    rating: 7.3,
  }

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
