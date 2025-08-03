# FOMUS プロジェクト 包括的作業指示書 📋

**バージョン**: 1.0  
**最終更新**: 2024年12月  
**対象**: 開発チーム、デザイナー、マーケティング、プロジェクトマネージャー

---

## 🎯 プロジェクト概要

### ブランドアイデンティティ
**FOMUS = 日本最高級品 × アニメ制作コミュニティ**

FOMUSは世界でも類を見ない独特なポジショニングを持つブランドです：
- **伝統工芸**: 1300年の歴史を持つ檜製MASU（枡）の最高級品
- **エンターテイメント**: オリジナルアニメキャラクター「KUKU」を中心としたコミュニティ
- **文化橋渡し**: 日本の伝統文化と現代のポップカルチャーの融合

### ビジネスモデル
1. **プレミアム工芸品販売**（MASU コレクション）
2. **VIP会員システム**（限定体験・特典）
3. **エンターテイメントコンテンツ**（KUKU IP）
4. **コミュニティプラットフォーム**（ファン創作支援）

### ターゲット市場
- **プライマリ**: 海外富裕層（年収$500K+）
- **セカンダリ**: 日本文化愛好家・アニメファン
- **地域**: 北米、欧州、中東、アジア太平洋

---

## 📊 現在の実装状況

### ✅ 完了済み機能

#### **1. 多言語対応システム**
- **対応言語**: 日本語、英語、中国語、フランス語、アラビア語
- **RTL対応**: アラビア語の右から左レイアウト
- **文化的配慮**: 各言語圏に適したコンテンツ翻訳

```
📁 多言語ファイル構成:
├── index-ja.html (日本語メイン)
├── index-en.html (英語)
├── index-zh.html (中国語)
├── index-fr.html (フランス語)
├── index-ar.html (アラビア語)
```

#### **2. MASU コレクション**
- **Basic MASU**: 伝統的な檜製枡
- **FOMUS ブランドロゴ枡**: オリジナルロゴ彫刻
- **オーダーメイド枡**: 完全カスタマイズ
- **5言語対応**: 全商品ページの多言語化完了

#### **3. 商品ページシステム**
- **58ページ**: 全商品・言語バリエーション
- **決済統合**: Stripe決済システム
- **在庫管理**: リアルタイム在庫表示
- **レスポンシブ**: 完全モバイル対応

#### **4. KUKU エンターテイメント**
- **キャラクター紹介**: 5キャラクターの詳細設定
- **世界観**: ストーリー設定・背景
- **コミュニティ**: ファン参加型プラットフォーム

#### **5. モバイル最適化**
- **ビューポート制御**: 拡大・縮小制限
- **タッチターゲット**: 44px以上保証
- **モバイルナビ**: ハンバーガーメニュー
- **パフォーマンス**: 最適化済み

#### **6. SEO・OGP設定**
- **メタタグ**: 全ページSEO最適化
- **OGP**: ソーシャルメディア対応
- **構造化データ**: Schema.org実装
- **多言語SEO**: hreflang設定

---

## 🛠 開発技術スタック

### フロントエンド
```javascript
// 主要技術
- HTML5 + CSS3 (Semantic Markup)
- TailwindCSS (Utility-First CSS)
- Vanilla JavaScript (ES6+)
- レスポンシブデザイン (Mobile-First)

// フォント
- Noto Serif JP (見出し)
- Noto Sans JP (本文)

// カラーパレット
- hinoki: '#d0c5b1'    // 檜色
- gold: '#c7a253'      // 金色
- obsidian: '#141414'  // 黒曜石
- cream: '#f8f6f0'     // クリーム
```

### 決済・統合
```javascript
// Stripe統合
- Stripe Checkout (ホスト型決済)
- 多通貨対応 (USD, EUR, JPY)
- Webhook処理

// 画像・メディア
- 最適化された画像配信
- Lazy Loading実装
```

---

## 📝 開発作業指示

### 🎨 新規ページ作成手順

#### 1. ファイル命名規則
```
基本形式: [content]-[language].html

例:
- product-masu-ja.html
- membership-en.html
- about-fr.html
```

#### 2. 必須コンポーネント
```html
<!-- 1. 適切なviewport設定 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes">

<!-- 2. SEOメタタグ -->
<meta name="description" content="...">
<meta name="keywords" content="...">

<!-- 3. OGPタグ -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://fomus.com/FOMUSlogo_edited.png">

<!-- 4. 構造化データ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  ...
}
</script>
```

#### 3. モバイル対応必須要素
```css
/* タッチターゲット最適化 */
.touch-target {
    min-height: 44px;
    min-width: 44px;
}

/* モバイルナビゲーション */
.mobile-menu {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
}

/* オーバーフロー制御 */
body, html {
    overflow-x: hidden;
}
```

