import { z } from 'zod';
import { JobType, Office } from './experience.constant';

const postExperienceSchema = z.object({
  body: z.object({
    companyName: z.string(),
    location: z.string(),
    dateOfEntry: z.string({ required_error: 'Employed date is required!' }),
    dateOfDeparture: z.string({ required_error: 'Resign date is required!' }),
    office: z.enum(Office as [string, ...string[]]),
    jobType: z.enum(JobType as [string, ...string[]]),
    logo: z.string().optional(),
    certificate: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const ExperienceValidation = {
  postExperienceSchema,
};
