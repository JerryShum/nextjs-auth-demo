import { Button } from './UI/button';
import { ArrowBigRight } from 'lucide-react';
import * as actions from '@/actions';

export default function SignOutButton() {
   return (
      <form action={actions.signOut}>
         <Button variant="outline" size="default">
            <span className=" tracking-normal text-lg">Sign Out</span>
            <ArrowBigRight />
         </Button>
      </form>
   );
}
