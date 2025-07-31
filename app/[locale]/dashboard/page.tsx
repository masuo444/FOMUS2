'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  UserCircleIcon,
  StarIcon,
  CalendarIcon,
  GiftIcon,
  CubeIcon,
  WalletIcon 
} from '@heroicons/react/24/outline';

// ダミーNFTデータ（実際の実装ではwagmi/viemで取得）
const mockNftData = {
  hasPassport: true,
  tier: 'VIP',
  tokenId: 1234,
  mintDate: '2024-01-15',
  benefits: {
    geishaExperiences: { used: 1, total: 4, nextAvailable: '2024-02-15' },
    craftAccess: { used: 2, total: 24, monthlyAllocation: 2 },
    gifts: { received: 3, total: 10, nextDelivery: '2024-03-01' },
    nftDrops: { eligible: true, nextDrop: 'Q2 2024' }
  }
};

export default function DashboardPage() {
  const t = useTranslations('dashboard');
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [nftData, setNftData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ウォレット接続処理
  const connectWallet = async () => {
    setLoading(true);
    try {
      // 実際の実装では wagmi/viem を使用
      // const { address } = await connect({ connector: new MetaMaskConnector() });
      
      // ダミー実装
      await new Promise(resolve => setTimeout(resolve, 2000));
      const dummyAddress = '0x1234...5678';
      setWalletAddress(dummyAddress);
      setIsConnected(true);
      setNftData(mockNftData);
      
      console.log('🔗 Wallet connected:', dummyAddress);
      console.log('🎫 NFT data loaded:', mockNftData);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    } finally {
      setLoading(false);
    }
  };

  // NFT保有チェック
  const checkNftOwnership = async (address: string) => {
    // 実際の実装では contract.balanceOf(address) を実行
    return mockNftData;
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-fomus flex items-center justify-center">
        <div className="container-fomus py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <WalletIcon className="w-24 h-24 text-gold mx-auto mb-8" />
            
            <h1 className="font-heading text-5xl md:text-6xl font-light text-obsidian mb-6">
              {t('welcome')}
            </h1>
            
            <p className="text-xl text-obsidian/80 mb-12">
              Connect your wallet to access your FOMUS Premium benefits and NFT passport.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-12">
              <h2 className="font-heading text-2xl font-semibold text-obsidian mb-4">
                What You'll See After Connecting:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <StarIcon className="w-5 h-5 text-gold" />
                  <span className="text-obsidian">Your NFT Passport Status</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="w-5 h-5 text-gold" />
                  <span className="text-obsidian">Upcoming Bookings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GiftIcon className="w-5 h-5 text-gold" />
                  <span className="text-obsidian">Available Benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CubeIcon className="w-5 h-5 text-gold" />
                  <span className="text-obsidian">NFT Collection</span>
                </div>
              </div>
            </div>

            <button
              onClick={connectWallet}
              disabled={loading}
              className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Connecting...</span>
                </div>
              ) : (
                'Connect Wallet'
              )}
            </button>

            <p className="text-sm text-obsidian/60 mt-6">
              Supported wallets: MetaMask, WalletConnect, Coinbase Wallet
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="container-fomus py-20">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-heading text-4xl md:text-5xl font-light text-obsidian">
              Welcome Back
            </h1>
            <div className="text-right">
              <div className="text-sm text-obsidian/60">Connected Wallet</div>
              <div className="font-mono text-sm text-obsidian">{walletAddress}</div>
            </div>
          </div>
        </motion.div>

        {/* NFTパスポートステータス */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className={`${
            nftData.tier === 'VIP' ? 'bg-gradient-vip' : 'bg-gradient-to-r from-gray-300 to-gray-400'
          } rounded-lg p-8 text-obsidian`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-heading text-3xl font-semibold mb-2">
                  {nftData.tier} Passport
                </h2>
                <p className="text-obsidian/80">
                  Token ID: #{nftData.tokenId} • Minted: {nftData.mintDate}
                </p>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 bg-obsidian/20 rounded-full flex items-center justify-center mb-2">
                  <StarIcon className="w-8 h-8 text-obsidian" />
                </div>
                <div className="text-sm font-semibold">
                  {nftData.tier === 'VIP' ? 'LIFETIME' : 'ANNUAL'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 特典利用状況 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* 芸妓体験 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <CalendarIcon className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold text-obsidian">
                {nftData.benefits.geishaExperiences.used}/{nftData.benefits.geishaExperiences.total}
              </span>
            </div>
            <h3 className="font-semibold text-obsidian mb-2">Geisha Experiences</h3>
            <p className="text-sm text-obsidian/60">
              Next available: {nftData.benefits.geishaExperiences.nextAvailable}
            </p>
          </div>

          {/* クラフトアクセス */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <CubeIcon className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold text-obsidian">
                {nftData.benefits.craftAccess.used}/{nftData.benefits.craftAccess.total}
              </span>
            </div>
            <h3 className="font-semibold text-obsidian mb-2">Craft Access</h3>
            <p className="text-sm text-obsidian/60">
              {nftData.benefits.craftAccess.monthlyAllocation} pieces/month
            </p>
          </div>

          {/* ギフト */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <GiftIcon className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold text-obsidian">
                {nftData.benefits.gifts.received}/{nftData.benefits.gifts.total}
              </span>
            </div>
            <h3 className="font-semibold text-obsidian mb-2">Premium Gifts</h3>
            <p className="text-sm text-obsidian/60">
              Next delivery: {nftData.benefits.gifts.nextDelivery}
            </p>
          </div>

          {/* NFTドロップ */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <StarIcon className="w-8 h-8 text-gold" />
              <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                ELIGIBLE
              </span>
            </div>
            <h3 className="font-semibold text-obsidian mb-2">NFT Drops</h3>
            <p className="text-sm text-obsidian/60">
              Next drop: {nftData.benefits.nftDrops.nextDrop}
            </p>
          </div>
        </motion.div>

        {/* アクションボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">Book Geisha Experience</button>
          <button className="btn-secondary">Browse Craft Collection</button>
          <button className="btn-secondary">View NFT Gallery</button>
        </motion.div>

        {/* デバッグ情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-obsidian/5 rounded-lg p-6"
        >
          <h3 className="font-semibold text-obsidian mb-4">Debug Information</h3>
          <div className="text-sm text-obsidian/70 space-y-2">
            <div>✅ Wallet Connected: {walletAddress}</div>
            <div>✅ NFT Passport Verified: {nftData.tier} (Token #{nftData.tokenId})</div>
            <div>✅ Benefits Loaded: All categories active</div>
            <div>✅ Dashboard Gate: Access granted</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}