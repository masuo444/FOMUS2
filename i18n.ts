import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// 対応言語の定義
export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  // 有効な言語かチェック、デフォルトは英語
  const validLocale = locales.includes(locale as any) ? locale : 'en';
  
  try {
    return {
      // 翻訳ファイルの動的インポート
      messages: (await import(`./messages/${validLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${validLocale}`, error);
    // フォールバックとして英語メッセージを読み込み
    return {
      messages: (await import(`./messages/en.json`)).default
    };
  }
});