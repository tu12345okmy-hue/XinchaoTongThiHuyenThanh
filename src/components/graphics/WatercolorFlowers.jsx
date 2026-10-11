import React from 'react';

/**
 * 4 separate Pink Tulip watercolor floral layers for GSAP scaling & parallax transition.
 * Dedicated Pink Tulip (Hoa Tulip màu hồng) artwork with soft pink gradients and green tulip leaves.
 */

export const FlowerLayer1 = React.forwardRef((props, ref) => (
  <div ref={ref} className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 1000 1000" className="w-[140vmax] h-[140vmax] opacity-90 fill-current">
      <defs>
        <radialGradient id="tulipGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FCE7F0" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F4B8C7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D8708C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tulipPetalGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E07A95" />
          <stop offset="60%" stopColor="#F9C6D3" />
          <stop offset="100%" stopColor="#FFF0F5" />
        </linearGradient>
      </defs>

      {/* Ambient Pink Aura */}
      <circle cx="500" cy="500" r="420" fill="url(#tulipGlow1)" filter="blur(25px)" />

      {/* Radiating Pink Tulip Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
        <g key={idx} transform={`translate(500, 500) rotate(${angle})`}>
          <path
            d="M 0 0 C -40 -120 -60 -280 0 -380 C 60 -280 40 -120 0 0 Z"
            fill="url(#tulipPetalGrad1)"
            opacity="0.5"
          />
        </g>
      ))}
    </svg>
  </div>
));

export const FlowerLayer2 = React.forwardRef((props, ref) => (
  <div ref={ref} className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 1000 1000" className="w-[120vmax] h-[120vmax] filter drop-shadow-xl">
      <defs>
        <linearGradient id="pinkTulipBloom" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C95B78" />
          <stop offset="40%" stopColor="#EC89A0" />
          <stop offset="85%" stopColor="#FAC8D4" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="tulipLeafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#96B898" />
          <stop offset="70%" stopColor="#4D6B50" />
          <stop offset="100%" stopColor="#2A402D" />
        </linearGradient>
      </defs>

      {/* Ring of 6 Pink Tulip Buds */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={i} transform={`translate(500, 500) rotate(${angle}) translate(0, -280)`}>
          {/* Tulip Stem */}
          <path d="M 0 100 Q -10 160 0 250" stroke="url(#tulipLeafGreen)" strokeWidth="12" fill="none" strokeLinecap="round" />
          {/* Tulip Leaf */}
          <path d="M 0 180 Q -60 120 -30 60 Q 10 120 0 180 Z" fill="url(#tulipLeafGreen)" opacity="0.9" />

          {/* Tulip Cup Head */}
          <g transform="translate(0, 30)">
            {/* Outer Left Petal */}
            <path d="M 0 50 C -45 20 -55 -40 -20 -80 C -5 -50 0 0 0 50 Z" fill="url(#pinkTulipBloom)" />
            {/* Outer Right Petal */}
            <path d="M 0 50 C 45 20 55 -40 20 -80 C 5 -50 0 0 0 50 Z" fill="url(#pinkTulipBloom)" />
            {/* Center Front Petal */}
            <path d="M 0 50 C -30 10 -35 -60 0 -95 C 35 -60 30 10 0 50 Z" fill="url(#pinkTulipBloom)" />
            {/* Soft Highlight */}
            <path d="M 0 30 C -15 0 -18 -40 0 -70 C 18 -40 15 0 0 30 Z" fill="#FFF0F5" opacity="0.6" />
          </g>
        </g>
      ))}
    </svg>
  </div>
));

export const FlowerLayer3 = React.forwardRef((props, ref) => (
  <div ref={ref} className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 1000 1000" className="w-[150vmax] h-[150vmax] filter drop-shadow-2xl">
      <defs>
        <linearGradient id="masterTulipPink" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#A83855" />
          <stop offset="35%" stopColor="#D96B86" />
          <stop offset="75%" stopColor="#F8BAC9" />
          <stop offset="100%" stopColor="#FFF2F6" />
        </linearGradient>
        <radialGradient id="yellowCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="100%" stopColor="#D4A359" />
        </radialGradient>
      </defs>

      {/* Central Grand Pink Tulip Flower Blossom */}
      <g transform="translate(500, 500)">
        {/* Layer of 8 Tulip Cup Petals spreading outwards */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            {/* Outer Tulip Petal */}
            <path
              d="M 0 0 C -50 -100 -90 -220 0 -310 C 90 -220 50 -100 0 0 Z"
              fill="url(#masterTulipPink)"
              opacity="0.95"
            />
            {/* Inner Tulip Petal Fold */}
            <path
              d="M 0 0 C -25 -70 -45 -160 0 -230 C 45 -160 25 -70 0 0 Z"
              fill="#FFF0F4"
              opacity="0.5"
            />
          </g>
        ))}

        {/* Central Tulip Pistil / Golden Stamen Core */}
        <circle cx="0" cy="0" r="50" fill="url(#yellowCore)" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <circle
            key={i}
            cx={28 * Math.cos((angle * Math.PI) / 180)}
            cy={28 * Math.sin((angle * Math.PI) / 180)}
            r="7"
            fill="#4D6B50"
          />
        ))}
      </g>
    </svg>
  </div>
));

export const FlowerLayer4 = React.forwardRef((props, ref) => (
  <div ref={ref} className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 1000 1000" className="w-[180vmax] h-[180vmax] filter drop-shadow-2xl">
      <defs>
        <linearGradient id="foreTulipPink" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C95B78" />
          <stop offset="50%" stopColor="#F9C6D3" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="foreTulipLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DA680" />
          <stop offset="100%" stopColor="#354D38" />
        </linearGradient>
      </defs>

      {/* Foreground Frame Corner Pink Tulip Blossoms & Curved Leaves */}
      <g transform="translate(80, 80) rotate(15)">
        <path d="M 0 0 C 150 -50 300 100 400 250 C 200 350 50 200 0 0 Z" fill="url(#foreTulipPink)" opacity="0.95" />
        <path d="M 0 0 C 200 100 250 300 150 450 C 50 300 0 150 0 0 Z" fill="url(#foreTulipLeaf)" opacity="0.8" />
      </g>

      <g transform="translate(920, 80) rotate(-15)">
        <path d="M 0 0 C -150 -50 -300 100 -400 250 C -200 350 -50 200 0 0 Z" fill="url(#foreTulipPink)" opacity="0.95" />
        <path d="M 0 0 C -200 100 -250 300 -150 450 C -50 300 0 150 0 0 Z" fill="url(#foreTulipLeaf)" opacity="0.8" />
      </g>

      <g transform="translate(80, 920) rotate(-15)">
        <path d="M 0 0 C 150 50 300 -100 400 -250 C 200 -350 50 -200 0 0 Z" fill="url(#foreTulipPink)" opacity="0.95" />
      </g>

      <g transform="translate(920, 920) rotate(15)">
        <path d="M 0 0 C -150 50 -300 -100 -400 -250 C -200 -350 -50 -200 0 0 Z" fill="url(#foreTulipPink)" opacity="0.95" />
      </g>
    </svg>
  </div>
));
