import { z } from 'zod';
import { mealSchema } from '../mocks/handlers';

export type Meal = z.infer<typeof mealSchema>
