import { Router } from 'express';
import { StudentController } from './student.controller';

const router = Router();

// will cole controller function

router.get('/', StudentController.getAllStudents);

router.get('/:studentId', StudentController.getSingleStudent);

router.delete('/:studentId', StudentController.deleteStudent);

export const StudentRoutes = router;
