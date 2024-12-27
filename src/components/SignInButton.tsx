import { signIn } from '@/actions/signIn';
import { Button } from './UI/button';
import { ArrowBigRight } from 'lucide-react';

export default function SignInButton() {
   return (
      <form action={signIn}>
         <Button variant="outline" size="default">
            <span className=" tracking-normal text-lg">Sign In</span>
            <ArrowBigRight />
         </Button>
      </form>
   );
}
