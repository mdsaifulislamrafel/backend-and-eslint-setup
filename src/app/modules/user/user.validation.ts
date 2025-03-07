import { z } from 'zod';

const userValidationSchema = z.object({
  password: z.string({invalid_type_error: 'password must be string'}).optional(),
});

export const UserValidation = {
  userValidationSchema,
};
