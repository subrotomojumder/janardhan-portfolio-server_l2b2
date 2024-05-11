import { z } from 'zod';

const postSkillSchema = z.object({
  body: z.object({
    title: z.string(),
    logo: z.string().optional(),
    dateOfEntry: z.string().optional(),
  }),
});

export const SkillValidation = {
  postSkillSchema,
};
