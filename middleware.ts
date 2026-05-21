import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.rinetcenter.com';
const REDIRECT_HOSTS = new Set(['www.rinetcenter.ca', 'www.rinet.center']);

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();

  if (!host || !REDIRECT_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = 'https';
  url.host = CANONICAL_HOST;

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: '/:path*',
};
