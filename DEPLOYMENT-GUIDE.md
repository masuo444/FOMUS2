# FOMUS デプロイメントガイド 🚀

**バージョン**: 1.0  
**最終更新**: 2024年12月  
**対象**: DevOpsエンジニア、開発者、システム管理者

---

## 🎯 デプロイメント概要

### システム構成
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   ユーザー      │    │   CDN           │    │   静的ホスティング│
│   (Global)      │───▶│   (Cloudflare)  │───▶│   (GitHub Pages)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                       ┌─────────────────┐             │
                       │   決済処理      │             │
                       │   (Stripe)      │◀────────────┘
                       └─────────────────┘
                                                       
                       ┌─────────────────┐             │
                       │   分析・監視    │             │
                       │   (Analytics)   │◀────────────┘
                       └─────────────────┘
```

### 技術スタック
- **Frontend**: HTML5 + CSS3 + JavaScript ES6+
- **Styling**: TailwindCSS
- **Hosting**: GitHub Pages
- **CDN**: Cloudflare（オプション）
- **Payment**: Stripe Checkout
- **Analytics**: Google Analytics
- **Monitoring**: Google Search Console

---

## 🛠 事前準備

### 必要アカウント・サービス
- [ ] **GitHub**: リポジトリ管理
- [ ] **GitHub Pages**: 静的サイトホスティング
- [ ] **Cloudflare**: CDN・DNS管理（オプション）
- [ ] **Google Analytics**: アクセス解析
- [ ] **Google Search Console**: SEO監視
- [ ] **Stripe**: 決済処理

### 開発環境要件
```bash
# 必要ツール
- Git 2.30+
- Node.js 18+ (開発時のみ)
- 任意のコードエディタ

# 推奨ツール
- VS Code + Live Server拡張
- Chrome DevTools
- Lighthouse
```

---

## 📁 プロジェクト構造

### ディレクトリ構成
```
fomus-premium/
├── CNAME                    # カスタムドメイン設定
├── README.md               # プロジェクト説明
├── FOMUS-PROJECT-GUIDE.md  # 作業指示書
├── DEVELOPMENT-CHECKLIST.md # 開発チェックリスト
├── DEPLOYMENT-GUIDE.md     # このファイル
├── _redirects              # リダイレクト設定
├── vercel.json             # Vercel設定（予備）
│
├── index.html              # ランディングページ
├── language-selector.html  # 言語選択ページ
│
├── index-ja.html           # 日本語メインページ
├── index-en.html           # 英語メインページ
├── index-zh.html           # 中国語メインページ
├── index-fr.html           # フランス語メインページ
├── index-ar.html           # アラビア語メインページ
│
├── masu-collection-*.html  # MASUコレクション（各言語）
├── kuku-characters-*.html  # KUKUキャラクター（各言語）
├── membership-*.html       # 会員システム（各言語）
│
├── product-*.html          # 商品ページ（各種・各言語）
├── checkout-*.html         # 決済ページ
│
├── assets/                 # 静的リソース
│   ├── images/            # 画像ファイル
│   ├── fonts/             # ウェブフォント
│   └── icons/             # アイコン・ファビコン
│
└── scripts/               # JavaScript
    └── update-cart.js     # カート更新処理
```

---

## 🔧 ローカル開発環境セットアップ

### 1. リポジトリクローン
```bash
# HTTPSでクローン
git clone https://github.com/yourusername/fomus-premium.git
cd fomus-premium

# または SSH（推奨）
git clone git@github.com:yourusername/fomus-premium.git
cd fomus-premium
```

### 2. 開発サーバー起動
```bash
# VS Code Live Server使用（推奨）
code .
# Live Server拡張でindex.htmlを右クリック → "Open with Live Server"

# または Python内蔵サーバー
python -m http.server 8000

# または Node.js
npx serve .
```

### 3. 開発時の確認項目
- [ ] **ローカル表示**: http://localhost:8000
- [ ] **多言語**: 各言語ページ動作確認
- [ ] **レスポンシブ**: デバイス幅変更確認
- [ ] **決済フロー**: テスト環境での動作確認

---

## 🚀 GitHub Pages デプロイ

### 1. GitHub リポジトリ設定
```bash
# 新規リポジトリ作成（GitHub UI）
# リポジトリ名: fomus-premium
# Public/Private: Public（GitHub Pages無料枠）

# ローカルリポジトリとの連携
git remote add origin https://github.com/yourusername/fomus-premium.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages 有効化
```
1. GitHub リポジトリページ → Settings
2. "Pages" セクション
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Save
```

### 3. カスタムドメイン設定
```bash
# CNAME ファイル作成
echo "fomus.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 4. DNS設定（ドメイン所有者が実行）
```
# DNS レコード設定
Type: CNAME
Name: www
Value: yourusername.github.io

Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

---

## 🌐 Cloudflare CDN設定（オプション）

