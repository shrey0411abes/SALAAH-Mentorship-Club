import { useId } from 'react';

/**
 * Salaah Logo Component
 * 
 * Props:
 * - variant: "full" | "mark" (default "full")
 * - tone: "light" | "dark" (default "light")
 * - height: number | string (optional)
 * - width: number | string (optional)
 * - className: string
 * - title: string (accessibility)
 * 
 * Anatomy:
 * 1. Shield Mark (Heater shield + outlined ABES vector + Greek meander + 7 lotus petals + outlined Estd. 2000)
 * 2. Divider (Dual vertical lines)
 * 3. Wordmark ("सलाह" with brush shirorekha & subtle displacement filter)
 * 4. Tagline ("THE MENTOR COMMUNITY")
 * 5. Calligraphic Swoosh underline flourish
 */
export function Logo({
  variant = 'full',
  tone = 'light',
  height,
  width,
  className = '',
  title = 'Salaah – The Mentor Community',
  ...rest
}) {
  const uniqueId = useId().replace(/:/g, '_');
  const brushFilterId = `brush-filter-${uniqueId}`;
  const shieldGradId = `shield-grad-${uniqueId}`;
  const goldGradId = `gold-grad-${uniqueId}`;
  const meanderPatternId = `meander-pat-${uniqueId}`;

  // Dark-mode safe colors
  const inkColor = tone === 'dark' ? '#FBF7F0' : '#111111';
  const estdColor = tone === 'dark' ? '#F6D58A' : '#111111';

  // Mark only variant
  if (variant === 'mark') {
    return (
      <svg
        viewBox="18 24 192 258"
        height={height}
        width={width}
        className={`salaah-logo-mark ${className}`}
        role="img"
        aria-label={title}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <title>{title}</title>
        <defs>
          <linearGradient id={shieldGradId} x1="34" y1="36" x2="194" y2="246" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A32424" />
            <stop offset="45%" stopColor="#8B1A1A" />
            <stop offset="100%" stopColor="#5E1010" />
          </linearGradient>

          <linearGradient id={goldGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#E8A317" />
            <stop offset="100%" stopColor="#C47E0B" />
          </linearGradient>

          <pattern id={meanderPatternId} width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 0 1 H 8 V 9 H 3 V 4 H 6"
              fill="none"
              stroke="#E8A317"
              strokeWidth="1.2"
              strokeLinecap="square"
            />
          </pattern>
        </defs>

        <ShieldMark
          shieldGradId={shieldGradId}
          goldGradId={goldGradId}
          meanderPatternId={meanderPatternId}
          estdColor={estdColor}
        />
      </svg>
    );
  }

  // Full logo variant
  return (
    <svg
      viewBox="0 0 700 300"
      height={height}
      width={width}
      className={`salaah-logo ${className}`}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={shieldGradId} x1="34" y1="36" x2="194" y2="246" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A32424" />
          <stop offset="45%" stopColor="#8B1A1A" />
          <stop offset="100%" stopColor="#5E1010" />
        </linearGradient>

        <linearGradient id={goldGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#E8A317" />
          <stop offset="100%" stopColor="#C47E0B" />
        </linearGradient>

        <pattern id={meanderPatternId} width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 0 1 H 8 V 9 H 3 V 4 H 6"
            fill="none"
            stroke="#E8A317"
            strokeWidth="1.2"
            strokeLinecap="square"
          />
        </pattern>

        {/* Subtle organic brush turbulence for Devanagari calligraphy */}
        <filter id={brushFilterId} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* 1. Shield Mark (Outlined Vectors) */}
      <ShieldMark
        shieldGradId={shieldGradId}
        goldGradId={goldGradId}
        meanderPatternId={meanderPatternId}
        estdColor={estdColor}
      />

      {/* 2. Vertical Double Bar Divider */}
      <g className="logo-divider">
        <line x1="220" y1="52" x2="220" y2="236" stroke={inkColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="226" y1="52" x2="226" y2="236" stroke={inkColor} strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* 3. Wordmark: 'सलाह' in bold brush-calligraphy */}
      <g className="logo-wordmark" filter={`url(#${brushFilterId})`}>
        {/* Outlined calligraphic shirorekha headline bar */}
        <path
          d="M 248,84 C 320,80 570,80 644,84 C 648,86 647,90 642,91 C 570,93 320,93 248,91 C 243,89 243,86 248,84 Z"
          fill={inkColor}
        />
        <text
          x="250"
          y="178"
          fill={inkColor}
          fontFamily="'Yatra One', 'Amita', 'Tiro Devanagari Hindi', 'Cinzel', serif"
          fontSize="116"
          fontWeight="900"
          letterSpacing="1"
        >
          सलाह
        </text>
      </g>

      {/* 4. Tagline: 'The Mentor Community' */}
      <text
        x="644"
        y="214"
        textAnchor="end"
        fill={inkColor}
        fontFamily="'Poppins', 'Inter', -apple-system, sans-serif"
        fontSize="19"
        fontWeight="600"
        letterSpacing="3.5"
      >
        THE MENTOR COMMUNITY
      </text>

      {/* 5. Calligraphic Swoosh underline flourish */}
      <path
        d="M 244,222 C 238,245 258,262 292,252 C 334,240 478,236 648,236 C 652,236 652,238 648,238 C 478,240 334,244 290,257 C 252,268 230,248 240,221 Z"
        fill={inkColor}
        className="logo-swoosh"
      />
    </svg>
  );
}

/**
 * Reusable Shield Mark with 100% Outlined Vector Glyphs for "ABES" and "Estd. 2000"
 * Zero external font dependency.
 */
function ShieldMark({ shieldGradId, goldGradId, meanderPatternId, estdColor }) {
  return (
    <g className="logo-shield-group">
      {/* Heater-style Shield Outer Border */}
      <path
        d="M 34,42 C 70,36 158,36 194,42 L 194,146 C 194,204 114,242 114,246 C 114,242 34,204 34,146 Z"
        fill={`url(#${shieldGradId})`}
        stroke="#E8A317"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Shield Inner Gold Inset Accent */}
      <path
        d="M 42,48 C 74,43 154,43 186,48 L 186,144 C 186,196 114,232 114,235 C 114,232 42,196 42,144 Z"
        fill="none"
        stroke="#F6D58A"
        strokeWidth="1.2"
        opacity="0.75"
      />

      {/* Subtle top inner highlight */}
      <path
        d="M 44,52 C 76,47 152,47 184,52 L 184,78 C 150,72 78,72 44,78 Z"
        fill="white"
        opacity="0.08"
      />

      {/* Top Text: "ABES" Outlined Vector Path (Font-Independent) */}
      <path
        d="M 81.5,72 L 87.5,54 L 93.5,72 H 90.3 L 88.7,67.5 H 86.3 L 84.7,72 Z M 87.5,58.5 L 86.8,64.5 H 88.2 Z M 97.5,54 H 105.5 C 108,54 109.5,55.5 109.5,58 C 109.5,59.8 108.3,61 106.7,61.5 C 108.7,62.2 110,64 110,66.5 C 110,69.5 108,72 105,72 H 97.5 Z M 101,57 V 61.5 H 105 C 106.1,61.5 106.9,60.7 106.9,59.5 C 106.9,58.3 106.1,57 105,57 Z M 101,64 V 69 H 105.3 C 106.5,69 107.4,68.1 107.4,66.5 C 107.4,64.8 106.5,64 105.3,64 Z M 115.5,54 H 128.5 V 57.5 H 119 V 61.5 H 126.5 V 64.5 H 119 V 68.5 H 129 V 72 H 115.5 Z M 144,57.5 C 142.7,55.5 140.7,54 138,54 C 135,54 133,56 133,58.5 C 133,61 134.7,62.2 138,63.2 C 141.3,64.2 143,65.5 143,68 C 143,70.5 141,72 138,72 C 135,72 132.7,70.2 132,68 L 134.7,66.8 C 135.3,68.2 136.7,69.2 138,69.2 C 139.5,69.2 140.3,68.5 140.3,67.5 C 140.3,66.2 139,65.2 136.3,64 C 133.5,62.8 131,61.2 131,58.5 C 131,55.8 133.7,54 138,54 C 141,54 143,55.5 144,57.5 Z"
        fill={`url(#${goldGradId})`}
      />

      {/* Central Circular Medallion */}
      <circle
        cx="114"
        cy="144"
        r="44"
        fill="#6E1212"
        stroke="#E8A317"
        strokeWidth="2.5"
      />

      {/* Greek-key (meander) decorative band */}
      <circle
        cx="114"
        cy="144"
        r="40"
        fill={`url(#${meanderPatternId})`}
        opacity="0.85"
      />

      {/* Inner Medallion Disk */}
      <circle
        cx="114"
        cy="144"
        r="34"
        fill="#550E0E"
        stroke="#E8A317"
        strokeWidth="1.5"
      />

      {/* Lotus: 7 Layered Petal Paths */}
      <path
        d="M 98,162 C 105,167 123,167 130,162 C 126,159 102,159 98,162 Z"
        fill="#D97706"
      />
      <path
        d="M 92,156 C 85,145 89,134 100,138 C 97,147 100,154 108,160 C 99,161 95,159 92,156 Z"
        fill="#E8A317"
      />
      <path
        d="M 136,156 C 143,145 139,134 128,138 C 131,147 128,154 120,160 C 129,161 133,159 136,156 Z"
        fill="#E8A317"
      />
      <path
        d="M 103,158 C 97,143 103,128 112,125 C 110,137 112,148 114,160 C 109,159 105,159 103,158 Z"
        fill="#F6D58A"
      />
      <path
        d="M 125,158 C 131,143 125,128 116,125 C 118,137 116,148 114,160 C 119,159 123,159 125,158 Z"
        fill="#F6D58A"
      />
      <path
        d="M 114,118 C 108,131 108,146 114,160 C 120,146 120,131 114,118 Z"
        fill="#FFE082"
      />
      <path
        d="M 114,126 C 111,135 111,148 114,158 C 117,148 117,135 114,126 Z"
        fill="#D97706"
        opacity="0.85"
      />
      <circle cx="114" cy="156" r="2.5" fill="#FFF9C4" />

      {/* Bottom: "Estd. 2000" Outlined Vector Path (Font-Independent) */}
      <path
        d="M 76,260 H 82 V 262 H 78 V 264 H 81.5 V 266 H 78 V 268 H 82 V 270 H 76 Z M 88.5,264 C 88,263 87,262.5 86,262.5 C 84.8,262.5 84,263.2 84,264.2 C 84,265.5 85,266 86.5,266.5 C 88,267 89,267.8 89,269 C 89,270.2 88,271 86.5,271 C 85,271 84.2,270.2 83.8,269.2 L 85,268.8 C 85.2,269.4 85.8,269.8 86.5,269.8 C 87.2,269.8 87.8,269.4 87.8,268.8 C 87.8,268.2 87.2,267.8 85.8,267.2 C 84.5,266.7 83,266 83,264.5 C 83,263.2 84.2,261.5 86,261.5 C 87.5,261.5 88.5,262.5 89,263.8 Z M 92,261 V 263 H 90.5 V 264.2 H 92 V 269 C 92,270.2 92.8,270.8 94,270.8 H 95 V 269.5 H 94.2 C 93.6,269.5 93.2,269.2 93.2,268.5 V 264.2 H 95 V 263 H 93.2 V 261 Z M 100.5,260 V 263.5 C 99.8,262.8 98.8,262.5 97.8,262.5 C 95.8,262.5 94.5,264 94.5,266.5 C 94.5,269 95.8,270.5 97.8,270.5 C 98.8,270.5 99.8,270.2 100.5,269.5 V 270 H 102 V 260 Z M 98.2,264 C 99.5,264 100.5,265.2 100.5,266.5 C 100.5,267.8 99.5,269 98.2,269 C 97,269 96,267.8 96,266.5 C 96,265.2 97,264 98.2,264 Z M 103.5,269 H 105 V 270.5 H 103.5 Z M 112.5,263.5 C 113,261.8 114.5,260.5 116.5,260.5 C 118.8,260.5 120,262 120,263.8 C 120,265.8 118.5,267.5 115,269.5 H 120 V 271 H 112.5 V 269.8 L 116.2,267.2 C 117.8,266 118.5,265 118.5,263.8 C 118.5,262.8 117.8,262 116.5,262 C 115.2,262 114.2,262.8 113.8,264 Z M 125.5,260.5 C 123.2,260.5 122,262.8 122,265.8 C 122,268.8 123.2,271 125.5,271 C 127.8,271 129,268.8 129,265.8 C 129,262.8 127.8,260.5 125.5,260.5 Z M 125.5,262 C 126.8,262 127.5,263.5 127.5,265.8 C 127.5,268 126.8,269.5 125.5,269.5 C 124.2,269.5 123.5,268 123.5,265.8 C 123.5,263.5 124.2,262 125.5,262 Z M 134.5,260.5 C 132.2,260.5 131,262.8 131,265.8 C 131,268.8 132.2,271 134.5,271 C 136.8,271 138,268.8 138,265.8 C 138,262.8 136.8,260.5 134.5,260.5 Z M 134.5,262 C 135.8,262 136.5,263.5 136.5,265.8 C 136.5,268 135.8,269.5 134.5,269.5 C 133.2,269.5 132.5,268 132.5,265.8 C 132.5,263.5 133.2,262 134.5,262 Z M 143.5,260.5 C 141.2,260.5 140,262.8 140,265.8 C 140,268.8 141.2,271 143.5,271 C 145.8,271 147,268.8 147,265.8 C 147,262.8 145.8,260.5 143.5,260.5 Z M 143.5,262 C 144.8,262 145.5,263.5 145.5,265.8 C 145.5,268 144.8,269.5 143.5,269.5 C 142.2,269.5 141.5,268 141.5,265.8 C 141.5,263.5 142.2,262 143.5,262 Z"
        fill={estdColor}
      />
    </g>
  );
}

/**
 * Convenience component for Mark-only variant
 */
export function LogoMark(props) {
  return <Logo variant="mark" {...props} />;
}

export default Logo;
