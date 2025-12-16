import { MarketDemandGauge } from './MarketDemandGauge';
import { MarketSizeChart } from './MarketSizeChart';
import { TrendChart } from './TrendChart';
import { Info } from 'lucide-react';

export function MarketAnalysisTab() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Analysis</h1>
          <p className="text-gray-600">
            Understand market demand, size, and growth trends for your idea
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-blue-900">
              <span className="font-semibold">What is market analysis?</span> It helps you understand if enough people want your product, 
              if the market is growing, and how big the opportunity is. Think of it as checking if there's a real need before you build.
            </p>
          </div>
        </div>

        {/* Market Demand */}
        <div>
          <MarketDemandGauge level="high" />
        </div>

        {/* Trend & Growth */}
        <div>
          <TrendChart />
        </div>

        {/* Market Size */}
        <div>
          <MarketSizeChart />
        </div>

        {/* Market Size Explanation */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Understanding Market Size (TAM, SAM, SOM)</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-indigo-600">TAM</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Total Available Market</h4>
                <p className="text-sm text-gray-600">
                  The total market demand for your product if everyone who could use it did. 
                  For a meal planning app, this would be everyone who cooks at home.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-purple-600">SAM</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Serviceable Available Market</h4>
                <p className="text-sm text-gray-600">
                  The portion of TAM you can realistically reach with your product. 
                  For you, this might be people who use smartphones and want digital meal planning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-emerald-600">SOM</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Serviceable Obtainable Market</h4>
                <p className="text-sm text-gray-600">
                  The realistic portion you can capture in the near term given your resources and competition. 
                  This is your actual target for the first 1-2 years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
          <h3 className="font-semibold text-gray-900 mb-4">Key Market Insights</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <p className="font-semibold text-gray-900">Strong and Growing Market</p>
                <p className="text-sm text-gray-600">
                  The meal planning market is valued at $8B+ and growing 12% annually. Health consciousness post-pandemic drives demand.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">📈</div>
              <div>
                <p className="font-semibold text-gray-900">Positive Momentum</p>
                <p className="text-sm text-gray-600">
                  Search trends show 73% increase in interest over 6 months. This suggests good timing for market entry.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎯</div>
              <div>
                <p className="font-semibold text-gray-900">Clear Target Segment</p>
                <p className="text-sm text-gray-600">
                  Focus on busy professionals aged 25-45. This segment has purchasing power and demonstrated need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
