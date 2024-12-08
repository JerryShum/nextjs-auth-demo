import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions = {
   providers: [
      Credentials({
         name: "Credentials",
         credentials: {
            username: {
               label: "Username",
               type: "text",
               placeholder: "jsmith",
            },
            password: { label: "Password", type: "password" },
         },

         async authorize(credentials) {
            const {
               csrfToken,
               username: inputUsername,
               password: inputPassword,
            } = credentials;
            const users = [
               {
                  id: 1,
                  username: "test1",
                  password: "pass",
                  email: "jsmith@example.com",
               },
               {
                  id: 2,
                  username: "adoe",
                  password: "password123",
                  email: "adoe@example.com",
               },
            ];

            const user = users.find(
               (user) =>
                  user.username === inputUsername &&
                  user.password === inputPassword
            );

            if (user) {
               return { id: user.id, name: user.username, email: user.email };
            } else {
               return null;
            }
         },
      }),
   ],
   basePath: BASE_PATH,
   secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
