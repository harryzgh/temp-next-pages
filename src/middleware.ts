// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/* function pathMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
} */

/**
 * 身份认证
 * @param request
 * @returns
 */
function authMiddleware(request: NextRequest) {
  console.log('test+++++++++++++++++++11')
  if (!request.cookies.get('authToken')) {
    return NextResponse.next()
    // 登录页没写，暂时屏蔽
    // return NextResponse.redirect(new URL('/login', request.url))
  }
  return null
}
/**
 * 给请求添加通用请求头
 * @param request
 * @returns  request: NextRequest
 */
function addCustomHeaderMiddleware() {
  console.log('test+++++++++++++++++++22')
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'hello-world')
  return response
}
/**
 * 日志记录
 * @param request
 * @returns
 */
function loggerMiddleware(request: NextRequest) {
  console.log('test+++++++++++++++++++33')
  console.log(`Request: ${request.method} ${request.url}`)
  return NextResponse.next()
}

// 组合中间件
export function middleware(request: NextRequest) {
  // 按顺序执行中间件
  // const authResult = authMiddleware(request)
  // if (authResult) return authResult
  console.log('test+++++++++++++++++++00')
  authMiddleware(request)
  loggerMiddleware(request)
  // request
  return addCustomHeaderMiddleware()
}
// 配置中间件应用的路径
/* export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
} */
