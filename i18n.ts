import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// 対応言語の定義
export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  // 有効な言語かチェック
  if (!locales.includes(locale as any)) notFound();

  return {
    // 翻訳ファイルの動的インポート
    messages: (await import(`./messages/${locale}.json`)).default
  };
});