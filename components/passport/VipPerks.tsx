'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  StarIcon,
  CalendarIcon,
  GiftIcon,
  SparklesIcon,
  CubeIcon 
} from '@heroicons/react/24/outline';

export default function VipPerks() {
  const t = useTranslations('passport.vip.perks');

  const perks = [
    {
      icon: CalendarIcon,
      title: 'Private Geisha Experience',
      description: t('geisha'),
      value: '$5,000 value',
      highlight: true,
    },
    {
      icon: CubeIcon,
      title: 'Masu-Kame Priority Access',
      description: t('craft'),
      value: 'Guaranteed allocation',
      highlight: false,
    },
    {
      icon: GiftIcon,
      title: 'Hinoki Bath Collection',
      description: t('gifts'),
      value: '$1,200 annual value',
      highlight: false,
    },
    {
      icon: StarIcon,
      title: 'Gold NFT Passport',
      description: t('nft'),
      value: 'Exclusive membership',
      highlight: false,
    },
    {
      icon: SparklesIcon,
      title: 'Future NFT Airdrops',
      description: t('airdrop'),
      value: 'Founder benefits',
      highlight: true,
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
          VIP Passport Benefits
        </motion.h2>
        <motion.p 
          variants={cardVariants}
          className="text-lg text-obsidian/70 max-w-3xl mx-auto"
        >
          Experience the pinnacle of Japanese luxury with exclusive access, 
          priority services, and lifetime benefits worth over $25,000.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {perks.map((perk, index) => (
          <motion.div
            key={perk.title}
            variants={cardVariants}
            className={`relative p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ${
              perk.highlight 
                ? 'bg-gradient-vip text-obsidian border-2 border-gold' 
                : 'bg-white text-obsidian hover:bg-gold/5'
            }`}
          >
            {perk.highlight && (
              <div className="absolute -top-3 right-4">
                <span className="bg-obsidian text-gold px-3 py-1 rounded-full text-xs font-bold">
                  PREMIUM
                </span>
              </div>
            )}

            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                perk.highlight ? 'bg-obsidian/20' : 'bg-gold/20'
              }`}>
                <perk.icon className={`w-6 h-6 ${
                  perk.highlight ? 'text-obsidian' : 'text-gold'
                }`} />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {perk.title}
                </h3>
                <p className={`mb-4 leading-relaxed ${
                  perk.highlight ? 'text-obsidian/80' : 'text-obsidian/70'
                }`}>
                  {perk.description}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  perk.highlight 
                    ? 'bg-obsidian/10 text-obsidian' 
                    : 'bg-gold/10 text-gold'
                }`}>
                  {perk.value}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 総価値表示 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-obsidian/5 rounded-lg p-8">
          <h3 className="font-heading text-2xl font-semibold text-obsidian mb-4">
            Total Annual Value
          </h3>
          <div className="text-5xl font-heading font-bold text-gold mb-4">
            $25,000+
          </div>
          <p className="text-obsidian/70">
            Your VIP Passport investment pays for itself within the first year 
            through exclusive experiences and priority access benefits.
          </p>
        </div>
      </motion.div>
    </div>
  );
}