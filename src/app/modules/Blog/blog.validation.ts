import { z } from 'zod';

const postBlogSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Blog title is required!' }),
    images: z.array(z.string()),
    subTitle: z.string().optional(),
    des: z.string().optional(),
    desBullet: z.array(z.string()).optional(),
  }),
});

export const BlogValidation = {
  postBlogSchema,
};
