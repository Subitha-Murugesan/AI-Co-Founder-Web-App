import { MarketDemandGauge } from './MarketDemandGauge';
import { MarketSizeChart } from './MarketSizeChart';
import { TrendChart } from './TrendChart';
import { AudienceBreakdownChart } from './AudienceBreakdownChart';
import { CompetitiveSaturation } from './CompetitiveSaturation';
import { ValidationScore } from './ValidationScore';
import { InsightCards } from './InsightCards';
import { CTAButtons } from './CTAButtons';

export function MarketAnalysisPanel() {
  return (
    <div className="w-full lg:w-[480px] bg-gray-50 border-l border-gray-200 overflow-auto">
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Market Analysis</h2>
          <p className="text-sm text-gray-600">
            Real-time insights for your startup idea
          </p>
        </div>

        <ValidationScore score={7.8} />
        
        <MarketDemandGauge level="high" />
        
        <TrendChart />
        
        <MarketSizeChart />
        
        <AudienceBreakdownChart />
        
        <CompetitiveSaturation level="moderate" />
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Key Insights</h3>
          <InsightCards />
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Next Steps</h3>
          <CTAButtons />
        </div>
      </div>
    </div>
  );
}
