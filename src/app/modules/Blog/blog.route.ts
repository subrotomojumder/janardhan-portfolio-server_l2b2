import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { BlogValidation } from './blog.validation';
import { BlogController } from './blog.controller';
const router = express.Router();


router.post(
  '/',
  validateRequest(BlogValidation.postBlogSchema),
  BlogController.postBlog
);
router.get('/', BlogController.getAllBlog);

// router.patch(
//   '/:departmentId',
//   auth(USER_ROLE.superAdmin, USER_ROLE.admin),
//   validateRequest(
//     AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
//   ),
//   AcademicDepartmentControllers.updateAcademicDeartment,
// );

// router.get(
//   '/',
//   auth(
//     USER_ROLE.superAdmin,
//     USER_ROLE.admin,
//     USER_ROLE.faculty,
//     USER_ROLE.student,
//   ),
//   AcademicDepartmentControllers.getAllAcademicDepartments,
// );

export const BlogRoute = router;
