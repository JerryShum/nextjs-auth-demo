'use client';

import * as actions from '@/actions';
import ContinueWithGithub from '@/components/login/ContinueWithGithub';
import { useActionState } from 'react';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { Label } from '../UI/label';
import FormMessage from '../common/FormMessage';

export default function SignupForm() {
   const initialState = {
      errors: {
         email: [''],
         password: [''],
         confirmPassword: [''],
         _form: [''],
      },
   };

   const [formState, formAction, isPending] = useActionState(
      actions.signUp,
      initialState
   );

   return (
      <div className="p-8 border-2 border-muted rounded-lg flex flex-col items-center max-w-96 h-full">
         <h2 className="text-3xl font-semibold">Sign Up</h2>
         <div className="flex flex-col mt-4 min-h-full">
            <form action={formAction}>
               <div className="flex flex-col gap-4">
                  <div>
                     <Label
                        htmlFor="email"
                        className="text-base tracking-wider"
                     >
                        Email
                     </Label>
                     <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        required
                     />
                     {formState.errors.email ? (
                        <FormMessage>
                           {formState.errors.email.join(', ')}
                        </FormMessage>
                     ) : null}
                  </div>
                  <div>
                     <Label
                        htmlFor="password"
                        className="text-base tracking-wider"
                     >
                        Password
                     </Label>
                     <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                        required
                     />
                     {formState.errors.password ? (
                        <FormMessage>
                           {formState.errors.password.join(', ')}
                        </FormMessage>
                     ) : null}
                  </div>
                  <div>
                     <Label
                        htmlFor="confirmPassword"
                        className="text-base tracking-wider"
                     >
                        Confirm Password
                     </Label>
                     <Input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required
                     />
                     {formState.errors.confirmPassword ? (
                        <FormMessage>
                           {formState.errors.confirmPassword.join(', ')}
                        </FormMessage>
                     ) : null}
                  </div>
                  {formState.errors._form ? (
                     <FormMessage>
                        {formState.errors._form.join(', ')}
                     </FormMessage>
                  ) : null}
                  <Button className="" size={'lg'} disabled={isPending}>
                     <span className="font-semibold">Sign Up</span>
                  </Button>
               </div>
            </form>

            <h4 className="text-center text-muted-foreground my-4">or</h4>

            <div className="flex flex-col gap-4 w-full">
               <ContinueWithGithub />
            </div>
         </div>
      </div>
   );
}
