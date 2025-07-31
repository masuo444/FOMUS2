'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Currency = 'USD' | 'AED' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  exchangeRates: Record<Currency, number>;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [exchangeRates, setExchangeRates] = useState<Record<Currency, number>>({
    USD: 1,
    AED: 3.67,
    EUR: 0.85,
  });
  const [isLoading, setIsLoading] = useState(false);

  // 為替レート取得（実際の実装では exchangerate-api.com を使用）
  useEffect(() => {
    const fetchExchangeRates = async () => {
      setIsLoading(true);
      try {
        // ダミーデータ（実際の実装では API から取得）
        const rates = {
          USD: 1,
          AED: 3.67,
          EUR: 0.85,
        };
        setExchangeRates(rates);
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      exchangeRates,
      isLoading,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    console.error('useCurrency must be used within a CurrencyProvider');
    // フォールバックとしてデフォルト値を返す
    return {
      currency: 'USD' as const,
      setCurrency: () => {},
      exchangeRates: { USD: 1, AED: 3.67, EUR: 0.85 },
      isLoading: false,
    };
  }
  return context;
}