### 1. Cloudflare アカウント設定
1. [Cloudflare](https://cloudflare.com) でアカウント作成
2. "Add site" でドメイン追加
3. ネームサーバー変更（ドメイン管理会社で設定）

### 2. DNS設定
```
Type: CNAME
Name: www
Value: yourusername.github.io
Proxy: ✅ Proxied

Type: A
Name: @
Value: 185.199.108.153
Proxy: ✅ Proxied
```

### 3. パフォーマンス最適化
```
SSL/TLS:
- Encryption mode: Full (strict)
- Always Use HTTPS: ✅ On
- HTTP Strict Transport Security: ✅ On

Speed:
- Auto Minify: CSS ✅, JavaScript ✅, HTML ✅
- Brotli: ✅ On
- Rocket Loader: ⚠️ Off（互換性問題の可能性）

Caching:
- Browser Cache TTL: Respect Existing Headers
- Caching Level: Standard
```

---

## 🔄 継続的デプロイメント

### Git ワークフロー
```bash
# 開発ブランチ作成
git checkout -b feature/new-page
git add .
git commit -m "feat: Add new product page

- Implement responsive design
- Add multilingual support
- Include SEO optimization

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# プルリクエスト作成（GitHub UI）
# レビュー・承認後
git checkout main
git pull
git merge feature/new-page
git push

# または直接 main ブランチへ
git add .
git commit -m "Update: Optimize mobile UX for MASU collection pages"
git push
```

### 自動デプロイ確認
```
GitHub Pages は main ブランチへの push 時に自動デプロイ
- ⏱️ デプロイ時間: 通常 1-5分
- 📍 確認方法: GitHub Actions タブ
- 🌐 反映確認: https://yourdomain.com
```

---

## 💳 Stripe 本番環境設定

### 1. Stripe アカウント設定
```
1. Stripe Dashboard → Settings
2. "Activate your account" 完了
3. Business details 入力
4. Bank details 設定
5. Identity verification 完了
```

### 2. 商品・価格設定
```javascript
// Stripe Dashboard → Products で設定
const STRIPE_PRODUCTS = {
  'basic_masu_mini': 'price_xxxxx',
  'basic_masu_basic': 'price_xxxxx',
  'fomus_logo_mini': 'price_xxxxx',
  'fomus_logo_basic': 'price_xxxxx',
  'custom_masu_mini': 'price_xxxxx',
  'custom_masu_basic': 'price_xxxxx'
};
```

### 3. Webhook設定
```
Endpoint URL: https://yourdomain.com/webhook/stripe
Events:
- checkout.session.completed
- payment_intent.succeeded
- payment_intent.payment_failed
```

### 4. 本番決済URL更新
```javascript
// 各商品ページの決済URL更新
function proceedToStripe() {
  // テスト環境URL から本番環境URL へ変更
  window.location.href = 'https://checkout.stripe.com/pay/cs_live_xxxxx';
}
```

---

## 📊 分析・監視ツール設定

### Google Analytics 4
```html
<!-- Google Analytics 4 実装 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- 全HTMLファイルの <head> に追加 -->
```

### Google Search Console
```
1. https://search.google.com/search-console
2. プロパティ追加: https://yourdomain.com
3. 所有権確認:
   - HTMLファイル方法（推奨）
   - DNS レコード方法
4. サイトマップ送信: https://yourdomain.com/sitemap.xml
```

### サイトマップ生成
```xml
<!-- sitemap.xml 作成 -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-12-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/index-ja.html</loc>
    <lastmod>2024-12-01</lastmod>
    <priority>0.9</priority>
  </url>
  <!-- 全ページのURLを追加 -->
</urlset>
```

---

## 🛡 セキュリティ設定

### HTTPS 強制
```html
<!-- すべてのページに追加 -->
<script>
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  location.replace('https:' + window.location.href.substring(window.location.protocol.length));
}
</script>
```

### Content Security Policy
```html
<!-- セキュリティヘッダー -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://js.stripe.com https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.stripe.com https://www.google-analytics.com;
">
```

### robots.txt
```
# robots.txt
User-agent: *
Allow: /

# サイトマップ
Sitemap: https://yourdomain.com/sitemap.xml

# 不要ファイルのクロール禁止
Disallow: /.git/
Disallow: /node_modules/
Disallow: /_redirects
```

---

## 🔍 デプロイ後確認チェックリスト

### 即座確認（デプロイ後5分以内）
- [ ] **サイト表示**: トップページ正常表示
- [ ] **HTTPS**: SSL証明書有効・リダイレクト動作
- [ ] **多言語**: 各言語ページアクセス可能
- [ ] **モバイル**: スマートフォンでの表示確認
- [ ] **決済**: テスト決済実行（小額）

### 1時間以内確認
- [ ] **SEO**: Google Search Console エラーなし
- [ ] **Analytics**: Google Analytics データ受信確認
- [ ] **パフォーマンス**: PageSpeed Insights 実行
- [ ] **CDN**: Cloudflare 経由配信確認（設定済みの場合）
- [ ] **DNS**: 世界各地からの名前解決確認

### 24時間以内確認
- [ ] **検索エンジン**: Google インデックス状況
- [ ] **監視**: エラーログ・アクセスログ確認
- [ ] **パフォーマンス**: Core Web Vitals 確認
- [ ] **ユーザーフィードバック**: サポート問い合わせ確認

---

## 🚨 トラブルシューティング

### よくある問題と解決法

#### 1. GitHub Pages デプロイエラー
```bash
# 問題: サイトが表示されない
# 原因: ビルドエラー・設定ミス

# 解決手順:
1. GitHub Actions タブでエラー確認
2. 最新 commit の Status 確認
3. Settings → Pages で設定確認

# デバッグ
git add .
git commit -m "debug: Fix deployment issue"
git push
```

#### 2. カスタムドメイン設定エラー
```bash
# 問題: CNAME 設定が効かない
# 原因: DNS propagation 遅延

# 確認コマンド
nslookup yourdomain.com
dig yourdomain.com

# 解決: 24-48時間待機（DNS浸透時間）
```

#### 3. SSL証明書エラー
```bash
# 問題: HTTPS でアクセスできない
# 原因: GitHub Pages の SSL 証明書生成待ち

# 解決:
1. Settings → Pages → "Enforce HTTPS" チェック外す
2. 1時間待機
3. "Enforce HTTPS" 再チェック
```

#### 4. Cloudflare 設定エラー
```bash
# 問題: サイトが表示されない
# 原因: Proxy設定・SSL mode

# 解決:
1. SSL/TLS → Overview → "Full (strict)" 選択
2. DNS → Proxy status を "DNS only" に一時変更
3. 動作確認後 "Proxied" に戻す
```

#### 5. 決済エラー
```javascript
// 問題: Stripe 決済が完了しない
// 原因: 本番・テスト環境混在

// 確認項目:
1. Stripe key が本番環境用か確認
2. Webhook URL が正しいか確認
3. 商品 ID が本番環境用か確認

// デバッグ
console.log('Stripe mode:', stripe.mode);
```

---

## 📈 パフォーマンス最適化

### 画像最適化
```bash
# 推奨フォーマット
- WebP (最優先)
- JPEG (写真)
- PNG (透明背景必要)
- SVG (アイコン・ロゴ)

# サイズ指針
- ヒーロー画像: 1920px 以下
- 商品画像: 800px 以下
- サムネイル: 400px 以下
- ファイルサイズ: 200KB 以下（ヒーロー画像除く）
```

### CSS/JavaScript最適化
```bash
# TailwindCSS purge（本番時）
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# JavaScript minify
npx terser script.js -o script.min.js

# HTML minify
npx html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

### キャッシュ最適化
```html
<!-- 静的リソースキャッシュ -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="prefetch" href="next-page.html">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
```

---

## 📋 リリースチェックリスト

### Pre-launch（リリース前）
- [ ] **機能**: 全機能動作確認
- [ ] **コンテンツ**: 誤字脱字チェック
- [ ] **SEO**: メタタグ・構造化データ確認
- [ ] **決済**: 決済フロー完全テスト
- [ ] **Analytics**: トラッキング設定確認
- [ ] **パフォーマンス**: Lighthouse スコア 90+
- [ ] **セキュリティ**: 脆弱性スキャン実行

### Launch Day（リリース日）
- [ ] **最終デプロイ**: main ブランチへ push
- [ ] **DNS**: カスタムドメイン設定確認
- [ ] **SSL**: HTTPS 強制有効化
- [ ] **監視**: エラー監視システム起動
- [ ] **SNS**: リリース告知準備
- [ ] **サポート**: カスタマーサポート体制準備

### Post-launch（リリース後）
- [ ] **監視**: 24時間体制でエラー監視
- [ ] **パフォーマンス**: Core Web Vitals 確認
- [ ] **SEO**: Search Console 監視
- [ ] **Analytics**: トラフィック分析開始
- [ ] **フィードバック**: ユーザー反応収集
- [ ] **改善**: 必要に応じて hotfix 実施

---

## 📞 サポート・エスカレーション

### 緊急時連絡先
```
Level 1: 開発チーム Slack #deployment
Level 2: DevOps Engineer (直接連絡)
Level 3: プロジェクトマネージャー
Level 4: 技術責任者

24時間対応: 決済エラー、サイトダウン
営業時間対応: その他の技術問題
```

### 外部サービスサポート
- **GitHub**: https://support.github.com
- **Cloudflare**: https://support.cloudflare.com
- **Stripe**: https://support.stripe.com
- **Google**: https://support.google.com

### ドキュメント・リソース
- **GitHub Pages**: https://docs.github.com/en/pages
- **Cloudflare**: https://developers.cloudflare.com
- **Stripe**: https://stripe.com/docs
- **MDN**: https://developer.mozilla.org

---

**🚀 FOMUSサイトの安定運用とパフォーマンス向上を目指して、このデプロイメントガイドを活用してください！**