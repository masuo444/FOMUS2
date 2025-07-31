'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('navigation');
  const locale = useLocale();

  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: t('craft'), href: `/${locale}/craft` },
        { name: t('life'), href: `/${locale}/life` },
        { name: t('entertainment'), href: `/${locale}/entertainment` },
      ]
    },
    {
      title: 'Passport',
      links: [
        { name: 'VIP Passport', href: `/${locale}/passport/vip` },
        { name: 'Standard Passport', href: `/${locale}/passport/standard` },
        { name: t('dashboard'), href: `/${locale}/dashboard` },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: t('about'), href: `/${locale}/about` },
        { name: t('journal'), href: `/${locale}/journal` },
        { name: t('contact'), href: `/${locale}/contact` },
      ]
    },
  ];

  return (
    <footer className="bg-obsidian text-cream">
      <div className="container-fomus py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-vip rounded-full flex items-center justify-center">
                <span className="text-obsidian font-heading font-bold">F</span>
              </div>
              <span className="font-heading text-xl font-semibold">FOMUS</span>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              {locale === 'ar' 
                ? 'حرفية يابانية حصرية لهواة الجمع المميزين حول العالم'
                : 'Exclusive Japanese craftsmanship for discerning collectors worldwide'
              }
            </p>
            
            {/* ソーシャルリンク */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.564-3.239-1.469-.396-.452-.693-.99-.858-1.578-.165-.589-.189-1.205-.070-1.797.238-1.186 1.021-2.188 2.138-2.744.559-.278 1.195-.424 1.848-.424.653 0 1.289.146 1.848.424 1.117.556 1.9 1.558 2.138 2.744.119.592.095 1.208-.07 1.797-.165.588-.462 1.126-.858 1.578-.791.905-1.942 1.469-3.239 1.469z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* フッターリンク */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-lg font-semibold mb-4 text-gold">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream/80 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 下部コピーライト */}
        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © 2024 FOMUS Premium. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href={`/${locale}/privacy`} 
                className="text-cream/60 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href={`/${locale}/terms`} 
                className="text-cream/60 hover:text-gold transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}