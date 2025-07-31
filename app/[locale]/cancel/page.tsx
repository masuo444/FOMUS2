'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { XCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function CancelPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-fomus flex items-center justify-center">
      <div className="container-fomus py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* キャンセルアイコン */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <XCircleIcon className="w-24 h-24 text-orange-500 mx-auto" />
          </motion.div>

          {/* メインメッセージ */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-6xl font-light text-obsidian mb-6"
          >
            Payment Cancelled
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-obsidian/80 mb-12"
          >
            No worries! Your payment was cancelled and no charges were made. 
            You can return anytime to complete your purchase.
          </motion.p>

          {/* 理由・サポート */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-obsidian mb-6">
              Need Help?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-obsidian mb-1">Payment Issues</h3>
                  <p className="text-obsidian/70 text-sm">
                    If you experienced technical difficulties, please try again or contact our support team.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-obsidian mb-1">Questions about VIP Benefits</h3>
                  <p className="text-obsidian/70 text-sm">
                    Our concierge team is available 24/7 to explain all VIP perks and experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-obsidian mb-1">Alternative Payment Methods</h3>
                  <p className="text-obsidian/70 text-sm">
                    We accept all major credit cards, wire transfers, and cryptocurrency payments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={`/${locale}/passport/vip`}>
              <button className="btn-primary flex items-center space-x-2">
                <span>Try Again</span>
              </button>
            </a>
            <a href={`/${locale}`}>
              <button className="btn-secondary flex items-center space-x-2">
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </a>
          </motion.div>

          {/* サポート連絡先 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <p className="text-obsidian/60 text-sm mb-2">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="mailto:support@fomus-premium.com"
                className="text-gold hover:text-obsidian transition-colors"
              >
                support@fomus-premium.com
              </a>
              <span className="hidden sm:inline text-obsidian/40">•</span>
              <a 
                href="tel:+1-800-FOMUS-VIP"
                className="text-gold hover:text-obsidian transition-colors"
              >
                +1-800-FOMUS-VIP
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}