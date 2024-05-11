import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { ExperienceValidation } from './experience.validation';
import { ExperienceController } from './experience.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(ExperienceValidation.postExperienceSchema),
  ExperienceController.postExperience,
);
router.get('/', ExperienceController.getAllExperience);

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

export const ExperienceRoute = router;
