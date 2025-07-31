import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';

export default createMiddleware({
  // サポートする言語一覧
  locales,
  
  // デフォルト言語（富裕層向けなので英語）
  defaultLocale: 'en',
  
  // ロケール検出の設定
  localeDetection: true,
  
  // パス名の設定（言語プレフィックスを常に表示）
  localePrefix: 'always'
});

export const config = {
  // 国際化対象のパス（静的ファイルは除外）
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};