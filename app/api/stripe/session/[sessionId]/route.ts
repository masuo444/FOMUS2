import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';

export async function GET(
  request: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  try {
    const { sessionId } = params;

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Stripe セッション情報を取得
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'customer_details', 'payment_intent']
    });

    // 必要な情報のみを返す（セキュリティ考慮）
    const sessionData = {
      id: session.id,
      status: session.status,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_details: {
        email: session.customer_details?.email,
        name: session.customer_details?.name,
      },
      metadata: session.metadata,
      created: session.created,
    };

    return NextResponse.json(sessionData);
  } catch (error) {
    console.error('Session retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve session' },
      { status: 500 }
    );
  }
}