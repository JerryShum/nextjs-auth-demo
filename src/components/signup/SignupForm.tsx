import ContinueWithGithub from '@/components/login/ContinueWithGithub';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { Label } from '../UI/label';

export default function SignupForm() {
   return (
      <div className="p-8 border-2 border-muted rounded-lg flex flex-col items-center max-w-96 h-full">
         <h2 className="text-4xl font-semibold">Sign Up</h2>
         <div className="flex flex-col mt-4 min-h-full min-w-64">
            <form>
               <div className="flex flex-col gap-4">
                  <div>
                     <Label htmlFor="email" className="text-lg tracking-wider">
                        Email
                     </Label>
                     <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                     />
                  </div>
                  <div>
                     <Label
                        htmlFor="password"
                        className="text-lg tracking-wider"
                     >
                        Password
                     </Label>
                     <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                     />
                  </div>
                  <Button className="" size={'lg'}>
                     <span className="font-semibold">Sign Up</span>
                  </Button>
               </div>
            </form>

            <h4 className="text-center text-muted-foreground my-4">or</h4>

            <div className="flex flex-col gap-4">
               <ContinueWithGithub />
            </div>
         </div>
      </div>
   );
}
