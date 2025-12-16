import { ArrowRight, TrendingUp, Target, Users, Lightbulb } from 'lucide-react';

export function IdeaSummaryTab() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Idea Summary</h1>
          <p className="text-gray-600">
            A high-level overview of your startup idea and its market viability
          </p>
        </div>

        {/* AI-Generated Summary Card */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Your Idea</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                An AI-powered meal planning app that helps busy professionals create personalized, 
                healthy meal plans based on their dietary preferences, budget, and available time. 
                The app automatically generates shopping lists and provides step-by-step cooking instructions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                  Health & Wellness
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                  Consumer App
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                  Subscription Model
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Market Demand</div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">High</div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-emerald-400 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Market Trend</div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">Growing</div>
            <div className="flex items-center gap-1 text-emerald-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">+73% (6mo)</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Competition</div>
            <div className="text-3xl font-bold text-amber-600 mb-2">Moderate</div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[60%] h-full bg-amber-400 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Validation Score</div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">7.8/10</div>
            <div className="text-xs text-gray-600">Strong potential</div>
          </div>
        </div>

        {/* Visual Journey: Problem → Solution → User → Opportunity */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-6">Your Startup Journey</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
              <p className="text-sm text-gray-600">
                Busy professionals struggle to plan healthy meals and often resort to unhealthy, expensive options
              </p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-indigo-400" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
              <p className="text-sm text-gray-600">
                AI-powered personalized meal planning with automated shopping lists and easy recipes
              </p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-indigo-400" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Target User</h4>
              <p className="text-sm text-gray-600">
                Working professionals aged 25-45 who value health but lack time for meal planning
              </p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-indigo-400" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Market Opportunity</h4>
              <p className="text-sm text-gray-600">
                $8B+ market growing at 12% annually with increasing health consciousness
              </p>
            </div>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <h3 className="font-semibold text-gray-900 mb-4">What This Means</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Strong market demand:</span> People are actively searching for meal planning solutions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Growing market:</span> Interest has increased 73% in the last 6 months
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Moderate competition:</span> There are competitors, but room for differentiation with AI and personalization
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">→</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Next step:</span> Explore the Market Analysis tab to see detailed trends and opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
