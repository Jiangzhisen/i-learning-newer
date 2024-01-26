import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { User } from "@/lib/definitions";
import { authConfig } from "./auth.config";
import { getUser } from "./actions/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials.email && credentials.password) {
          // Add you backend code here
          const email = credentials.email as string;
          const result = await getUser({ email: email });
          if (!result) return null;
          const password = credentials.password as string;
          const passwordMatch = await bcrypt.compare(password, result.password);
          if (!passwordMatch) return null;

          const user = {
            id: result.uuid ?? "",
            name: result.name ?? "",
            email: result.email ?? "",
          } as User;
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user as User;
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
