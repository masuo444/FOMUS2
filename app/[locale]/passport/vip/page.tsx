import { useTranslations } from 'next-intl';
import VipPerks from '@/components/passport/VipPerks';
import StripeCheckoutButton from '@/components/passport/StripeCheckoutButton';
import PassportComparison from '@/components/passport/PassportComparison';
import VipTestimonials from '@/components/passport/VipTestimonials';

export default function VipPassportPage() {
  const t = useTranslations('passport.vip');

  return (
    <div className="min-h-screen">
      {/* VIPヒーローセクション */}
      <section className="relative py-32 bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 bg-[url('/images/patterns/gold-pattern.png')] opacity-5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />

        <div className="container-fomus relative z-10 text-center text-cream">
          <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
            <span className="text-gold font-medium">LIMITED TO 100 MEMBERS WORLDWIDE</span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light mb-6 leading-none">
            <span className="text-gradient-gold">VIP</span>
            <span className="text-cream block">Passport</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gold font-light mb-6">
            {t('lifetime')}
          </p>

          <div className="text-5xl md:text-7xl font-heading font-bold text-gold mb-12">
            {t('price')}
          </div>

          <p className="text-xl text-cream/80 max-w-3xl mx-auto mb-16">
            Unlock the ultimate Japanese luxury experience. Private geisha evenings, 
            priority craft access, exclusive NFT drops, and a lifetime of premium benefits.
          </p>

          {/* メインCTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <StripeCheckoutButton
              priceId="price_vip_passport_usd_10000"
              className="btn-primary bg-gold text-obsidian hover:bg-cream text-lg px-12 py-4"
            >
              Purchase VIP Passport
            </StripeCheckoutButton>
            
            <button className="btn-secondary text-cream border-cream hover:bg-cream hover:text-obsidian text-lg px-12 py-4">
              Schedule Consultation
            </button>
          </div>

          {/* 限定性アピール */}
          <div className="mt-12 flex justify-center items-center space-x-4 text-gold text-sm">
            <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
            <span>Only 23 VIP Passports remaining</span>
            <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* VIP特典詳細 */}
      <section className="py-20 bg-cream">
        <div className="container-fomus">
          <VipPerks />
        </div>
      </section>

      {/* パスポート比較 */}
      <section className="py-20 bg-gradient-fomus">
        <div className="container-fomus">
          <PassportComparison highlightVip={true} />
        </div>
      </section>

      {/* VIP会員の声 */}
      <section className="py-20 bg-obsidian">
        <div className="container-fomus">
          <VipTestimonials />
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-20 bg-gold">
        <div className="container-fomus text-center text-obsidian">
          <h2 className="font-heading text-4xl md:text-6xl font-semibold mb-8">
            Ready to Join the Elite?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience Japanese luxury like never before. Your VIP journey begins now.
          </p>
          
          <StripeCheckoutButton
            priceId="price_vip_passport_usd_10000"
            className="btn-primary bg-obsidian text-gold hover:bg-obsidian/90 text-xl px-16 py-6"
          >
            Secure Your VIP Passport
          </StripeCheckoutButton>

          <p className="text-sm text-obsidian/70 mt-6">
            ✓ Secure payment via Stripe • ✓ Instant NFT delivery • ✓ 30-day satisfaction guarantee
          </p>
        </div>
      </section>
    </div>
  );
}