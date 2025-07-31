import { useTranslations } from 'next-intl';
import StandardPerks from '@/components/passport/StandardPerks';
import StripeCheckoutButton from '@/components/passport/StripeCheckoutButton';
import PassportComparison from '@/components/passport/PassportComparison';

export default function StandardPassportPage() {
  const t = useTranslations('passport.standard');

  return (
    <div className="min-h-screen">
      {/* Standardヒーローセクション */}
      <section className="relative py-32 bg-gradient-to-br from-cream via-hinoki/20 to-cream overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 bg-[url('/images/patterns/hinoki-pattern.png')] opacity-10" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-hinoki/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-hinoki/10 rounded-full blur-2xl" />

        <div className="container-fomus relative z-10 text-center text-obsidian">
          <div className="inline-block bg-hinoki/20 backdrop-blur-sm border border-hinoki/40 rounded-full px-6 py-3 mb-8">
            <span className="text-obsidian font-medium">PERFECT FOR BEGINNERS</span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light mb-6 leading-none">
            <span className="text-hinoki">Standard</span>
            <span className="text-obsidian block">Passport</span>
          </h1>

          <p className="text-2xl md:text-3xl text-hinoki font-light mb-6">
            Your Gateway to Japanese Luxury
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-obsidian">
                {t('enrollment')}
              </div>
              <div className="text-hinoki text-sm">Enrollment Fee</div>
            </div>
            <div className="text-3xl text-hinoki">+</div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-obsidian">
                {t('annual')}
              </div>
              <div className="text-hinoki text-sm">Annual Membership</div>
            </div>
          </div>

          <p className="text-xl text-obsidian/80 max-w-3xl mx-auto mb-16">
            Begin your journey into authentic Japanese culture with curated experiences, 
            priority access to our craft collections, and exclusive member benefits.
          </p>

          {/* メインCTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <StripeCheckoutButton
              priceId="price_standard_passport_usd_1200"
              className="btn-primary text-lg px-12 py-4"
            >
              Join Standard Membership
            </StripeCheckoutButton>
            
            <button className="btn-secondary text-lg px-12 py-4">
              Learn More
            </button>
          </div>

          {/* 特典プレビュー */}
          <div className="mt-12 text-obsidian/70 text-sm">
            <span>✓ Geisha Experience Access • ✓ Craft Lottery • ✓ Premium Gifts • ✓ Silver NFT Passport</span>
          </div>
        </div>
      </section>

      {/* Standard特典詳細 */}
      <section className="py-20 bg-gradient-fomus">
        <div className="container-fomus">
          <StandardPerks />
        </div>
      </section>

      {/* パスポート比較 */}
      <section className="py-20 bg-cream">
        <div className="container-fomus">
          <PassportComparison highlightVip={false} />
        </div>
      </section>

      {/* アップグレードCTA */}
      <section className="py-20 bg-obsidian">
        <div className="container-fomus text-center text-cream">
          <h2 className="font-heading text-4xl md:text-6xl font-semibold mb-8">
            Ready for More?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-cream/80">
            Standard members can upgrade to VIP at any time and receive 
            credit for their existing membership investment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <StripeCheckoutButton
              priceId="price_standard_passport_usd_1200"
              className="btn-primary bg-gold text-obsidian hover:bg-cream text-xl px-12 py-4"
            >
              Start with Standard
            </StripeCheckoutButton>
            
            <a href="/passport/vip">
              <button className="btn-secondary text-cream border-cream hover:bg-cream hover:text-obsidian text-xl px-12 py-4">
                Explore VIP Benefits
              </button>
            </a>
          </div>

          <p className="text-sm text-cream/60 mt-6">
            ✓ No commitment • ✓ Cancel anytime • ✓ Full refund within 30 days
          </p>
        </div>
      </section>
    </div>
  );
}