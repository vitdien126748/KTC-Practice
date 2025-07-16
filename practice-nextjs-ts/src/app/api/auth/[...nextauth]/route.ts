import { authOptions } from "@/app/week3-day3-16-07-2025/practices/task-management/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
