import { NextRequest, NextResponse } from "next/server";
import { api } from "./global/values";
// import { url } from './global/values'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')
  console.log(currentUser);
  if(!currentUser) {

    return NextResponse.redirect(new URL('/', request.url))
  }
  // return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}