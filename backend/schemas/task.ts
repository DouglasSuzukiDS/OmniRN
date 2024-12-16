import { z } from "zod";

export const taskSchema = z.object({
   task: z.string().min(3, 'A tarefa precisa ter no minímo 3 caracteres.'),
   completed: z.boolean().optional()
})