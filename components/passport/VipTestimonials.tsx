'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

export default function VipTestimonials() {
  const testimonials = [
    {
      name: 'Sarah Al-Maktoum',
      title: 'Art Collector & Philanthropist',
      location: 'Dubai, UAE',
      avatar: '/images/testimonials/sarah-vip.jpg',
      quote: 'The VIP geisha evening was absolutely transcendent. FOMUS has created something truly magical that bridges cultures in the most elegant way possible.',
      rating: 5,
      experience: 'VIP Member since 2023',
    },
    {
      name: 'Mohammed bin Rashid',
      title: 'Luxury Connoisseur',
      location: 'Abu Dhabi, UAE',
      avatar: '/images/testimonials/mohammed-vip.jpg',
      quote: 'Every Masu-Kame piece in my collection tells a story. The craftsmanship is unparalleled, and the VIP access ensures I never miss a masterpiece.',
      rating: 5,
      experience: 'VIP Member since 2023',
    },
    {
      name: 'Elena Volkov',
      title: 'Tech Entrepreneur & NFT Collector',
      location: 'London, UK',
      avatar: '/images/testimonials/elena-vip.jpg',
      quote: 'FOMUS perfectly blends traditional artistry with modern Web3 innovation. The Gold NFT passport is not just membership - it\'s a digital artifact.',
      rating: 5,
      experience: 'VIP Member since 2024',
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
    <div className="py-20 text-cream">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={cardVariants}
          className="font-heading text-5xl font-light text-cream mb-6"
        >
          VIP Member Stories
        </motion.h2>
        <motion.p 
          variants={cardVariants}
          className="text-xl text-cream/80 max-w-3xl mx-auto"
        >
          Hear from our distinguished VIP members about their exclusive experiences 
          with FOMUS Premium's most prestigious offerings.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            variants={cardVariants}
            className="bg-cream/5 backdrop-blur-sm border border-cream/20 rounded-lg p-8 hover:bg-cream/10 transition-all duration-500"
          >
            {/* 評価星 */}
            <div className="flex space-x-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-gold" />
              ))}
            </div>

            {/* 引用文 */}
            <blockquote className="text-cream/90 text-lg leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </blockquote>

            {/* プロフィール */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-cream/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-cream text-lg">
                  {testimonial.name}
                </div>
                <div className="text-cream/70 text-sm mb-1">
                  {testimonial.title}
                </div>
                <div className="text-cream/60 text-sm mb-2">
                  {testimonial.location}
                </div>
                <div className="text-gold text-xs font-medium">
                  {testimonial.experience}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 統計情報 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div className="p-6">
          <div className="text-5xl font-heading font-bold text-gold mb-2">98%</div>
          <div className="text-cream/70">VIP Satisfaction Rate</div>
        </div>
        <div className="p-6">
          <div className="text-5xl font-heading font-bold text-gold mb-2">24/7</div>
          <div className="text-cream/70">Concierge Support</div>
        </div>
        <div className="p-6">
          <div className="text-5xl font-heading font-bold text-gold mb-2">$25K+</div>
          <div className="text-cream/70">Annual Benefit Value</div>
        </div>
      </motion.div>
    </div>
  );
}