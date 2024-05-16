import QueryBuilder from '../../builder/QueryBuilder';
import { Skill } from './skill.model';
import { TSkill } from './skill.interface';

const postSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};
const getAllSkillFromDB = async (query: Record<string, unknown>) => {
  const skillQuery = new QueryBuilder(Skill.find(), query)
    .search(['title'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await skillQuery.modelQuery;
  const meta = await skillQuery.countTotal();

  return {
    meta,
    result,
  };
};

const updateSkillIntoDB = async ({ id, newUpdatedData }: {
  id: string,
  newUpdatedData: Partial<TSkill>
}) => {
  const result = await Skill.findByIdAndUpdate(
    id,
    newUpdatedData,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const SkillService = {
  postSkillIntoDB,
  getAllSkillFromDB,
  updateSkillIntoDB
};
