interface LogoProps {
  variant?: "horizontal" | "circular";
  theme?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  variant = "horizontal",
  theme = "light",
  className = "",
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#FAE8B4" : "#574A24";
  const accentColor = isDark ? "#CBBD93" : "#80775C";
  const highlightColor = "#CBBD93";

  if (variant === "circular") {
    const dim = size === "sm" ? 44 : size === "md" ? 56 : 72;
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <svg
          width={dim}
          height={dim}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="New Punjabi Tadka Emblem"
        >
          {/* Outer Ring */}
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke={primaryColor}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.8"
          />
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke={accentColor}
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Haveli Cusped Arch */}
          <path
            d="M 28 68 L 28 44 C 28 34, 38 24, 50 20 C 62 24, 72 34, 72 44 L 72 68"
            stroke={primaryColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Symmetrical Wheat Ears */}
          <path
            d="M 33 60 Q 30 52 35 46 Q 32 40 37 34"
            stroke={highlightColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 67 60 Q 70 52 65 46 Q 68 40 63 34"
            stroke={highlightColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Traditional Clay Tandoor Hearth */}
          <path
            d="M 40 70 Q 50 72 60 70 L 58 54 Q 50 52 42 54 Z"
            fill={accentColor}
            opacity="0.3"
            stroke={primaryColor}
            strokeWidth="1.2"
          />

          {/* Flame rising from Tandoor */}
          <path
            d="M 50 44 C 47 48, 45 52, 50 56 C 55 52, 53 48, 50 44 Z"
            fill={highlightColor}
          />
          <path
            d="M 46 48 C 44 51, 44 53, 47 55 C 49 53, 48 51, 46 48 Z"
            fill={primaryColor}
            opacity="0.75"
          />
          <path
            d="M 54 48 C 56 51, 56 53, 53 55 C 51 53, 52 51, 54 48 Z"
            fill={primaryColor}
            opacity="0.75"
          />

          {/* Center Crown Star */}
          <circle cx="50" cy="27" r="1.5" fill={highlightColor} />
        </svg>
      </div>
    );
  }

  // Primary Horizontal Logo
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Emblem SVG */}
      <svg
        className="size-11 sm:size-13 shrink-0"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Arch Contour */}
        <circle
          cx="35"
          cy="35"
          r="33"
          stroke={accentColor}
          strokeWidth="0.9"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        <path
          d="M 18 52 L 18 34 C 18 24, 26 16, 35 13 C 44 16, 52 24, 52 34 L 52 52"
          stroke={primaryColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Wheat Stalks */}
        <path
          d="M 22 46 Q 19 39 24 33"
          stroke={highlightColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 48 46 Q 51 39 46 33"
          stroke={highlightColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Tandoor Clay Hearth */}
        <path
          d="M 27 54 Q 35 56 43 54 L 41 40 Q 35 38 29 40 Z"
          fill={accentColor}
          opacity="0.25"
          stroke={primaryColor}
          strokeWidth="1.3"
        />
        {/* Flame Wisps */}
        <path
          d="M 35 30 C 33 34, 31 38, 35 42 C 39 38, 37 34, 35 30 Z"
          fill={highlightColor}
        />
        <circle cx="35" cy="18" r="1.5" fill={highlightColor} />
      </svg>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          style={{ color: primaryColor }}
          className="font-display text-xl sm:text-2xl font-bold tracking-[0.06em] leading-none transition-colors"
        >
          NEW PUNJABI TADKA
        </span>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-[1px] w-3 bg-[#CBBD93] opacity-60" />
          <span
            style={{ color: accentColor }}
            className="text-[0.62rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.28em] leading-none"
          >
            RESTAURANT • BABRI
          </span>
          <span className="h-[1px] w-3 bg-[#CBBD93] opacity-60" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
