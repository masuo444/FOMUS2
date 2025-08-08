# FOMUS Google Analytics & Tag Manager セットアップガイド

## 🚀 クイックスタート

### 必要なアカウント
1. **Googleアカウント** (既存のものでOK)
2. **Google Analytics アカウント**
3. **Google Tag Manager アカウント**

## 📊 Step 1: Google Analytics 4 (GA4) セットアップ

### 1.1 Google Analytics にアクセス
1. https://analytics.google.com/ にアクセス
2. Googleアカウントでログイン

### 1.2 プロパティ作成
1. 「管理」→「プロパティを作成」
2. **プロパティ名**: `FOMUS - Japanese Traditional Crafts`
3. **レポートのタイムゾーン**: `日本`
4. **通貨**: `米ドル (USD)` ※国際サイトのため

### 1.3 データストリーム作成
1. 「ウェブ」を選択
2. **ウェブサイトのURL**: `https://www.fomusglobal.com`
3. **ストリーム名**: `FOMUS Website`
4. **測定ID**をメモ: `G-XXXXXXXXXX`

## 🏷️ Step 2: Google Tag Manager (GTM) セットアップ

### 2.1 Tag Manager にアクセス
1. https://tagmanager.google.com/ にアクセス
2. 「アカウントを作成」

### 2.2 コンテナ作成
1. **アカウント名**: `FOMUS`
2. **コンテナ名**: `www.fomusglobal.com`
3. **コンテナの種類**: `ウェブ`
4. **コンテナID**をメモ: `GTM-XXXXXXX`

## 🔧 Step 3: コード実装

### 3.1 プレースホルダー置換
以下のファイルでプレースホルダーを実際のIDに置換：

**対象ファイル**: `index-en.html` (および他の全ページ)

**置換箇所**:
```html
<!-- 置換前 -->
GTM-PLACEHOLDER  →  GTM-XXXXXXX (実際のコンテナID)
GA4-PLACEHOLDER  →  G-XXXXXXXXXX (実際の測定ID)

<!-- 例 -->
GTM-PLACEHOLDER  →  GTM-K2S9V8M
GA4-PLACEHOLDER  →  G-ABC123XYZ9
```

### 3.2 自動置換用コマンド
```bash
# GTM ID 置換
sed -i 's/GTM-PLACEHOLDER/GTM-実際のID/g' *.html

# GA4 ID 置換  
sed -i 's/GA4-PLACEHOLDER/G-実際のID/g' *.html
```

## 📈 Step 4: GTM設定（Tag Manager内）

### 4.1 Google Analytics タグ設定
1. GTM管理画面で「タグ」→「新規」
2. **タグ名**: `GA4 - Configuration`
3. **タグタイプ**: `Googleアナリティクス: GA4設定`
4. **測定ID**: `G-XXXXXXXXXX`

### 4.2 Enhanced Ecommerce用変数設定
1. 「変数」→「新規」で以下を作成:

**カスタムディメンション**:
- `craft_type` (工芸品タイプ)
- `product_category` (商品カテゴリ)  
- `language_preference` (言語設定)

### 4.3 イベント追跡設定
1. **商品ページビュー**
   - トリガー: ページビュー
   - 条件: URLに`product-`を含む

2. **言語切り替え**
   - トリガー: カスタムイベント
   - イベント名: `language_switch`

3. **フォーム送信**
   - トリガー: フォーム送信
   - 対象: 問い合わせ・注文フォーム

## 🎯 Step 5: 測定対象イベント

### 5.1 自動追跡イベント
- ✅ ページビュー (全ページ)
- ✅ セッション開始/終了
- ✅ スクロール深度 (25%, 50%, 75%, 100%)
- ✅ 外部リンククリック
- ✅ ファイルダウンロード

### 5.2 カスタム追跡イベント
- 🎌 **言語切り替え**: 多言語対応の効果測定
- 🍶 **MASU商品関心**: 商品ページでの行動
- 📧 **問い合わせフォーム**: リード獲得
- 🛒 **カート追加**: 購入意向
- 🔍 **検索流入**: オーガニック検索効果

### 5.3 Enhanced Ecommerce
- **商品表示**: 商品ページビュー
- **カート追加**: Add to Cart
- **購入プロセス**: Checkout steps
- **売上**: Purchase completion

## 📊 Step 6: 測定可能な主要指標

### 6.1 SEO効果測定
- **オーガニック検索流入**: Google/Bing経由
- **検索キーワード**: Search Console連携
- **ページ別パフォーマンス**: 各ページの効果
- **地域別流入**: 国/地域別アクセス

### 6.2 国際化効果測定
- **言語別パフォーマンス**: 5言語の利用状況
- **地域別コンバージョン**: 各国での成果
- **多言語SEO効果**: hreflang効果測定

### 6.3 商品関心度測定
- **MASU関連ページビュー**: 商品への関心
- **滞在時間**: エンゲージメント度
- **離脱率**: ページ改善ポイント
- **コンバージョン率**: 最終成果

## 🔍 Step 7: カスタムレポート設定

### 7.1 日本伝統工芸品レポート
- **ディメンション**: 商品カテゴリ、工芸品タイプ
- **指標**: ページビュー、滞在時間、コンバージョン
- **フィルター**: 工芸品関連ページのみ

### 7.2 多言語サイト効果レポート
- **ディメンション**: 言語、地域、デバイス
- **指標**: セッション、ユーザー、コンバージョン
- **セグメント**: 言語別ユーザー行動

### 7.3 SEO効果測定レポート
- **ディメンション**: 流入元、キーワード、ページ
- **指標**: オーガニック流入、検索順位、CTR
- **目標**: Search Console連携データ

## ⚡ Step 8: 実装確認

### 8.1 リアルタイムテスト
1. GA4の「リアルタイム」で即座確認
2. 各ページにアクセスしてデータ確認
3. カスタムイベントの発火確認

### 8.2 デバッグツール
1. **Google Tag Assistant**: Chrome拡張
2. **GTM Preview mode**: タグ動作確認
3. **GA4 DebugView**: リアルタイムデバッグ

## 🎯 実装優先度

### 即座実装 (5分)
- [x] **GA4測定ID設定**: 基本流入測定
- [x] **GTMコンテナID設定**: タグ管理
- [ ] **プレースホルダー置換**: 実際のID入力

### 1週間以内
- [ ] **Enhanced Ecommerce**: 商品別詳細分析
- [ ] **カスタムイベント**: 日本工芸品特化測定
- [ ] **Search Console連携**: SEO効果統合分析

### 1ヶ月以内  
- [ ] **カスタムレポート**: 業界特化分析
- [ ] **目標設定**: KPI達成測定
- [ ] **自動アラート**: 重要変化の通知

## 📞 サポート情報

### トラブルシューティング
- **データが表示されない**: ID設定確認、24時間待機
- **イベントが発火しない**: GTM Preview modeで確認
- **重複データ**: 直接GA4とGTM両方設置していないか確認

### 学習リソース
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [Google Tag Manager Help](https://support.google.com/tagmanager/)
- [Enhanced Ecommerce Guide](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)

---

**実装後の効果**: 詳細な流入分析により、SEO施策の効果が数値で確認でき、さらなる最適化が可能になります。