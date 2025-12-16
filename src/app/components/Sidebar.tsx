import { Plus, FileText, TrendingUp, Users, GitCompare, DollarSign, Rocket, CheckSquare } from 'lucide-react';

interface SidebarProps {
  onNewIdea: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ onNewIdea, activeTab, onTabChange }: SidebarProps) {
  const ideaHistory = [
    { id: 1, title: 'AI meal planning app', date: '2 hours ago' },
    { id: 2, title: 'Remote work collaboration', date: 'Yesterday' },
    { id: 3, title: 'Sustainable fashion marketplace', date: '3 days ago' },
  ];

  const navigationSections = [
    { id: 'summary', icon: FileText, label: 'Idea Summary', active: false },
    { id: 'market', icon: TrendingUp, label: 'Market Analysis', active: false },
    { id: 'users', icon: Users, label: 'Target Users', active: false },
    { id: 'competitors', icon: GitCompare, label: 'Competitors', active: false },
    { id: 'business', icon: DollarSign, label: 'Business Model', active: false },
    { id: 'mvp', icon: Rocket, label: 'MVP & Validation', active: false },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <button
          onClick={onNewIdea}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Idea</span>
        </button>
      </div>

      <div className="px-4 pb-4 border-b border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent Ideas</h3>
        <div className="space-y-2">
          {ideaHistory.map((idea) => (
            <button
              key={idea.id}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate">{idea.title}</p>
                  <p className="text-xs text-gray-500">{idea.date}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h3>
        <div className="space-y-1">
          {navigationSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.label}
                onClick={() => onTabChange(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}