'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import CurrencySwitcher from '@/components/ui/CurrencySwitcher';

export default function Navbar() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('craft'), href: `/${locale}/craft` },
    { name: t('life'), href: `/${locale}/life` },
    { name: t('entertainment'), href: `/${locale}/entertainment` },
    { name: t('passport'), href: `/${locale}/passport/vip` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('journal'), href: `/${locale}/journal` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <nav className="bg-cream/95 backdrop-blur-sm border-b border-hinoki fixed w-full z-50">
      <div className="container-fomus">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-vip rounded-full flex items-center justify-center">
              <span className="text-obsidian font-heading font-bold text-xl">F</span>
            </div>
            <span className="font-heading text-2xl font-semibold text-obsidian">
              FOMUS
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-obsidian hover:text-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 右側のコントロール */}
          <div className="flex items-center space-x-4">
            {/* 言語・通貨切替 */}
            <div className="hidden md:flex items-center space-x-2">
              <LocaleSwitcher />
              <CurrencySwitcher />
            </div>

            {/* ダッシュボードリンク */}
            <Link
              href={`/${locale}/dashboard`}
              className="hidden md:block btn-secondary text-sm px-4 py-2"
            >
              {t('dashboard')}
            </Link>

            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-obsidian hover:text-gold transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-hinoki"
          >
            <div className="container-fomus py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-obsidian hover:text-gold transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* モバイル用コントロール */}
                <div className="flex items-center justify-between pt-4 border-t border-hinoki">
                  <div className="flex items-center space-x-2">
                    <LocaleSwitcher />
                    <CurrencySwitcher />
                  </div>
                  <Link
                    href={`/${locale}/dashboard`}
                    className="btn-secondary text-sm px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('dashboard')}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}