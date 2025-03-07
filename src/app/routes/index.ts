import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.router';

const router = Router();

const modulesRoutes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/students',
        route: StudentRoutes
    }
]


modulesRoutes.forEach(({ path, route }) => {
    router.use(path, route);
});

export default router;
