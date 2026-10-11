import React from 'react';

export default function CassetteTapeSVG({ isPlaying, currentTrackTitle, currentArtist }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[1.6/1] filter drop-shadow-2xl select-none group">
      <svg
        viewBox="0 0 500 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Cassette Plastic Body Outer Gradient */}
          <linearGradient id="tapeBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A3F35" />
            <stop offset="50%" stopColor="#2E2620" />
            <stop offset="100%" stopColor="#1A1410" />
          </linearGradient>

          {/* Vintage Sticker Label Gradient */}
          <linearGradient id="tapeLabel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="70%" stopColor="#F5EFE6" />
            <stop offset="100%" stopColor="#E6DCCF" />
          </linearGradient>

          {/* Metallic Reel Wheel Gradient */}
          <linearGradient id="reelMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Magnetic Tape Ribbon Gradient */}
          <linearGradient id="tapeRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B2314" />
            <stop offset="50%" stopColor="#59341C" />
            <stop offset="100%" stopColor="#3B2314" />
          </linearGradient>

          {/* Label Accent Stripe */}
          <linearGradient id="labelStripe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C86D7B" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#5C745D" />
          </linearGradient>
        </defs>

        {/* Outer Plastic Case Base */}
        <rect x="10" y="10" width="480" height="290" rx="20" fill="url(#tapeBody)" stroke="#5C4D40" strokeWidth="2" />
        <rect x="18" y="18" width="464" height="274" rx="16" fill="none" stroke="#251F1A" strokeWidth="3" />

        {/* 4 Corner Assembly Screws */}
        <g fill="#8C7A6B">
          <circle cx="28" cy="28" r="6" stroke="#1A1410" strokeWidth="1.5" />
          <line x1="24" y1="28" x2="32" y2="28" stroke="#1A1410" strokeWidth="1.5" />
          
          <circle cx="472" cy="28" r="6" stroke="#1A1410" strokeWidth="1.5" />
          <line x1="468" y1="28" x2="476" y2="28" stroke="#1A1410" strokeWidth="1.5" />
          
          <circle cx="28" cy="282" r="6" stroke="#1A1410" strokeWidth="1.5" />
          <line x1="28" y1="278" x2="28" y2="286" stroke="#1A1410" strokeWidth="1.5" />
          
          <circle cx="472" cy="282" r="6" stroke="#1A1410" strokeWidth="1.5" />
          <line x1="472" y1="278" x2="472" y2="286" stroke="#1A1410" strokeWidth="1.5" />
        </g>

        {/* Paper Sticker Label */}
        <rect x="35" y="32" width="430" height="195" rx="10" fill="url(#tapeLabel)" stroke="#D8CCBB" strokeWidth="2" />

        {/* Vintage Color Stripe Bar at Top of Label */}
        <rect x="35" y="42" width="430" height="14" fill="url(#labelStripe)" opacity="0.85" />
        
        {/* Label Header Text */}
        <text x="55" y="75" fontFamily="Courier Prime, monospace" fontSize="16" fontWeight="bold" fill="#3D342B">SIDE A</text>
        <text x="375" y="75" fontFamily="Courier Prime, monospace" fontSize="14" fontWeight="bold" fill="#3D342B">HIGH BIAS EQ</text>

        {/* Handwritten Title Box */}
        <rect x="55" y="85" width="390" height="38" rx="4" fill="#FFFDF9" stroke="#D6C7B2" strokeWidth="1.5" />
        <line x1="65" y1="112" x2="435" y2="112" stroke="#E29DA7" strokeWidth="1" strokeDasharray="4 3" />
        
        {/* Current Track Title & Artist */}
        <text x="70" y="107" fontFamily="Caveat, cursive" fontSize="22" fontWeight="bold" fill="#8A2B3E">
          {currentTrackTitle || 'My Romantic Mixtape'} - <tspan fill="#354737" fontSize="19">{currentArtist || 'For You'}</tspan>
        </text>

        {/* Transparent Central Tape Window Frame */}
        <rect x="95" y="138" width="310" height="75" rx="10" fill="#15120F" stroke="#8C7A6B" strokeWidth="2" />
        <rect x="102" y="145" width="296" height="61" rx="6" fill="#0A0807" />

        {/* Visible Magnetic Tape Spools Ribbon inside window */}
        <path d="M 175 175 L 325 175" stroke="url(#tapeRibbon)" strokeWidth="48" />

        {/* Left Reel Wheel (Spins when playing) */}
        <g transform="translate(175, 175)">
          {/* Outer Tape Spool Ring */}
          <circle cx="0" cy="0" r="32" fill="#3B2314" />
          <circle cx="0" cy="0" r="26" fill="url(#reelMetal)" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          
          {/* Teeth Mechanism (Rotates) */}
          <g className={isPlaying ? 'animate-tapeSpin origin-center' : ''} style={{ transformOrigin: '0px 0px' }}>
            <circle cx="0" cy="0" r="6" fill="#1E293B" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <rect
                key={i}
                x="-3"
                y="-13"
                width="6"
                height="6"
                rx="1.5"
                fill="#1E293B"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        </g>

        {/* Right Reel Wheel (Spins when playing) */}
        <g transform="translate(325, 175)">
          {/* Outer Tape Spool Ring */}
          <circle cx="0" cy="0" r="32" fill="#3B2314" />
          <circle cx="0" cy="0" r="26" fill="url(#reelMetal)" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          
          {/* Teeth Mechanism (Rotates) */}
          <g className={isPlaying ? 'animate-tapeSpin origin-center' : ''} style={{ transformOrigin: '0px 0px' }}>
            <circle cx="0" cy="0" r="6" fill="#1E293B" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <rect
                key={i}
                x="-3"
                y="-13"
                width="6"
                height="6"
                rx="1.5"
                fill="#1E293B"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        </g>

        {/* Tape Counter & Notch Scale */}
        <rect x="230" y="195" width="40" height="8" rx="2" fill="#2E2620" />
        <text x="250" y="202" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="8" fill="#C5A059">
          {isPlaying ? 'PLAY' : 'STOP'}
        </text>

        {/* Bottom Trapezoid Guide Extension */}
        <path d="M 80 240 L 420 240 L 390 295 L 110 295 Z" fill="#221C17" stroke="#4A3F35" strokeWidth="1.5" />
        
        {/* Bottom Magnetic Head Holes & Pressure Pad */}
        <circle cx="150" cy="268" r="12" fill="#100C0A" stroke="#5C4D40" strokeWidth="1.5" />
        <circle cx="350" cy="268" r="12" fill="#100C0A" stroke="#5C4D40" strokeWidth="1.5" />
        <rect x="220" y="258" width="60" height="20" rx="4" fill="#655344" stroke="#3A2F26" strokeWidth="1.5" />

        {/* Status Indicator LED Light */}
        <g transform="translate(435, 160)">
          <circle cx="0" cy="0" r="7" fill={isPlaying ? '#C86D7B' : '#5C745D'} className={isPlaying ? 'animate-pulse' : ''} />
          <circle cx="0" cy="0" r="11" fill="none" stroke={isPlaying ? '#C86D7B' : '#5C745D'} strokeWidth="1.5" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
