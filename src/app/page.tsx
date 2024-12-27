import { auth } from '@/auth';
import SignInButton from '@/components/SignInButton';

export default async function Home() {
   const session = await auth();

   console.log(session?.user);

   return (
      <div className="h-full w-full flex flex-col items-center gap-10">
         <h1 className="font-sans text-7xl font-bold mt-40 text-center">
            Welcome to my{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-tight">
               Auth.js
            </span>{' '}
            Demo Application!
         </h1>

         {/*//! If user is NOT signed in */}
         {!session?.user ? (
            <div className="mt-20 flex flex-col gap-6 items-center">
               <h2 className="text-2xl ">
                  Get started by{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-widest">
                     signing in
                  </span>
                  !
               </h2>
               <SignInButton />
            </div>
         ) : (
            <div className="mt-20 flex flex-col items-center gap-6">
               <h2 className="text-2xl">
                  {' '}
                  Thanks for signing in,{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent tracking-widest">
                     {session?.user?.name?.split(' ')[0]}
                  </span>
                  !
               </h2>
            </div>
         )}
      </div>
   );
}
