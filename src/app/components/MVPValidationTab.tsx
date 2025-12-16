import { Globe, Smartphone, Chrome, Users, CheckCircle2, Circle, MessageSquare, FileText, DollarSign, TrendingUp } from 'lucide-react';

export function MVPValidationTab() {
  const mvpTypes = [
    {
      icon: Globe,
      name: 'Landing Page MVP',
      description: 'Simple website explaining your idea with email signup',
      effort: 'Low',
      cost: '$0-100',
      time: '1-3 days',
      recommended: true,
      bestFor: 'Testing initial interest and collecting early signups',
    },
    {
      icon: Smartphone,
      name: 'No-Code Prototype',
      description: 'Interactive app mockup using tools like Adalo or Bubble',
      effort: 'Medium',
      cost: '$50-300',
      time: '1-2 weeks',
      recommended: false,
      bestFor: 'Demonstrating core functionality without coding',
    },
    {
      icon: Users,
      name: 'Concierge MVP',
      description: 'Manually create meal plans for first users to validate demand',
      effort: 'High',
      cost: '$0',
      time: '1 week',
      recommended: true,
      bestFor: 'Testing if people actually want personalized meal plans',
    },
  ];

  const features = [
    { name: 'User profile & dietary preferences', priority: 'Must Have', checked: false },
    { name: 'AI meal suggestions (3-5 meals)', priority: 'Must Have', checked: false },
    { name: 'Basic shopping list', priority: 'Must Have', checked: false },
    { name: 'Simple recipe view', priority: 'Must Have', checked: false },
    { name: 'Save favorite meals', priority: 'Should Have', checked: false },
    { name: 'Budget tracking', priority: 'Should Have', checked: false },
    { name: 'Nutrition information', priority: 'Nice to Have', checked: false },
    { name: 'Social sharing', priority: 'Nice to Have', checked: false },
  ];

  const validationMethods = [
    {
      icon: MessageSquare,
      name: 'User Interviews',
      description: 'Talk to 10-15 target users about their meal planning challenges',
      time: '1-2 weeks',
      goal: 'Understand pain points and validate problem',
    },
    {
      icon: FileText,
      name: 'Landing Page Test',
      description: 'Create page with value proposition and track email signups',
      time: '3-5 days',
      goal: '100+ email signups validates interest',
    },
    {
      icon: DollarSign,
      name: 'Pricing Test',
      description: 'Show pricing tiers on landing page and measure clicks',
      time: '1 week',
      goal: 'See which tier gets most interest',
    },
    {
      icon: TrendingUp,
      name: 'Waitlist Campaign',
      description: 'Run small ads to landing page and measure conversion',
      time: '1-2 weeks',
      goal: '5%+ conversion rate shows strong demand',
    },
  ];

  const validationSteps = [
    { step: 'Define your riskiest assumption', completed: false, description: 'Ex: "Busy professionals will pay $9.99/month for meal planning"' },
    { step: 'Create landing page MVP', completed: false, description: 'Build simple page explaining value and collect emails' },
    { step: 'Run user interviews', completed: false, description: 'Talk to 10 target users to validate problem' },
    { step: 'Launch waitlist', completed: false, description: 'Get 100+ signups before building' },
    { step: 'Test pricing', completed: false, description: 'Show pricing tiers, measure interest' },
    { step: 'Build concierge MVP', completed: false, description: 'Manually serve 10 users to validate solution' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">MVP & Validation</h1>
          <p className="text-gray-600">
            Build the simplest version to test your idea with real users
          </p>
        </div>

        {/* What is MVP */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What is an MVP?</h3>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">MVP = Minimum Viable Product.</span> It's the simplest version of your idea that 
                lets you test if people actually want it. The goal is NOT to build a perfect app—it's to learn as quickly and 
                cheaply as possible. Think "test" not "launch."
              </p>
            </div>
          </div>
        </div>

        {/* Recommended MVP Approaches */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Recommended MVP Approaches</h2>
          
          {mvpTypes.map((mvp, index) => {
            const Icon = mvp.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${
                  mvp.recommended ? 'border-emerald-300' : 'border-gray-200'
                } shadow-sm relative`}
              >
                {mvp.recommended && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-bold shadow-md">
                      ✓ RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    mvp.recommended ? 'bg-emerald-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      mvp.recommended ? 'text-emerald-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{mvp.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{mvp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Effort: {mvp.effort}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Cost: {mvp.cost}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        Time: {mvp.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Best For:</p>
                  <p className="text-sm text-gray-800">{mvp.bestFor}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MVP Feature Checklist */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">MVP Feature Checklist</h3>
          <p className="text-sm text-gray-600 mb-4">
            Don't build everything at once. Focus on features that test your core value proposition.
          </p>

          <div className="space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  feature.priority === 'Must Have' ? 'bg-red-50 border-red-200' :
                  feature.priority === 'Should Have' ? 'bg-amber-50 border-amber-200' :
                  'bg-gray-50 border-gray-200'
                }`}
              >
                {feature.checked ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                )}
                <span className="flex-1 text-sm text-gray-900">{feature.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  feature.priority === 'Must Have' ? 'bg-red-100 text-red-700' :
                  feature.priority === 'Should Have' ? 'bg-amber-100 text-amber-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {feature.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Methods */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Validation Methods</h3>
          <p className="text-sm text-gray-600">
            Before building anything, validate that people actually want your solution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {validationMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{method.name}</h4>
                      <p className="text-xs text-gray-500">Time: {method.time}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{method.description}</p>
                  <div className="bg-emerald-50 rounded-lg p-2">
                    <p className="text-xs text-emerald-900">
                      <span className="font-semibold">Success:</span> {method.goal}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step-by-Step Validation Checklist */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Validation Progress</h3>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">0 of 6 complete</div>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[0%] h-full bg-indigo-600 transition-all" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {validationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  step.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'
                }`}>
                  {step.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                  {!step.completed && <span className="text-xs font-semibold text-gray-400">{index + 1}</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${
                    step.completed ? 'text-gray-400 line-through' : 'text-gray-900'
                  }`}>
                    {step.step}
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to Validate Your Idea?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Start with a simple landing page this week. Test your riskiest assumptions before investing months in development. 
            Remember: the goal is to learn, not to build the perfect product.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Generate Landing Page Copy
            </button>
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors border border-indigo-400">
              Create Interview Script
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
