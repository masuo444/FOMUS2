'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = useTranslations('home.hero');

  useEffect(() => {
    // 動画の自動再生設定
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 背景動画 - 檜を削る→漆→金箔の工程 */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hinoki-craft-process.mp4" type="video/mp4" />
        {/* フォールバック画像 */}
        <img 
          src="/images/hero-fallback.jpg" 
          alt="Hinoki Craft Process" 
          className="w-full h-full object-cover"
        />
      </video>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/60" />

      {/* ヒーローコンテンツ */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-fomus text-center text-cream">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="heading-hero mb-6">
              <span className="block text-gradient-gold">FOMUS</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-light">
                Premium
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-cream/90"
          >
            {t('subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-lg md:text-xl text-cream/80 mb-12 max-w-3xl mx-auto"
          >
            {t('description')}
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary">
              Explore Collections
            </button>
            <button className="btn-secondary text-cream border-cream hover:bg-cream hover:text-obsidian">
              Watch Craft Process
            </button>
          </motion.div>

          {/* スクロールインジケーター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-cream/60">
              <span className="text-sm mb-2">Scroll to discover</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-cream/60 rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* パフォーマンス用のpreload設定 */}
      <div className="hidden">
        <link rel="preload" href="/videos/hinoki-craft-process.mp4" as="video" />
      </div>
    </div>
  );
}