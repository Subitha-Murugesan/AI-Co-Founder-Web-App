import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChatArea } from './components/ChatArea';
import { EmptyState } from './components/EmptyState';
import { IdeaSummaryTab } from './components/IdeaSummaryTab';
import { MarketAnalysisTab } from './components/MarketAnalysisTab';
import { TargetUsersTab } from './components/TargetUsersTab';
import { CompetitorsTab } from './components/CompetitorsTab';
import { BusinessModelTab } from './components/BusinessModelTab';
import { MVPValidationTab } from './components/MVPValidationTab';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
  const [showChat, setShowChat] = useState(true);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: 'ai',
        content: `Great! I'm analyzing your idea: "${content}"\n\nLet me evaluate the market potential, competition, target audience, and key opportunities. This will take just a moment...\n\n✓ Analyzing market demand signals\n✓ Evaluating competitive landscape\n✓ Identifying target segments\n✓ Assessing growth trends\n\nI've completed the market analysis! Check the tabs on the left to explore:\n\n📊 Idea Summary - High-level overview and validation score\n📈 Market Analysis - Demand, trends, and market size\n👥 Target Users - Who your customers are\n🎯 Competitors - Who you're competing against\n💰 Business Model - How to make money\n🚀 MVP & Validation - How to test your idea\n\nYour idea shows strong potential with a validation score of 7.8/10. The market is growing with moderate competition, presenting a solid opportunity for differentiation.`,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setShowAnalysis(true);
      setActiveTab('summary');
    }, 1500);
  };

  const handleNewIdea = () => {
    setMessages([]);
    setShowAnalysis(false);
    setActiveTab('summary');
    setShowChat(true);
  };

  const handleStart = () => {
    const aiMessage: Message = {
      id: Date.now(),
      type: 'ai',
      content: `Hi! I'm your No-BS AI assistant 👋\n\nI'm here to help you validate your startup idea with real market data and insights.\n\nTell me about your idea:\n• What problem are you solving?\n• Who is it for?\n• What makes it unique?\n\nDon't worry about having all the details perfect - just share your vision and I'll help you refine it based on market signals.`,
    };
    setMessages([aiMessage]);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'summary':
        return <IdeaSummaryTab />;
      case 'market':
        return <MarketAnalysisTab />;
      case 'users':
        return <TargetUsersTab />;
      case 'competitors':
        return <CompetitorsTab />;
      case 'business':
        return <BusinessModelTab />;
      case 'mvp':
        return <MVPValidationTab />;
      default:
        return <IdeaSummaryTab />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar onNewIdea={handleNewIdea} activeTab={activeTab} onTabChange={setActiveTab} />
        
        {!showAnalysis ? (
          messages.length === 0 ? (
            <EmptyState onStart={handleStart} />
          ) : (
            <ChatArea messages={messages} onSendMessage={handleSendMessage} />
          )
        ) : (
          <div className="flex-1 flex overflow-hidden">
            {renderTabContent()}
            
            {/* Chat Toggle Button - Shows when analysis is active */}
            {showChat && (
              <div className="w-96 border-l border-gray-200 bg-white flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">No-BS AI Chat</h3>
                    <button
                      onClick={() => setShowChat(false)}
                      className="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Hide
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Ask questions about your validation</p>
                </div>
                <div className="flex-1 overflow-auto p-4 space-y-4">
                  {messages.slice(-3).map((message) => (
                    <div
                      key={message.id}
                      className={`${
                        message.type === 'ai' ? 'bg-gray-50' : 'bg-indigo-50'
                      } rounded-lg p-3`}
                    >
                      <p className="text-xs text-gray-600 mb-1">
                        {message.type === 'ai' ? 'No-BS AI' : 'You'}
                      </p>
                      <p className="text-sm text-gray-900 leading-relaxed">
                        {message.content.slice(0, 200)}
                        {message.content.length > 200 ? '...' : ''}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <textarea
                    placeholder="Ask a follow-up question..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    rows={2}
                  />
                  <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Send
                  </button>
                </div>
              </div>
            )}

            {!showChat && (
              <button
                onClick={() => setShowChat(true)}
                className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all"
              >
                <span className="text-sm font-medium">💬 Chat with AI</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}