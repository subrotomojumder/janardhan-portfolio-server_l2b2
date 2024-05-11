import QueryBuilder from '../../builder/QueryBuilder';
import { TProject } from './project.interface';
import { Project } from './project.model';

const postProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};
const getAllProjectFromDB = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(['title', 'projectType', 'technologies'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await projectQuery.modelQuery;
  const meta = await projectQuery.countTotal();

  return {
    meta,
    result,
  };
};

export const ProjectService = {
  postProjectIntoDB,
  getAllProjectFromDB,
};
