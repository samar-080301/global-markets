export function WorldMap() {
  return (
    <div className="w-full h-full relative">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.1))' }}
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <g className="map-paths" stroke="#334155" strokeWidth="0.5" fill="url(#mapGradient)">
          <path d="M 150 150 L 250 140 L 280 160 L 270 180 L 240 190 L 200 185 L 160 175 Z" opacity="0.8" />
          <path d="M 290 160 L 340 155 L 370 170 L 365 190 L 340 200 L 310 195 L 290 180 Z" opacity="0.8" />
          <path d="M 380 165 L 450 160 L 480 175 L 475 195 L 445 205 L 400 200 L 380 185 Z" opacity="0.8" />
          <path d="M 160 200 L 220 195 L 250 210 L 245 235 L 210 245 L 170 240 L 155 220 Z" opacity="0.8" />
          <path d="M 255 210 L 310 205 L 340 220 L 335 245 L 300 255 L 260 250 L 250 230 Z" opacity="0.8" />
          <path d="M 180 250 L 240 245 L 270 265 L 265 290 L 230 300 L 190 295 L 175 275 Z" opacity="0.8" />
          <path d="M 275 265 L 330 260 L 360 280 L 355 305 L 320 315 L 280 310 L 270 285 Z" opacity="0.8" />
          <path d="M 365 280 L 420 275 L 450 295 L 445 320 L 410 330 L 370 325 L 360 300 Z" opacity="0.8" />
          <path d="M 200 305 L 250 300 L 280 320 L 275 345 L 240 355 L 205 350 L 195 325 Z" opacity="0.8" />
          <path d="M 490 165 L 560 160 L 600 180 L 595 205 L 555 215 L 500 210 L 485 185 Z" opacity="0.8" />
          <path d="M 605 180 L 670 175 L 710 195 L 705 220 L 665 230 L 610 225 L 600 200 Z" opacity="0.8" />
          <path d="M 715 195 L 780 190 L 820 210 L 815 235 L 775 245 L 720 240 L 710 215 Z" opacity="0.8" />
          <path d="M 490 220 L 560 215 L 600 235 L 595 260 L 555 270 L 500 265 L 485 240 Z" opacity="0.8" />
          <path d="M 605 235 L 670 230 L 710 250 L 705 275 L 665 285 L 610 280 L 600 255 Z" opacity="0.8" />
          <path d="M 715 250 L 780 245 L 820 265 L 815 290 L 775 300 L 720 295 L 710 270 Z" opacity="0.8" />
          <path d="M 825 210 L 890 205 L 920 225 L 915 250 L 880 260 L 830 255 L 820 230 Z" opacity="0.8" />
          <path d="M 825 265 L 890 260 L 920 280 L 915 305 L 880 315 L 830 310 L 820 285 Z" opacity="0.8" />
          <path d="M 490 275 L 560 270 L 600 290 L 595 315 L 555 325 L 500 320 L 485 295 Z" opacity="0.8" />
          <path d="M 605 290 L 670 285 L 710 305 L 705 330 L 665 340 L 610 335 L 600 310 Z" opacity="0.8" />
          <path d="M 715 305 L 780 300 L 820 320 L 815 345 L 775 355 L 720 350 L 710 325 Z" opacity="0.8" />
          <path d="M 285 320 L 350 315 L 380 335 L 375 360 L 340 370 L 290 365 L 280 340 Z" opacity="0.8" />
          <path d="M 150 100 L 220 95 L 250 110 L 245 130 L 210 140 L 160 135 L 145 115 Z" opacity="0.8" />
          <path d="M 255 110 L 320 105 L 350 120 L 345 140 L 310 150 L 260 145 L 250 125 Z" opacity="0.8" />
          <path d="M 355 120 L 420 115 L 450 130 L 445 150 L 410 160 L 360 155 L 350 135 Z" opacity="0.8" />
          <path d="M 455 130 L 520 125 L 550 140 L 545 160 L 510 170 L 460 165 L 450 145 Z" opacity="0.8" />
          <path d="M 80 180 L 140 175 L 170 195 L 165 220 L 130 230 L 85 225 L 75 200 Z" opacity="0.8" />
          <path d="M 80 235 L 140 230 L 170 250 L 165 275 L 130 285 L 85 280 L 75 255 Z" opacity="0.8" />
          <path d="M 80 290 L 140 285 L 170 305 L 165 330 L 130 340 L 85 335 L 75 310 Z" opacity="0.8" />
        </g>

        <g className="grid-lines" stroke="#1e293b" strokeWidth="0.3" opacity="0.3">
          <line x1="0" y1="100" x2="1000" y2="100" />
          <line x1="0" y1="150" x2="1000" y2="150" />
          <line x1="0" y1="200" x2="1000" y2="200" />
          <line x1="0" y1="250" x2="1000" y2="250" />
          <line x1="0" y1="300" x2="1000" y2="300" />
          <line x1="0" y1="350" x2="1000" y2="350" />
          <line x1="0" y1="400" x2="1000" y2="400" />

          <line x1="100" y1="0" x2="100" y2="500" />
          <line x1="200" y1="0" x2="200" y2="500" />
          <line x1="300" y1="0" x2="300" y2="500" />
          <line x1="400" y1="0" x2="400" y2="500" />
          <line x1="500" y1="0" x2="500" y2="500" />
          <line x1="600" y1="0" x2="600" y2="500" />
          <line x1="700" y1="0" x2="700" y2="500" />
          <line x1="800" y1="0" x2="800" y2="500" />
          <line x1="900" y1="0" x2="900" y2="500" />
        </g>

        <circle cx="500" cy="250" r="3" fill="#3b82f6" opacity="0.3" />
      </svg>
    </div>
  );
}
