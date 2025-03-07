import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import status from "http-status";
import sendResponse from "../../utils/sendResponse";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { password, student: studentData } = req.body;
      // zod validation
  
    //   const zodValidation = await studentValidationSchema.parse(studentData);
  
      //   will coll service function to send this data
      const result = await UserServices.createStudentIntoDB(password, studentData);
      // send response
      // res.status(status.OK).json({
      //   success: true,
      //   message: 'Student created successfully',
      //   data: result,
      // });
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Student created successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  export const UserController = {
    createStudent,
  }