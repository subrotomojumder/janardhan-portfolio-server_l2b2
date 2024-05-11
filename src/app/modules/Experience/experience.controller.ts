import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceService } from './experience.service';

const postExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.postExperienceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience post is successfully',
    data: result,
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.getAllExperienceFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experiences are retrieved successfully',
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

export const ExperienceController = {
  postExperience,
  getAllExperience,
};
