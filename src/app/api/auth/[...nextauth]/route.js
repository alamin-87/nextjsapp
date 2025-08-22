import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        const envEmail = process.env.CREDENTIALS_EMAIL;
        const envHash = process.env.CREDENTIALS_PASSWORD_HASH;

        if (!envEmail || !envHash) return null;
        if (email !== envEmail) return null;

        const ok = await bcrypt.compare(password, envHash);
        if (!ok) return null;

        return { id: "local-user", name: "Local User", email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
export default handler;
