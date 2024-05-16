import { z } from 'zod';

const postSkillSchema = z.object({
  body: z.object({
    title: z.string(),
    logo: z.string().optional(),
    dateOfEntry: z.string().optional(),
    level: z.number()
  }),
});

export const SkillValidation = {
  postSkillSchema,
};
