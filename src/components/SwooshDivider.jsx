
/**
 * SwooshDivider: An SVG curved divider reusing the calligraphic flourish
 * derived from the Salaah logo. Used between sections to create warm, organic transitions.
 */
export function SwooshDivider({
  fill = 'var(--paper)',
  accent = 'var(--gold)',
  flip = false,
  inverted = false,
  className = '',
  height = 56,
}) {
  const transform = `${flip ? 'scaleX(-1)' : ''} ${inverted ? 'scaleY(-1)' : ''}`.trim();

  return (
    <div
      className={`swoosh-divider-wrapper ${className}`}
      style={{
        overflow: 'clip',
        lineHeight: 0,
        width: '100%',
        transform: transform || undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: `${height}px`,
        }}
      >
        {/* Subtle accent flourish stroke */}
        <path
          d="M 0,38 C 240,68 560,18 840,48 C 1120,78 1320,32 1440,24"
          stroke={accent}
          strokeWidth="2.5"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* Main curved calligraphic fill */}
        <path
          d="M 0,42 C 280,72 580,24 880,56 C 1180,88 1340,36 1440,30 L 1440,96 L 0,96 Z"
          fill={fill}
        />

        {/* Secondary decorative calligraphic pen trail */}
        <path
          d="M 120,54 C 280,76 440,78 620,58 C 760,42 900,48 1080,68"
          stroke={accent}
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeOpacity="0.3"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default SwooshDivider;
