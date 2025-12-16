import { CompetitiveSaturation } from './CompetitiveSaturation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ExternalLink, Target, Lightbulb } from 'lucide-react';

const marketShareData = [
  { name: 'Mealime', share: 25 },
  { name: 'Yummly', share: 20 },
  { name: 'Paprika', share: 15 },
  { name: 'PlateJoy', share: 12 },
  { name: 'Others', share: 28 },
];

export function CompetitorsTab() {
  const competitors = [
    {
      name: 'Mealime',
      description: 'Simple meal planning with recipes and shopping lists',
      strength: 'Easy to use, good recipe database',
      weakness: 'Limited customization, basic AI',
      marketShare: '25%',
    },
    {
      name: 'Yummly',
      description: 'Recipe discovery and meal planning platform',
      strength: 'Large recipe collection, strong brand',
      weakness: 'Not focused on planning, overwhelming interface',
      marketShare: '20%',
    },
    {
      name: 'Paprika',
      description: 'Recipe management and meal planner',
      strength: 'Offline access, recipe importing',
      weakness: 'Outdated design, no AI personalization',
      marketShare: '15%',
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Competitors</h1>
          <p className="text-gray-600">
            Who else is solving this problem and how can you differentiate?
          </p>
        </div>

        {/* Competition Level */}
        <div>
          <CompetitiveSaturation level="moderate" />
        </div>

        {/* Market Share Visualization */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Competitive Landscape</h3>
          
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={marketShareData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" fontSize={12} />
              <YAxis type="category" dataKey="name" stroke="#6b7280" fontSize={12} width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="share" fill="#6366f1" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <p className="text-sm text-gray-600 mt-4">
            The market is fragmented with no dominant player. The top 4 competitors hold only 72% combined market share, 
            leaving room for new entrants with better features.
          </p>
        </div>

        {/* Competitor Analysis */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Main Competitors</h3>
          
          {competitors.map((competitor, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{competitor.name}</h4>
                  <p className="text-sm text-gray-600">{competitor.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">
                    {competitor.marketShare} share
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <p className="text-xs font-semibold text-emerald-900 mb-1">Strength</p>
                  <p className="text-sm text-emerald-800">{competitor.strength}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <p className="text-xs font-semibold text-red-900 mb-1">Weakness</p>
                  <p className="text-sm text-red-800">{competitor.weakness}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Opportunity Gap */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-3">Where You Can Win: Differentiation Opportunities</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Advanced AI Personalization</p>
                    <p className="text-sm text-gray-600">
                      Most competitors use basic filters. Your AI can learn from user behavior, preferences, and past meals 
                      to provide truly personalized suggestions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Smart Budget Management</p>
                    <p className="text-sm text-gray-600">
                      None of the major competitors integrate price tracking and budget optimization. 
                      You can help users save money while eating healthy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Modern, Delightful UX</p>
                    <p className="text-sm text-gray-600">
                      Many existing apps feel outdated or overwhelming. A clean, intuitive interface focused on 
                      speed and simplicity can be a major differentiator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <p className="text-sm text-blue-900">
              <span className="font-semibold">The takeaway:</span> This market is crowded but not saturated. 
              Existing players have clear weaknesses you can exploit. Focus on AI personalization and user experience 
              to stand out. Don't try to compete on recipe quantity—compete on relevance and simplicity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
