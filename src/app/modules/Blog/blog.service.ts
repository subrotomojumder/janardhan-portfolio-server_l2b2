import QueryBuilder from '../../builder/QueryBuilder';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const postBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};
const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(['title', 'subTitle'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await blogQuery.modelQuery;
  const meta = await blogQuery.countTotal();

  return {
    meta,
    result,
  };
};
const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
export const BlogService = {
  postBlogIntoDB,
  getAllBlogFromDB,
  deleteBlogFromDB
};
