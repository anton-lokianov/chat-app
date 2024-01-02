import * as z from 'zod';

export const signInFormValidation = z.object({
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
});

export type SignInFormValidationType = z.infer<typeof signInFormValidation>;