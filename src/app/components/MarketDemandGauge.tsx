interface MarketDemandGaugeProps {
  level: 'low' | 'medium' | 'high';
}

export function MarketDemandGauge({ level }: MarketDemandGaugeProps) {
  const levelConfig = {
    low: { width: '33%', color: 'bg-red-400', text: 'Low demand' },
    medium: { width: '66%', color: 'bg-amber-400', text: 'Medium demand' },
    high: { width: '100%', color: 'bg-emerald-400', text: 'High demand' },
  };

  const config = levelConfig[level];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Market Demand</h3>
      
      <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div
          className={`h-full ${config.color} transition-all duration-1000 rounded-full`}
          style={{ width: config.width }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mb-4">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>
      
      <p className="text-sm text-gray-600">
        Based on search trends and market signals, this idea shows <span className="font-semibold text-gray-900">{config.text.toLowerCase()}</span> in the target market.
      </p>
    </div>
  );
}
