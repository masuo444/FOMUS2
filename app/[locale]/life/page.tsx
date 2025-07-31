import { useTranslations } from 'next-intl';
import SubscriptionTiers from '@/components/collections/SubscriptionTiers';
import CollectionHero from '@/components/collections/CollectionHero';
import TeaJourney from '@/components/collections/TeaJourney';

export default function LifePage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <CollectionHero
        title="Life Collection"
        subtitle="Premium Tea Subscription"
        description="Discover the finest selection of matcha and sencha from historic tea gardens, curated monthly for the most discerning palates."
        image="/images/collections/life-hero-large.jpg"
        badge="from ¥3,000/mo"
      />

      {/* サブスクリプションティア */}
      <section className="py-20 bg-cream">
        <div className="container-fomus">
          <SubscriptionTiers />
        </div>
      </section>

      {/* 茶の道ストーリー */}
      <section className="py-20 bg-gradient-fomus">
        <div className="container-fomus">
          <TeaJourney />
        </div>
      </section>
    </div>
  );
}