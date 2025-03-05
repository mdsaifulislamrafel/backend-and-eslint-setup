import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import status from 'http-status';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //   will coll service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);
    // send response
    res.status(status.OK).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(status.OK).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(status.OK).json({
      success: true,
      message: 'Single Student fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
