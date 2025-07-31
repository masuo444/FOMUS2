# FOMUS Premium - 海外富裕層向け公式サイト

## 🎯 プロジェクトの概要

FOMUS Premium は、日本の檜クラフト × VIP体験 × KUKU IP を組み合わせた海外富裕層向けの完全なEコマース + NFTプラットフォームです。

**主要機能:**
- 🌍 多言語対応（英語/アラビア語）
- 💱 多通貨対応（USD/AED/EUR）
- 🎨 3つのコレクション（Craft/Life/Entertainment）
- 👑 VIP/Standardパスポートシステム
- 🎮 NFTギャラリー + Web3統合
- 📅 Google Calendar API によるVIP予約システム
- 💳 Stripe Connect による決済処理

## 🚀 クイックスタート

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
# アプリケーション基本設定
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe 決済設定
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Stripe Connect アカウント（各カテゴリごと）
STRIPE_CRAFT_CONNECT_ACCOUNT_ID=acct_craft_account
STRIPE_TEA_CONNECT_ACCOUNT_ID=acct_tea_account

# Contentful CMS
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token

# Google Calendar API（VIP予約用）
GOOGLE_CALENDAR_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_CALENDAR_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_CALENDAR_ID=your_calendar_id@gmail.com

# Web3 / NFT 設定
ALCHEMY_API_KEY=your_alchemy_api_key
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id

# NextAuth.js（認証用）
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

