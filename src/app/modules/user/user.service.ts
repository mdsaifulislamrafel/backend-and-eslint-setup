import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a new user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';
  // set manually generated id

  

  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)

  userData.id = await generateStudentId(admissionSemester);

  const newUser = await User.create(userData);

  //   create a student

  if (Object.keys(newUser).length) {
    // id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
