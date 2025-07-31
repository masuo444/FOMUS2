import Stripe from 'stripe';

// Stripe初期化（サーバーサイド）
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Connect Account設定
export const STRIPE_CONNECT_CONFIG = {
  // 各商品カテゴリごとのapplication_fee_percent設定
  vip_passport: {
    application_fee_percent: 5, // VIPパスポートは5%
  },
  standard_passport: {
    application_fee_percent: 3, // Standardパスポートは3%
  },
  craft_products: {
    application_fee_percent: 8, // クラフト商品は8%（職人への支払いがあるため）
  },
  tea_subscription: {
    application_fee_percent: 4, // ティーサブスクリプションは4%
  },
  nft_collectibles: {
    application_fee_percent: 2.5, // NFTは2.5%（ガス代等考慮）
  },
};

// 商品価格ID定義（Stripe Dashboardで作成した価格IDを使用）
export const PRICE_IDS = {
  // FOMUSメンバーシップ
  membership_standard: 'price_membership_standard_100000', // ¥100,000
  membership_vip: 'price_membership_vip_1000000',          // ¥1,000,000
  membership_vvip: 'price_membership_vvip_10000000',       // ¥10,000,000
  
  // VIPパスポート（一回払い）
  vip_passport_usd: 'price_vip_passport_usd_10000',
  vip_passport_aed: 'price_vip_passport_aed_36700',
  vip_passport_eur: 'price_vip_passport_eur_8500',
  
  // Standardパスポート（初回+年会費）
  standard_enrollment_usd: 'price_standard_enrollment_usd_1200',
  standard_annual_usd: 'price_standard_annual_usd_500',
  
  // ティーサブスクリプション
  tea_matcha_discovery: 'price_tea_matcha_discovery_3000',
  tea_sencha_connoisseur: 'price_tea_sencha_connoisseur_5000',
  tea_master: 'price_tea_master_12000',
};

// Checkout セッション作成
export async function createCheckoutSession({
  priceId,
  mode = 'payment',
  metadata = {},
  customerEmail,
  successUrl,
  cancelUrl,
}: {
  priceId: string;
  mode?: 'payment' | 'subscription';
  metadata?: Record<string, string>;
  customerEmail?: string;
  successUrl: string;
  cancelUrl: string;
}) {
  try {
    // 価格情報取得
    const price = await stripe.prices.retrieve(priceId);
    
    // Connect Account ID取得（商品タイプに基づく）
    const connectAccountId = getConnectAccountId(priceId);
    const applicationFeePercent = getApplicationFeePercent(priceId);

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customerEmail,
      metadata: {
        ...metadata,
        priceId,
        timestamp: Date.now().toString(),
      },
      // Connect Account使用時の設定
      ...(connectAccountId && {
        payment_intent_data: {
          application_fee_amount: Math.round(
            (price.unit_amount || 0) * (applicationFeePercent / 100)
          ),
          transfer_data: {
            destination: connectAccountId,
          },
        },
      }),
    };

    const session = await stripe.checkout.sessions.create(sessionParams);
    return session;
  } catch (error) {
    console.error('Stripe checkout session creation error:', error);
    throw new Error('Failed to create checkout session');
  }
}

// 商品タイプからConnect Account IDを取得
function getConnectAccountId(priceId: string): string | undefined {
  // 実際の実装では、商品タイプごとに異なるConnect Accountを設定
  if (priceId.includes('craft')) {
    return process.env.STRIPE_CRAFT_CONNECT_ACCOUNT_ID;
  }
  if (priceId.includes('tea')) {
    return process.env.STRIPE_TEA_CONNECT_ACCOUNT_ID;
  }
  // VIP/Standard パスポートは直接売上
  return undefined;
}

// 商品タイプからapplication_fee_percentを取得
function getApplicationFeePercent(priceId: string): number {
  if (priceId.includes('vip_passport')) {
    return STRIPE_CONNECT_CONFIG.vip_passport.application_fee_percent;
  }
  if (priceId.includes('standard')) {
    return STRIPE_CONNECT_CONFIG.standard_passport.application_fee_percent;
  }
  if (priceId.includes('craft')) {
    return STRIPE_CONNECT_CONFIG.craft_products.application_fee_percent;
  }
  if (priceId.includes('tea')) {
    return STRIPE_CONNECT_CONFIG.tea_subscription.application_fee_percent;
  }
  if (priceId.includes('nft')) {
    return STRIPE_CONNECT_CONFIG.nft_collectibles.application_fee_percent;
  }
  return 5; // デフォルト5%
}

// Webhook処理用のイベント検証
export function verifyWebhookSignature(body: string, signature: string): Stripe.Event {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  return stripe.webhooks.constructEvent(body, signature, endpointSecret);
}

export default stripe;