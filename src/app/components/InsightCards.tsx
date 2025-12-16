import { Target, AlertTriangle, Sparkles, DollarSign } from 'lucide-react';

export function InsightCards() {
  const insights = [
    {
      icon: Target,
      title: 'Opportunity Level',
      description: 'Strong early-mover advantage in emerging market segment.',
      status: 'positive',
      color: 'emerald',
    },
    {
      icon: AlertTriangle,
      title: 'Market Risk',
      description: 'Moderate risk due to regulatory uncertainty and user adoption curve.',
      status: 'warning',
      color: 'amber',
    },
    {
      icon: Sparkles,
      title: 'Differentiation Potential',
      description: 'High potential to stand out with unique approach and user experience.',
      status: 'positive',
      color: 'indigo',
    },
    {
      icon: DollarSign,
      title: 'Monetization Readiness',
      description: 'Clear revenue paths with subscription and freemium models validated.',
      status: 'positive',
      color: 'emerald',
    },
  ];

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-50',
      icon: 'text-emerald-600',
      border: 'border-emerald-200',
    },
    amber: {
      bg: 'bg-amber-50',
      icon: 'text-amber-600',
      border: 'border-amber-200',
    },
    indigo: {
      bg: 'bg-indigo-50',
      icon: 'text-indigo-600',
      border: 'border-indigo-200',
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {insights.map((insight, index) => {
        const Icon = insight.icon;
        const colors = colorClasses[insight.color as keyof typeof colorClasses];
        
        return (
          <div
            key={index}
            className={`${colors.bg} border ${colors.border} rounded-xl p-4 transition-all hover:shadow-md`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${colors.icon}`} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
