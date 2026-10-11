import React from 'react';

export default function BouquetSVG() {
  return (
    <div className="w-full max-w-sm mx-auto aspect-square filter drop-shadow-xl select-none">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Kraft Paper Wrapping Gradient */}
          <linearGradient id="kraftPaper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="50%" stopColor="#F5EFE6" />
            <stop offset="100%" stopColor="#E8DFD1" />
          </linearGradient>

          {/* Pink Tulip Bloom Gradient */}
          <linearGradient id="pinkTulipGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C95B78" />
            <stop offset="45%" stopColor="#EC89A0" />
            <stop offset="85%" stopColor="#FAC8D4" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* Deep Pink Tulip Gradient */}
          <linearGradient id="deepTulipGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#A83855" />
            <stop offset="50%" stopColor="#D96B86" />
            <stop offset="100%" stopColor="#F8BAC9" />
          </linearGradient>

          {/* Leaf Green Gradient */}
          <linearGradient id="tulipLeafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#96B898" />
            <stop offset="60%" stopColor="#4D6B50" />
            <stop offset="100%" stopColor="#2A402D" />
          </linearGradient>
        </defs>

        {/* Tulip Stems */}
        <g stroke="#4D6B50" strokeWidth="7" strokeLinecap="round">
          <line x1="180" y1="310" x2="170" y2="380" />
          <line x1="200" y1="310" x2="200" y2="385" />
          <line x1="220" y1="310" x2="230" y2="380" />
        </g>

        {/* Slender Curved Tulip Leaves */}
        <g fill="url(#tulipLeafGreen)">
          <path d="M 200 220 C 130 180 80 120 70 60 C 120 100 170 160 200 220 Z" opacity="0.9" />
          <path d="M 200 220 C 270 180 320 120 330 60 C 280 100 230 160 200 220 Z" opacity="0.9" />
          <path d="M 200 200 C 160 140 140 80 150 20 C 180 70 190 130 200 200 Z" opacity="0.85" />
          <path d="M 200 200 C 240 140 260 80 250 20 C 220 70 210 130 200 200 Z" opacity="0.85" />
        </g>

        {/* White Baby's Breath Accents */}
        <g fill="#FFFDF9" stroke="#E2E9E1" strokeWidth="1">
          <circle cx="110" cy="130" r="7" />
          <circle cx="125" cy="115" r="5" />
          <circle cx="290" cy="130" r="7" />
          <circle cx="275" cy="115" r="5" />
          <circle cx="200" cy="50" r="8" />
        </g>

        {/* PINK TULIP BLOOMS ARRANGEMENT */}
        {/* Tulip 1: Top Center Pink Tulip */}
        <g transform="translate(200, 85)">
          <path d="M 0 40 C -35 15 -42 -30 -16 -60 C -4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C 35 15 42 -30 16 -60 C 4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C -24 8 -27 -45 0 -72 C 27 -45 24 8 0 40 Z" fill="url(#deepTulipGrad)" />
          <path d="M 0 25 C -12 0 -14 -30 0 -50 C 14 -30 12 0 0 25 Z" fill="#FFF0F5" opacity="0.7" />
        </g>

        {/* Tulip 2: Left Middle Pink Tulip */}
        <g transform="translate(135, 130) rotate(-20)">
          <path d="M 0 40 C -35 15 -42 -30 -16 -60 C -4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C 35 15 42 -30 16 -60 C 4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C -24 8 -27 -45 0 -72 C 27 -45 24 8 0 40 Z" fill="url(#deepTulipGrad)" />
        </g>

        {/* Tulip 3: Right Middle Pink Tulip */}
        <g transform="translate(265, 130) rotate(20)">
          <path d="M 0 40 C -35 15 -42 -30 -16 -60 C -4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C 35 15 42 -30 16 -60 C 4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C -24 8 -27 -45 0 -72 C 27 -45 24 8 0 40 Z" fill="url(#deepTulipGrad)" />
        </g>

        {/* Tulip 4: Center Main Front Pink Tulip */}
        <g transform="translate(200, 155) scale(1.15)">
          <path d="M 0 40 C -35 15 -42 -30 -16 -60 C -4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C 35 15 42 -30 16 -60 C 4 -38 0 0 0 40 Z" fill="url(#pinkTulipGrad)" />
          <path d="M 0 40 C -24 8 -27 -45 0 -72 C 27 -45 24 8 0 40 Z" fill="url(#deepTulipGrad)" />
          <path d="M 0 25 C -12 0 -14 -30 0 -50 C 14 -30 12 0 0 25 Z" fill="#FFF0F5" opacity="0.8" />
        </g>

        {/* Paper Wrapping Cone */}
        <path
          d="M 90 200 L 310 200 L 230 350 Q 200 360 170 350 Z"
          fill="url(#kraftPaper)"
          stroke="#D8CCBB"
          strokeWidth="2"
          filter="drop-shadow(0 10px 15px rgba(0,0,0,0.12))"
        />

        {/* Paper Wrap Fold Shadow Layer */}
        <path
          d="M 80 190 Q 200 230 320 190 L 250 320 L 150 320 Z"
          fill="#E8DFD1"
          opacity="0.4"
        />

        {/* Soft Pink Silk Ribbon Tie with Bow */}
        <g transform="translate(200, 290)">
          {/* Ribbon Loops */}
          <path d="M 0 0 C -40 -20 -60 10 -10 10 Z" fill="#EC89A0" stroke="#C95B78" strokeWidth="1.5" />
          <path d="M 0 0 C 40 -20 60 10 10 10 Z" fill="#EC89A0" stroke="#C95B78" strokeWidth="1.5" />
          {/* Knot */}
          <circle cx="0" cy="2" r="8" fill="#C95B78" />
          {/* Ribbon Tails */}
          <path d="M -3 6 Q -20 30 -35 50" stroke="#EC89A0" strokeWidth="4" strokeLinecap="round" />
          <path d="M 3 6 Q 20 30 35 50" stroke="#EC89A0" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Sparkle Hearts */}
        <text x="65" y="150" fontSize="18" fill="#C95B78" className="animate-pulse">✨</text>
        <text x="315" y="140" fontSize="20" fill="#C95B78" className="animate-pulse">🌷</text>
      </svg>
    </div>
  );
}
