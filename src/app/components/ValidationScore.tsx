interface ValidationScoreProps {
  score: number;
}

export function ValidationScore({ score }: ValidationScoreProps) {
  const percentage = (score / 10) * 100;
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  const getScoreColor = () => {
    if (score >= 8) return { stroke: '#10b981', text: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (score >= 6) return { stroke: '#f59e0b', text: 'text-amber-600', bg: 'bg-amber-50' };
    return { stroke: '#ef4444', text: 'text-red-600', bg: 'bg-red-50' };
  };

  const colors = getScoreColor();

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-6 text-center">Overall Market Viability</h3>
      
      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="transform -rotate-90 w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke={colors.stroke}
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-5xl font-bold ${colors.text}`}>{score}</div>
              <div className="text-sm text-gray-500">out of 10</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`${colors.bg} rounded-lg p-4 text-center`}>
        <p className={`text-sm font-semibold ${colors.text}`}>
          {score >= 8 && 'Strong Market Validation'}
          {score >= 6 && score < 8 && 'Promising Opportunity'}
          {score < 6 && 'Requires Refinement'}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          {score >= 8 && 'This idea shows excellent market potential with strong signals.'}
          {score >= 6 && score < 8 && 'Good potential, but consider addressing identified risks.'}
          {score < 6 && 'Consider pivoting or refining your approach for better fit.'}
        </p>
      </div>
    </div>
  );
}
