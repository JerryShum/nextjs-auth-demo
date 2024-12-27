import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

console.log(GITHUB_CLIENT_ID);

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [
      GitHub({
         clientId: GITHUB_CLIENT_ID,
         clientSecret: GITHUB_CLIENT_SECRET,
      }),
   ],
});
