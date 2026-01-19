import { MapPin } from 'lucide-react';
import { MarkerProps } from '../types';

export function CityMarker({ city, isActive, onClick }: MarkerProps) {
  return (
    <div
      className="absolute cursor-pointer transition-all duration-300 group"
      style={{
        left: `${city.coordinates.x}%`,
        top: `${city.coordinates.y}%`,
        transform: 'translate(-50%, -100%)',
      }}
      onClick={onClick}
    >
      <div className="relative">
        <MapPin
          className={`transition-all duration-300 ${
            isActive
              ? 'text-emerald-400 scale-125 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]'
              : 'text-blue-400 group-hover:text-emerald-400 group-hover:scale-110 drop-shadow-[0_0_4px_rgba(96,165,250,0.6)]'
          }`}
          size={28}
          fill="currentColor"
        />
        <div
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full blur-sm ${
            isActive ? 'bg-emerald-400' : 'bg-blue-400 group-hover:bg-emerald-400'
          }`}
        />
      </div>
      <div
        className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-all ${
          isActive ? 'text-emerald-400' : 'text-gray-300 group-hover:text-emerald-400'
        }`}
      >
        {city.name}
      </div>
    </div>
  );
}
