'use client';
import * as actions from '@/actions';
import { useSession } from 'next-auth/react';

export default function NavAuth() {
   const session = useSession();
   console.log(session);

   return <div>NavAuth</div>;
}
