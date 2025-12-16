import { Target } from 'lucide-react';

interface CompetitiveSaturationProps {
  level: 'low' | 'moderate' | 'high';
}

export function CompetitiveSaturation({ level }: CompetitiveSaturationProps) {
  const levelConfig = {
    low: { 
      dots: 3, 
      color: 'bg-emerald-400',
      text: 'Low competition - Great opportunity!',
      description: 'Limited established players create excellent entry opportunities.'
    },
    moderate: { 
      dots: 6, 
      color: 'bg-amber-400',
      text: 'Moderate competition',
      description: 'Established market with room for differentiation and innovation.'
    },
    high: { 
      dots: 9, 
      color: 'bg-red-400',
      text: 'High competition - Differentiate strongly',
      description: 'Crowded space requires unique value proposition and strong execution.'
    },
  };

  const config = levelConfig[level];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Competitive Saturation</h3>
        <Target className="w-5 h-5 text-indigo-600" />
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`h-8 rounded-lg ${
              i < config.dots ? config.color : 'bg-gray-100'
            } transition-all duration-300`}
          />
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mb-4">
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-900">{config.text}</p>
        <p className="text-sm text-gray-600">{config.description}</p>
      </div>
    </div>
  );
}
