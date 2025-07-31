'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCurrency } from '@/hooks/useCurrency';
import { formatCurrency } from '@/lib/currency';
import { 
  ShoppingBagIcon, 
  HeartIcon, 
  EyeIcon,
  UserIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  availability: string;
  craftsman: string;
  craftsmanYears: number;
}

interface ProductGridProps {
  products: Product[];
  collection: string;
}

export default function ProductGrid({ products, collection }: ProductGridProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { currency } = useCurrency();

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

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
          Featured Pieces
        </motion.h2>
        <motion.p 
          variants={cardVariants}
          className="text-lg text-obsidian/70 max-w-2xl mx-auto"
        >
          Each piece represents the pinnacle of Japanese craftsmanship, 
          created by master artisans with decades of experience.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* 商品画像 */}
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* アクションボタン */}
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 bg-cream/90 rounded-full hover:bg-cream transition-colors"
                >
                  {favorites.includes(product.id) ? (
                    <HeartIconSolid className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-obsidian" />
                  )}
                </button>
                <button className="p-2 bg-cream/90 rounded-full hover:bg-cream transition-colors">
                  <EyeIcon className="w-5 h-5 text-obsidian" />
                </button>
              </div>

              {/* 在庫状況バッジ */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-obsidian/80 text-cream px-3 py-1 text-sm rounded-full">
                  {product.availability}
                </span>
              </div>
            </div>

            {/* 商品情報 */}
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-obsidian mb-2 group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              
              <p className="text-obsidian/70 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* 職人情報 */}
              <div className="flex items-center text-xs text-obsidian/60 mb-4">
                <UserIcon className="w-4 h-4 mr-1" />
                <span className="mr-3">{product.craftsman}</span>
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>{product.craftsmanYears} years</span>
              </div>

              {/* 価格とCTA */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-heading font-bold text-obsidian">
                  {formatCurrency(product.price, currency)}
                </div>
                <button className="btn-primary text-sm px-6 py-2 flex items-center space-x-2">
                  <ShoppingBagIcon className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* もっと見るボタン */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button className="btn-secondary">
          View All {collection} Collection
        </button>
      </motion.div>
    </div>
  );
}