'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  UserIcon,
  TicketIcon,
  GiftIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

export default function StandardPerks() {
  const t = useTranslations('passport.standard.perks');

  const perks = [
    {
      icon: UserIcon,
      title: 'Geisha Experience Access',
      description: t('geisha'),
      value: 'Monthly opportunity',
    },
    {
      icon: TicketIcon,
      title: 'Masu-Kame Lottery',
      description: t('craft'),
      value: '3x monthly chances',
    },
    {
      icon: GiftIcon,
      title: 'Premium Gift Collection',
      description: t('gifts'),
      value: '$500 annual value',
    },
    {
      icon: StarIcon,
      title: 'Silver NFT Passport',
      description: t('nft'),
      value: 'Member verification',
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
          Standard Passport Benefits
        </motion.h2>
        <motion.p 
          variants={cardVariants}
          className="text-lg text-obsidian/70 max-w-3xl mx-auto"
        >
          Begin your journey into Japanese luxury culture with curated experiences 
          and exclusive member benefits designed for cultural enthusiasts.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {perks.map((perk, index) => (
          <motion.div
            key={perk.title}
            variants={cardVariants}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-hinoki/5"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-hinoki/20 rounded-full flex items-center justify-center flex-shrink-0">
                <perk.icon className="w-6 h-6 text-hinoki" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold text-obsidian mb-3">
                  {perk.title}
                </h3>
                <p className="text-obsidian/70 mb-4 leading-relaxed">
                  {perk.description}
                </p>
                <div className="inline-block px-3 py-1 bg-hinoki/10 text-hinoki rounded-full text-sm font-medium">
                  {perk.value}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* アップグレード案内 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-hinoki/10 to-gold/10 rounded-lg p-8">
          <h3 className="font-heading text-2xl font-semibold text-obsidian mb-4">
            Ready to Upgrade?
          </h3>
          <p className="text-obsidian/70 mb-6 max-w-2xl mx-auto">
            Standard members can upgrade to VIP at any time and receive full credit 
            for their existing membership investment. Experience the ultimate in Japanese luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Upgrade to VIP</button>
            <button className="btn-secondary">Compare Benefits</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}