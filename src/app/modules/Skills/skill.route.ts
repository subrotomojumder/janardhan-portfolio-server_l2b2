import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { SkillValidation } from './skill.validation';
import { SkillController } from './skill.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(SkillValidation.postSkillSchema),
  SkillController.postSkill,
);
router.get('/', SkillController.getAllSkill);

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

export const SkillRoute = router;
