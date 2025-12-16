import { Sparkles, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-gray-900">No-BS AI</h1>
          <p className="text-sm text-gray-500">Validate your startup idea in minutes</p>
        </div>
      </div>
      <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
        <User className="w-5 h-5 text-gray-600" />
      </button>
    </header>
  );
}