import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  debug: true,
  pages: {
    signIn: "/week3-day3-16-07-2025/practices/task-management/login", //Dẫn đến trang login custom
    // error: "/auth/error", // Custom error page
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "Username",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        try {
          const res = await fetch("https://server.aptech.io/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            return null;
          }

          const data = await res.json();

          if (!data.access_token || !data.loggedInUser) {
            return null;
          }

          return {
            id: data.loggedInUser.id,
            username: data.loggedInUser.email,
            access_token: data.access_token,
            refresh_token: data.refresh_token,
          };
        } catch (err) {
          console.error("❌ Error in authorize:", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.access_token = token.access_token;
        session.user.refresh_token = token.refresh_token;
      }
      return session;
    },
  },
};

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    access_token: string;
    refresh_token: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    access_token: string;
    refresh_token: string;
  }
}
