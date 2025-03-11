import { Router } from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middleware/validateRequest';
import { studentValidations } from './student.validation';

const router = Router();

// will cole controller function

router.get('/', StudentController.getAllStudents, validateRequest(studentValidations.studentCreateValidationSchema));

router.get('/:studentId', StudentController.getSingleStudent);

router.delete('/:studentId', StudentController.deleteStudent);

export const StudentRoutes = router;
