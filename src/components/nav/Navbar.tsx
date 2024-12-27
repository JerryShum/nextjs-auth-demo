import Link from 'next/link';
import SignInButton from '../SignInButton';
import { Button } from '../UI/button';

export default function Navbar() {
   return (
      <nav className="w-full py-6 border-b border-b-muted-foreground">
         <div className="flex justify-between items-center">
            <Link href={'/'}>
               <h1 className="font-semibold text-2xl tracking-tight">
                  Next.js Auth Demo
               </h1>
            </Link>

            <div className="flex gap-2  items-center">
               <Link href={'/'}>
                  <Button variant={'link'} size={'default'}>
                     <span className="text-md">Home</span>
                  </Button>
               </Link>
               <Link href={'/'}>
                  <Button variant={'link'} size={'default'}>
                     <span className="text-md">Home</span>
                  </Button>
               </Link>
               <Link href={'/'}>
                  <Button variant={'link'} size={'default'}>
                     <span className="text-md">Home</span>
                  </Button>
               </Link>

               <SignInButton />
            </div>
         </div>
      </nav>
   );
}
