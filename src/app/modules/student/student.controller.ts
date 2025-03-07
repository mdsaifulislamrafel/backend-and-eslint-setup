import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    // res.status(status.OK).json({
    //   success: true,
    //   message: 'Students fetched successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Students fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // res.status(status.OK).json({
    //   success: true,
    //   message: 'Single Student fetched successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Single Students fetched successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    // res.status(status.OK).json({
    //   success: true,
    //   message: 'Student deleted successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
