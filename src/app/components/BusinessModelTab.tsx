import { CreditCard, Zap, ShoppingBag, Building2, ArrowRight, Check } from 'lucide-react';

export function BusinessModelTab() {
  const models = [
    {
      icon: Zap,
      name: 'Freemium',
      description: 'Free basic features, paid premium upgrade',
      bestFor: 'Consumer apps with large user base',
      pros: ['Low barrier to entry', 'Easy user acquisition', 'Network effects'],
      cons: ['Low conversion rates', 'Requires large scale', 'Support costs'],
      recommended: true,
      pricing: 'Free + $9.99/month premium',
    },
    {
      icon: CreditCard,
      name: 'Subscription',
      description: 'Monthly or annual recurring payment',
      bestFor: 'Apps with ongoing value delivery',
      pros: ['Predictable revenue', 'High customer lifetime value', 'Better retention focus'],
      cons: ['Higher acquisition cost', 'Churn management needed', 'Commitment barrier'],
      recommended: false,
      pricing: '$14.99/month or $119/year',
    },
    {
      icon: ShoppingBag,
      name: 'One-Time Purchase',
      description: 'Single upfront payment for lifetime access',
      bestFor: 'Tools with finite value or offline use',
      pros: ['Simple pricing', 'No churn', 'Easy to understand'],
      cons: ['Limited scalability', 'No recurring revenue', 'Harder to fund updates'],
      recommended: false,
      pricing: '$49.99 one-time',
    },
    {
      icon: Building2,
      name: 'B2B Licensing',
      description: 'Sell to companies for employee wellness programs',
      bestFor: 'Products with enterprise value',
      pros: ['Higher revenue per customer', 'More stable', 'Longer contracts'],
      cons: ['Longer sales cycles', 'More complex', 'Requires enterprise features'],
      recommended: false,
      pricing: '$5-10 per employee/month',
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Model</h1>
          <p className="text-gray-600">
            How will your startup make money? Let's find the best fit for your idea.
          </p>
        </div>

        {/* Revenue Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${
                  model.recommended ? 'border-emerald-300' : 'border-gray-200'
                } shadow-sm relative`}
              >
                {model.recommended && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-bold shadow-md">
                      ⭐ BEST FIT
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    model.recommended ? 'bg-emerald-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      model.recommended ? 'text-emerald-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{model.name}</h3>
                    <p className="text-sm text-gray-600">{model.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Best For:</p>
                    <p className="text-sm text-gray-800">{model.bestFor}</p>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-emerald-900 mb-2">Pros:</p>
                    <ul className="space-y-1">
                      {model.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-emerald-800 flex items-start gap-2">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-red-900 mb-2">Cons:</p>
                    <ul className="space-y-1">
                      {model.cons.map((con, i) => (
                        <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                          <span className="mt-0.5">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`rounded-lg p-3 ${
                  model.recommended ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Example Pricing:</p>
                  <p className={`text-sm font-bold ${
                    model.recommended ? 'text-emerald-900' : 'text-gray-900'
                  }`}>{model.pricing}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Flow */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-6">Your Revenue Flow (Freemium Model)</h3>
          
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Free Users</h4>
              <p className="text-sm text-gray-600">Basic meal planning<br />3 meals/week</p>
            </div>

            <ArrowRight className="w-6 h-6 text-indigo-400" />

            <div className="text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Premium Features</h4>
              <p className="text-sm text-gray-600">Unlimited meals<br />AI personalization<br />Budget tracking</p>
            </div>

            <ArrowRight className="w-6 h-6 text-indigo-400" />

            <div className="text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Revenue</h4>
              <p className="text-sm text-gray-600">$9.99/month<br />per premium user</p>
            </div>
          </div>
        </div>

        {/* Financial Projections */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Simple Financial Estimate (Year 1)</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Target Free Users:</span>
              <span className="font-bold text-gray-900">10,000</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Expected Conversion Rate:</span>
              <span className="font-bold text-gray-900">5% (500 premium)</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Monthly Recurring Revenue:</span>
              <span className="font-bold text-emerald-600">$4,995</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
              <span className="text-sm font-semibold text-gray-900">Annual Revenue Estimate:</span>
              <span className="text-2xl font-bold text-emerald-600">~$60,000</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            * These are conservative estimates based on typical freemium conversion rates. Actual results vary based on product quality and marketing.
          </p>
        </div>

        {/* Why Freemium Works */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
          <h3 className="font-semibold text-gray-900 mb-4">Why Freemium Works for This Idea</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Low friction:</span> Users can try your meal planning app immediately without committing money. 
              Once they see the value, upgrading to premium is an easy decision.
            </p>
            <p>
              <span className="font-semibold">Viral growth:</span> Free users will recommend the app to friends, helping you grow organically 
              without spending heavily on marketing.
            </p>
            <p>
              <span className="font-semibold">Premium value is clear:</span> After using basic features, users will want unlimited meals and 
              AI personalization. The upgrade path is natural and obvious.
            </p>
            <p>
              <span className="font-semibold">Proven in this category:</span> Successful meal planning apps like Mealime use freemium successfully. 
              It's a validated model for this market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
