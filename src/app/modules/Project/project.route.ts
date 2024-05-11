import express from 'express';
import { ProjectController } from './project.controller';
import validateRequest from '../../middlewares/validationRequest';
import { ProjectValidation } from './project.validation';
const router = express.Router();

// router.post(
//   '/create-academic-department',
//   auth(USER_ROLE.superAdmin, USER_ROLE.admin),
//   validateRequest(
//     AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
//   ),
//   AcademicDepartmentControllers.createAcademicDepartmemt,
// );

router.post(
  '/',
  validateRequest(ProjectValidation.postProjectValidationSchema),
  ProjectController.postProject,
);
router.get('/', ProjectController.getAllProject);

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

export const ProjectRoute = router;
