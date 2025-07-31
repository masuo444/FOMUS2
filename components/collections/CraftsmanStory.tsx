'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CraftsmanStory() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="heading-section">Master Craftsmen</h2>
        <p className="text-lg text-obsidian/70 max-w-3xl mx-auto">
          Each FOMUS piece is created by master artisans with over 30 years of experience, 
          preserving traditional Japanese woodworking techniques passed down through generations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/craftsmen/master-yamamoto.jpg"
              alt="Master Yamamoto at work"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-3xl font-semibold text-obsidian mb-6">
            The Art of Hinoki Mastery
          </h3>
          <div className="space-y-4 text-obsidian/80">
            <p>
              Master Yamamoto Takeshi has dedicated his life to perfecting the ancient art 
              of hinoki woodworking. With 35 years of experience, he represents the pinnacle 
              of Japanese craftsmanship.
            </p>
            <p>
              Each piece begins with carefully selected hinoki cypress, aged for a minimum 
              of 100 years. The wood is hand-carved using traditional tools, then finished 
              with multiple layers of urushi lacquer and delicate gold leaf application.
            </p>
            <p>
              This meticulous process takes between 3-6 months per piece, ensuring that 
              every FOMUS creation is not just an object, but a work of art that will 
              last for generations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}