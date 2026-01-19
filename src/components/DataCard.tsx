import { TrendingUp, TrendingDown, Newspaper } from 'lucide-react';
import { CityData } from '../types';

interface DataCardProps {
  city: CityData | null;
  onClose: () => void;
}

export function DataCard({ city, onClose }: DataCardProps) {
  if (!city) return null;

  const isPositive = city.change >= 0;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
      <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 border-b border-gray-700/50">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-2">
            <h2 className="text-2xl font-bold text-white">{city.name}</h2>
            <p className="text-gray-400 text-sm">{city.indexName}</p>
          </div>

          <div className="flex items-end gap-3">
            <div className="text-4xl font-bold text-white">
              {city.indexValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className={`flex items-center gap-1 pb-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
              {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
              <span className="font-semibold text-lg">
                {isPositive ? '+' : ''}{city.change.toFixed(2)}
              </span>
              <span className="text-sm">
                ({isPositive ? '+' : ''}{city.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Newspaper className="text-blue-400" size={20} />
            <h3 className="text-lg font-semibold text-white">Latest Headlines</h3>
          </div>

          <div className="space-y-3">
            {city.headlines.map((headline, index) => (
              <div
                key={index}
                className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-colors"
              >
                <p className="text-gray-300 text-sm leading-relaxed">{headline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
        onClick={onClose}
      />
    </div>
  );
}
