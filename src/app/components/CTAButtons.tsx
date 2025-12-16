import { RefreshCw, Search, Rocket, Lightbulb } from 'lucide-react';

export function CTAButtons() {
  const buttons = [
    {
      icon: Lightbulb,
      label: 'Refine Idea Based on Market',
      variant: 'primary',
    },
    {
      icon: Search,
      label: 'Explore Niche Opportunities',
      variant: 'secondary',
    },
    {
      icon: Rocket,
      label: 'Generate MVP for This Market',
      variant: 'secondary',
    },
    {
      icon: RefreshCw,
      label: 'Revalidate with Changes',
      variant: 'secondary',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {buttons.map((button, index) => {
        const Icon = button.icon;
        const isPrimary = button.variant === 'primary';
        
        return (
          <button
            key={index}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
              isPrimary
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{button.label}</span>
          </button>
        );
      })}
    </div>
  );
}
