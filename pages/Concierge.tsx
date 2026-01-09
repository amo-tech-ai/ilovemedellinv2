import React from 'react';
import { Send, Sparkles, Bot } from 'lucide-react';

const Concierge: React.FC = () => {
  return (
    <div className="h-[calc(100vh-64px)] md:h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-medellin-500" />
          AI Concierge
        </h1>
        <p className="text-sm text-gray-500">Your personal Medellín guide, available 24/7.</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-6 bg-slate-50">
        
        {/* Bot Welcome */}
        <div className="flex gap-4 max-w-2xl">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medellin-400 to-teal-500 flex items-center justify-center shrink-0 shadow-sm">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-700">
              <p>Hola! I'm your Medellín concierge. I can help you find hidden gem restaurants, plan a day trip to Guatapé, or explain how the Metro system works. What's on your mind?</p>
            </div>
          </div>
        </div>

        {/* User Mock Message */}
        <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
          <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-2">
            <div className="bg-gray-900 text-white p-4 rounded-2xl rounded-tr-none shadow-md">
              <p>Where can I find the best Bandeja Paisa in Laureles?</p>
            </div>
          </div>
        </div>

        {/* Bot Response Mock */}
        <div className="flex gap-4 max-w-2xl">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medellin-400 to-teal-500 flex items-center justify-center shrink-0 shadow-sm">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-700">
              <p className="mb-2">Great choice! For an authentic experience in Laureles, I recommend:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li><b>Mondongo's</b> - Classic, reliable, very popular.</li>
                <li><b>La Hacienda</b> - More traditional atmosphere.</li>
              </ul>
              <p className="text-sm text-gray-500">Would you like me to make a reservation for lunch today?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Ask anything about Medellín..." 
            className="w-full pl-6 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medellin-500/50 focus:bg-white transition-all shadow-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Concierge;