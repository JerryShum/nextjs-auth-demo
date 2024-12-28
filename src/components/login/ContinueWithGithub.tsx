import { GithubIcon } from 'lucide-react';
import { Button } from '../UI/button';
import * as actions from '@/actions';

export default function ContinueWithGithub() {
   return (
      <form action={actions.signIn}>
         <Button size={'lg'}>
            <span className="font-semibold tracking-wide">
               Continue With GitHub
            </span>{' '}
            <GithubIcon className="!w-6 !h-6" />
         </Button>
      </form>
   );
}
