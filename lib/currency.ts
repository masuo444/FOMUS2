// 通貨フォーマット関数
export function formatCurrency(
  amount: number,
  currency: 'USD' | 'AED' | 'EUR' = 'USD',
  locale?: string
): string {
  // 通貨記号マッピング
  const currencyConfig = {
    USD: { code: 'USD', symbol: '$', locale: 'en-US' },
    AED: { code: 'AED', symbol: 'د.إ', locale: 'ar-AE' },
    EUR: { code: 'EUR', symbol: '€', locale: 'en-EU' },
  };

  const config = currencyConfig[currency];
  const targetLocale = locale || config.locale;

  try {
    return new Intl.NumberFormat(targetLocale, {
      style: 'currency',
      currency: config.code,
      minimumFractionDigits: currency === 'AED' ? 0 : 2,
      maximumFractionDigits: currency === 'AED' ? 0 : 2,
    }).format(amount);
  } catch (error) {
    // フォールバック
    return `${config.symbol}${amount.toLocaleString()}`;
  }
}

// 通貨変換関数
export function convertCurrency(
  amount: number,
  fromCurrency: 'USD' | 'AED' | 'EUR',
  toCurrency: 'USD' | 'AED' | 'EUR',
  exchangeRates: Record<string, number>
): number {
  if (fromCurrency === toCurrency) return amount;

  // USD を基準通貨として変換
  const usdAmount = fromCurrency === 'USD' 
    ? amount 
    : amount / exchangeRates[fromCurrency];

  const convertedAmount = toCurrency === 'USD'
    ? usdAmount
    : usdAmount * exchangeRates[toCurrency];

  return Math.round(convertedAmount * 100) / 100;
}

// 価格帯を検出して適切な表示を返す
export function formatPriceRange(
  minPrice: number,
  maxPrice: number,
  currency: 'USD' | 'AED' | 'EUR' = 'USD'
): string {
  if (minPrice === maxPrice) {
    return formatCurrency(minPrice, currency);
  }
  
  return `${formatCurrency(minPrice, currency)} - ${formatCurrency(maxPrice, currency)}`;
}

// VIP向け価格表示（カンマ区切りを強調）
export function formatVipPrice(
  amount: number,
  currency: 'USD' | 'AED' | 'EUR' = 'USD'
): string {
  const formatted = formatCurrency(amount, currency);
  
  // VIP価格の場合は特別なスタイリングクラスを想定
  return formatted;
}