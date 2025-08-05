# FOMUS OGP（Open Graph Protocol）設定ガイド

**最終更新**: 2025年8月5日

---

## 📱 OGP設定概要

FOMUSウェブサイトのソーシャルメディア共有時の表示を最適化するためのOGP設定が完了しました。

### 設定済みファイル
- `index.html` - 言語選択ページ
- `index-ja.html` - 日本語版
- `index-en.html` - 英語版
- `index-zh.html` - 中国語版
- `index-fr.html` - フランス語版
- `index-ar.html` - アラビア語版

---

## 🖼️ OGP画像

### 現在の設定
- **画像URL**: `https://fomus.com/fomus-ogp-image.jpg`
- **推奨サイズ**: 1200x630px
- **フォーマット**: JPG
- **最大ファイルサイズ**: 5MB

### OGP画像の作成方法

#### 方法1: HTMLテンプレートから作成
1. `ogp-image-template.html`をブラウザで開く
2. ブラウザサイズを1200x630pxに調整
3. スクリーンショットを撮影
4. `fomus-ogp-image.jpg`として保存

#### 方法2: デザインツールで作成
推奨ツール：
- Canva
- Figma
- Adobe Photoshop
- Sketch

デザイン要素：
- **背景**: ダークグレーのグラデーション (#1a1a1a → #2c2c2c)
- **ロゴ**: FOMUSロゴ（ゴールドグラデーション #FFD700 → #FFA500）
- **タグライン**: "More than a Product, It's a Cultural Experience"
- **サブタイトル**: 各言語版に応じた説明文
- **装飾**: ゴールドのアクセント要素

---

## 🔧 OGP設定内容

### 基本構造
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="[ページURL]">
<meta property="og:title" content="FOMUS - More than a Product, It's a Cultural Experience">
<meta property="og:description" content="[言語別説明文]">
<meta property="og:image" content="https://fomus.com/fomus-ogp-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="[言語コード]">
<meta property="og:site_name" content="FOMUS">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="[ページURL]">
<meta name="twitter:title" content="FOMUS - More than a Product, It's a Cultural Experience">
<meta name="twitter:description" content="[言語別説明文]">
<meta name="twitter:image" content="https://fomus.com/fomus-ogp-image.jpg">
```

### 言語別locale設定
- 日本語: `ja_JP`
- 英語: `en_US`
- 中国語: `zh_CN`
- フランス語: `fr_FR`
- アラビア語: `ar_AE`

---

## ✅ テスト方法

### 1. Facebook Sharing Debugger
- URL: https://developers.facebook.com/tools/debug/
- 各ページのURLを入力してテスト
- キャッシュクリアが必要な場合は「Scrape Again」をクリック

### 2. Twitter Card Validator
- URL: https://cards-dev.twitter.com/validator
- 各ページのURLを入力してプレビュー確認

### 3. LinkedIn Post Inspector
- URL: https://www.linkedin.com/post-inspector/
- ビジネス向けSNSでの表示確認

---

## 🚀 デプロイ後のチェックリスト

1. [ ] OGP画像ファイル（fomus-ogp-image.jpg）をサーバーにアップロード
2. [ ] 画像URLが正しくアクセス可能か確認
3. [ ] 各言語版ページでOGP設定が正しく表示されるか確認
4. [ ] Facebook Debuggerでキャッシュをクリア
5. [ ] 実際にSNSでシェアしてプレビューを確認

---

## 📊 期待される効果

1. **クリック率向上**: 魅力的なOGP画像により20-30%向上
2. **ブランド認知**: 統一されたビジュアルでブランド印象強化
3. **多言語対応**: 各言語圏でのローカライズされた表示
4. **プロフェッショナル**: 高品質な画像による信頼性向上

---

## 🔄 更新方法

OGP画像を更新する場合：
1. 新しい画像を同じファイル名で作成
2. サーバーにアップロード
3. 各SNSのデバッガーでキャッシュをクリア
4. 必要に応じてURLにパラメータを追加（例: ?v=2）

---

## 📝 注意事項

- OGP画像は最初のシェア時にキャッシュされるため、変更後は必ずデバッガーでキャッシュクリアが必要
- 画像サイズが大きすぎるとSNSによっては表示されない場合がある
- テキストは画像の20%以内に収めることを推奨（Facebook広告ガイドライン）
- モバイルでの表示も考慮し、重要な要素は中央に配置

---

## 🆘 トラブルシューティング

### 画像が表示されない場合
- 画像URLが正しくアクセス可能か確認
- HTTPSでアクセス可能か確認
- 画像サイズが5MB以下か確認
- Content-Typeが正しく設定されているか確認

### 古い画像が表示される場合
- 各SNSのデバッガーでキャッシュクリア
- URLにバージョンパラメータを追加
- 24時間待ってから再度確認

お問い合わせ: fomus.official@gmail.com