import { Router } from 'express';
import { ProjectRoute } from '../modules/Project/project.route';
import { BlogRoute } from '../modules/Blog/blog.route';
import { SkillRoute } from '../modules/Skills/skill.route';
import { ExperienceRoute } from '../modules/Experience/experience.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/projects',
    route: ProjectRoute,
  },
  {
    path: '/blogs',
    route: BlogRoute,
  },
  {
    path: '/skills',
    route: SkillRoute,
  },
  {
    path: '/experiences',
    route: ExperienceRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;