const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

interface CircleProps {
  color: string;
  pct?: number;
}

const Circle = ({ color, pct }: CircleProps) => {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const strokePct = pct && ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={22}
      cy={22}
      fill="transparent"
      stroke={pct === 0 ? "lightgrey" : color}
      strokeWidth="4"
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }: { percentage: number }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize="10px"
      fontWeight="500"
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const ProgressCircle = ({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={44} height={44}>
      <g transform={`rotate(-90 22 22)`}>
        <Circle color="lightgrey" />
        <Circle color={color} pct={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default ProgressCircle;
