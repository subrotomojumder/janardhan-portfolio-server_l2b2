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

router.patch(
  '/:id',
  validateRequest(
    SkillValidation.postSkillSchema.augment({
      body: SkillValidation.postSkillSchema.shape.body.partial()
    })
  ),
  SkillController.updateSkill
);



export const SkillRoute = router;
