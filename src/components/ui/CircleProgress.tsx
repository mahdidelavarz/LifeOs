interface CircleProgressBarProps {
  step: number; // Current step (1-4)
}

function CircleProgress({ step }: CircleProgressBarProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (step / 4) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="50" height="50" viewBox="0 0 100 100">
        {/* Background circle (gray) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Tailwind gray-200
          strokeWidth="6"
        />
        {/* Progress circle (blue) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#3b82f6" // Tailwind blue-500 from hover-100
          strokeWidth="6"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 50 50)" // Start from top
          strokeLinecap="round"
        />
      </svg>
      {/* Step number */}
      <span className="text-text-gray text-xs absolute top-3.5 right-4">
        <b className="text-black text-base">{step}</b>/4
      </span>
    </div>
  );
}

export default CircleProgress;
