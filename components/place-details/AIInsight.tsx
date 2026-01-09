import React from 'react';
import { Sparkles } from 'lucide-react';

interface AIInsightProps {
  aiHint: string;
  isTourist: boolean;
}

export const AIInsight: React.FC<AIInsightProps> = ({ aiHint, isTourist }) => {
  return (
    <div className="bg-gradient-to-br from-medellin-50 to-emerald-50 border border-medellin-100 rounded-2xl p-5 relative overflow-hidden shadow-sm">
      <div className="flex gap-4 relative z-10">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm text-medellin-600 border border-medellin-100">
           <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            {isTourist ? "Why this is worth visiting" : "Why you'll love it"}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {aiHint}
          </p>
        </div>
      </div>
    </div>
  );
};