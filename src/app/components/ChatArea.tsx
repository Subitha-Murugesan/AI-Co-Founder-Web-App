import { Bot, Send } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
}

interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            <div
              className={`max-w-2xl rounded-2xl px-4 py-3 ${
                message.type === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-900 shadow-sm border border-gray-200'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </div>
            {message.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-gray-600">U</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 bg-white p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your startup idea in a few sentences..."
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="absolute right-2 bottom-2 w-8 h-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            We analyze real-world market signals instantly
          </p>
        </form>
      </div>
    </div>
  );
}
