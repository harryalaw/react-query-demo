import { rest } from "msw";
import { addMeal, getMeals, getById, meals, editMeal } from "./mealMocks";
import { z } from "zod";

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

export const mealSchema = z.object({
  name: z.string().trim().min(1),
  id: z.string(),
  description: z.string().optional(),
  rating: z.number().min(0).max(10),
});

export const handlers = [
  rest.get("/meal", async (_req, res, ctx) => {
    await sleep(500);
    return res(ctx.status(200), ctx.json(getMeals()));
  }),

  rest.post("/meal", async (req, res, ctx) => {
    const meal = mealSchema.parse({ ...(await req.json()), id: nextId() });
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
    const newMeal = mealSchema.parse(await req.json());
    await sleep(500);

    if (!meal) {
      return res(ctx.status(404));
    }
    if (newMeal.description === "bad") {
      return res(ctx.status(400));
    }
    editMeal(id, newMeal);

    return res(ctx.status(200), ctx.json(meal));
  }),
];
