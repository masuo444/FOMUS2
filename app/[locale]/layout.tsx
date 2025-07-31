import '../globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CurrencyProvider } from '@/hooks/useCurrency';

export const metadata: Metadata = {
  title: 'FOMUS Premium - Artisan Hinoki Craft × VIP Experience',
  description: 'Exclusive Japanese craftsmanship for discerning collectors worldwide',
  keywords: 'hinoki, japanese craft, luxury, vip, nft, premium',
  authors: [{ name: 'FOMUS Premium' }],
  openGraph: {
    title: 'FOMUS Premium',
    description: 'Artisan Hinoki Craft × VIP Experience × KUKU IP',
    url: 'https://fomus-premium.vercel.app',
    siteName: 'FOMUS Premium',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FOMUS Premium',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOMUS Premium',
    description: 'Artisan Hinoki Craft × VIP Experience × KUKU IP',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  // ロケールの検証
  if (!locales.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // フォールバックとして英語メッセージを使用
    try {
      messages = (await import(`@/messages/en.json`)).default;
    } catch (fallbackError) {
      console.error('Failed to load fallback messages', fallbackError);
      // 最小限のメッセージで処理を継続
      messages = { common: { loading: "Loading...", error: "Error" } };
    }
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="font-body bg-cream text-obsidian">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CurrencyProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}