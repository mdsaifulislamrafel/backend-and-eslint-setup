import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: [true, 'Academic Semester Name is required'],
    enum: AcademicSemesterName,
  },
  year: {
    type: String,
    required: [true, 'Academic Semester Year is required'],
  },
  code: {
    type: String,
    required: [true, 'Academic Semester Code is required'],
    enum: AcademicSemesterCode,
  },
  startMonth: {
    type: String,
    required: [true, 'Academic Semester Start Month is required'],
    enum: Months,
  },
  endMonth: {
    type: String,
    required: [true, 'Academic Semester End Month is required'],
    enum: Months,
  },
});

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExist = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExist) {
    throw new Error('Academic Semester already exist');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
