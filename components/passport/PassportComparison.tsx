'use client';

import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import StripeCheckoutButton from './StripeCheckoutButton';

interface PassportComparisonProps {
  highlightVip?: boolean;
}

export default function PassportComparison({ highlightVip = false }: PassportComparisonProps) {
  const features = [
    {
      category: 'Geisha Experiences',
      vip: '4 guests • 60-day notice • Date flexibility',
      standard: '1 guest • Fixed dates • +$1,000 fee',
      vipValue: true,
      standardValue: true,
    },
    {
      category: 'Masu-Kame Access',
      vip: 'Priority allocation • 2 pieces/month',
      standard: 'Lottery system • 3 chances/month',
      vipValue: true,
      standardValue: true,
    },
    {
      category: 'Premium Gifts',
      vip: 'Hinoki collection • 10 items/year',
      standard: 'Curated selection • 5 items/year',
      vipValue: true,
      standardValue: true,
    },
    {
      category: 'NFT Passport',
      vip: 'Gold background • Lifetime',
      standard: 'Silver background • Annual',
      vipValue: true,
      standardValue: true,
    },
    {
      category: 'Future NFT Drops',
      vip: 'Guaranteed airdrops • Founder tier',
      standard: 'No guaranteed access',
      vipValue: true,
      standardValue: false,
    },
    {
      category: 'Concierge Service',
      vip: '24/7 dedicated support',
      standard: 'Business hours only',
      vipValue: true,
      standardValue: true,
    },
    {
      category: 'Community Access',
      vip: 'Private VIP events • Exclusive chat',
      standard: 'Standard community • Public events',
      vipValue: true,
      standardValue: true,
    },
    {
      category: 'Membership Duration',
      vip: 'Lifetime access',
      standard: 'Annual renewal required',
      vipValue: true,
      standardValue: false,
    },
  ];

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="heading-section">Choose Your Passport</h2>
        <p className="text-lg text-obsidian/70 max-w-3xl mx-auto">
          Compare our membership tiers and find the perfect gateway to Japanese luxury culture.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <div className="min-w-full">
          {/* ヘッダー */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div></div>
            <div className={`text-center p-6 rounded-t-lg ${
              highlightVip ? 'bg-gradient-vip' : 'bg-hinoki/10'
            }`}>
              <div className="text-3xl font-heading font-bold text-obsidian mb-2">
                VIP Passport
              </div>
              <div className="text-4xl font-heading font-bold text-obsidian mb-2">
                $10,000
              </div>
              <div className="text-obsidian/70">Lifetime Access</div>
              {highlightVip && (
                <div className="mt-4">
                  <span className="bg-obsidian text-gold px-3 py-1 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </span>
                </div>
              )}
            </div>
            <div className={`text-center p-6 rounded-t-lg ${
              !highlightVip ? 'bg-gradient-vip' : 'bg-hinoki/10'
            }`}>
              <div className="text-3xl font-heading font-bold text-obsidian mb-2">
                Standard Passport
              </div>
              <div className="text-2xl font-heading font-bold text-obsidian mb-1">
                $1,200 + $500/year
              </div>
              <div className="text-obsidian/70">Annual Renewal</div>
              {!highlightVip && (
                <div className="mt-4">
                  <span className="bg-obsidian text-gold px-3 py-1 rounded-full text-sm font-bold">
                    BEST VALUE
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 機能比較 */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-8 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="font-semibold text-obsidian">
                  {feature.category}
                </div>
                <div className="flex items-center space-x-3">
                  {feature.vipValue ? (
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <span className="text-obsidian/80 text-sm">{feature.vip}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {feature.standardValue ? (
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <span className="text-obsidian/80 text-sm">{feature.standard}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 mt-8"
          >
            <div></div>
            <div className="text-center">
              <StripeCheckoutButton
                priceId="price_vip_passport_usd_10000"
                className="w-full btn-primary mb-4"
              >
                Get VIP Passport
              </StripeCheckoutButton>
              <p className="text-xs text-obsidian/60">
                One-time payment • Lifetime benefits
              </p>
            </div>
            <div className="text-center">
              <StripeCheckoutButton
                priceId="price_standard_passport_usd_1200"
                className="w-full btn-secondary mb-4"
              >
                Get Standard Passport
              </StripeCheckoutButton>
              <p className="text-xs text-obsidian/60">
                Annual renewal • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}