'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CollectionHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export default function CollectionHero({
  title,
  subtitle,
  description,
  image,
  badge
}: CollectionHeroProps) {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-fomus">
          <div className="max-w-3xl text-cream">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* バッジ */}
              <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6">
                <span className="text-gold text-sm font-medium">{badge}</span>
              </div>

              {/* タイトル */}
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light mb-4 leading-none">
                {title}
              </h1>

              {/* サブタイトル */}
              <p className="text-2xl md:text-3xl text-gold font-light mb-6">
                {subtitle}
              </p>

              {/* 説明 */}
              <p className="text-lg md:text-xl text-cream/80 leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-gold text-obsidian hover:bg-cream">
                  Explore Collection
                </button>
                <button className="btn-secondary text-cream border-cream hover:bg-cream hover:text-obsidian">
                  Request Catalog
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* パララックス装飾 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/4 right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl"
      />
    </div>
  );
}