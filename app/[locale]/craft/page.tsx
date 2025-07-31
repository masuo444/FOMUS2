import { useTranslations } from 'next-intl';
import ProductGrid from '@/components/collections/ProductGrid';
import CollectionHero from '@/components/collections/CollectionHero';
import CraftsmanStory from '@/components/collections/CraftsmanStory';

// ダミーデータ - Masu-Kame コレクション
const craftProducts = [
  {
    id: 'masu-kame-gold',
    name: 'Masu-Kame Gold Edition',
    price: 500000,
    currency: 'JPY',
    image: '/images/products/masu-kame-gold.jpg',
    description: 'Hand-carved hinoki with traditional urushi lacquer and 24k gold leaf finishing',
    availability: 'Limited Edition - 12 pieces',
    craftsman: 'Master Yamamoto Takeshi',
    craftsmanYears: 35,
  },
  {
    id: 'masu-kame-silver',
    name: 'Masu-Kame Silver Edition',
    price: 300000,
    currency: 'JPY',
    image: '/images/products/masu-kame-silver.jpg',
    description: 'Premium hinoki with silver inlay and traditional black urushi',
    availability: 'Regular Production',
    craftsman: 'Master Sato Hiroshi',
    craftsmanYears: 28,
  },
  {
    id: 'masu-kame-classic',
    name: 'Masu-Kame Classic',
    price: 150000,
    currency: 'JPY',
    image: '/images/products/masu-kame-classic.jpg',
    description: 'Pure hinoki with natural finish showcasing the wood grain beauty',
    availability: 'Made to Order',
    craftsman: 'Master Tanaka Kenji',
    craftsmanYears: 22,
  },
];

export default function CraftPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <CollectionHero
        title="Craft Collection"
        subtitle="Masu-Kame Artisan Pieces"
        description="Each piece is a testament to centuries of Japanese woodworking tradition, hand-carved by master craftsmen using techniques passed down through generations."
        image="/images/collections/craft-hero-large.jpg"
        badge="from ¥150,000"
      />

      {/* 商品グリッド */}
      <section className="py-20 bg-cream">
        <div className="container-fomus">
          <ProductGrid products={craftProducts} collection="craft" />
        </div>
      </section>

      {/* 職人ストーリー */}
      <section className="py-20 bg-gradient-fomus">
        <div className="container-fomus">
          <CraftsmanStory />
        </div>
      </section>
    </div>
  );
}