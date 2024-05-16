import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { BlogValidation } from './blog.validation';
import { BlogController } from './blog.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(BlogValidation.postBlogSchema),
  BlogController.postBlog,
);
router.get('/', BlogController.getAllBlog);
router.delete('/:id', BlogController.deleteBlog);


export const BlogRoute = router;
