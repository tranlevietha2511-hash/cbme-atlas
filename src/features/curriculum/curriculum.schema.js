import { z } from "zod";

export const createCurriculumSchema = z.object({
  name: z.string().min(3),
  academicYear: z.string().min(4),
  isActive: z.boolean().default(true),
});
