import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { ProjectService } from './project.service';
import sendResponse from '../../utils/sendResponse';

const postProject = catchAsync(async (req, res) => {
  const result = await ProjectService.postProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project post is successfully',
    data: result,
  });
});

const getAllProject = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjectFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project are retrieved successfully',
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

export const ProjectController = {
  postProject,
  getAllProject,
};
