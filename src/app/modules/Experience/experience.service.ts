import QueryBuilder from '../../builder/QueryBuilder';
import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const postExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};
const getAllExperienceFromDB = async (query: Record<string, unknown>) => {
  const experienceQuery = new QueryBuilder(Experience.find(), query)
    .search(['companyName', "location"])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await experienceQuery.modelQuery;
  const meta = await experienceQuery.countTotal();

  return {
    meta,
    result,
  };
};

export const ExperienceService = {
  postExperienceIntoDB,
  getAllExperienceFromDB,
};
