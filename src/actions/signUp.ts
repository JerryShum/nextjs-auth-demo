'use server';

import { z } from 'zod';

const signUpFormSchema = z
   .object({
      email: z.string().email().min(3).nonempty('Email is required.'),
      password: z
         .string()
         .min(8, 'Password must be at least 8 characters long.')
         .regex(
            /^(?=.*[!@#$%^&*])(?=.*[A-Z])/,
            'Password must include an uppercase letter, a lowercase letter, a digit, and a special character.'
         ),
      confirmPassword: z.string(),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords must match.',
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

export async function signUp(
   formState: SignUpFormState,
   formData: FormData
): Promise<SignUpFormState> {
   const validationResult = signUpFormSchema.safeParse({
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
      confirmPassword: formData.get('confirmPassword')?.toString(),
   });

   //! If form validation fails
   if (!validationResult.success) {
      console.log('Sigma:');
      console.log(validationResult.error.flatten().fieldErrors);
      return {
         errors: validationResult.error.flatten().fieldErrors,
      };
   }

   return {
      errors: {
         _form: ['sigma'],
      },
   };
}
