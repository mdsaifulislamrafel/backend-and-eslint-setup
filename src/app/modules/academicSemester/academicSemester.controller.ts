import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterInfoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemester();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semesters fetched successfully',
    data: result,
  });
})

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getSingleAcademicSemester(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Single Academic Semester fetched successfully',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req,  res) => {
  const result = await AcademicSemesterServices.updateAcademicSemester(req.params.id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semester updated successfully',
    data: result,
  });
})

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
