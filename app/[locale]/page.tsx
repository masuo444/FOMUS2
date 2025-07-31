import { useTranslations } from 'next-intl';
import HeroVideo from '@/components/home/HeroVideo';
import CollectionCards from '@/components/home/CollectionCards';
import WhyFomus from '@/components/home/WhyFomus';
import SocialProof from '@/components/home/SocialProof';
import VipPassportCTA from '@/components/home/VipPassportCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero セクション - 檜を削る→漆→金箔の6秒ループ動画 */}
      <HeroVideo />
      
      {/* 3つのコレクションカード */}
      <section className="py-20 bg-gradient-fomus">
        <div className="container-fomus">
          <CollectionCards />
        </div>
      </section>
      
      {/* VIPパスポートCTA */}
      <section className="py-16 bg-obsidian">
        <div className="container-fomus">
          <VipPassportCTA />
        </div>
      </section>
      
      {/* なぜFOMUSなのか */}
      <section className="py-20 bg-cream">
        <div className="container-fomus">
          <WhyFomus />
        </div>
      </section>
      
      {/* ソーシャルプルーフ - Art Dubai / Downtown Design */}
      <section className="py-16 bg-hinoki/10">
        <div className="container-fomus">
          <SocialProof />
        </div>
      </section>
    </div>
  );
}