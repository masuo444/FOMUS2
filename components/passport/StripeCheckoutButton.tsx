'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, CreditCardIcon } from '@heroicons/react/24/outline';

// Stripe公開キー（環境変数から取得）
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

interface StripeCheckoutButtonProps {
  priceId: string;
  className?: string;
  children: React.ReactNode;
  metadata?: Record<string, string>;
}

export default function StripeCheckoutButton({ 
  priceId, 
  className = "btn-primary",
  children,
  metadata = {}
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    // Stripe が利用できない場合の処理
    if (!stripePublishableKey) {
      alert('決済機能は現在準備中です。しばらくお待ちください。');
      return;
    }

    setIsLoading(true);
    
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Stripe Checkout セッション作成
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          metadata,
          // VIP/Standardパスポート判定
          mode: priceId.includes('vip') ? 'payment' : 'subscription',
        }),
      });

      const session = await response.json();

      if (session.error) {
        throw new Error(session.error);
      }

      // Checkout ページにリダイレクト
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('決済処理でエラーが発生しました。もう一度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 relative overflow-hidden`}
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
    >
      {/* ローディング時のアニメーション */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      )}
      
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <CreditCardIcon className="w-5 h-5" />
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
}