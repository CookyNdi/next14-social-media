import crypto from 'crypto';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from '@/lib/db';
import authConfig from '@/auth.config';
import { getUserById, getUserByUsername } from '@/lib/data/user';
import { UserRole } from '@prisma/client';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      const aditionalId = crypto.randomInt(10_000, 100_000).toString();
      let username = `@Andromeda_${aditionalId}`;
      if (user.name) {
        const rawUsername = user.name.replaceAll(' ', '_');
        const existingUsername = await getUserByUsername(`@${rawUsername}`);
        if (existingUsername) {
          username = `@${rawUsername}${aditionalId}`;
        } else {
          username = `@${rawUsername}`;
        }

        await db.user.update({
          where: { id: user.id },
          data: { username, emailVerified: new Date() },
        });
      } else {
        await db.user.update({
          where: { id: user.id },
          data: { username, emailVerified: new Date() },
        });
      }
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.username = token.username as string;
      }
      console.log({ token });
      console.log({ session });
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.username = existingUser.username;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
