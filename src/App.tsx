import { useState } from 'react';
import { Globe, Activity } from 'lucide-react';
import { WorldMap } from './components/WorldMap';
import { CityMarker } from './components/CityMarker';
import { DataCard } from './components/DataCard';
import { cities } from './data/cities';
import { CityData } from './types';

function App() {
  const [activeCity, setActiveCity] = useState<CityData | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <header className="relative z-10 border-b border-gray-800/50 backdrop-blur-sm bg-slate-950/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Globe className="text-blue-400" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Global Markets Monitor
                </h1>
                <p className="text-xs text-gray-400">Real-time financial data from major exchanges</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <Activity className="text-emerald-400" size={16} />
              <span className="text-sm font-medium text-emerald-400">Live</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6">
            <div className="mb-4">
              <p className="text-gray-400 text-sm">
                Click on any city marker to view live index prices and latest headlines
              </p>
            </div>

            <div className="relative w-full" style={{ aspectRatio: '2/1' }}>
              <WorldMap />

              {cities.map((city) => (
                <CityMarker
                  key={city.id}
                  city={city}
                  isActive={activeCity?.id === city.id}
                  onClick={() => setActiveCity(city)}
                />
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800/50 bg-slate-950/50 px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
              {cities.map((city) => {
                const isPositive = city.change >= 0;
                return (
                  <button
                    key={city.id}
                    onClick={() => setActiveCity(city)}
                    className="group p-3 bg-slate-900/50 hover:bg-slate-800/50 border border-gray-800/50 hover:border-gray-700/50 rounded-lg transition-all duration-200"
                  >
                    <div className="text-xs text-gray-400 mb-1">{city.name}</div>
                    <div className="text-sm font-semibold text-white mb-1">{city.indexName}</div>
                    <div className={`text-xs font-medium ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {isPositive ? '+' : ''}{city.changePercent.toFixed(2)}%
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <DataCard city={activeCity} onClose={() => setActiveCity(null)} />

      <footer className="relative z-10 mt-8 pb-6 text-center text-gray-500 text-sm">
        <p>Data updates in real-time from connected exchanges</p>
      </footer>
    </div>
  );
}

export default App;
