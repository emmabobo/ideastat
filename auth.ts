// auth.ts

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { auth, signOut, signIn, handlers } = NextAuth({
  providers: [GitHub({
    clientId: 'process.env.AUTH_GITHUB_CLIENT_ID' ,
    clientSecret: 'process.env.AUTH_GITHUB_CLIENT_SECRET' ,
  }),],
  secret: process.env.NEXTAUTH_SECRET,
})
