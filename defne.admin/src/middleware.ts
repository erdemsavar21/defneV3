import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './utils/jwt';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value || '';

  if (req.nextUrl.pathname === '/auth/signin' ||
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  
  if (!token || !verifyToken(token)) {
    console.log('token not valid');
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
   '/((?!auth/signin|images/).*)', 
  ],
};