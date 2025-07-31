'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SparklesIcon, CubeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function KukuIpShowcase() {
  const kukuFeatures = [
    {
      icon: SparklesIcon,
      title: 'Digital Collectibles',
      description: 'Unique NFT characters with rare traits and utilities',
      stats: '1,000 Genesis • 500 Art Toys',
    },
    {
      icon: CubeIcon,
      title: 'Physical Art Toys',
      description: 'Limited edition figures matching your NFT collection',
      stats: 'Worldwide Shipping • Numbered Edition',
    },
    {
      icon: GlobeAltIcon,
      title: 'Metaverse Ready',
      description: 'Compatible with major virtual worlds and games',
      stats: 'Decentraland • The Sandbox • VRChat',
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
        <h2 className="heading-section">
          <span className="text-gradient-gold">KUKU</span> IP Universe
        </h2>
        <p className="text-lg text-obsidian/70 max-w-3xl mx-auto">
          Enter a world where traditional Japanese aesthetics meet cutting-edge blockchain technology. 
          Each KUKU character represents a bridge between ancient culture and digital innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {kukuFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-gradient-vip/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <feature.icon className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-obsidian mb-4">
              {feature.title}
            </h3>
            <p className="text-obsidian/70 mb-4">
              {feature.description}
            </p>
            <div className="text-sm text-gold font-medium">
              {feature.stats}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Character Gallery Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="font-heading text-3xl font-semibold text-obsidian mb-8">
          Character Archetypes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Samurai', 'Geisha', 'Ninja', 'Spirit'].map((character, index) => (
            <motion.div
              key={character}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={`/images/kuku/${character.toLowerCase()}.jpg`}
                alt={`KUKU ${character}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-cream">
                  <div className="font-semibold">{character}</div>
                  <div className="text-xs opacity-80">Limited Edition</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}