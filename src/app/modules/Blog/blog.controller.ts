import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { BlogService } from './blog.service';
import sendResponse from '../../utils/sendResponse';

const postBlog = catchAsync(async (req, res) => {
  const result = await BlogService.postBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog post is successfully',
    data: result,
  });
});

const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.deleteBlogFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog delete is successfully',
    data: result,
  });
});

export const BlogController = {
  postBlog,
  getAllBlog,
  deleteBlog,
};
