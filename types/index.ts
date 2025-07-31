// FOMUS Premium TypeScript型定義

// 基本的な通貨タイプ
export type Currency = 'USD' | 'AED' | 'EUR';

// ロケール（言語）タイプ
export type Locale = 'en' | 'ar';

// 商品関連の型定義
export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  availability: string;
  craftsman?: string;
  craftsmanYears?: number;
  category: 'craft' | 'life' | 'entertainment';
}

// NFT関連の型定義
export interface NFTCollection {
  id: string;
  name: string;
  totalSupply: number;
  floorPrice: number;
  description: string;
  items: NFTItem[];
}

export interface NFTItem {
  id: string;
  name: string;
  image: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Ultra Rare' | 'Legendary';
  traits: string[];
  price: number;
  tokenId?: number;
  contractAddress?: string;
}

// パスポート関連の型定義
export interface PassportTier {
  id: 'vip' | 'standard';
  name: string;
  price: number;
  period: 'lifetime' | 'annual';
  features: string[];
  nftBackgroundType: 'gold' | 'silver';
}

export interface PassportNFT {
  tokenId: number;
  owner: string;
  tier: 'vip' | 'standard';
  mintDate: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: Array<{
      trait_type: string;
      value: string;
    }>;
  };
}

// ユーザー/認証関連の型定義
export interface User {
  id: string;
  email: string;
  name?: string;
  walletAddress?: string;
  passportTier?: 'vip' | 'standard';
  passportNFT?: PassportNFT;
  joinDate: string;
  preferences: {
    language: Locale;
    currency: Currency;
  };
}

// カレンダー/予約関連の型定義
export interface BookingSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  type: 'geisha_experience' | 'craft_workshop' | 'tea_ceremony';
  maxGuests: number;
  pricePerGuest?: number;
}

export interface Booking {
  id: string;
  userId: string;
  slotId: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  specialRequests?: string;
  totalPrice: number;
  currency: Currency;
  createdAt: string;
}

// CMS関連の型定義
export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Contentful Rich Text
  featuredImage: string;
  author: string;
  publishDate: string;
  tags: string[];
  locale: Locale;
}

// Stripe関連の型定義
export interface StripePrice {
  id: string;
  product: string;
  currency: string;
  unitAmount: number;
  type: 'one_time' | 'recurring';
  interval?: 'month' | 'year';
}

export interface StripeProduct {
  id: string;
  name: string;
  description?: string;
  images: string[];
  metadata: Record<string, string>;
  prices: StripePrice[];
}

// API レスポンス型
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 為替レート型
export interface ExchangeRates {
  base: Currency;
  rates: Record<Currency, number>;
  lastUpdated: string;
}

// フォーム関連の型定義
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  interests: ('craft' | 'life' | 'entertainment' | 'vip')[];
}

export interface SubscriptionFormData {
  tier: 'matcha-discovery' | 'sencha-connoisseur' | 'tea-master';
  billing: 'monthly' | 'quarterly' | 'annual';
  giftRecipient?: {
    name: string;
    email: string;
    message?: string;
  };
}