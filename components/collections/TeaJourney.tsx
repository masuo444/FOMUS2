'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeaJourney() {
  const journeySteps = [
    {
      title: 'Garden Selection',
      description: 'Premium tea gardens with 400+ year heritage',
      image: '/images/tea/tea-garden.jpg',
    },
    {
      title: 'Master Curation',
      description: 'Hand-selected by tea ceremony masters',
      image: '/images/tea/tea-master.jpg',
    },
    {
      title: 'Artisan Processing',
      description: 'Traditional stone-grinding for matcha',
      image: '/images/tea/tea-processing.jpg',
    },
    {
      title: 'Global Delivery',
      description: 'Freshly packed and shipped worldwide',
      image: '/images/tea/tea-packaging.jpg',
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
        <h2 className="heading-section">The Tea Journey</h2>
        <p className="text-lg text-obsidian/70 max-w-3xl mx-auto">
          From ancient tea gardens to your doorstep, experience the complete journey 
          of premium Japanese tea culture through our carefully curated subscriptions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {journeySteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-obsidian font-bold text-sm">{index + 1}</span>
              </div>
            </div>
            <h3 className="font-heading text-xl font-semibold text-obsidian mb-2">
              {step.title}
            </h3>
            <p className="text-obsidian/70 text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}