# FOMUS 開発チェックリスト ✅

**バージョン**: 1.0  
**最終更新**: 2024年12月  
**対象**: 開発者、QAエンジニア、プロジェクトマネージャー

---

## 📋 新規ページ開発チェックリスト

### 🏗 **Phase 1: 開発準備**

#### **A. 要件確認**
- [ ] ページ目的・ターゲットユーザー明確化
- [ ] 対応言語指定（5言語：JA, EN, ZH, FR, AR）
- [ ] デザインモックアップ承認
- [ ] コンテンツ・画像素材準備完了
- [ ] SEOキーワード・メタデータ要件確認

#### **B. 技術仕様確定**
- [ ] 使用するコンポーネント特定
- [ ] 決済統合要件（Stripe）
- [ ] 外部API連携要件
- [ ] パフォーマンス要件定義
- [ ] アクセシビリティ要件確認

---

### 🛠 **Phase 2: 実装段階**

#### **A. HTMLマークアップ**
```html
<!-- 基本構造チェック -->
- [ ] <!DOCTYPE html> 宣言
- [ ] <html lang="[LANG]"> 適切な言語設定
- [ ] セマンティックHTML5要素使用
  - [ ] <header>, <nav>, <main>, <section>, <footer>
  - [ ] <h1>〜<h6> 階層構造
  - [ ] <img> alt属性設定
  - [ ] <a> aria-label設定（必要に応じて）

<!-- viewport設定 -->
- [ ] <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes">
```

#### **B. SEO・メタタグ**
```html
<!-- 基本SEOタグ -->
- [ ] <title> タグ（60文字以内、キーワード含む）
- [ ] <meta name="description"> （160文字以内）
- [ ] <meta name="keywords"> （関連キーワード）
- [ ] <meta name="author" content="FOMUS">
- [ ] <link rel="canonical"> 設定

<!-- OGP（Open Graph Protocol）-->
- [ ] <meta property="og:type" content="website">
- [ ] <meta property="og:url"> 正確なURL
- [ ] <meta property="og:title"> 魅力的なタイトル
- [ ] <meta property="og:description"> 説明文
- [ ] <meta property="og:image" content="https://fomus.com/FOMUSlogo_edited.png">
- [ ] <meta property="og:image:width" content="1200">
- [ ] <meta property="og:image:height" content="630">
- [ ] <meta property="og:site_name" content="FOMUS">
- [ ] <meta property="og:locale"> 適切な locale設定

<!-- Twitter Card -->
- [ ] <meta name="twitter:card" content="summary_large_image">
- [ ] <meta name="twitter:title"> 設定
- [ ] <meta name="twitter:description"> 設定
- [ ] <meta name="twitter:image"> 設定
```

#### **C. 構造化データ**
```html
<!-- Schema.org 実装 -->
- [ ] Product（商品ページ）
- [ ] Organization（企業情報）
- [ ] BreadcrumbList（パンくずリスト）
- [ ] Review（レビュー、該当する場合）

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "商品名",
  "description": "商品説明",
  "image": "商品画像URL",
  "brand": {
    "@type": "Brand",
    "name": "FOMUS"
  },
  "offers": {
    "@type": "Offer",
    "price": "価格",
    "priceCurrency": "通貨コード"
  }
}
</script>
```

#### **D. CSS実装**
```css
/* 必須スタイル設定 */
- [ ] TailwindCSS設定確認
- [ ] カスタムカラーパレット適用
  - [ ] hinoki: '#d0c5b1'
  - [ ] gold: '#c7a253'
  - [ ] obsidian: '#141414'
  - [ ] cream: '#f8f6f0'

/* フォント設定 */
- [ ] Noto Serif JP（見出し用）
- [ ] Noto Sans JP（本文用）
- [ ] フォント読み込み確認

/* レスポンシブデザイン */
- [ ] モバイルファースト実装
- [ ] ブレークポイント適用
  - [ ] sm: 640px
  - [ ] md: 768px
  - [ ] lg: 1024px
  - [ ] xl: 1280px

/* アクセシビリティ */
- [ ] タッチターゲット最小44px
- [ ] カラーコントラスト比4.5:1以上
- [ ] フォーカス状態表示
```

#### **E. JavaScript実装**
```javascript
/* 必須機能 */
- [ ] モバイルメニュー開閉
- [ ] スムーススクロール
- [ ] フォームバリデーション
- [ ] 決済処理（該当ページ）

/* パフォーマンス最適化 */
- [ ] Intersection Observer（遅延読み込み）
- [ ] イベントリスナー最適化
- [ ] メモリリーク対策

/* エラーハンドリング */
- [ ] try-catch文実装
- [ ] ユーザーフレンドリーなエラーメッセージ
- [ ] フォールバック処理
```

---

### 📱 **Phase 3: モバイル最適化**

