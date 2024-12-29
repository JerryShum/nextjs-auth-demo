import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: PrismaAdapter(prisma),
   providers: [
      GitHub({
         clientId: GITHUB_CLIENT_ID,
         clientSecret: GITHUB_CLIENT_SECRET,
      }),
   ],
});
