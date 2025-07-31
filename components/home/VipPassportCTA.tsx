'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { XMarkIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';

export default function VipPassportCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('passport');
  const locale = useLocale();

  const vipPerks = [
    t('vip.perks.geisha'),
    t('vip.perks.craft'),
    t('vip.perks.gifts'),
    t('vip.perks.nft'),
    t('vip.perks.airdrop'),
  ];

  return (
    <>
      <div className="relative py-20 text-center text-cream">
        {/* 背景装飾 */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian">
          <div className="absolute inset-0 bg-[url('/images/patterns/gold-pattern.png')] opacity-5" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-gold fill-current" />
                ))}
              </div>
            </div>

            <h2 className="font-heading text-5xl md:text-7xl font-light mb-6">
              <span className="text-gradient-gold">VIP</span>
              <span className="text-cream"> Passport</span>
            </h2>

            <p className="text-xl md:text-2xl text-cream/80 mb-4">
              {t('vip.lifetime')}
            </p>

            <div className="text-4xl md:text-6xl font-heading font-bold text-gold mb-8">
              {t('vip.price')}
            </div>

            <p className="text-lg text-cream/70 max-w-2xl mx-auto mb-12">
              Unlock exclusive access to private geisha experiences, priority craft access, 
              and future NFT drops. Limited to 100 members worldwide.
            </p>

            {/* CTA ボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary bg-gold text-obsidian hover:bg-cream flex items-center space-x-2"
              >
                <SparklesIcon className="w-5 h-5" />
                <span>Learn More</span>
              </button>
              
              <Link href={`/${locale}/passport/vip`}>
                <button className="btn-secondary text-cream border-cream hover:bg-cream hover:text-obsidian">
                  Purchase Now
                </button>
              </Link>
            </div>

            {/* 限定性の表示 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-gold text-sm"
            >
              <span className="inline-flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2 animate-pulse" />
                Only 23 VIP Passports remaining
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* VIP特典モーダル */}
      <AnimatePresence>
        {isModalOpen && (
          <Dialog
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-cream rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative p-8">
                  {/* 閉じるボタン */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-obsidian/60 hover:text-obsidian transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>

                  {/* モーダルコンテンツ */}
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-4xl font-semibold text-obsidian mb-4">
                      VIP Passport Benefits
                    </h3>
                    <p className="text-obsidian/70">
                      Exclusive privileges for the most discerning collectors
                    </p>
                  </div>

                  {/* 特典リスト */}
                  <div className="space-y-4 mb-8">
                    {vipPerks.map((perk, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 bg-gold/10 rounded-lg"
                      >
                        <StarIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-obsidian">{perk}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* アクションボタン */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/${locale}/passport/vip`} className="flex-1">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="w-full btn-primary"
                      >
                        Purchase VIP Passport
                      </button>
                    </Link>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 btn-secondary"
                    >
                      Maybe Later
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}