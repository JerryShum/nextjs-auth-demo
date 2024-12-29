'use server';

import { z } from 'zod';

const signUpFormSchema = z
   .object({
      email: z.string().email().min(3).nonempty('Email is required.'),
      password: z
         .string()
         .min(8, 'Password must be at least 8 characters long')
         .regex(
            /^(?=.*[!@#$%^&*])(?=.*[A-Z])/,
            'Password must include an uppercase letter, a lowercase letter, a digit, and a special character'
         ),
      confirmPassword: z.string(),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords must match',
      path: ['confirmPassword'],
   });

interface SignUpFormState {
   errors: {
      email?: string[];
      password?: string[];
      confirmPassword?: string[];
      _form?: string[];
   };
}

export async function signUp() {
   return {
      error: 'sigma',
   };
}
