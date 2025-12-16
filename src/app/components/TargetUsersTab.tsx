import { AudienceBreakdownChart } from './AudienceBreakdownChart';
import { Briefcase, GraduationCap, Home, Building2 } from 'lucide-react';

export function TargetUsersTab() {
  const personas = [
    {
      icon: Briefcase,
      name: 'Busy Professional',
      age: '28-40 years',
      isPrimary: true,
      painPoints: [
        'Limited time for meal planning and grocery shopping',
        'Wants to eat healthy but doesn\'t know where to start',
        'Tired of ordering expensive takeout',
        'Struggles with food waste and budget management',
      ],
      needs: [
        'Quick, personalized meal suggestions',
        'Automated shopping lists',
        'Recipes that fit busy schedules',
        'Dietary preference support',
      ],
      quote: '"I want to eat healthy, but I don\'t have time to plan meals every week."',
    },
    {
      icon: Home,
      name: 'Health-Conscious Parent',
      age: '30-45 years',
      isPrimary: false,
      painPoints: [
        'Wants nutritious meals for the whole family',
        'Kids are picky eaters',
        'Needs to balance health with convenience',
        'Budget-conscious but values quality ingredients',
      ],
      needs: [
        'Family-friendly meal options',
        'Nutritional information',
        'Batch cooking suggestions',
        'Kid-approved recipes',
      ],
      quote: '"I need healthy meals my kids will actually eat without spending hours cooking."',
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Target Users</h1>
          <p className="text-gray-600">
            Who will use your product and what problems do they have?
          </p>
        </div>

        {/* Audience Breakdown */}
        <div>
          <AudienceBreakdownChart />
        </div>

        {/* User Personas */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">User Personas</h2>
          
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${
                  persona.isPrimary ? 'border-indigo-300' : 'border-gray-200'
                } shadow-sm`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    persona.isPrimary ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      persona.isPrimary ? 'text-indigo-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{persona.name}</h3>
                      {persona.isPrimary && (
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                          PRIMARY TARGET
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{persona.age}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-red-500">😰</span>
                      Pain Points
                    </h4>
                    <ul className="space-y-2">
                      {persona.painPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-emerald-500">✨</span>
                      Needs & Motivations
                    </h4>
                    <ul className="space-y-2">
                      {persona.needs.map((need, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-400">
                  <p className="text-sm text-gray-700 italic">{persona.quote}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why This Matters */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h3 className="font-semibold text-gray-900 mb-4">Why Understanding Users Matters</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Know your audience:</span> Understanding who your users are helps you build the right features. 
              A meal planning app for busy professionals should focus on speed and convenience, not complex recipes.
            </p>
            <p>
              <span className="font-semibold">Speak their language:</span> Your marketing and messaging should directly address their pain points. 
              "Save 5 hours per week on meal planning" resonates more than "AI-powered nutrition optimization."
            </p>
            <p>
              <span className="font-semibold">Prioritize features:</span> When you know what users need most, you can focus on building those features first. 
              Automated shopping lists might be more important than recipe ratings initially.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
