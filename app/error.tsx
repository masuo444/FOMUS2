'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをコンソールにログ出力
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-fomus">
      <div className="max-w-md mx-auto text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-obsidian mb-4">
          申し訳ございません
        </h2>
        <p className="text-obsidian/70 mb-6">
          一時的なエラーが発生しました。しばらく後にもう一度お試しください。
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="btn-primary w-full"
          >
            再試行
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-secondary w-full"
          >
            ホームに戻る
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-red-600">
              開発者向け詳細情報
            </summary>
            <pre className="mt-2 p-4 bg-red-50 rounded text-xs overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}