#### **A. レスポンシブデザイン**
- [ ] **320px**: 最小モバイル表示確認
- [ ] **375px**: iPhone SE表示確認
- [ ] **414px**: iPhone Pro Max表示確認
- [ ] **768px**: iPad縦表示確認
- [ ] **1024px**: iPad横表示確認
- [ ] **1440px**: デスクトップ表示確認

#### **B. タッチインターフェース**
- [ ] **タッチターゲット**: 最小44px×44px
- [ ] **ボタン間隔**: 最小8px
- [ ] **スワイプジェスチャー**: 対応（必要に応じて）
- [ ] **プルリフレッシュ**: 無効化（必要に応じて）

#### **C. モバイルナビゲーション**
```html
<!-- ハンバーガーメニュー実装確認 -->
- [ ] ハンバーガーアイコン表示
- [ ] メニュー開閉アニメーション
- [ ] オーバーレイ背景
- [ ] メニュー項目タッチ対応
- [ ] 閉じるボタン機能

<!-- モバイルメニューHTML構造例 -->
<button id="mobile-menu-button" class="lg:hidden touch-target">
  <svg>...</svg>
</button>

<div id="mobile-menu" class="mobile-menu lg:hidden fixed inset-y-0 left-0 w-64 bg-white">
  <!-- メニュー内容 -->
</div>

<div id="mobile-menu-overlay" class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 hidden"></div>
```

#### **D. パフォーマンス**
- [ ] **First Contentful Paint**: 1.8秒以下
- [ ] **Largest Contentful Paint**: 2.5秒以下
- [ ] **Cumulative Layout Shift**: 0.1以下
- [ ] **画像最適化**: WebP対応、適切なサイズ
- [ ] **CSS最小化**: 未使用スタイル削除

---

### 🌍 **Phase 4: 多言語対応**

#### **A. 言語別実装**
```html
<!-- 各言語ファイル確認 -->
- [ ] index-ja.html（日本語）
- [ ] index-en.html（英語）
- [ ] index-zh.html（中国語）
- [ ] index-fr.html（フランス語）
- [ ] index-ar.html（アラビア語）

<!-- 言語設定確認 -->
- [ ] <html lang="[LANG]"> 適切設定
- [ ] <meta property="og:locale"> 設定
  - [ ] ja_JP
  - [ ] en_US
  - [ ] zh_CN
  - [ ] fr_FR
  - [ ] ar_AR
```

#### **B. RTL（右から左）対応**
```css
/* アラビア語RTL対応 */
- [ ] dir="rtl" 属性設定
- [ ] テキスト配置調整
- [ ] モバイルメニュー方向調整
- [ ] アイコン・画像配置調整

/* RTL CSS例 */
[dir="rtl"] .mobile-menu {
    transform: translateX(100%);
}
[dir="rtl"] .mobile-menu.open {
    transform: translateX(0);
}
```

#### **C. 翻訳品質**
- [ ] **専門用語**: 統一性確認
- [ ] **文化的配慮**: 現地事情考慮
- [ ] **文字数制限**: UI要素の表示確認
- [ ] **通貨表示**: 適切な記号・フォーマット

---

### 💳 **Phase 5: 決済・eコマース機能**

#### **A. Stripe統合**
```javascript
/* 決済機能チェック */
- [ ] 商品選択機能
- [ ] 価格計算ロジック
- [ ] Stripe Checkout リダイレクト
- [ ] 成功・失敗ページ遷移
- [ ] エラーハンドリング

/* 実装例 */
async function proceedToStripe() {
    try {
        // 商品・オプション取得
        const selectedSize = document.querySelector('input[name="size"]:checked').value;
        const selectedCoating = document.querySelector('input[name="coating"]:checked').value;
        
        // 価格計算
        let basePrice = selectedSize === 'mini' ? 20 : 45;
        let coatingPrice = selectedCoating === 'coating' ? 10 : 0;
        let totalPrice = basePrice + coatingPrice;
        
        // Stripe Checkout
        window.location.href = `https://checkout.stripe.com/pay/...`;
    } catch (error) {
        console.error('Payment error:', error);
        alert('決済処理でエラーが発生しました。');
    }
}
```

#### **B. フォームバリデーション**
- [ ] **必須項目**: 空白チェック
- [ ] **メールアドレス**: 形式チェック
- [ ] **電話番号**: 国別フォーマット
- [ ] **郵便番号**: 国別フォーマット
- [ ] **リアルタイム**: 入力時チェック

#### **C. カート機能**
- [ ] **商品追加**: カートに追加
- [ ] **数量変更**: 増減機能
- [ ] **商品削除**: カートから削除
- [ ] **合計計算**: 税込み・送料込み
- [ ] **セッション管理**: ページ更新対応

---

### 🧪 **Phase 6: テスト・QA**

#### **A. 機能テスト**
- [ ] **ナビゲーション**: 全リンク動作確認
- [ ] **フォーム**: 全入力項目・送信確認
- [ ] **決済**: テスト環境での決済完了
- [ ] **レスポンシブ**: 全デバイス表示確認
- [ ] **多言語**: 全言語表示・機能確認

#### **B. ブラウザ互換性**
- [ ] **Chrome**: 最新版・1つ前バージョン
- [ ] **Firefox**: 最新版・1つ前バージョン
- [ ] **Safari**: 最新版（Mac/iOS）
- [ ] **Edge**: 最新版
- [ ] **モバイル**: iOS Safari, Android Chrome

#### **C. パフォーマンステスト**
```bash
# テストツール使用
- [ ] Google PageSpeed Insights: 90点以上
- [ ] GTmetrix: Grade A
- [ ] WebPageTest: 指標確認
- [ ] Lighthouse: モバイル90点以上

