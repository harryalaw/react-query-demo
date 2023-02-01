import { rest } from "msw";
import { Meal } from "../types/Meal";
import { addMeal, getMeals, getById, meals, editMeal } from "./mealMocks";

const nextId = (() => {
  let i = meals.length;
  return function () {
    i += 1;
    return String(i);
  };
})();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const handlers = [
  rest.get("/meal", async (_req, res, ctx) => {
    await sleep(500);
    return res(ctx.status(200), ctx.json(getMeals()));
  }),

  rest.post("/meal", async (req, res, ctx) => {
    const meal = { ...(await req.json()), id: nextId() };
    addMeal(meal);
    return res(ctx.status(200), ctx.json(meal));
  }),

  rest.get("/meal/:id", async (req, res, ctx) => {
    const id = req.params.id as string;
    const meal = getById(id);
    await sleep(500);
    if (!meal) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(meal));
  }),

  rest.patch("/meal/:id", async (req, res, ctx) => {
    const id = req.params.id as string;
    const meal = getById(id);
    const newMeal = (await req.json()) as Meal;
    await sleep(500);

    if (!meal) {
      return res(ctx.status(404));
    }
    if (newMeal.description === "bad") {
      return res(ctx.status(400));
    }
    editMeal(id, await req.json());

    return res(ctx.status(200), ctx.json(meal));
  }),

  rest.delete("/meal/:id", () => {}),
];
