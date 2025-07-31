'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cream"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* 左側：ロゴ */}
              <div className="flex justify-center lg:justify-center">
                <Image 
                  src="/FOMUSlogo_edited.png" 
                  alt="FOMUS" 
                  width={400} 
                  height={400} 
                  className="h-32 md:h-48 lg:h-64 xl:h-80 w-auto max-w-full"
                />
              </div>
              
              {/* 右側：テキストコンテンツ */}
              <div className="text-center lg:text-left">
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 text-obsidian leading-tight">
                  <span className="block">More than a Product,</span>
                  <span className="block text-gold">It's a Cultural Experience.</span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light mb-12">
                  日本の伝統、世界に響く体験へ。<br/>
                  <span className="text-base md:text-lg text-obsidian/60">Japanese craftsmanship, curated for the world's most discerning collectors.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOMUSについて */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h2 className="font-heading text-sm text-gold mb-2">Our Philosophy</h2>
                <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-obsidian">
                  FOMUSとは<br/>
                  <span className="text-2xl md:text-3xl lg:text-4xl text-obsidian/70">Who We Are</span>
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-obsidian/80 leading-relaxed">
                <p>
                  FOMUSは、日本の伝統文化と現代アートを融合させ、<br/>
                  世界中の人々に"心に残る体験"を届けるカルチャーブランドです。
                </p>
                <p>
                  職人の手仕事・物語性・美意識を掛け合わせたプロダクトを通じて、<br/>
                  日本の精神と美学を次世代へと紡いでいきます。
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/職人の手元.JPG" 
                    alt="職人の手元" 
                    width={300} 
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/制作過程.png" 
                    alt="制作過程" 
                    width={300} 
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-hinoki/30 to-gold/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold/30 rounded-full mx-auto mb-2"></div>
                    <p className="text-obsidian/60 text-sm">画像準備中</p>
                  </div>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gold/30 to-hinoki/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-hinoki/30 rounded-full mx-auto mb-2"></div>
                    <p className="text-obsidian/60 text-sm">画像準備中</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-hinoki/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4つのコレクション */}
      <section className="py-20 bg-gradient-fomus">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-light text-obsidian mb-8">4つのコレクション</h2>
            <p className="text-lg text-obsidian/70 max-w-3xl mx-auto">
              日本文化の多面的な世界を、厳選されたコレクションと特別なプログラムを通じてご体験ください。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 工芸コレクション */}
            <div className="pillar-card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-orange-400/30 to-orange-500/30 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-orange-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500/40 rounded"></div>
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-obsidian">CRAFT</h3>
                  <p className="text-sm text-obsidian/60 mt-2">CRAFT</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-obsidian/70 mb-4 leading-relaxed">
                  伝統的な日本の工芸品を現代的に再解釈。MASUコレクションから厳選された職人作品まで。
                </p>
                <ul className="text-sm text-obsidian/60 space-y-1 mb-8">
                  <li>• MASU</li>
                  <li>• FOMUS PARURE (jewelry)</li>
                  <li>• MASUKAME</li>
                </ul>
                <div className="flex">
                  <Link href="/craft" className="inline-block bg-gold text-obsidian px-6 py-3 font-semibold hover:bg-obsidian hover:text-gold transition-colors rounded-lg border-2 border-gold">
                    詳しく見る
                  </Link>
                </div>
              </div>
            </div>
            
            {/* ライフスタイルコレクション */}
            <div className="pillar-card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500/40 rounded"></div>
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-obsidian">LIFE</h3>
                  <p className="text-sm text-obsidian/60 mt-2">LIFE</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-obsidian/70 mb-4 leading-relaxed">
                  日常に伝統を溶け込ませる高品質プロダクト。プレミアムな日本のライフスタイルを。
                </p>
                <ul className="text-sm text-obsidian/60 space-y-1 mb-8">
                  <li>• 抹茶＆日本茶</li>
                  <li>• アロマティックシリーズ</li>
                  <li>• ウェルネス製品</li>
                </ul>
              </div>
            </div>
            
            {/* エンターテインメントコレクション */}
            <div className="pillar-card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-500/40 rounded"></div>
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-obsidian">エンターテインメント</h3>
                  <p className="text-sm text-obsidian/60 mt-2">ENTERTAINMENT</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-obsidian/70 mb-8 leading-relaxed">
                  KUKUプロジェクトを通じた文化IP展開。アニメーション、アート、デジタルコレクティブル。
                </p>
                <div className="flex">
                  <Link href="/entertainment" className="inline-block bg-gold text-obsidian px-6 py-3 font-semibold hover:bg-obsidian hover:text-gold transition-colors rounded-lg border-2 border-gold">
                    詳しく見る
                  </Link>
                </div>
              </div>
            </div>
            
            {/* 会員権コレクション */}
            <div className="pillar-card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-gold/30 to-gold/50 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gold/50 rounded"></div>
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-obsidian">メンバーシップ</h3>
                  <p className="text-sm text-obsidian/60 mt-2">MEMBERSHIP</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-obsidian/70 mb-4 leading-relaxed">
                  伝統と革新のその先へ──FOMUSメンバーとして未来をともに。日本文化の継承と発展にご参加ください。
                </p>
                <ul className="text-sm text-obsidian/60 space-y-1 mb-8">
                  <li>• VIP会員権</li>
                  <li>• 文化支援</li>
                  <li>• 限定イベント</li>
                </ul>
                <div className="flex">
                  <Link href="/passport/vip" className="inline-block bg-gold text-obsidian px-6 py-3 font-semibold hover:bg-obsidian hover:text-gold transition-colors rounded-lg border-2 border-gold">
                    詳しく見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工芸セクション */}
      <section id="craft" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl font-light text-obsidian mb-6">工芸</h2>
            <p className="text-xl text-obsidian/70 max-w-3xl mx-auto">
              何世紀もの技術と現代デザインが出会う場所。それぞれの作品が熟練と革新の物語を語ります。
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Link href="/craft" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-cream to-hinoki/20">
                <Image 
                  src="/MASU collection.png" 
                  alt="MASUコレクション" 
                  width={400} 
                  height={400}
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-obsidian mb-2">MASUコレクション</h3>
                <p className="text-obsidian/70">1300年の歴史ある枡</p>
              </div>
            </Link>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-cream to-gold/20">
                <Image 
                  src="/FOMUS PARURE.png" 
                  alt="FOMUS PARURE" 
                  width={400} 
                  height={400}
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-obsidian mb-2">FOMUS PARURE (枡ジュエリー)</h3>
                <p className="text-obsidian/70">伝統的な形状から着想を得た精巧なアクセサリー</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-cream to-obsidian/10">
                <Image 
                  src="/MASUKAME.jpg" 
                  alt="MASUKAME" 
                  width={400} 
                  height={400}
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-obsidian mb-2">MASUKAME</h3>
                <p className="text-obsidian/70">亀をモチーフにしたFOMUSによる究極のハンドメイド作品。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ライフスタイルセクション */}
      <section id="life" className="py-20 bg-gradient-fomus">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl font-light text-obsidian mb-6">ライフスタイル</h2>
            <div className="bg-gold/20 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <p className="text-gold font-semibold text-xl">準備中</p>
              <p className="text-obsidian/70 text-sm mt-2">近日公開予定</p>
            </div>
            <p className="text-xl text-obsidian/70 max-w-3xl mx-auto">
              日常の瞬間を美の儀式へと変える、厳選されたライフスタイルコレクション。
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto opacity-75">
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="absolute top-4 right-4 bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold">
                準備中
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading text-3xl font-semibold text-obsidian mb-6">抹茶＆日本茶</h3>
                  <p className="text-obsidian/70 mb-6">
                    何世紀もの歴史を持つ茶園から調達した、儀式用グレードの抹茶と希少な茶葉。
                    それぞれのブレンドが日本の茶の遺産を巡る旅です。
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded">
                      <p className="text-2xl mb-1">🍵</p>
                      <p className="font-semibold text-obsidian">プレミアム抹茶</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded">
                      <p className="text-2xl mb-1">🍃</p>
                      <p className="font-semibold text-obsidian">希少煎茶</p>
                    </div>
                  </div>
                  <button className="btn-secondary w-full opacity-50 cursor-not-allowed" disabled>茶コレクションを見る</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* エンターテインメントセクション */}
      <section id="entertainment" className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-6xl md:text-8xl font-light text-cream mb-4">ENTERTAINMENT</h2>
            <p className="text-lg md:text-xl font-light text-emerald-200/80 tracking-widest mb-8">
              – Nature's Mythology Reborn –
            </p>
            <div className="max-w-4xl mx-auto mb-8">
              <h3 className="font-heading text-4xl md:text-5xl font-light text-cream mb-4">
                KUKU
              </h3>
              <p className="text-2xl md:text-3xl font-heading font-light text-emerald-200 mb-6">
                文化と物語の力で、世界をつなぐプロジェクト
              </p>
              <p className="text-lg md:text-xl text-cream/90 font-light leading-relaxed">
                KUKUは、日本の伝統文化と現代のクリエイティブを融合させた、FOMUSが展開するグローバルIPプロジェクトです。<br/>
                アート、クラフト、アニメーション、書籍、そしてテクノロジーまでを横断し、物語を軸に多様なプロダクトや体験を創出します。
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20">
              <Image 
                src="/KUKU.jpg" 
                alt="KUKU Characters" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 w-24 h-24 border border-emerald-400/30 rounded-full opacity-40"></div>
                <div className="absolute bottom-12 right-12 w-16 h-16 border border-emerald-300/20 rounded-full opacity-30"></div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-emerald-500/25 rounded-full opacity-35"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-emerald-600 text-cream px-16 py-5 font-semibold hover:bg-emerald-500 transition-all duration-300 rounded-lg border border-emerald-500/50 hover:border-emerald-400/70 text-lg">
              KUKUプロジェクトに参加
            </button>
          </div>
        </div>
      </section>

      {/* 会員権セクション */}
      <section id="membership" className="py-20 bg-obsidian text-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-6xl md:text-8xl font-light text-cream mb-4">MEMBERSHIP</h2>
            <p className="text-lg md:text-xl font-light text-gold/80 tracking-widest mb-8">
              – Experience the Essence of Japanese Culture –
            </p>
          </div>
          
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-end">
                <Image 
                  src="/カードイラスト.png" 
                  alt="FOMUSメンバーシップカード" 
                  width={500} 
                  height={300}
                  className="w-full max-w-lg"
                />
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-4 leading-tight">
                  Become Part of a Legacy.
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl font-heading font-light text-gold mb-3">
                  伝統と革新のその先へ。
                </p>
                <p className="text-base md:text-lg text-cream/90 font-light">
                  あなたのための、特別な文化体験を。
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-gold/30 rounded-2xl overflow-hidden bg-gradient-to-br from-cream/5 to-cream/10 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gold/20 to-gold/30 border-b border-gold/30">
                  <tr>
                    <th className="px-8 py-6 text-left font-heading text-xl text-cream">ランク</th>
                    <th className="px-8 py-6 text-left font-heading text-xl text-cream">年会費</th>
                    <th className="px-8 py-6 text-left font-heading text-xl text-cream">特典例</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/20">
                  <tr className="hover:bg-cream/5 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-heading text-2xl font-light text-cream">Standard</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-gold font-light text-xl">¥100,000</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-cream/90 font-light mb-4">特製NFCカード、限定アイテム、オンラインイベント</div>
                      <button 
                        onClick={() => purchaseMembership('standard')} 
                        className="bg-gold text-obsidian px-6 py-2 text-sm font-semibold hover:bg-cream transition-all duration-300 border border-gold hover:border-cream rounded"
                      >
                        申し込み
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-cream/5 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-heading text-2xl font-light text-cream">VIP</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-gold font-light text-xl">¥1,000,000</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-cream/90 font-light mb-4">職人との交流、日本文化体験、作品の優先購入</div>
                      <button 
                        onClick={() => purchaseMembership('vip')} 
                        className="bg-gold text-obsidian px-6 py-2 text-sm font-semibold hover:bg-cream transition-all duration-300 border border-gold hover:border-cream rounded"
                      >
                        申し込み
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-cream/5 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-heading text-2xl font-light text-cream">VVIP</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-gold font-light text-xl">¥10,000,000</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-cream/90 font-light mb-4">プロジェクト参加権、海外VIP招待、特別ギフト</div>
                      <button 
                        onClick={() => purchaseMembership('vvip')} 
                        className="bg-gold text-obsidian px-6 py-2 text-sm font-semibold hover:bg-cream transition-all duration-300 border border-gold hover:border-cream rounded"
                      >
                        申し込み
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-cream/90 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              すべてのメンバーには、専用のNFC搭載カードを発行。<br/>
              日本の美と技に触れるための体験、特別な招待、そして限定アイテム。
            </p>
            <p className="text-cream/70 font-light mb-8">
              レベルに応じて、FOMUSの文化体験や限定プロジェクトへの参加権、職人との特別な接点などをご提供します。
            </p>
            
            <div className="text-center">
              <Link href="/passport/vip" className="inline-block bg-gold text-obsidian px-12 py-4 font-semibold hover:bg-cream transition-all duration-300 border-2 border-gold hover:border-cream">
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 bg-obsidian text-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl font-light text-cream mb-6">お問い合わせ</h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              ビジネス提携、輸出のお問い合わせ、メディア関係、その他ご質問など、お気軽にお問い合わせください。
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6" action="mailto:fomus.official@gmail.com" method="post" encType="text/plain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="お名前" 
                  className="bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 px-6 py-4 rounded-lg focus:border-gold focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="メールアドレス" 
                  className="bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 px-6 py-4 rounded-lg focus:border-gold focus:outline-none"
                />
              </div>
              <select className="w-full bg-cream/10 border border-cream/30 text-cream px-6 py-4 rounded-lg focus:border-gold focus:outline-none">
                <option value="">お問い合わせ種別を選択</option>
                <option value="business">ビジネス提携</option>
                <option value="export">輸出・流通</option>
                <option value="media">メディア関係</option>
                <option value="membership">会員権について</option>
                <option value="other">その他</option>
              </select>
              <textarea 
                placeholder="メッセージ" 
                rows={6} 
                className="w-full bg-cream/10 border border-cream/30 text-cream placeholder-cream/50 px-6 py-4 rounded-lg focus:border-gold focus:outline-none"
              ></textarea>
              <div className="text-center">
                <button type="submit" className="bg-gold text-obsidian px-12 py-4 font-semibold hover:bg-cream transition-colors">
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}