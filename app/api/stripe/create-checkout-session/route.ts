import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession, PRICE_IDS } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { 
      priceId, 
      membershipTier, 
      metadata, 
      mode = 'payment',
      successUrl: customSuccessUrl,
      cancelUrl: customCancelUrl 
    } = await request.json();

    let finalPriceId = priceId;

    // メンバーシップの場合は、tierからpriceIdを取得
    if (membershipTier && !priceId) {
      switch (membershipTier) {
        case 'standard':
          finalPriceId = PRICE_IDS.membership_standard;
          break;
        case 'vip':
          finalPriceId = PRICE_IDS.membership_vip;
          break;
        case 'vvip':
          finalPriceId = PRICE_IDS.membership_vvip;
          break;
        default:
          return NextResponse.json(
            { error: 'Invalid membership tier' },
            { status: 400 }
          );
      }
    }

    if (!finalPriceId) {
      return NextResponse.json(
        { error: 'Price ID or membership tier is required' },
        { status: 400 }
      );
    }

    // 成功・キャンセル時のリダイレクトURL
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const successUrl = customSuccessUrl || `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = customCancelUrl || `${baseUrl}/cancel`;

    // Checkout セッション作成
    const session = await createCheckoutSession({
      priceId: finalPriceId,
      mode,
      metadata: {
        ...metadata,
        membershipTier: membershipTier || '',
      },
      successUrl,
      cancelUrl,
    });

    return NextResponse.json({ 
      id: session.id,
      url: session.url 
    });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}