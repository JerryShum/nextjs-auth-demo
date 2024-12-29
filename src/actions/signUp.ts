'use server';
import { z } from 'zod';

const signUpFormSchema = z.object({
   email: z.string().email().min(3),
   password: z.string().min(8),
});

export async function signUp() {
   return {
      error: 'sigma',
   };
}
