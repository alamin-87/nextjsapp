// lib/authOptions.js
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Email/password login
    CredentialsProvider({
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

        const isValid = await bcrypt.compare(password, envHash);
        if (!isValid) return null;

        return { id: "local-user", name: "Local User", email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" }, // custom login page
  secret: process.env.NEXTAUTH_SECRET,
};
