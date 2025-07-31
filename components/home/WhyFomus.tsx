'use client';

import { motion } from 'framer-motion';
import { 
  HandRaisedIcon, 
  SparklesIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

export default function WhyFomus() {
  const features = [
    {
      icon: HandRaisedIcon,
      title: 'Artisan Craftsmanship',
      description: 'Every piece is hand-carved by master craftsmen with over 30 years of experience in traditional Japanese woodworking.',
    },
    {
      icon: SparklesIcon,
      title: 'Exclusive Access',
      description: 'Limited productions and VIP experiences available only to FOMUS Premium members worldwide.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Heritage',
      description: 'Bringing authentic Japanese cultural experiences to discerning collectors across the Middle East and beyond.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Authenticity Guaranteed',
      description: 'Each piece comes with blockchain verification and master craftsman certification for complete authenticity.',
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

  const itemVariants = {
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
          variants={itemVariants}
          className="heading-section"
        >
          Why FOMUS Premium?
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-obsidian/70 max-w-3xl mx-auto"
        >
          We bridge the gap between traditional Japanese craftsmanship and modern luxury collecting, 
          creating experiences that transcend cultural boundaries.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="text-center group"
          >
            <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
              {/* アイコン背景 */}
              <div className="absolute inset-0 bg-gradient-vip rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 bg-gold/10 rounded-full scale-150 group-hover:scale-175 transition-transform duration-500" />
              
              {/* アイコン */}
              <feature.icon className="w-8 h-8 text-gold relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <h3 className="font-heading text-xl font-semibold text-obsidian mb-4 group-hover:text-gold transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-obsidian/70 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 統計情報 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div className="p-6">
          <div className="text-4xl font-heading font-bold text-gold mb-2">500+</div>
          <div className="text-obsidian/70">Pieces Crafted</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-heading font-bold text-gold mb-2">50+</div>
          <div className="text-obsidian/70">Countries Served</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-heading font-bold text-gold mb-2">98%</div>
          <div className="text-obsidian/70">Customer Satisfaction</div>
        </div>
      </motion.div>
    </div>
  );
}