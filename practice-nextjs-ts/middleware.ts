// middleware.ts (ở root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!token) {
    const loginUrl = new URL(
      "/week3-day3-16-07-2025/practices/task-management/login",
      request.url
    );
    loginUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/week3-day3-16-07-2025/practices/task-management/dashboard/:path*",
    "!/_next/static/:path*",
    "!/_next/image/:path*",
    "!/favicon.ico",
  ],
};
