import { z } from 'zod';
import { ProjectType } from './project.constant';

const projectTypeValidationSchema = z.enum(
  ProjectType as [string, ...string[]],
);
const linkValidationSchema = z.object({
  frontendLive: z.string().optional(),
  frontCode: z.string().optional(),
  frontExplain: z.string().optional(),
  backendLive: z.string().optional(),
  backendCode: z.string().optional(),
  backendExplain: z.string().optional(),
  others: z.string().optional(),
});

const postProjectValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    projectType: projectTypeValidationSchema,
    des: z.string(),
    desBullet: z.array(z.string()),
    images: z.array(z.string()),
    technologies: z.array(z.string()),
    links: linkValidationSchema,
  }),
});
export const ProjectValidation = {
  postProjectValidationSchema,
};
