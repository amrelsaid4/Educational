import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const AUTH_ROUTES = ["/auth"];
const PROTECTED_ROUTES = ["/dashboard"];
const supportedLocales = ["en", "ar"];
export default function middleware(request: NextRequest) {
  if (
    request.headers.get("x-middleware-cache") ||
    request.nextUrl.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const response = intlMiddleware(request);
  response.headers.set("x-current-pathname", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  if (pathname === "/sitemap.xml") {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];
  const locale = supportedLocales.includes(pathLocale)
    ? pathLocale
    : request.cookies.get("NEXT_LOCALE")?.value || "en";

  const referer = request.headers.get("referer");
  if (referer && new URL(referer).pathname === pathname) {
    return response;
  }

  const currentPath = pathname.startsWith(`/${locale}`)
    ? pathname.slice(locale.length + 1)
    : pathname;

  const isAuthRoute = AUTH_ROUTES.some((route) =>
    currentPath.startsWith(route),
  );
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    currentPath.startsWith(route),
  );

  if (!isAuthRoute && !isProtectedRoute) {
    return response;
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|sitemap.xml|robots.txt|favicon.ico|.*\\..*).*)",
  ],
};