### 🌍 多言語対応手順

#### 1. 新言語追加プロセス
```bash
# 1. 基本ファイル作成
cp index-ja.html index-[LANG].html

# 2. lang属性変更
<html lang="[LANG]">

# 3. ナビゲーションリンク更新
href="index-[LANG].html#section"

# 4. OGPロケール設定
<meta property="og:locale" content="[LANG]_[COUNTRY]">
```

#### 2. RTL言語対応（アラビア語等）
```css
/* RTL特別対応 */
[dir="rtl"] .mobile-menu {
    transform: translateX(100%); /* 右から左 */
}

[dir="rtl"] .text-right {
    text-align: right;
}
```

### 💳 決済システム統合

#### 1. Stripe設定
```javascript
// 商品ページでの実装例
async function proceedToStripe() {
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const selectedCoating = document.querySelector('input[name="coating"]:checked').value;
    
    // 価格計算
    let basePrice = selectedSize === 'mini' ? 20 : 45;
    let coatingPrice = selectedCoating === 'coating' ? 10 : 0;
    let totalPrice = basePrice + coatingPrice;
    
    // Stripe Checkout リダイレクト
    window.location.href = `https://checkout.stripe.com/pay/...`;
}
```

---

## 🎯 品質管理基準

### ✅ 開発チェックリスト

#### **A. コード品質**
- [ ] HTML5セマンティックマークアップ
- [ ] W3C Validation合格
- [ ] アクセシビリティ準拠（WCAG 2.1 AA）
- [ ] Cross-browser互換性確認

#### **B. レスポンシブデザイン**
- [ ] モバイル（320px〜768px）
- [ ] タブレット（768px〜1024px）
- [ ] デスクトップ（1024px〜）
- [ ] 4K/Retina対応

#### **C. パフォーマンス**
- [ ] Core Web Vitals最適化
- [ ] 画像最適化（WebP対応）
- [ ] CSS/JS最小化
- [ ] Lazy Loading実装

#### **D. SEO**
- [ ] メタタグ完整性
- [ ] 構造化データ検証
- [ ] サイトマップ更新
- [ ] 内部リンク最適化

#### **E. 多言語**
- [ ] 翻訳品質確認
- [ ] 文化的適応性
- [ ] フォント表示確認
- [ ] RTL対応（該当言語）

---

## 🚀 デプロイメント手順

### 1. 本番デプロイ前チェック
```bash
# 1. ファイル整合性確認
ls -la *.html | wc -l  # ファイル数確認

# 2. リンク切れチェック
# 手動でナビゲーション確認

# 3. 画像パス確認
grep -r "src=" *.html | grep -v "http"

# 4. JavaScript動作確認
# 各決済ボタン・フォーム動作確認
```

### 2. Git管理
```bash
# 適切なコミットメッセージ
git add .
git commit -m "feat: Add new product page with multilingual support

- Implement mobile-responsive design
- Add SEO optimization and OGP tags
- Include Stripe payment integration
- Support for 5 languages (JA, EN, ZH, FR, AR)

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

