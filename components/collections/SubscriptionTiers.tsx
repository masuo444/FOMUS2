'use client';

import { motion } from 'framer-motion';
import { useCurrency } from '@/hooks/useCurrency';
import { formatCurrency } from '@/lib/currency';
import { 
  CheckIcon, 
  SparklesIcon,
  GiftIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline';

export default function SubscriptionTiers() {
  const { currency } = useCurrency();

  const tiers = [
    {
      id: 'matcha-discovery',
      name: 'Matcha Discovery',
      price: 3000,
      period: 'month',
      description: 'Perfect introduction to premium Japanese matcha',
      features: [
        '2 premium matcha samples (20g each)',
        'Monthly tasting notes & brewing guide',
        'Access to tea ceremony video tutorials',
        'Digital tea journal template',
      ],
      popular: false,
      color: 'from-green-100 to-green-200',
      buttonStyle: 'btn-secondary',
    },
    {
      id: 'sencha-connoisseur',
      name: 'Sencha Connoisseur',
      price: 5000,
      period: 'month',
      description: 'Curated selection for the discerning tea lover',
      features: [
        '3 rare sencha varieties (30g each)',
        '1 seasonal limited edition tea',
        'Handcrafted ceramic tea cup (quarterly)',
        'Live virtual tea ceremonies (monthly)',
        'Priority access to rare collections',
      ],
      popular: true,
      color: 'from-gold/20 to-gold/40',
      buttonStyle: 'btn-primary',
    },
    {
      id: 'tea-master',
      name: 'Tea Master',
      price: 12000,
      period: 'month',
      description: 'Ultimate experience for true tea enthusiasts',
      features: [
        '5 exclusive tea varieties (50g each)',
        'Monthly artisan tea tools & accessories',
        'Personal tea consultant sessions',
        'Annual tea garden visit to Japan',
        'Custom tea ceremony set (annual)',
        'VIP access to tea auctions',
      ],
      popular: false,
      color: 'from-obsidian/10 to-obsidian/20',
      buttonStyle: 'btn-secondary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={cardVariants}
          className="heading-section"
        >
          Tea Subscription Tiers
        </motion.h2>
        <motion.p 
          variants={cardVariants}
          className="text-lg text-obsidian/70 max-w-3xl mx-auto"
        >
          Choose your perfect tea journey. Each subscription brings you closer to 
          the centuries-old tradition of Japanese tea culture, delivered monthly to your door.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.id}
            variants={cardVariants}
            className={`relative bg-gradient-to-br ${tier.color} rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ${
              tier.popular ? 'scale-105 border-2 border-gold' : ''
            }`}
          >
            {/* 人気バッジ */}
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gold text-obsidian px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            <div className="p-8">
              {/* プラン名と価格 */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-semibold text-obsidian mb-2">
                  {tier.name}
                </h3>
                <p className="text-obsidian/70 text-sm mb-4">
                  {tier.description}
                </p>
                <div className="text-4xl font-heading font-bold text-obsidian mb-2">
                  {formatCurrency(tier.price, currency)}
                  <span className="text-lg font-normal text-obsidian/70">
                    /{tier.period}
                  </span>
                </div>
              </div>

              {/* 特典リスト */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-obsidian text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAボタン */}
              <button className={`w-full ${tier.buttonStyle}`}>
                {tier.popular ? 'Start Premium Journey' : 'Select Plan'}
              </button>

              {/* 補足情報 */}
              <div className="mt-4 text-center">
                <p className="text-xs text-obsidian/60">
                  Cancel anytime • Free shipping worldwide
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ギフト用オプション */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-hinoki/10 rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <GiftIcon className="w-12 h-12 text-gold" />
          </div>
          <h3 className="font-heading text-2xl font-semibold text-obsidian mb-4">
            Gift Subscriptions Available
          </h3>
          <p className="text-obsidian/70 mb-6 max-w-2xl mx-auto">
            Share the gift of authentic Japanese tea culture. Perfect for special occasions, 
            corporate gifts, or introducing someone to the art of tea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Purchase Gift Subscription
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}