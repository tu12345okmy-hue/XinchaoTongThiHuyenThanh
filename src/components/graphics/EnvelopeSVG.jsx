import React from 'react';

export default function EnvelopeSVG({ isOpen, isHovered }) {
  return (
    <div className="relative w-72 h-52 sm:w-96 sm:h-64 cursor-pointer select-none filter drop-shadow-2xl transition-transform duration-500 hover:scale-105">
      <svg
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Paper Gradients */}
          <linearGradient id="envelopeBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="50%" stopColor="#F5EFE6" />
            <stop offset="100%" stopColor="#E8DFD1" />
          </linearGradient>

          <linearGradient id="envelopeFlap" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBF8F3" />
            <stop offset="100%" stopColor="#E6DCCF" />
          </linearGradient>

          <linearGradient id="envelopeInside" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4ECE1" />
            <stop offset="100%" stopColor="#DBCDBA" />
          </linearGradient>

          <linearGradient id="waxSeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A83244" />
            <stop offset="100%" stopColor="#6E1B28" />
          </linearGradient>

          <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#3D342B" floodOpacity="0.25" />
          </filter>

          <pattern id="innerPattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="4" fill="#C86D7B" fillOpacity="0.15" />
            <circle cx="5" cy="5" r="2" fill="#5C745D" fillOpacity="0.1" />
            <circle cx="25" cy="5" r="2" fill="#5C745D" fillOpacity="0.1" />
          </pattern>
        </defs>

        {/* Envelope Shadow */}
        <rect x="10" y="30" width="380" height="230" rx="16" fill="black" fillOpacity="0.08" filter="blur(10px)" />

        {/* Interior Backing with Floral Pattern */}
        <path
          d="M 20 40 L 380 40 L 380 250 L 20 250 Z"
          fill="url(#envelopeInside)"
          rx="12"
        />
        <path
          d="M 20 40 L 380 40 L 380 250 L 20 250 Z"
          fill="url(#innerPattern)"
        />

        {/* Letter Preview Card inside Envelope (slides up slightly on hover) */}
        <g
          className={`transition-transform duration-700 ease-out ${
            isOpen ? '-translate-y-28 opacity-90' : isHovered ? '-translate-y-4' : 'translate-y-0'
          }`}
        >
          <rect x="40" y="45" width="320" height="180" rx="10" fill="#FFFDF9" stroke="#E8DFD1" strokeWidth="2" />
          {/* Letter Lines */}
          <line x1="80" y1="80" x2="320" y2="80" stroke="#C86D7B" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="80" y1="110" x2="320" y2="110" stroke="#D6C7B2" strokeWidth="1.5" />
          <line x1="80" y1="135" x2="280" y2="135" stroke="#D6C7B2" strokeWidth="1.5" />
          <line x1="80" y1="160" x2="300" y2="160" stroke="#D6C7B2" strokeWidth="1.5" />
          {/* Stamp Icon on Letter */}
          <rect x="290" y="55" width="35" height="42" rx="3" fill="#E2E9E1" stroke="#5C745D" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="307" y="80" textAnchor="middle" fill="#5C745D" fontSize="18">💌</text>
        </g>

        {/* Envelope Body Pocket Front Sides */}
        {/* Left Wing */}
        <path
          d="M 20 40 L 200 160 L 20 250 Z"
          fill="url(#envelopeBody)"
          stroke="#D8CCBB"
          strokeWidth="1"
        />
        {/* Right Wing */}
        <path
          d="M 380 40 L 200 160 L 380 250 Z"
          fill="url(#envelopeBody)"
          stroke="#D8CCBB"
          strokeWidth="1"
        />
        {/* Bottom Wing */}
        <path
          d="M 20 250 L 200 145 L 380 250 Z"
          fill="url(#envelopeFlap)"
          stroke="#D8CCBB"
          strokeWidth="1.5"
        />

        {/* Envelope Outer Border */}
        <rect x="20" y="40" width="360" height="210" rx="12" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Decorative Floral Watermark on Front */}
        <path
          d="M 50 220 Q 90 190 120 230"
          stroke="#C86D7B"
          strokeWidth="2"
          strokeOpacity="0.3"
          fill="none"
        />
        <circle cx="120" cy="230" r="4" fill="#C86D7B" fillOpacity="0.4" />
        <circle cx="105" cy="210" r="3" fill="#5C745D" fillOpacity="0.4" />

        {/* Top Fold Flap */}
        <g
          className={`origin-top transition-transform duration-700 ease-in-out ${
            isOpen ? '[transform:rotateX(180deg)]' : ''
          }`}
          style={{ transformOrigin: '200px 40px' }}
        >
          <path
            d="M 20 40 L 200 160 L 380 40 Z"
            fill="url(#envelopeFlap)"
            stroke="#D8CCBB"
            strokeWidth="1.5"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))"
          />

          {/* Wax Seal Button at Tip of Flap */}
          <g transform="translate(200, 150)">
            <circle r="22" fill="url(#waxSeal)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
            <circle r="18" fill="none" stroke="#D47383" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Heart Logo on Wax Seal */}
            <path
              d="M 0 4 C -6 -4 -12 0 -6 6 L 0 12 L 6 6 C 12 0 6 -4 0 4 Z"
              fill="#FFFDF9"
              transform="translate(0, -7) scale(0.9)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
