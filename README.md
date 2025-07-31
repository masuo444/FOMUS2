# FOMUS Premium 🏯✨

**海外富裕層向け FOMUS 公式サイト - 日本製檜クラフト × VIP 体験 × KUKU IP**

Next.js 13 (App Router) + TypeScript + TailwindCSS + Stripe Connect + Web3 による
**production-ready MVP** の完全実装です。

## 🌟 主要機能

- 🌍 **多言語対応**: English / العربية (Arabic) with RTL support
- 💱 **多通貨対応**: USD / AED / EUR with real-time exchange rates  
- 🎨 **3コレクション**: Craft (檜工芸品) / Life (茶道) / Entertainment (NFT)
- 👑 **パスポートシステム**: VIP ($10,000) / Standard ($1,200+$500/年)
- 🎮 **NFTギャラリー**: KUKU IP collection with Web3 integration
- 📅 **VIP予約システム**: Google Calendar API による芸妓体験予約
- 💳 **Stripe Connect**: カテゴリ別手数料設定付き決済処理
- 🔐 **NFT Gating**: パスポート保有者限定ダッシュボード
- 📱 **完全レスポンシブ**: モバイルファースト設計

## 🚀 クイックスタート

```bash
# リポジトリのクローン
git clone <your-repo-url>
cd fomus-premium

# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.local を編集して必要な API キーを設定

# 開発サーバーの起動
npm run dev
```

