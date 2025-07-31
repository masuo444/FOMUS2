'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CollectionCards() {
  const t = useTranslations('home.collections');
  const locale = useLocale();

  const collections = [
    {
      id: 'craft',
      title: t('craft.title'),
      subtitle: t('craft.subtitle'),
      price: t('craft.price'),
      description: t('craft.description'),
      image: '/images/collections/craft-hero.jpg',
      href: `/${locale}/craft`,
      gradient: 'from-hinoki/20 to-gold/20',
      featured: true,
    },
    {
      id: 'life',
      title: t('life.title'),
      subtitle: t('life.subtitle'),
      price: t('life.price'),
      description: t('life.description'),
      image: '/images/collections/life-hero.jpg',
      href: `/${locale}/life`,
      gradient: 'from-green-100 to-green-200',
      featured: false,
    },
    {
      id: 'entertainment',
      title: t('entertainment.title'),
      subtitle: t('entertainment.subtitle'),
      price: t('entertainment.price'),
      description: t('entertainment.description'),
      image: '/images/collections/entertainment-hero.jpg',
      href: `/${locale}/entertainment`,
      gradient: 'from-purple-100 to-blue-200',
      featured: false,
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
    <div className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={cardVariants}
          className="heading-section text-center"
        >
          Our Collections
        </motion.h2>
        <motion.p 
          variants={cardVariants}
          className="text-lg text-obsidian/70 max-w-2xl mx-auto"
        >
          Three distinct worlds of Japanese craftsmanship, each offering 
          a unique journey into luxury and tradition.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            variants={cardVariants}
            className={`relative group ${
              collection.featured ? 'lg:col-span-1 lg:row-span-2' : ''
            }`}
          >
            <Link href={collection.href}>
              <div className="relative overflow-hidden rounded-none bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                {/* 画像 */}
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* グラデーションオーバーレイ */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} opacity-60`} />
                  
                  {/* 価格バッジ */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-obsidian/80 text-cream px-3 py-1 text-sm font-medium rounded-full">
                      {collection.price}
                    </span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="font-heading text-2xl font-semibold text-obsidian mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-gold font-medium text-sm tracking-wide uppercase">
                      {collection.subtitle}
                    </p>
                  </div>

                  <p className="text-obsidian/70 mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-obsidian font-medium group-hover:text-gold transition-colors">
                      Explore Collection
                    </span>
                    <ArrowRightIcon className="w-5 h-5 text-obsidian group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* ホバー時の装飾 */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-colors duration-300 pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* 全コレクション表示リンク */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link
          href={`/${locale}/collections`}
          className="inline-flex items-center text-obsidian hover:text-gold transition-colors font-medium"
        >
          View All Collections
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </div>
  );
}