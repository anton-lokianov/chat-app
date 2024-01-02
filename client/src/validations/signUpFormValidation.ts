import * as z from 'zod';

export const signUpFormValidation = z.object({
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters long',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z
    .string()
    .min(3, {
      message: 'Password must be at least 3 characters long',
    })
    .max(20, {
      message: 'Password must be at most 20 characters long',
    }),
  statusMessage: z.string().max(40, {
    message: 'Status message must be at most 100 characters long',
  }),

  profileImage: z.string().nullable(),
});

export type SignUpFormValidationType = z.infer<typeof signUpFormValidation>;
