import { ReactElement } from "react";

interface FeelsLikeIndicatorProps {
  difference: number;
}

export const FeelsLikeIndicator = ({
  difference,
}: FeelsLikeIndicatorProps): ReactElement => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (difference / 100) * circumference;
  return (
    <div>
      <svg width="180" height="110" viewBox="0 0 200 110">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d={`M 10 100 A 90 90 0 0 1 190 100`}
          fill="none"
          stroke="#838383"
          strokeWidth="20"
          opacity={0.2}
        />
        <path
          d={`M 10 100 A 90 90 0 0 1 190 100`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
};
