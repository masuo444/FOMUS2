import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe signature' },
        { status: 400 }
      );
    }

    // Stripe Webhookの署名検証
    const event = verifyWebhookSignature(body, signature);

    // チェックアウト完了時の処理
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      console.log('✅ Payment completed:', {
        sessionId: session.id,
        customerEmail: session.customer_details?.email,
        amountTotal: session.amount_total,
        currency: session.currency,
        metadata: session.metadata,
      });

      // VIP/StandardパスポートNFT発行処理
      if (session.metadata?.priceId?.includes('passport')) {
        const passportType = session.metadata.priceId.includes('vip') ? 'VIP' : 'Standard';
        
        // NFT Mint処理（実際の実装では契約への書き込み）
        console.log('🎫 NFT minted:', {
          type: `${passportType} Passport`,
          background: passportType === 'VIP' ? 'Gold' : 'Silver',
          customerEmail: session.customer_details?.email,
          tokenId: Math.floor(Math.random() * 10000), // ダミーTokenID
        });

        // メール送信処理
        console.log('📧 Welcome email sent to:', session.customer_details?.email);
        
        // Google Calendar予約枠作成（VIPの場合）
        if (passportType === 'VIP') {
          console.log('📅 VIP calendar access granted');
        }
      }

      // ティーサブスクリプション処理
      if (session.metadata?.priceId?.includes('tea')) {
        console.log('🍵 Tea subscription activated');
      }

      // クラフト商品処理
      if (session.metadata?.priceId?.includes('craft')) {
        console.log('🎨 Craft order processed');
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}