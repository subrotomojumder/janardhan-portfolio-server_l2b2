import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skill.service';

const postSkill = catchAsync(async (req, res) => {
  const result = await SkillService.postSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill post is successfully',
    data: result,
  });
});

const getAllSkill = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkillFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});
const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.updateSkillIntoDB({ id: id, newUpdatedData: req.body });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills is update successfully',
    data: result,
  });
});

export const SkillController = {
  postSkill,
  getAllSkill,
  updateSkill
};
