'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon, 
  HeartIcon,
  ShareIcon,
  SparklesIcon,
  CubeIcon 
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

// ダミー NFT データ
const nftCollections = [
  {
    id: 'kuku-genesis',
    name: 'KUKU Genesis Collection',
    totalSupply: 1000,
    floorPrice: 0.5,
    description: 'The original KUKU characters in their digital form',
    items: [
      {
        id: 'kuku-001',
        name: 'KUKU Samurai #001',
        image: '/images/nft/kuku-samurai-001.jpg',
        rarity: 'Legendary',
        traits: ['Golden Armor', 'Dragon Sword', 'Mystic Aura'],
        price: 2.5,
      },
      {
        id: 'kuku-002', 
        name: 'KUKU Geisha #002',
        image: '/images/nft/kuku-geisha-002.jpg',
        rarity: 'Epic',
        traits: ['Sakura Kimono', 'Pearl Ornament', 'Moon Power'],
        price: 1.8,
      },
      {
        id: 'kuku-003',
        name: 'KUKU Ninja #003',
        image: '/images/nft/kuku-ninja-003.jpg',
        rarity: 'Rare',
        traits: ['Shadow Cloak', 'Star Shuriken', 'Wind Element'],
        price: 0.9,
      },
    ],
  },
  {
    id: 'kuku-artoy',
    name: 'KUKU Art Toy Series',
    totalSupply: 500,
    floorPrice: 1.2,
    description: 'Physical art toys with matching NFT companions',
    items: [
      {
        id: 'artoy-001',
        name: 'KUKU Mecha #001',
        image: '/images/nft/kuku-mecha-001.jpg',
        rarity: 'Ultra Rare',
        traits: ['Titanium Body', 'Energy Core', 'Flight Mode'],
        price: 3.2,
      },
      {
        id: 'artoy-002',
        name: 'KUKU Spirit #002',
        image: '/images/nft/kuku-spirit-002.jpg',
        rarity: 'Epic',
        traits: ['Ethereal Form', 'Light Magic', 'Ancient Wisdom'],
        price: 2.1,
      },
    ],
  },
];

export default function NftGallery() {
  const [selectedCollection, setSelectedCollection] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedNft, setSelectedNft] = useState<any>(null);

  const toggleFavorite = (nftId: string) => {
    setFavorites(prev => 
      prev.includes(nftId) 
        ? prev.filter(id => id !== nftId)
        : [...prev, nftId]
    );
  };

  const rarityColors = {
    'Legendary': 'text-yellow-400 bg-yellow-400/20',
    'Ultra Rare': 'text-purple-400 bg-purple-400/20',
    'Epic': 'text-blue-400 bg-blue-400/20',
    'Rare': 'text-green-400 bg-green-400/20',
  };

  return (
    <div className="text-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-5xl font-light text-cream mb-6">
          <span className="text-gradient-gold">KUKU</span> NFT Gallery
        </h2>
        <p className="text-xl text-cream/80 max-w-3xl mx-auto">
          Discover unique digital collectibles that bridge traditional Japanese culture 
          with cutting-edge blockchain technology. Each NFT grants exclusive access to 
          physical art toys and community benefits.
        </p>
      </motion.div>

      {/* コレクション選択タブ */}
      <div className="flex justify-center mb-12">
        <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
          {nftCollections.map((collection, index) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(index)}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                selectedCollection === index
                  ? 'bg-gold text-obsidian font-semibold'
                  : 'text-cream/70 hover:text-cream hover:bg-cream/10'
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>
      </div>

      {/* 選択されたコレクション情報 */}
      <motion.div
        key={selectedCollection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="bg-cream/5 backdrop-blur-sm border border-cream/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="font-heading text-3xl font-semibold text-cream mb-4">
            {nftCollections[selectedCollection].name}
          </h3>
          <p className="text-cream/80 mb-6">
            {nftCollections[selectedCollection].description}
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div>
              <span className="text-cream/60">Total Supply:</span>
              <span className="text-gold ml-2 font-semibold">
                {nftCollections[selectedCollection].totalSupply}
              </span>
            </div>
            <div>
              <span className="text-cream/60">Floor Price:</span>
              <span className="text-gold ml-2 font-semibold">
                {nftCollections[selectedCollection].floorPrice} ETH
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* NFTグリッド */}
      <motion.div
        key={`grid-${selectedCollection}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {nftCollections[selectedCollection].items.map((nft, index) => (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-cream/5 backdrop-blur-sm border border-cream/20 rounded-lg overflow-hidden hover:border-gold/50 transition-all duration-300 group"
          >
            {/* NFT画像 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* レアリティバッジ */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${rarityColors[nft.rarity as keyof typeof rarityColors]}`}>
                  {nft.rarity}
                </span>
              </div>

              {/* アクションボタン */}
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => toggleFavorite(nft.id)}
                  className="p-2 bg-cream/90 rounded-full hover:bg-cream transition-colors"
                >
                  {favorites.includes(nft.id) ? (
                    <HeartIconSolid className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-obsidian" />
                  )}
                </button>
                <button
                  onClick={() => setSelectedNft(nft)}
                  className="p-2 bg-cream/90 rounded-full hover:bg-cream transition-colors"
                >
                  <EyeIcon className="w-5 h-5 text-obsidian" />
                </button>
                <button className="p-2 bg-cream/90 rounded-full hover:bg-cream transition-colors">
                  <ShareIcon className="w-5 h-5 text-obsidian" />
                </button>
              </div>
            </div>

            {/* NFT情報 */}
            <div className="p-6">
              <h4 className="font-heading text-xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                {nft.name}
              </h4>
              
              {/* 特性 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {nft.traits.map((trait, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-cream/10 text-cream/80 text-xs rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              {/* 価格とCTA */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-heading font-bold text-gold">
                  {nft.price} ETH
                </div>
                <button className="btn-primary text-sm px-6 py-2 bg-gold text-obsidian hover:bg-cream">
                  Place Bid
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ホワイトリスト参加CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="bg-gradient-vip/20 backdrop-blur-sm border border-gold/30 rounded-lg p-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <SparklesIcon className="w-16 h-16 text-gold" />
          </div>
          <h3 className="font-heading text-4xl font-semibold text-cream mb-6">
            Join the KUKU Whitelist
          </h3>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            Get early access to new NFT drops, exclusive art toy releases, 
            and special community events. Limited spots available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-gold text-obsidian hover:bg-cream">
              Join Whitelist
            </button>
            <button className="btn-secondary text-cream border-cream hover:bg-cream hover:text-obsidian">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}