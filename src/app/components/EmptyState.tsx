import { BarChart3, TrendingUp, Users } from 'lucide-react';

interface EmptyStateProps {
  onStart: () => void;
}

export function EmptyState({ onStart }: EmptyStateProps) {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <div className="relative w-48 h-48 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <BarChart3 className="w-20 h-20 text-indigo-600" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          See your market clearly before you build
        </h2>
        <p className="text-gray-600 mb-6">
          Get instant insights on market demand, competition, target audience, and viability. 
          Make data-driven decisions from day one.
        </p>
        
        <button
          onClick={onStart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
        >
          <BarChart3 className="w-5 h-5" />
          Start Market Validation
        </button>
        
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-indigo-600">5min</div>
            <div className="text-xs text-gray-500">Average analysis</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">10+</div>
            <div className="text-xs text-gray-500">Market signals</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">100%</div>
            <div className="text-xs text-gray-500">Data-driven</div>
          </div>
        </div>
      </div>
    </div>
  );
}
