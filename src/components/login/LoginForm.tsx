import { Cat, DogIcon, GithubIcon } from 'lucide-react';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { Label } from '../UI/label';
import { Separator } from '../UI/separator';

export default function LoginForm() {
   return (
      <div className="p-8 border-2 border-muted rounded-lg flex flex-col items-center max-w-96 h-full">
         <h2 className="text-4xl font-semibold">Login</h2>
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
                     <span className="font-semibold">Login</span>
                  </Button>
               </div>
            </form>

            <h4 className="text-center text-muted-foreground my-4">or</h4>

            <div className="flex flex-col gap-4">
               <Button size={'lg'}>
                  <span className="font-semibold tracking-wide">
                     Continue With GitHub
                  </span>{' '}
                  <Cat className="!w-8 !h-8" />
               </Button>
               <Button size={'lg'}>
                  <span className="font-semibold tracking-wide">
                     Continue With Google
                  </span>{' '}
                  <DogIcon className="!w-8 !h-8" />{' '}
               </Button>
            </div>
         </div>
      </div>
   );
}
