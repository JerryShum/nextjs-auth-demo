'use server';

import { prisma } from '@/db';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const signUpFormSchema = z
   .object({
      username: z
         .string()
         .min(6, 'Username must be at leat 6 characters long.')
         .nonempty('Username is required. '),
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
      username?: string[];
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
      username: formData.get('username')?.toString(),
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
      confirmPassword: formData.get('confirmPassword')?.toString(),
   });

   //! If form validation fails
   if (!validationResult.success) {
      return {
         errors: validationResult.error.flatten().fieldErrors,
      };
   }
   //! If validation is successful - Add user to DB
   try {
      await prisma.user.create({
         data: {
            email: validationResult.data.email,
            password: validationResult.data.password, // Note: In a real application, make sure to hash the password before storing it
            username: validationResult.data.username,
         },
      });
      console.log('successfully created user!');
   } catch (error: unknown) {
      //! If the error returned is of type Error (we know what the error is)
      if (error instanceof Error) {
         console.log(error.message);
         return {
            errors: {
               _form: [error.message],
            },
         };
      } else {
         return {
            errors: {
               _form: ['Something went wrong. Please try again.'],
            },
         };
      }
   }

   redirect('/login');
}
