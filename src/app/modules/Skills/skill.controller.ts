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

// const getSingleAcademicDepartment = catchAsync(async (req, res) => {
//   const { departmentId } = req.params;
//   const result =
//     await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
//       departmentId,
//     );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic department is retrieved successfully',
//     data: result,
//   });
// });

// const updateAcademicDeartment = catchAsync(async (req, res) => {
//   const { departmentId } = req.params;
//   const result =
//     await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
//       departmentId,
//       req.body,
//     );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic department is updated successfully',
//     data: result,
//   });
// });

export const SkillController = {
  postSkill,
  getAllSkill,
};