git push origin main
```

---

## 📈 マーケティング・SEO戦略

### グローバルSEO重点項目

#### 1. キーワード戦略
```
日本語: 枡, 檜, 日本伝統工芸, 高級木工品
English: Japanese masu, hinoki cypress, traditional craft, premium woodwork
中文: 日本枡, 桧木, 传统工艺, 高级木制品
Français: artisanat japonais, cyprès hinoki, produit traditionnel
العربية: الحرف اليابانية, خشب الهينوكي, المنتجات التقليدية
```

#### 2. コンテンツマーケティング
- **工芸プロセス記事**: 職人の技術紹介
- **文化背景解説**: 枡の歴史・意義
- **使用方法ガイド**: 日本酒の楽しみ方
- **ギフトガイド**: 贈り物としての提案

#### 3. ソーシャルメディア戦略
- **Instagram**: ビジュアル重視の商品紹介
- **YouTube**: 制作過程動画
- **TikTok**: 短編文化紹介動画
- **LinkedIn**: B2B向けギフト訴求

---

## 👥 チーム協働ガイドライン

### 役割分担

#### **開発チーム**
- **フロントエンド**: HTML/CSS/JavaScript実装
- **バックエンド**: 決済・API統合
- **モバイル**: レスポンシブ最適化
- **QA**: 品質保証・テスト

#### **デザインチーム**
- **UI/UX**: ユーザー体験設計
- **ブランディング**: 視覚的アイデンティティ
- **多言語**: 文化的適応デザイン

#### **マーケティングチーム**
- **SEO**: 検索最適化
- **コンテンツ**: 記事・動画制作
- **SNS**: ソーシャルメディア運用
- **分析**: パフォーマンス測定

#### **プロジェクト管理**
- **スケジュール**: タスク・期限管理
- **品質管理**: レビュー・承認
- **コミュニケーション**: チーム連携
- **リスク管理**: 問題対応

### コミュニケーションルール

#### **日次**
- **スタンドアップ**: 進捗・課題共有（15分）
- **Slack**: リアルタイム連絡
- **GitHub**: コードレビュー・議論

#### **週次**
- **プランニング**: 次週タスク計画
- **レトロスペクティブ**: 改善点議論
- **デモ**: 完成機能の確認

#### **月次**
- **ロードマップレビュー**: 長期計画調整
- **パフォーマンス分析**: KPI確認
- **戦略ミーティング**: 方向性議論

---

## 📊 KPI・成功指標

### ビジネスKPI
- **売上**: 月次売上成長率
- **コンバージョン**: サイト訪問→購入率
- **顧客獲得**: 新規顧客数
- **リピート**: 既存顧客再購入率

### 技術KPI
- **パフォーマンス**: Core Web Vitals スコア
- **SEO**: 検索順位・流入数
- **UX**: 離脱率・滞在時間
- **モバイル**: モバイル利用率・満足度

### エンゲージメントKPI
- **コミュニティ**: アクティブユーザー数
- **コンテンツ**: 記事・動画視聴数
- **SNS**: フォロワー・エンゲージメント率
- **ブランド**: 認知度・好感度

---

## 🔧 トラブルシューティング

### よくある問題と解決法

#### **1. モバイル表示問題**
```html
<!-- 問題: レイアウト崩れ -->
<!-- 解決: viewport設定確認 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes">
```

#### **2. 決済エラー**
```javascript
// 問題: Stripe決済失敗
// 解決: エラーハンドリング実装
try {
    const response = await fetch('/api/stripe/...');
    // ...
} catch (error) {
    console.error('Payment error:', error);
    alert('決済処理でエラーが発生しました。');
}
```

#### **3. 多言語表示問題**
```html
<!-- 問題: フォント表示不具合 -->
<!-- 解決: Noto フォント適用確認 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 緊急時対応プロトコル
1. **問題発見**: Slack #emergency チャンネル通知
2. **影響評価**: ユーザー影響度・緊急度判定
3. **対応開始**: 担当者アサイン・対応開始
4. **解決確認**: 修正・テスト・デプロイ
5. **事後対応**: 原因分析・再発防止策

---

## 📅 今後の開発ロードマップ

### Phase 1: 基盤強化（〜2024年Q4）
- [ ] **管理画面**: 商品・注文管理システム
- [ ] **在庫管理**: リアルタイム在庫同期
- [ ] **顧客管理**: CRM統合
- [ ] **分析ダッシュボード**: 売上・KPI可視化

### Phase 2: 機能拡張（2025年Q1-Q2）
- [ ] **AI レコメンデーション**: 商品推奨システム
- [ ] **AR/VR 体験**: 商品3Dプレビュー
- [ ] **サブスクリプション**: 定期購入システム
- [ ] **ポイントシステム**: 会員特典拡充

### Phase 3: グローバル展開（2025年Q3-Q4）
- [ ] **多地域対応**: 現地化・法規制対応
- [ ] **物流統合**: 国際配送最適化
- [ ] **パートナーシップ**: 現地代理店連携
- [ ] **マルチチャネル**: 実店舗・展示会連携

---

## 📞 サポート・連絡先

### 技術サポート
- **開発関連**: GitHub Issues
- **緊急対応**: Slack #tech-emergency
- **デプロイ**: deployment@fomus.com

### ビジネスサポート
- **企画相談**: planning@fomus.com
- **マーケティング**: marketing@fomus.com
- **パートナーシップ**: partners@fomus.com

### 外部リソース
- **Stripe サポート**: https://support.stripe.com
- **TailwindCSS**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org

---

## 📄 関連ドキュメント

- [開発チェックリスト](DEVELOPMENT-CHECKLIST.md)
- [デプロイメントガイド](DEPLOYMENT-GUIDE.md)
- [SEO戦略書](SEO-STRATEGY.md)
- [チーム作業フロー](TEAM-WORKFLOW.md)

---

**🎊 FOMUS プロジェクトの成功に向けて**

この作業指示書は、FOMUSブランドの独特な価値提案を技術的に実現するための包括的なガイドです。日本の伝統工芸とモダンなエンターテイメントの融合という革新的なコンセプトを、世界最高品質のWebサイトとして具現化していきましょう。

**匠の技 × デジタル革新 × グローバルリーチ**

この三位一体のビジョンを、チーム一丸となって実現していきます。