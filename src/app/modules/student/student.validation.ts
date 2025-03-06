import { boolean, z } from 'zod';

// Define the UserName schema
const userNameValidationSchema = z.object({
  firstName: z.string({ required_error: 'First name is required' }),
  middleName: z.string().optional(),
  lastName: z.string({ required_error: 'Last name is required' }),
});

// Define the Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string({ required_error: 'Father name is required' }),
  fatherOccupation: z.string({
    required_error: 'Father occupation is required',
  }),
  fatherContactNo: z.string({
    required_error: 'Father contact number is required',
  }),
  motherName: z.string({ required_error: 'Mother name is required' }),
  motherOccupation: z.string({
    required_error: 'Mother occupation is required',
  }),
  motherContactNo: z.string({
    required_error: 'Mother contact number is required',
  }),
});

// Define the LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z.string({ required_error: 'Local guardian name is required' }),
  occupation: z.string({
    required_error: 'Local guardian occupation is required',
  }),
  contactNo: z.string({
    required_error: 'Local guardian contact number is required',
  }),
  address: z.string({ required_error: 'Local guardian address is required' }),
});

// Define the main Student schema
const studentValidationSchema = z.object({
  id: z.string({ required_error: 'Student ID is required' }),
  password: z.string({ required_error: 'Student password is required' }),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Gender is required',
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email format'),
  contactNo: z.string({ required_error: 'Contact number is required' }),
  emergencyContactN0: z.string({
    required_error: 'Emergency contact number is required',
  }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string({ required_error: 'Present address is required' }),
  permanentAddress: z.string({
    required_error: 'Permanent address is required',
  }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().default(false),
});

export default studentValidationSchema;