# 手動確認
- [ ] 3G回線での読み込み確認
- [ ] 画像遅延読み込み動作
- [ ] JavaScriptエラーなし（Console確認）
```

#### **D. アクセシビリティテスト**
- [ ] **キーボードナビゲーション**: Tab移動確認
- [ ] **スクリーンリーダー**: 音声読み上げ確認
- [ ] **カラーコントラスト**: 基準値クリア
- [ ] **フォントサイズ**: 200%拡大表示確認

---

### 🚀 **Phase 7: デプロイ前最終確認**

#### **A. SEOチェック**
```bash
# SEO確認項目
- [ ] Google Search Console: エラーなし
- [ ] サイトマップ: 新ページ追加確認
- [ ] robots.txt: クロール許可確認
- [ ] hreflang: 多言語設定確認

# メタデータ検証
- [ ] Facebook Debugger: OGP表示確認
- [ ] Twitter Card Validator: カード表示確認
- [ ] Google Rich Results Test: 構造化データ確認
```

#### **B. セキュリティチェック**
- [ ] **HTTPS**: SSL証明書有効
- [ ] **機密情報**: APIキー・パスワード除外
- [ ] **XSS**: クロスサイトスクリプティング対策
- [ ] **CSRF**: クロスサイトリクエストフォージェリ対策
- [ ] **Content Security Policy**: 設定確認

#### **C. 最終動作確認**
- [ ] **全ページ**: リンク・機能確認
- [ ] **全言語**: 表示・動作確認
- [ ] **全デバイス**: レスポンシブ確認
- [ ] **決済フロー**: エンドツーエンド確認
- [ ] **エラーページ**: 404、500ページ確認

---

### 📊 **Phase 8: 本番デプロイ後確認**

#### **A. 即座確認項目**
- [ ] **サイト表示**: 全ページ正常表示
- [ ] **SSL証明書**: HTTPS正常動作
- [ ] **CDN**: 画像・リソース配信確認
- [ ] **Analytics**: Google Analytics動作確認
- [ ] **Search Console**: クロールエラーなし

#### **B. 24時間以内確認**
- [ ] **パフォーマンス**: Core Web Vitals確認
- [ ] **検索エンジン**: インデックス状況確認
- [ ] **モニタリング**: エラーログ確認
- [ ] **ユーザーフィードバック**: サポート問い合わせ確認

#### **C. 1週間以内確認**
- [ ] **SEO**: 検索順位変動確認
- [ ] **トラフィック**: アクセス数・行動分析
- [ ] **コンバージョン**: 目標達成率確認
- [ ] **A/Bテスト**: 効果測定開始（該当する場合）

---

## 🚨 **緊急時対応チェックリスト**

### **サイトダウン時**
1. [ ] エラー内容・範囲特定
2. [ ] 緊急連絡（Slack #emergency）
3. [ ] ロールバック実行（必要に応じて）
4. [ ] 修正・テスト・再デプロイ
5. [ ] 事後報告・改善策策定

### **決済エラー時**
1. [ ] Stripe ダッシュボード確認
2. [ ] エラーログ解析
3. [ ] 顧客への緊急連絡
4. [ ] 決済処理修正
5. [ ] 影響範囲・補償検討

---

## 📋 **チェックリスト使用方法**

### **開発者向け**
1. 新規ページ開発時にこのチェックリストをコピー
2. 各Phase順番に進行
3. 完了項目にチェック
4. QAレビュー前に全項目完了確認

### **QAエンジニア向け**
1. Phase 6のテスト項目を重点確認
2. 不具合発見時は該当Phaseに差し戻し
3. 全項目クリア後にデプロイ承認

### **プロジェクトマネージャー向け**
1. 各Phaseの進捗状況確認
2. ボトルネック特定・リソース調整
3. 品質基準維持・スケジュール管理

---

**✅ このチェックリストを活用して、FOMUSブランドにふさわしい最高品質のWebサイトを構築しましょう！**