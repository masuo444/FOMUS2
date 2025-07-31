import { useTranslations } from 'next-intl';
import NftGallery from '@/components/collections/NftGallery';
import CollectionHero from '@/components/collections/CollectionHero';
import KukuIpShowcase from '@/components/collections/KukuIpShowcase';

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <CollectionHero
        title="Entertainment Collection"
        subtitle="KUKU NFT Ecosystem"
        description="Enter the digital realm of KUKU IP with exclusive NFT collectibles and art toy collaborations that bridge traditional Japanese aesthetics with cutting-edge blockchain technology."
        image="/images/collections/entertainment-hero-large.jpg"
        badge="Join Whitelist"
      />

      {/* NFTギャラリー */}
      <section className="py-20 bg-obsidian">
        <div className="container-fomus">
          <NftGallery />
        </div>
      </section>

      {/* KUKU IPショーケース */}
      <section className="py-20 bg-cream">
        <div className="container-fomus">
          <KukuIpShowcase />
        </div>
      </section>
    </div>
  );
}