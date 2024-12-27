'use client';
import { useSession } from 'next-auth/react';
import SignInButton from '../SignInButton';
import AuthAvatar from './AuthAvatar';

export default function NavAuth() {
   const session = useSession();

   let authContent: React.ReactNode;

   //! If session is loading, don't show anything (prevents weird behaviour)
   if (session.status === 'loading') {
      authContent = null;
   } else if (!session.data?.user || !session.data) {
      //! If there is no session (user is currently not logged in)
      authContent = <SignInButton />;
   } else if (session.data?.user) {
      //! If user is logged in
      authContent = <AuthAvatar user={session.data.user} />;
   }
   return authContent;
}