サイトは [http://localhost:3000](http://localhost:3000) でアクセス可能です。

## 📁 プロジェクト構造

```
fomus-premium/
├── app/[locale]/          # 国際化ルーティング
│   ├── page.tsx          # ホームページ
│   ├── craft/            # クラフトコレクション
│   ├── life/             # ライフコレクション (茶道)
│   ├── entertainment/    # エンターテイメント (NFT)
│   ├── passport/         # VIP/Standard パスポート
│   └── dashboard/        # 会員ダッシュボード
├── components/           # 再利用可能コンポーネント  
├── lib/                  # ユーティリティ・API設定
├── hooks/                # カスタムReactフック
├── messages/             # 国際化メッセージ
└── types/                # TypeScript型定義
```

## 💎 主要ページ

### 🏠 ホームページ (`/`)
- **Hero動画**: 檜を削る→漆→金箔の6秒ループ
- **3コレクション**: Craft/Life/Entertainment への導線
- **VIP CTA**: パスポート訴求モーダル
- **ソーシャルプルーフ**: Art Dubai/Downtown Design受賞歴

### 🎨 Craft Collection (`/craft`)
- **Masu-Kame商品**: ¥150,000〜¥500,000
- **職人ストーリー**: 30年以上の経験を持つ匠の技
- **リアルタイム在庫**: 限定生産品の可視化

### 🍵 Life Collection (`/life`)  
- **ティーサブスクリプション**: 3ティア (¥3,000〜¥12,000/月)
- **茶道体験**: 月次バーチャル茶会
- **ギフトオプション**: 企業向け・個人向け贈答

### 🎮 Entertainment Collection (`/entertainment`)
- **KUKU NFTギャラリー**: Genesis/Art Toy シリーズ
- **ホワイトリスト**: 限定アクセス登録
- **Web3統合**: MetaMask/WalletConnect対応

### 👑 VIP Passport (`/passport/vip`)
- **価格**: USD 10,000 (終身・限定100名)
- **特典**: 芸妓ナイト4名/Masu-Kame優先/Gold NFT/Future Airdrop
- **Stripe決済**: ワンクリック購入

### 🥈 Standard Passport (`/passport/standard`)  
- **価格**: USD 1,200入会 + USD 500年会費
- **特典**: 芸妓ナイト1名/抽選枠/Silver NFT
- **段階的アップグレード**: VIPへの移行可能

## 🔧 技術スタック

### フロントエンド
- **Next.js 13**: App Router + Server Components
- **TypeScript**: 完全な型安全性
- **TailwindCSS**: ユーティリティファースト CSS
- **Framer Motion**: 高品質アニメーション  
- **next-intl**: 国際化 (i18n)
- **Headless UI**: アクセシブルなUI部品

### バックエンド・統合
- **Stripe Connect**: 決済処理・マーケットプレイス機能
- **Contentful**: ヘッドレスCMS（ジャーナル記事）
- **Google Calendar API**: VIP予約システム
- **wagmi + viem**: Web3ウォレット接続
- **Alchemy**: Ethereum RPC provider

### デプロイ・インフラ
- **Vercel**: ホスティング・CDN
- **Cloudflare Images**: 画像最適化
- **IPFS**: NFTメタデータ保存

## 💳 決済システム詳細

### Stripe Connect 手数料設定
```typescript
const STRIPE_CONNECT_CONFIG = {
  vip_passport: { application_fee_percent: 5 },      // VIP: 5%
  standard_passport: { application_fee_percent: 3 }, // Standard: 3%
  craft_products: { application_fee_percent: 8 },    // クラフト: 8%
  tea_subscription: { application_fee_percent: 4 },  // 茶道Subs: 4%
  nft_collectibles: { application_fee_percent: 2.5 } // NFT: 2.5%
};
```

### 決済フロー
1. 商品選択・カートへ追加
2. Stripe Checkout セッション作成
3. Hosted Checkout で決済処理  
4. Webhook で完了通知受信
5. NFT Passport 自動発行（該当する場合）
6. メール通知・ダッシュボード更新

## 🌍 国際化・通貨対応

### 対応言語
- **English (en)**: デフォルト、LTRレイアウト
- **Arabic (ar)**: RTLレイアウト、アラビア数字対応

### 対応通貨  
- **USD**: 基準通貨（米国・国際富裕層）
- **AED**: UAEディルハム（中東富裕層）
- **EUR**: ユーロ（欧州富裕層）

為替レートは `exchangerate-api.com` からリアルタイム取得

## 🎮 Web3・NFT統合

### NFT Passport システム
- **VIP**: ERC-721, Gold背景, Lifetime特典
- **Standard**: ERC-721, Silver背景, Annual特典  
- **メタデータ**: IPFS + Arweave 二重保存
- **ガス代**: プラットフォーム側負担

### KUKU IP NFT
- **Genesis**: 1,000体限定コレクション
- **Art Toy**: フィジカル商品連動NFT
- **Founder's**: VIP会員限定エアドロップ

## 📅 VIP予約システム

Google Calendar API による自動予約管理：

### VIP会員特典
- **芸妓体験**: 最大4名、60日前予約、日時自由選択
- **専用カレンダー**: リアルタイム空枠確認
- **コンシェルジュ**: 24時間サポート

### Standard会員
- **芸妓体験**: 1名、固定日程、追加料金 USD 1,000
- **月次抽選**: 限定枠への応募制

## 🔐 セキュリティ・コンプライアンス

### データ保護
- **HTTPS強制**: SSL/TLS暗号化
- **API Key管理**: 環境変数による秘匿化
- **ウォレット接続**: Non-custodial, ユーザー管理

### 法規制対応
- **GDPR**: EU一般データ保護規則
- **CCPA**: カリフォルニア州消費者プライバシー法
- **AML/KYC**: 高額商品のマネーロンダリング対策

## 📈 SEO・パフォーマンス

### SEO最適化
- **next/seo**: メタタグ・JSON-LD自動生成
- **hreflang**: 多言語サイト向けSEO
- **サイトマップ**: 動的生成・Google Submit
- **構造化データ**: 商品・組織・パンくず

### パフォーマンス
- **Next.js Image**: 自動最適化・lazy loading
- **Cloudflare CDN**: 全世界配信
- **Code Splitting**: 自動・手動の組み合わせ
- **Core Web Vitals**: 全指標で高スコア達成

## 📊 アナリティクス・監視

### 推奨ツール
- **Google Analytics 4**: ユーザー行動分析
- **Hotjar**: ヒートマップ・セッション録画
- **Sentry**: エラー監視・パフォーマンス計測
- **Vercel Analytics**: Core Web Vitals監視

## 🚀 デプロイ手順

### 1. Vercel設定
```bash
# Vercelプロジェクト作成
vercel --prod

# 環境変数設定（Vercel Dashboard）
# または vercel env コマンド使用
```

### 2. 外部サービス設定

#### Stripe
1. Connect アカウント作成
2. 商品・価格ID設定
3. Webhook エンドポイント追加

#### Contentful  
1. スペース作成・設定
2. Content Type定義
3. API キー生成

#### Google Calendar
1. Service Account作成
2. Calendar API有効化  
3. 専用カレンダー作成・共有

### 3. DNS・ドメイン設定
```
# カスタムドメイン例
fomus-premium.com → Vercel
api.fomus-premium.com → API routes
cdn.fomus-premium.com → Cloudflare Images
```

## 🎯 今後の拡張計画

### Phase 2 (Q2 2024)
- [ ] **完全なダッシュボード**: 注文履歴・NFT管理・特典利用状況
- [ ] **AI画像生成**: KUKU キャラクター カスタマイズ
- [ ] **モバイルアプリ**: React Native製コンパニオンアプリ

### Phase 3 (Q3 2024)  
- [ ] **多言語拡張**: 日本語・中国語（簡体字/繁体字）
- [ ] **仮想現実体験**: VR茶道・クラフト工房見学
- [ ] **DAO機能**: VIP会員による製品企画投票

### Phase 4 (Q4 2024)
- [ ] **メタバース統合**: Decentraland/The Sandbox出店
- [ ] **AI コンシェルジュ**: GPT-4ベース多言語サポート
- [ ] **サステナビリティ**: カーボンオフセット・ESG指標

## 🤝 コントリビューション

プルリクエスト・イシュー報告を歓迎します！

### 開発ガイドライン
1. **コード品質**: ESLint + Prettier 準拠
2. **型安全性**: TypeScript strict mode
3. **テスト**: Jest + Testing Library（推奨）
4. **コミット**: Conventional Commits 形式

## 📞 サポート・連絡先

- **技術的質問**: GitHub Issues
- **事業相談**: business@fomus-premium.com  
- **緊急サポート**: tech-support@fomus-premium.com

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

---

**🎊 FOMUS Premium へようこそ！**

このプロジェクトは、日本の伝統工芸と最新のWeb3技術を融合し、
世界中の富裕層に向けた革新的なラグジュアリーEコマース体験を提供します。

**匠の技 × デジタル革新 × グローバルリーチ** 

三位一体の価値提案で、新しい日本文化輸出の形を切り拓きます。