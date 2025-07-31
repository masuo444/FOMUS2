'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  SparklesIcon,
  EnvelopeIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const t = useTranslations();
  const locale = useLocale();
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Stripe セッション情報取得
      fetch(`/api/stripe/session/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Session fetch error:', error);
          setLoading(false);
        });
    } else {
      // sessionId がない場合は即座にローディング終了
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-obsidian">Processing your order...</p>
        </div>
      </div>
    );
  }

  const isVipPurchase = sessionData?.metadata?.priceId?.includes('vip');
  const isPassportPurchase = sessionData?.metadata?.priceId?.includes('passport');

  return (
    <div className="min-h-screen bg-gradient-fomus">
      <div className="container-fomus py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* 成功アイコン */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
          </motion.div>

          {/* メインメッセージ */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl font-light text-obsidian mb-6"
          >
            {isVipPurchase ? (
              <>
                <span className="text-gradient-gold">Welcome</span>
                <span className="block">VIP Member!</span>
              </>
            ) : (
              'Payment Successful!'
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-obsidian/80 mb-12 max-w-2xl mx-auto"
          >
            {isPassportPurchase
              ? 'Your FOMUS Premium passport has been successfully purchased. Your exclusive benefits are now active!'
              : 'Thank you for your purchase. Your order has been confirmed and is being processed.'
            }
          </motion.p>

          {/* 購入詳細 */}
          {sessionData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-12 max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-2xl font-semibold text-obsidian mb-6">
                Order Details
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex justify-between">
                  <span className="text-obsidian/70">Order ID:</span>
                  <span className="font-mono text-sm text-obsidian">{sessionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-obsidian/70">Amount:</span>
                  <span className="font-semibold text-obsidian">
                    {sessionData.amount_total && sessionData.currency ? 
                      `${(sessionData.amount_total / 100).toLocaleString()} ${sessionData.currency.toUpperCase()}`
                      : 'Processing...'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-obsidian/70">Email:</span>
                  <span className="text-obsidian">{sessionData.customer_details?.email || 'Processing...'}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIP特典案内 */}
          {isVipPurchase && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-vip/20 backdrop-blur-sm border border-gold/30 rounded-lg p-8 mb-12"
            >
              <h3 className="font-heading text-3xl font-semibold text-obsidian mb-6 flex items-center justify-center">
                <SparklesIcon className="w-8 h-8 text-gold mr-3" />
                Your VIP Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CalendarIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Private Geisha Experience</h4>
                    <p className="text-obsidian/70 text-sm">4 guests, 60-day advance booking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SparklesIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Masu-Kame Priority Access</h4>
                    <p className="text-obsidian/70 text-sm">2 pieces per month guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <EnvelopeIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Premium Gift Collection</h4>
                    <p className="text-obsidian/70 text-sm">10 Hinoki items per year</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SparklesIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Gold NFT Passport</h4>
                    <p className="text-obsidian/70 text-sm">Exclusive digital collectible</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 次のステップ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-obsidian mb-4">
              What's Next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <EnvelopeIcon className="w-12 h-12 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-obsidian mb-2">Check Your Email</h4>
                <p className="text-obsidian/70 text-sm">Welcome guide and NFT details sent</p>
              </div>
              <div className="text-center">
                <SparklesIcon className="w-12 h-12 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-obsidian mb-2">Access Dashboard</h4>
                <p className="text-obsidian/70 text-sm">Manage your benefits and bookings</p>
              </div>
              <div className="text-center">
                <CalendarIcon className="w-12 h-12 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-obsidian mb-2">Book Experience</h4>
                <p className="text-obsidian/70 text-sm">Schedule your first VIP event</p>
              </div>
            </div>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <a href={`/${locale}/dashboard`}>
              <button className="btn-primary">
                Access Dashboard
              </button>
            </a>
            <a href={`/${locale}`}>
              <button className="btn-secondary">
                Continue Shopping
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}