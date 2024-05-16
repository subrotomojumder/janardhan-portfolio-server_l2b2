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

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.deleteProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project delete is successfully',
    data: result,
  });
});

export const ProjectController = {
  postProject,
  getAllProject,
  deleteProject,
};
