import { NextRequest, NextResponse } from "next/server";
import getCurrentUserInfo from "./server/getCurrentUserInfo";

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  // Skip static files
  if (pathName.includes(".")) {
    return NextResponse.next();
  }

  // Public routes
  if (pathName === "/login" || pathName === "/register") {
    return NextResponse.next();
  }

  const session = await getCurrentUserInfo();

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathName === "/claimusername") {
    if (session.user.userName) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (!session.user.userName) {
    return NextResponse.redirect(new URL("/claimusername", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:userprofile", "/claimusername"],
};
