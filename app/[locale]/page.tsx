'use client';

import { useEffect } from 'react';
import Head from 'next/head';

// 決済処理関数
async function purchaseMembership(tier: string) {
  try {
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        membershipTier: tier,
        successUrl: `${window.location.origin}/success?membership=${tier}`,
        cancelUrl: window.location.href
      }),
    });
    
    const { url } = await response.json();
    
    if (url) {
      window.location.href = url;
    } else {
      alert('決済処理でエラーが発生しました。しばらく後でお試しください。');
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('決済処理でエラーが発生しました。しばらく後でお試しください。');
  }
}

export default function HomePage() {
  useEffect(() => {
    // 決済関数をグローバルに設定
    (window as any).purchaseMembership = purchaseMembership;
  }, []);

  return (
    <>
      <Head>
        <title>FOMUS - More than a Product, It's a Cultural Experience</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div 
        className="min-h-screen bg-cream text-obsidian"
        style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              body { font-family: 'Noto Sans JP', sans-serif; }
              .font-heading { font-family: 'Noto Serif JP', serif; }
              .btn-primary {
                background: #c7a253;
                color: #141414;
                padding: 1rem 2rem;
                font-weight: 600;
                transition: all 0.3s;
                border: 2px solid #c7a253;
              }
              .btn-primary:hover {
                background: #141414;
                color: #c7a253;
              }
              .btn-secondary {
                background: transparent;
                color: #c7a253;
                padding: 1rem 2rem;
                font-weight: 600;
                border: 2px solid #c7a253;
                transition: all 0.3s;
              }
              .btn-secondary:hover {
                background: #c7a253;
                color: #141414;
              }
              .text-gradient-gold {
                background: linear-gradient(135deg, #c7a253 0%, #ffd700 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
              .bg-gradient-fomus {
                background: linear-gradient(135deg, #f8f6f0 0%, #d0c5b1 100%);
              }
              .pillar-card {
                background: white;
                border-radius: 0.5rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                transition: all 0.5s;
                overflow: hidden;
              }
              .pillar-card:hover {
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                transform: scale(1.05);
              }
            </style>

            <!-- ヘッダー -->
            <nav class="bg-cream/95 backdrop-blur-sm border-b border-hinoki fixed w-full z-50" style="background: rgba(248, 246, 240, 0.95); backdrop-filter: blur(8px); border-bottom: 1px solid #d0c5b1;">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center py-4">
                        <!-- ロゴ -->
                        <div class="flex items-center">
                            <img src="/FOMUSlogo_edited.png" alt="FOMUS" class="h-8">
                        </div>
                        
                        <!-- ナビゲーション -->
                        <div class="hidden lg:flex items-center space-x-8">
                            <a href="#home" class="text-obsidian hover:text-gold transition-colors duration-200 font-medium" style="color: #141414; transition: color 0.2s;">ホーム</a>
                            <a href="#craft" class="text-obsidian hover:text-gold transition-colors duration-200 font-medium" style="color: #141414; transition: color 0.2s;">工芸</a>
                            <a href="#life" class="text-obsidian hover:text-gold transition-colors duration-200 font-medium" style="color: #141414; transition: color 0.2s;">ライフスタイル</a>
                            <a href="#entertainment" class="text-obsidian hover:text-gold transition-colors duration-200 font-medium" style="color: #141414; transition: color 0.2s;">エンターテインメント</a>
                            <a href="#membership" class="text-obsidian hover:text-gold transition-colors duration-200 font-medium" style="color: #141414; transition: color 0.2s;">メンバーシップ</a>
                            <a href="#contact" class="text-obsidian hover:text-gold transition-colors duration-200 font-medium" style="color: #141414; transition: color 0.2s;">お問い合わせ</a>
                        </div>
                        
                        <!-- 言語切り替え（後で実装） -->
                        <div class="flex items-center space-x-4">
                            <span class="text-sm text-obsidian/60" style="color: rgba(20, 20, 20, 0.6);">JP</span>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- ヒーローセクション -->
            <section id="home" class="relative h-screen w-full overflow-hidden">
                <!-- 背景 -->
                <div class="absolute inset-0">
                    <div class="absolute inset-0 bg-cream" style="background: #f8f6f0;"></div>
                </div>
                
                <!-- ヒーローコンテンツ -->
                <div class="absolute inset-0 flex items-center justify-center px-4">
                    <div class="max-w-7xl mx-auto w-full">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <!-- 左側：ロゴ -->
                            <div class="flex justify-center lg:justify-center">
                                <img src="/FOMUSlogo_edited.png" alt="FOMUS" class="h-32 md:h-48 lg:h-64 xl:h-80 max-w-full">
                            </div>
                            
                            <!-- 右側：テキストコンテンツ -->
                            <div class="text-center lg:text-left">
                                <!-- キャッチコピー -->
                                <h1 class="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 text-obsidian leading-tight" style="font-family: 'Noto Serif JP', serif; color: #141414;">
                                    <span class="block">More than a Product,</span>
                                    <span class="block text-gold" style="color: #c7a253;">It's a Cultural Experience.</span>
                                </h1>
                                
                                <!-- サブコピー -->
                                <p class="text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light mb-12" style="color: rgba(20, 20, 20, 0.8);">
                                    日本の伝統、世界に響く体験へ。<br>
                                    <span class="text-base md:text-lg text-obsidian/60" style="color: rgba(20, 20, 20, 0.6);">Japanese craftsmanship, curated for the world's most discerning collectors.</span>
                                </p>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <!-- FOMUSについて -->
            <section id="about" class="py-20 bg-cream" style="background: #f8f6f0;">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <!-- テキストコンテンツ -->
                        <div>
                            <div class="mb-8">
                                <h2 class="font-heading text-sm text-gold mb-2" style="font-family: 'Noto Serif JP', serif; color: #c7a253;">Our Philosophy</h2>
                                <h3 class="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-obsidian" style="font-family: 'Noto Serif JP', serif; color: #141414;">
                                    FOMUSとは<br>
                                    <span class="text-2xl md:text-3xl lg:text-4xl text-obsidian/70" style="color: rgba(20, 20, 20, 0.7);">Who We Are</span>
                                </h3>
                            </div>
                            
                            <div class="space-y-6 text-lg text-obsidian/80 leading-relaxed" style="color: rgba(20, 20, 20, 0.8);">
                                <p>
                                    FOMUSは、日本の伝統文化と現代アートを融合させ、<br>
                                    世界中の人々に"心に残る体験"を届けるカルチャーブランドです。
                                </p>
                                <p>
                                    職人の手仕事・物語性・美意識を掛け合わせたプロダクトを通じて、<br>
                                    日本の精神と美学を次世代へと紡いでいきます。
                                </p>
                            </div>
                        </div>
                        
                        <!-- ビジュアル -->
                        <div class="relative">
                            <div class="grid grid-cols-2 gap-4">
                                <!-- 職人の手元 -->
                                <div class="aspect-square rounded-lg overflow-hidden shadow-lg">
                                    <img src="/職人の手元.JPG" alt="職人の手元" class="w-full h-full object-cover">
                                </div>
                                <!-- アート制作の過程 -->
                                <div class="aspect-square rounded-lg overflow-hidden shadow-lg">
                                    <img src="/制作過程.png" alt="制作過程" class="w-full h-full object-cover">
                                </div>
                                <!-- プレースホルダー3 -->
                                <div class="aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-hinoki/30 to-gold/30 flex items-center justify-center" style="background: linear-gradient(to bottom right, rgba(208, 197, 177, 0.3), rgba(199, 162, 83, 0.3));">
                                    <div class="text-center">
                                        <div class="w-12 h-12 bg-gold/30 rounded-full mx-auto mb-2" style="background: rgba(199, 162, 83, 0.3);"></div>
                                        <p class="text-obsidian/60 text-sm" style="color: rgba(20, 20, 20, 0.6);">画像準備中</p>
                                    </div>
                                </div>
                                <!-- プレースホルダー4 -->
                                <div class="aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gold/30 to-hinoki/30 flex items-center justify-center" style="background: linear-gradient(to bottom right, rgba(199, 162, 83, 0.3), rgba(208, 197, 177, 0.3));">
                                    <div class="text-center">
                                        <div class="w-12 h-12 bg-hinoki/30 rounded-full mx-auto mb-2" style="background: rgba(208, 197, 177, 0.3);"></div>
                                        <p class="text-obsidian/60 text-sm" style="color: rgba(20, 20, 20, 0.6);">画像準備中</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 装飾要素 -->
                            <div class="absolute -top-4 -right-4 w-24 h-24 border border-gold/20 rounded-full" style="border-color: rgba(199, 162, 83, 0.2);"></div>
                            <div class="absolute -bottom-4 -left-4 w-16 h-16 border border-hinoki/30 rounded-full" style="border-color: rgba(208, 197, 177, 0.3);"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 4つのコレクション -->
            <section class="py-20 bg-gradient-fomus" style="background: linear-gradient(135deg, #f8f6f0 0%, #d0c5b1 100%);">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="font-heading text-4xl md:text-6xl font-light text-obsidian mb-8" style="font-family: 'Noto Serif JP', serif; color: #141414;">4つのコレクション</h2>
                        <p class="text-lg text-obsidian/70 max-w-3xl mx-auto" style="color: rgba(20, 20, 20, 0.7);">
                            日本文化の多面的な世界を、厳選されたコレクションと特別なプログラムを通じてご体験ください。
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- 工芸コレクション -->
                        <div class="pillar-card">
                            <div class="h-64 bg-gradient-to-br from-orange-400/30 to-orange-500/30 flex items-center justify-center">
                                <div class="text-center p-6">
                                    <div class="w-20 h-20 bg-orange-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <div class="w-8 h-8 bg-orange-500/40 rounded"></div>
                                    </div>
                                    <h3 class="font-heading text-3xl font-semibold text-obsidian" style="font-family: 'Noto Serif JP', serif; color: #141414;">CRAFT</h3>
                                    <p class="text-sm text-obsidian/60 mt-2" style="color: rgba(20, 20, 20, 0.6);">CRAFT</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-obsidian/70 mb-4 leading-relaxed" style="color: rgba(20, 20, 20, 0.7);">
                                    伝統的な日本の工芸品を現代的に再解釈。MASUコレクションから厳選された職人作品まで。
                                </p>
                                <ul class="text-sm text-obsidian/60 space-y-1 mb-8" style="color: rgba(20, 20, 20, 0.6);">
                                    <li>• MASU</li>
                                    <li>• FOMUS PARURE (jewelry)</li>
                                    <li>• MASUKAME</li>
                                </ul>
                                <div class="flex">
                                    <a href="/masu-collection.html" class="inline-block bg-gold text-obsidian px-6 py-3 font-semibold hover:bg-obsidian hover:text-gold transition-colors rounded-lg border-2 border-gold" style="background: #c7a253; color: #141414; border-color: #c7a253; text-decoration: none;">
                                        詳しく見る
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- ライフスタイルコレクション -->
                        <div class="pillar-card">
                            <div class="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                <div class="text-center p-6">
                                    <div class="w-20 h-20 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <div class="w-8 h-8 bg-green-500/40 rounded"></div>
                                    </div>
                                    <h3 class="font-heading text-3xl font-semibold text-obsidian" style="font-family: 'Noto Serif JP', serif; color: #141414;">LIFE</h3>
                                    <p class="text-sm text-obsidian/60 mt-2" style="color: rgba(20, 20, 20, 0.6);">LIFE</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-obsidian/70 mb-4 leading-relaxed" style="color: rgba(20, 20, 20, 0.7);">
                                    日常に伝統を溶け込ませる高品質プロダクト。プレミアムな日本のライフスタイルを。
                                </p>
                                <ul class="text-sm text-obsidian/60 space-y-1 mb-8" style="color: rgba(20, 20, 20, 0.6);">
                                    <li>• 抹茶＆日本茶</li>
                                    <li>• アロマティックシリーズ</li>
                                    <li>• ウェルネス製品</li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- エンターテインメントコレクション -->
                        <div class="pillar-card">
                            <div class="h-64 bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center">
                                <div class="text-center p-6">
                                    <div class="w-20 h-20 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <div class="w-8 h-8 bg-purple-500/40 rounded"></div>
                                    </div>
                                    <h3 class="font-heading text-3xl font-semibold text-obsidian" style="font-family: 'Noto Serif JP', serif; color: #141414;">エンターテインメント</h3>
                                    <p class="text-sm text-obsidian/60 mt-2" style="color: rgba(20, 20, 20, 0.6);">ENTERTAINMENT</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-obsidian/70 mb-8 leading-relaxed" style="color: rgba(20, 20, 20, 0.7);">
                                    KUKUプロジェクトを通じた文化IP展開。アニメーション、アート、デジタルコレクティブル。
                                </p>
                                <div class="flex">
                                    <a href="#entertainment" class="inline-block bg-gold text-obsidian px-6 py-3 font-semibold hover:bg-obsidian hover:text-gold transition-colors rounded-lg border-2 border-gold" style="background: #c7a253; color: #141414; border-color: #c7a253; text-decoration: none;">
                                        詳しく見る
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 会員権コレクション -->
                        <div class="pillar-card">
                            <div class="h-64 bg-gradient-to-br from-gold/30 to-gold/50 flex items-center justify-center" style="background: linear-gradient(to bottom right, rgba(199, 162, 83, 0.3), rgba(199, 162, 83, 0.5));">
                                <div class="text-center p-6">
                                    <div class="w-20 h-20 bg-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center" style="background: rgba(199, 162, 83, 0.3);">
                                        <div class="w-8 h-8 bg-gold/50 rounded" style="background: rgba(199, 162, 83, 0.5);"></div>
                                    </div>
                                    <h3 class="font-heading text-3xl font-semibold text-obsidian" style="font-family: 'Noto Serif JP', serif; color: #141414;">メンバーシップ</h3>
                                    <p class="text-sm text-obsidian/60 mt-2" style="color: rgba(20, 20, 20, 0.6);">MEMBERSHIP</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-obsidian/70 mb-4 leading-relaxed" style="color: rgba(20, 20, 20, 0.7);">
                                    伝統と革新のその先へ──FOMUSメンバーとして未来をともに。日本文化の継承と発展にご参加ください。
                                </p>
                                <ul class="text-sm text-obsidian/60 space-y-1 mb-8" style="color: rgba(20, 20, 20, 0.6);">
                                    <li>• VIP会員権</li>
                                    <li>• 文化支援</li>
                                    <li>• 限定イベント</li>
                                </ul>
                                <div class="flex">
                                    <a href="/membership.html" class="inline-block bg-gold text-obsidian px-6 py-3 font-semibold hover:bg-obsidian hover:text-gold transition-colors rounded-lg border-2 border-gold" style="background: #c7a253; color: #141414; border-color: #c7a253; text-decoration: none;">
                                        詳しく見る
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 工芸セクション -->
            <section id="craft" class="py-20 bg-cream" style="background: #f8f6f0;">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="font-heading text-5xl md:text-7xl font-light text-obsidian mb-6" style="font-family: 'Noto Serif JP', serif; color: #141414;">工芸</h2>
                        <p class="text-xl text-obsidian/70 max-w-3xl mx-auto" style="color: rgba(20, 20, 20, 0.7);">
                            何世紀もの技術と現代デザインが出会う場所。それぞれの作品が熟練と革新の物語を語ります。
                        </p>
                    </div>
                    
                    <!-- MASUコレクションショーケース -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <a href="/masu-collection.html" class="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105" style="text-decoration: none;">
                            <div class="aspect-square overflow-hidden bg-gradient-to-br from-cream to-hinoki/20" style="background: linear-gradient(to bottom right, #f8f6f0, rgba(208, 197, 177, 0.2));">
                                <img src="/MASU collection.png" alt="MASUコレクション" class="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-6">
                                <h3 class="font-heading text-2xl font-semibold text-obsidian mb-2" style="font-family: 'Noto Serif JP', serif; color: #141414;">MASUコレクション</h3>
                                <p class="text-obsidian/70" style="color: rgba(20, 20, 20, 0.7);">1300年の歴史ある枡</p>
                            </div>
                        </a>
                        
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <div class="aspect-square overflow-hidden bg-gradient-to-br from-cream to-gold/20" style="background: linear-gradient(to bottom right, #f8f6f0, rgba(199, 162, 83, 0.2));">
                                <img src="/FOMUS PARURE.png" alt="FOMUS PARURE" class="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-6">
                                <h3 class="font-heading text-2xl font-semibold text-obsidian mb-2" style="font-family: 'Noto Serif JP', serif; color: #141414;">FOMUS PARURE (枡ジュエリー)</h3>
                                <p class="text-obsidian/70" style="color: rgba(20, 20, 20, 0.7);">伝統的な形状から着想を得た精巧なアクセサリー</p>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <div class="aspect-square overflow-hidden bg-gradient-to-br from-cream to-obsidian/10" style="background: linear-gradient(to bottom right, #f8f6f0, rgba(20, 20, 20, 0.1));">
                                <img src="/MASUKAME.jpg" alt="MASUKAME" class="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-6">
                                <h3 class="font-heading text-2xl font-semibold text-obsidian mb-2" style="font-family: 'Noto Serif JP', serif; color: #141414;">MASUKAME</h3>
                                <p class="text-obsidian/70" style="color: rgba(20, 20, 20, 0.7);">亀をモチーフにしたFOMUSによる究極のハンドメイド作品。</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <!-- ライフスタイルセクション -->
            <section id="life" class="py-20 bg-gradient-fomus" style="background: linear-gradient(135deg, #f8f6f0 0%, #d0c5b1 100%);">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="font-heading text-5xl md:text-7xl font-light text-obsidian mb-6" style="font-family: 'Noto Serif JP', serif; color: #141414;">ライフスタイル</h2>
                        <div class="bg-gold/20 rounded-lg p-6 mb-8 max-w-md mx-auto" style="background: rgba(199, 162, 83, 0.2);">
                            <p class="text-gold font-semibold text-xl" style="color: #c7a253;">準備中</p>
                            <p class="text-obsidian/70 text-sm mt-2" style="color: rgba(20, 20, 20, 0.7);">近日公開予定</p>
                        </div>
                        <p class="text-xl text-obsidian/70 max-w-3xl mx-auto" style="color: rgba(20, 20, 20, 0.7);">
                            日常の瞬間を美の儀式へと変える、厳選されたライフスタイルコレクション。
                        </p>
                    </div>
                    
                    <!-- 抹茶＆日本茶 -->
                    <div class="max-w-5xl mx-auto opacity-75">
                        <div class="bg-white rounded-lg shadow-lg p-8 relative">
                            <div class="absolute top-4 right-4 bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold" style="background: rgba(199, 162, 83, 0.2); color: #c7a253;">
                                準備中
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 class="font-heading text-3xl font-semibold text-obsidian mb-6" style="font-family: 'Noto Serif JP', serif; color: #141414;">抹茶＆日本茶</h3>
                                    <p class="text-obsidian/70 mb-6" style="color: rgba(20, 20, 20, 0.7);">
                                        何世紀もの歴史を持つ茶園から調達した、儀式用グレードの抹茶と希少な茶葉。
                                        それぞれのブレンドが日本の茶の遺産を巡る旅です。
                                    </p>
                                </div>
                                <div>
                                    <div class="grid grid-cols-2 gap-4 mb-6">
                                        <div class="text-center p-4 bg-green-50 rounded">
                                            <p class="text-2xl mb-1">🍵</p>
                                            <p class="font-semibold text-obsidian" style="color: #141414;">プレミアム抹茶</p>
                                        </div>
                                        <div class="text-center p-4 bg-green-50 rounded">
                                            <p class="text-2xl mb-1">🍃</p>
                                            <p class="font-semibold text-obsidian" style="color: #141414;">希少煎茶</p>
                                        </div>
                                    </div>
                                    <button class="btn-secondary w-full opacity-50 cursor-not-allowed" disabled>茶コレクションを見る</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- エンターテインメントセクション -->
            <section id="entertainment" class="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-cream" style="background: linear-gradient(to bottom right, #064e3b, #065f46, #166534); color: #f8f6f0;">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="font-heading text-6xl md:text-8xl font-light text-cream mb-4" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">ENTERTAINMENT</h2>
                        <p class="text-lg md:text-xl font-light text-emerald-200/80 tracking-widest mb-8" style="color: rgba(167, 243, 208, 0.8);">
                            – Nature's Mythology Reborn –
                        </p>
                        <div class="max-w-4xl mx-auto mb-8">
                            <h3 class="font-heading text-4xl md:text-5xl font-light text-cream mb-4" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">
                                KUKU
                            </h3>
                            <p class="text-2xl md:text-3xl font-heading font-light text-emerald-200 mb-6" style="font-family: 'Noto Serif JP', serif; color: #a7f3d0;">
                                文化と物語の力で、世界をつなぐプロジェクト
                            </p>
                            <p class="text-lg md:text-xl text-cream/90 font-light leading-relaxed" style="color: rgba(248, 246, 240, 0.9);">
                                KUKUは、日本の伝統文化と現代のクリエイティブを融合させた、FOMUSが展開するグローバルIPプロジェクトです。<br>
                                アート、クラフト、アニメーション、書籍、そしてテクノロジーまでを横断し、物語を軸に多様なプロダクトや体験を創出します。
                            </p>
                        </div>
                        <p class="text-xl text-cream/90 max-w-4xl mx-auto font-light leading-relaxed" style="color: rgba(248, 246, 240, 0.9);">
                            このプロジェクトでは、単なるコンテンツ制作にとどまらず、世界中の人々が参加し、応援し、共に文化を育てていける"開かれた創作の場"を目指しています。
                        </p>
                    </div>
                    
                    <!-- KUKUメインビジュアル -->
                    <div class="mb-16">
                        <div class="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20" style="border-color: rgba(34, 197, 94, 0.2);">
                            <img src="/KUKU.jpg" alt="KUKU Characters" class="w-full h-full object-cover">
                            <!-- 自然風装飾 -->
                            <div class="absolute inset-0">
                                <div class="absolute top-8 left-8 w-24 h-24 border border-emerald-400/30 rounded-full opacity-40" style="border-color: rgba(52, 211, 153, 0.3);"></div>
                                <div class="absolute bottom-12 right-12 w-16 h-16 border border-emerald-300/20 rounded-full opacity-30" style="border-color: rgba(110, 231, 183, 0.2);"></div>
                                <div class="absolute top-1/3 right-1/4 w-12 h-12 border border-emerald-500/25 rounded-full opacity-35" style="border-color: rgba(34, 197, 94, 0.25);"></div>
                            </div>
                        </div>
                    </div>

                    <!-- KUKUプロジェクト詳細 -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div class="bg-gradient-to-br from-emerald-800/20 to-green-800/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20" style="background: linear-gradient(to bottom right, rgba(31, 122, 140, 0.2), rgba(22, 101, 52, 0.2)); border-color: rgba(34, 197, 94, 0.2);">
                            <h4 class="font-heading text-3xl font-light text-emerald-200 mb-8" style="font-family: 'Noto Serif JP', serif; color: #a7f3d0;">プロジェクトビジョン</h4>
                            <div class="text-center mb-8">
                                <p class="text-2xl md:text-3xl font-heading font-light text-emerald-200 mb-6" style="font-family: 'Noto Serif JP', serif; color: #a7f3d0;">
                                    "千年先へと続く、新しい文化のエコシステムをつくる。"
                                </p>
                            </div>
                            
                            <p class="text-cream/90 mb-6 text-lg leading-relaxed font-light" style="color: rgba(248, 246, 240, 0.9);">
                                KUKUの物語には、日本の象徴的な伝統工芸「枡」も重要な要素として登場します。<br>
                                その枡は、FOMUSのクラフトラインと連動し、アートとしても、文化の象徴としても機能しています。
                            </p>
                            
                            <p class="text-cream/80 mb-6 text-lg leading-relaxed font-light" style="color: rgba(248, 246, 240, 0.8);">
                                私たちはこの物語を軸に、<br>
                                – 日本の精神性と美意識<br>
                                – 世界に誇るクラフトマンシップ<br>
                                – ドバイを拠点とする最先端のテクノロジーと市場アクセス
                            </p>
                            
                            <p class="text-cream/80 mb-8 text-lg leading-relaxed font-light" style="color: rgba(248, 246, 240, 0.8);">
                                これらを掛け合わせ、絵本、アニメ、AI、NFT、グッズ、教育コンテンツ、ライセンスビジネスなどへと展開。<br>
                                物語とプロダクトが循環し合い、文化と経済の両面で持続可能なモデルを築いていきます。
                            </p>
                        </div>
                        
                        <div class="bg-gradient-to-br from-green-800/20 to-emerald-800/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20" style="background: linear-gradient(to bottom right, rgba(22, 101, 52, 0.2), rgba(31, 122, 140, 0.2)); border-color: rgba(34, 197, 94, 0.2);">
                            <h4 class="font-heading text-3xl font-light text-emerald-200 mb-8 text-center" style="font-family: 'Noto Serif JP', serif; color: #a7f3d0;">展開メディア</h4>
                            <div class="grid grid-cols-2 gap-6">
                                <!-- 小説 -->
                                <div class="relative bg-gradient-to-br from-emerald-500/10 via-emerald-600/15 to-emerald-700/20 rounded-xl p-6 text-center hover:from-emerald-400/15 hover:via-emerald-500/20 hover:to-emerald-600/25 transition-all duration-500 border border-emerald-400/30 hover:border-emerald-300/50 shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-1">
                                    <div class="absolute top-2 right-2">
                                        <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" style="background: #4ade80;"></div>
                                    </div>
                                    <div class="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-emerald-600/40 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-emerald-300/30">
                                        <span class="text-2xl">📚</span>
                                    </div>
                                    <h5 class="font-heading text-xl font-semibold text-cream mb-3 tracking-wide" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">小説</h5>
                                    <div class="inline-flex items-center px-3 py-1 bg-emerald-400/20 text-emerald-200 text-sm font-medium rounded-full border border-emerald-400/30" style="background: rgba(52, 211, 153, 0.2); color: #a7f3d0; border-color: rgba(52, 211, 153, 0.3);">
                                        <div class="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" style="background: #4ade80;"></div>
                                        公開中
                                    </div>
                                </div>
                                
                                <!-- 絵本 -->
                                <div class="relative bg-gradient-to-br from-slate-500/10 via-slate-600/15 to-slate-700/20 rounded-xl p-6 text-center hover:from-slate-400/15 hover:via-slate-500/20 hover:to-slate-600/25 transition-all duration-500 border border-slate-400/20 hover:border-slate-300/30 shadow-lg transform hover:-translate-y-1">
                                    <div class="absolute top-2 right-2">
                                        <div class="w-3 h-3 bg-slate-400/50 rounded-full" style="background: rgba(148, 163, 184, 0.5);"></div>
                                    </div>
                                    <div class="w-16 h-16 bg-gradient-to-br from-slate-400/20 to-slate-600/30 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-slate-300/20">
                                        <span class="text-2xl">🎨</span>
                                    </div>
                                    <h5 class="font-heading text-xl font-semibold text-cream mb-3 tracking-wide" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">絵本</h5>
                                    <div class="inline-flex items-center px-3 py-1 bg-slate-500/20 text-slate-300 text-sm font-medium rounded-full border border-slate-400/20" style="background: rgba(100, 116, 139, 0.2); color: #cbd5e1; border-color: rgba(148, 163, 184, 0.2);">
                                        <div class="w-2 h-2 bg-slate-400 rounded-full mr-2" style="background: #94a3b8;"></div>
                                        制作準備中
                                    </div>
                                </div>
                                
                                <!-- 漫画 -->
                                <div class="relative bg-gradient-to-br from-slate-500/10 via-slate-600/15 to-slate-700/20 rounded-xl p-6 text-center hover:from-slate-400/15 hover:via-slate-500/20 hover:to-slate-600/25 transition-all duration-500 border border-slate-400/20 hover:border-slate-300/30 shadow-lg transform hover:-translate-y-1">
                                    <div class="absolute top-2 right-2">
                                        <div class="w-3 h-3 bg-slate-400/50 rounded-full" style="background: rgba(148, 163, 184, 0.5);"></div>
                                    </div>
                                    <div class="w-16 h-16 bg-gradient-to-br from-slate-400/20 to-slate-600/30 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-slate-300/20">
                                        <span class="text-2xl">📖</span>
                                    </div>
                                    <h5 class="font-heading text-xl font-semibold text-cream mb-3 tracking-wide" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">漫画</h5>
                                    <div class="inline-flex items-center px-3 py-1 bg-slate-500/20 text-slate-300 text-sm font-medium rounded-full border border-slate-400/20" style="background: rgba(100, 116, 139, 0.2); color: #cbd5e1; border-color: rgba(148, 163, 184, 0.2);">
                                        <div class="w-2 h-2 bg-slate-400 rounded-full mr-2" style="background: #94a3b8;"></div>
                                        制作準備中
                                    </div>
                                </div>
                                
                                <!-- アニメ -->
                                <div class="relative bg-gradient-to-br from-slate-500/10 via-slate-600/15 to-slate-700/20 rounded-xl p-6 text-center hover:from-slate-400/15 hover:via-slate-500/20 hover:to-slate-600/25 transition-all duration-500 border border-slate-400/20 hover:border-slate-300/30 shadow-lg transform hover:-translate-y-1">
                                    <div class="absolute top-2 right-2">
                                        <div class="w-3 h-3 bg-slate-400/50 rounded-full" style="background: rgba(148, 163, 184, 0.5);"></div>
                                    </div>
                                    <div class="w-16 h-16 bg-gradient-to-br from-slate-400/20 to-slate-600/30 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-slate-300/20">
                                        <span class="text-2xl">🎬</span>
                                    </div>
                                    <h5 class="font-heading text-xl font-semibold text-cream mb-3 tracking-wide" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">アニメ</h5>
                                    <div class="inline-flex items-center px-3 py-1 bg-slate-500/20 text-slate-300 text-sm font-medium rounded-full border border-slate-400/20" style="background: rgba(100, 116, 139, 0.2); color: #cbd5e1; border-color: rgba(148, 163, 184, 0.2);">
                                        <div class="w-2 h-2 bg-slate-400 rounded-full mr-2" style="background: #94a3b8;"></div>
                                        制作準備中
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- KUKUプロジェクト参加ボタン -->
                    <div class="text-center mt-16">
                        <button class="bg-emerald-600 text-cream px-16 py-5 font-semibold hover:bg-emerald-500 transition-all duration-300 rounded-lg border border-emerald-500/50 hover:border-emerald-400/70 text-lg" style="background: #059669; color: #f8f6f0; border-color: rgba(34, 197, 94, 0.5);">
                            KUKUプロジェクトに参加
                        </button>
                    </div>
                </div>
            </section>

            <!-- 会員権セクション -->
            <section id="membership" class="py-20 bg-obsidian text-cream" style="background: #141414; color: #f8f6f0;">
                <div class="max-w-7xl mx-auto px-4">
                    <!-- タイトル + サブタイトル -->
                    <div class="text-center mb-16">
                        <h2 class="font-heading text-6xl md:text-8xl font-light text-cream mb-4" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">MEMBERSHIP</h2>
                        <p class="text-lg md:text-xl font-light text-gold/80 tracking-widest mb-8" style="color: rgba(199, 162, 83, 0.8);">
                            – Experience the Essence of Japanese Culture –
                        </p>
                    </div>
                    
                    <!-- カードイメージセクション -->
                    <div class="mb-16">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <!-- 左側：カード画像 -->
                            <div class="flex justify-center lg:justify-end">
                                <img src="/カードイラスト.png" alt="FOMUSメンバーシップカード" class="w-full max-w-lg">
                            </div>
                            
                            <!-- 右側：テキスト -->
                            <div class="text-center lg:text-left">
                                <h3 class="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-4 leading-tight" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">
                                    Become Part of a Legacy.
                                </h3>
                                <p class="text-lg md:text-xl lg:text-2xl font-heading font-light text-gold mb-3" style="font-family: 'Noto Serif JP', serif; color: #c7a253;">
                                    伝統と革新のその先へ。
                                </p>
                                <p class="text-base md:text-lg text-cream/90 font-light" style="color: rgba(248, 246, 240, 0.9);">
                                    あなたのための、特別な文化体験を。
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <!-- メンバーシッププラン -->
                    <div class="border-2 border-gold/30 rounded-2xl overflow-hidden bg-gradient-to-br from-cream/5 to-cream/10 backdrop-blur-sm" style="border-color: rgba(199, 162, 83, 0.3); background: linear-gradient(to bottom right, rgba(248, 246, 240, 0.05), rgba(248, 246, 240, 0.1));">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead class="bg-gradient-to-r from-gold/20 to-gold/30 border-b border-gold/30" style="background: linear-gradient(to right, rgba(199, 162, 83, 0.2), rgba(199, 162, 83, 0.3)); border-color: rgba(199, 162, 83, 0.3);">
                                    <tr>
                                        <th class="px-8 py-6 text-left font-heading text-xl text-cream" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">ランク</th>
                                        <th class="px-8 py-6 text-left font-heading text-xl text-cream" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">年会費</th>
                                        <th class="px-8 py-6 text-left font-heading text-xl text-cream" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">特典例</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gold/20" style="border-color: rgba(199, 162, 83, 0.2);">
                                    <tr class="hover:bg-cream/5 transition-colors" style="background-image: linear-gradient(45deg, rgba(199, 162, 83, 0.03) 25%, transparent 25%); background-size: 40px 40px;">
                                        <td class="px-8 py-6">
                                            <div class="font-heading text-2xl font-light text-cream" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">Standard</div>
                                        </td>
                                        <td class="px-8 py-6">
                                            <div class="text-gold font-light text-xl" style="color: #c7a253;">€851</div>
                                        </td>
                                        <td class="px-8 py-6">
                                            <div class="text-cream/90 font-light mb-4" style="color: rgba(248, 246, 240, 0.9);">特製NFCカード、限定アイテム、オンラインイベント</div>
                                            <button onclick="purchaseMembership('standard')" class="bg-gold text-obsidian px-6 py-2 text-sm font-semibold hover:bg-cream transition-all duration-300 border border-gold hover:border-cream rounded" style="background: #c7a253; color: #141414; border-color: #c7a253;">
                                                申し込み
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-cream/5 transition-colors" style="background-image: linear-gradient(45deg, rgba(199, 162, 83, 0.05) 25%, transparent 25%); background-size: 40px 40px;">
                                        <td class="px-8 py-6">
                                            <div class="font-heading text-2xl font-light text-cream" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">VIP</div>
                                        </td>
                                        <td class="px-8 py-6">
                                            <div class="text-gold font-light text-xl" style="color: #c7a253;">€8,510</div>
                                        </td>
                                        <td class="px-8 py-6">
                                            <div class="text-cream/90 font-light mb-4" style="color: rgba(248, 246, 240, 0.9);">職人との交流、日本文化体験、作品の優先購入</div>
                                            <button onclick="purchaseMembership('vip')" class="bg-gold text-obsidian px-6 py-2 text-sm font-semibold hover:bg-cream transition-all duration-300 border border-gold hover:border-cream rounded" style="background: #c7a253; color: #141414; border-color: #c7a253;">
                                                申し込み
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-cream/5 transition-colors" style="background-image: linear-gradient(45deg, rgba(199, 162, 83, 0.08) 25%, transparent 25%); background-size: 40px 40px;">
                                        <td class="px-8 py-6">
                                            <div class="font-heading text-2xl font-light text-cream" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">VVIP</div>
                                        </td>
                                        <td class="px-8 py-6">
                                            <div class="text-gold font-light text-xl" style="color: #c7a253;">€85,100</div>
                                        </td>
                                        <td class="px-8 py-6">
                                            <div class="text-cream/90 font-light mb-4" style="color: rgba(248, 246, 240, 0.9);">プロジェクト参加権、海外VIP招待、特別ギフト</div>
                                            <button onclick="purchaseMembership('vvip')" class="bg-gold text-obsidian px-6 py-2 text-sm font-semibold hover:bg-cream transition-all duration-300 border border-gold hover:border-cream rounded" style="background: #c7a253; color: #141414; border-color: #c7a253;">
                                                申し込み
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- 補足説明 -->
                    <div class="text-center mt-12">
                        <p class="text-lg text-cream/90 font-light max-w-4xl mx-auto leading-relaxed mb-6" style="color: rgba(248, 246, 240, 0.9);">
                            すべてのメンバーには、専用のNFC搭載カードを発行。<br>
                            日本の美と技に触れるための体験、特別な招待、そして限定アイテム。
                        </p>
                        <p class="text-cream/70 font-light mb-8" style="color: rgba(248, 246, 240, 0.7);">
                            レベルに応じて、FOMUSの文化体験や限定プロジェクトへの参加権、職人との特別な接点などをご提供します。
                        </p>
                        
                        <div class="text-center">
                            <a href="/membership.html" class="inline-block bg-gold text-obsidian px-12 py-4 font-semibold hover:bg-cream transition-all duration-300 border-2 border-gold hover:border-cream" style="background: #c7a253; color: #141414; border-color: #c7a253; text-decoration: none;">
                                詳細を見る
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- お問い合わせセクション -->
            <section id="contact" class="py-20 bg-obsidian text-cream" style="background: #141414; color: #f8f6f0;">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="font-heading text-5xl md:text-7xl font-light text-cream mb-6" style="font-family: 'Noto Serif JP', serif; color: #f8f6f0;">お問い合わせ</h2>
                        <p class="text-xl text-cream/80 max-w-3xl mx-auto" style="color: rgba(248, 246, 240, 0.8);">
                            ビジネス提携、輸出のお問い合わせ、メディア関係、その他ご質問など、お気軽にお問い合わせください。
                        </p>
                    </div>
                    
                    <div class="max-w-3xl mx-auto">
                        <form class="space-y-6" action="mailto:fomus.official@gmail.com" method="post" enctype="text/plain">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="お名前" class="bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 px-6 py-4 rounded-lg focus:border-gold focus:outline-none" style="background: rgba(248, 246, 240, 0.1); border-color: rgba(248, 246, 240, 0.3); color: #f8f6f0;">
                                <input type="email" placeholder="メールアドレス" class="bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 px-6 py-4 rounded-lg focus:border-gold focus:outline-none" style="background: rgba(248, 246, 240, 0.1); border-color: rgba(248, 246, 240, 0.3); color: #f8f6f0;">
                            </div>
                            <select class="w-full bg-cream/10 border border-cream/30 text-cream px-6 py-4 rounded-lg focus:border-gold focus:outline-none" style="background: rgba(248, 246, 240, 0.1); border-color: rgba(248, 246, 240, 0.3); color: #f8f6f0;">
                                <option value="">お問い合わせ種別を選択</option>
                                <option value="business">ビジネス提携</option>
                                <option value="export">輸出・流通</option>
                                <option value="media">メディア関係</option>
                                <option value="membership">会員権について</option>
                                <option value="other">その他</option>
                            </select>
                            <textarea placeholder="メッセージ" rows="6" class="w-full bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 px-6 py-4 rounded-lg focus:border-gold focus:outline-none" style="background: rgba(248, 246, 240, 0.1); border-color: rgba(248, 246, 240, 0.3); color: #f8f6f0;"></textarea>
                            <div class="text-center">
                                <button type="submit" class="bg-gold text-obsidian px-12 py-4 font-semibold hover:bg-cream transition-colors" style="background: #c7a253; color: #141414;">
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <!-- フッター -->
            <footer class="bg-obsidian border-t border-cream/20 text-cream py-16" style="background: #141414; border-color: rgba(248, 246, 240, 0.2); color: #f8f6f0;">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                        <!-- ブランド -->
                        <div class="lg:col-span-2">
                            <div class="flex items-center justify-center mb-6">
                                <img src="/FOMUSlogo_edited.png" alt="FOMUS" class="h-12">
                            </div>
                            <div class="flex justify-center space-x-4">
                                <a href="#" class="text-cream/60 hover:text-gold transition-colors" style="color: rgba(248, 246, 240, 0.6);">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                    </svg>
                                </a>
                                <a href="#" class="text-cream/60 hover:text-gold transition-colors" style="color: rgba(248, 246, 240, 0.6);">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <!-- クイックリンク -->
                        <div>
                            <h3 class="font-heading text-lg font-semibold mb-4 text-gold" style="font-family: 'Noto Serif JP', serif; color: #c7a253;">クイックリンク</h3>
                            <ul class="space-y-2">
                                <li><a href="#craft" class="text-cream/80 hover:text-gold transition-colors text-sm" style="color: rgba(248, 246, 240, 0.8);">工芸</a></li>
                                <li><a href="#life" class="text-cream/80 hover:text-gold transition-colors text-sm" style="color: rgba(248, 246, 240, 0.8);">ライフスタイル</a></li>
                                <li><a href="#entertainment" class="text-cream/80 hover:text-gold transition-colors text-sm" style="color: rgba(248, 246, 240, 0.8);">エンターテインメント</a></li>
                                <li><a href="#membership" class="text-cream/80 hover:text-gold transition-colors text-sm" style="color: rgba(248, 246, 240, 0.8);">会員権</a></li>
                            </ul>
                        </div>
                        
                        <!-- サポート & 法務 -->
                        <div>
                            <h3 class="font-heading text-lg font-semibold mb-4 text-gold" style="font-family: 'Noto Serif JP', serif; color: #c7a253;">サポート & 法務</h3>
                            <ul class="space-y-2">
                                <li><a href="#contact" class="text-cream/80 hover:text-gold transition-colors text-sm" style="color: rgba(248, 246, 240, 0.8);">お問い合わせ</a></li>
                                <li><a href="#" class="text-cream/80 hover:text-gold transition-colors text-sm" style="color: rgba(248, 246, 240, 0.8);">プライバシーポリシー</a></li>
                                <li><a href="#" class="text-cream/80 hover:text-gold transition-colors text-sm" style="color: rgba(248, 246, 240, 0.8);">利用規約</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- 下部 -->
                    <div class="border-t border-cream/20 pt-8 text-center" style="border-color: rgba(248, 246, 240, 0.2);">
                        <p class="text-cream/60 text-sm" style="color: rgba(248, 246, 240, 0.6);">© 2024 FOMUS Global FZ-LLC. All rights reserved.</p>
                    </div>
                </div>
            </footer>
          `
        }}
      />
    </>
  );
}