'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SocialProof() {
  const exhibitions = [
    {
      name: 'Art Dubai',
      year: '2024',
      description: 'Featured Exhibitor',
      logo: '/images/exhibitions/art-dubai.png',
    },
    {
      name: 'Downtown Design',
      year: '2024',
      description: 'Craft Excellence Award',
      logo: '/images/exhibitions/downtown-design.png',
    },
    {
      name: 'Salone del Mobile',
      year: '2023',
      description: 'Innovation Showcase',
      logo: '/images/exhibitions/salone-mobile.png',
    },
    {
      name: 'Tokyo Design Week',
      year: '2023',
      description: 'Heritage Collection',
      logo: '/images/exhibitions/tokyo-design.png',
    },
  ];

  const testimonials = [
    {
      quote: "FOMUS represents the pinnacle of Japanese craftsmanship. Each piece tells a story of centuries-old tradition.",
      author: "Sarah Al-Maktoum",
      title: "Art Collector, Dubai",
      avatar: "/images/testimonials/sarah.jpg",
    },
    {
      quote: "The VIP experience exceeded all expectations. The geisha evening was absolutely magical.",
      author: "Mohammed bin Rashid",
      title: "Luxury Connoisseur, Abu Dhabi",
      avatar: "/images/testimonials/mohammed.jpg",
    },
    {
      quote: "FOMUS has redefined luxury collecting. The blockchain authenticity gives me complete confidence.",
      author: "Elena Volkov",
      title: "NFT Collector, London",
      avatar: "/images/testimonials/elena.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      {/* エキシビション・受賞歴 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-semibold text-obsidian mb-4"
        >
          Recognized Worldwide
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-obsidian/70 max-w-2xl mx-auto mb-12"
        >
          FOMUS has been featured at prestigious international exhibitions and 
          recognized by leading design institutions globally.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.name}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="relative mb-4 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={exhibition.logo}
                  alt={exhibition.name}
                  width={120}
                  height={60}
                  className="mx-auto opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-medium text-obsidian text-sm mb-1">
                {exhibition.name}
              </h3>
              <p className="text-xs text-obsidian/50">
                {exhibition.description} • {exhibition.year}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* お客様の声 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mt-20"
      >
        <motion.h3 
          variants={itemVariants}
          className="font-heading text-3xl font-semibold text-obsidian text-center mb-12"
        >
          What Our Collectors Say
        </motion.h3>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="bg-cream/50 p-6 rounded-lg border border-hinoki/20 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gold/30 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <blockquote className="text-obsidian/80 mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-hinoki/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-obsidian text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-obsidian/50">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}