サイトは [http://localhost:3000](http://localhost:3000) でアクセス可能です。

## 📁 プロジェクト構造

```
fomus-premium/
├── app/
│   ├── [locale]/           # 国際化ルーティング
│   │   ├── page.tsx        # ホームページ
│   │   ├── craft/          # クラフトコレクション
│   │   ├── life/           # ライフコレクション（ティー）
│   │   ├── entertainment/  # エンターテイメント（NFT）
│   │   ├── passport/       # VIP/Standardパスポート
│   │   └── dashboard/      # 会員ダッシュボード
│   ├── api/               # API ルート
│   │   ├── stripe/        # Stripe決済
│   │   ├── calendar/      # Google Calendar
│   │   └── webhooks/      # Webhook処理
│   └── globals.css        # グローバルスタイル
├── components/
│   ├── home/              # ホームページコンポーネント
│   ├── collections/       # コレクションページ
│   ├── passport/          # パスポート関連
│   ├── layout/            # レイアウト（Nav/Footer）
│   └── ui/                # 再利用可能UI
├── lib/
│   ├── stripe.ts          # Stripe設定
│   ├── currency.ts        # 通貨処理
│   ├── calendar.ts        # Google Calendar
│   └── contentful.ts      # CMS統合
├── hooks/
│   ├── useCurrency.ts     # 通貨管理
│   └── useAuth.ts         # 認証管理
├── messages/              # 国際化メッセージ
│   ├── en.json
│   └── ar.json
└── types/                 # TypeScript型定義
```

## 🎨 主要ページとコンポーネント

### ホームページ (`/`)
- **HeroVideo**: 6秒ループの檜クラフト工程動画
- **CollectionCards**: 3つのコレクション（Craft/Life/Entertainment）
- **VipPassportCTA**: VIPパスポート訴求モーダル
- **SocialProof**: Art Dubai / Downtown Design 受賞歴

### コレクションページ
- **Craft** (`/craft`): Masu-Kame 商品（¥150,000〜¥500,000）
- **Life** (`/life`): ティーサブスクリプション（¥3,000〜¥12,000/月）
- **Entertainment** (`/entertainment`): KUKU NFTギャラリー

### パスポートシステム
- **VIP** (`/passport/vip`): USD 10,000 終身 - 限定100名
- **Standard** (`/passport/standard`): USD 1,200入会 + USD 500年会費

## 💳 決済システム（Stripe Connect）

各商品カテゴリごとに異なる `application_fee_percent` を設定：

```typescript
const STRIPE_CONNECT_CONFIG = {
  vip_passport: { application_fee_percent: 5 },      // 5%
  standard_passport: { application_fee_percent: 3 }, // 3%  
  craft_products: { application_fee_percent: 8 },    // 8%
  tea_subscription: { application_fee_percent: 4 },  // 4%
  nft_collectibles: { application_fee_percent: 2.5 } // 2.5%
};
```

### 決済フロー
1. `StripeCheckoutButton` でチェックアウト開始
2. Stripe Hosted Checkout ページで決済
3. Webhook で支払い完了を検知
4. NFT Passport の自動発行（VIP/Standard）
5. 会員ダッシュボードで特典表示

## 🌍 国際化対応

### 対応言語
- **英語 (en)**: デフォルト言語
- **アラビア語 (ar)**: RTL対応

### 通貨対応
- **USD**: 基準通貨
- **AED**: UAE ディルハム（中東富裕層向け）
- **EUR**: ユーロ（欧州富裕層向け）

為替レートは `exchangerate-api.com` から取得（リアルタイム更新）

## 🎮 Web3 / NFT 統合

### NFT Passport システム
- **VIP Passport**: 金背景 ERC-721 NFT
- **Standard Passport**: 銀背景 ERC-721 NFT
- **Metadata**: IPFS保存 + Arweave永続化

### KUKU IP NFTコレクション
- **Genesis Collection**: 1,000体限定
- **Art Toy Series**: フィジカル商品連動
- **Founder's NFT**: VIP会員限定エアドロップ

## 📅 VIP予約システム

Google Calendar API を使用した芸妓体験予約：

```typescript
// VIP: 4名まで・60日前予約・日時自由
// Standard: 1名・固定日・追加料金USD 1,000
```

## 🔧 開発・デプロイ

### ビルドコマンド
```bash
npm run build      # 本番ビルド
npm run start      # 本番サーバー起動
npm run lint       # ESLint実行
npm run type-check # TypeScript型チェック
```

### Vercel デプロイ
1. Vercel に GitHub リポジトリを接続
2. 環境変数を Vercel ダッシュボードで設定
3. 自動デプロイが開始されます

### 必要な外部サービス設定

#### 1. Stripe
- Connect アカウント作成
- 商品・価格の設定
- Webhook エンドポイント設定

#### 2. Contentful
- スペース作成
- コンテンツタイプ定義（Journal記事用）

#### 3. Google Calendar
- Service Account作成
- Calendar API有効化
- 専用カレンダー作成

#### 4. Alchemy（Web3）
- アカウント作成
- API キー取得

## 🎯 今後の拡張予定

1. **完全なCMS統合** - Contentful でジャーナル記事管理
2. **ダッシュボード機能** - NFT保有状況・特典管理
3. **Web3ウォレット接続** - MetaMask / WalletConnect統合
4. **AI画像生成** - KUKU キャラクター カスタマイズ
5. **多言語拡張** - 日本語・中国語対応

## 🚨 重要な注意事項

### セキュリティ
- Stripe Secret Key は絶対に公開しない
- Google Calendar Private Key は適切に管理
- NFT Contract のowner権限を適切に設定

### パフォーマンス
- 動画ファイルは Cloudflare Stream 推奨
- 画像は Next.js Image Optimization + Cloudflare Images
- CDN経由での配信を強く推奨

### 法務・コンプライアンス
- 各国の暗号資産法規制を確認
- GDPR / CCPA 対応（プライバシーポリシー）
- AML/KYC 対応（高額商品のため）

## 📞 サポート・連絡先

技術的な質問や問題が発生した場合：

1. GitHub Issuesで報告
2. 緊急時：tech-support@fomus-premium.com
3. 事業相談：business@fomus-premium.com

---

**🎊 FOMUS Premium MVP が完成しました！**

このコードベースは富裕層向けのプレミアムEコマース体験を提供し、
日本の伝統文化と最新のWeb3技術を融合した独特なプラットフォームです。

ローカル開発から本番デプロイまで、必要な設定はすべて含まれています。
ビジネス要件に応じて機能を拡張し、世界中の富裕層顧客にリーチしてください！