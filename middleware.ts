import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  // サポートする言語一覧
  locales,
  
  // デフォルト言語（富裕層向けなので英語）
  defaultLocale: 'en',
  
  // ロケール検出の設定
  localeDetection: true,
  
  // パス名の設定（言語プレフィックスを常に表示）
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  try {
    return intlMiddleware(request);
  } catch (error) {
    console.error('Middleware error:', error);
    // エラー時は英語にリダイレクト
    return Response.redirect(new URL('/en', request.url));
  }
}

export const config = {
  // 国際化対象のパス（静的ファイルは除外）
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};