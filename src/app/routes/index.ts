import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.router';
import path from 'path';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const modulesRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
];

modulesRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
