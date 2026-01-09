import React from 'react';
import { Hourglass, Sun, ShieldCheck } from 'lucide-react';
import { Place } from '../../types';

interface TouristInfoProps {
  place: Place;
}

export const TouristInfo: React.FC<TouristInfoProps> = ({ place }) => {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-4">
       <div className="flex items-start gap-3">
          <Hourglass className="w-4 h-4 text-slate-500 mt-0.5" />
          <div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Time Needed</p>
             <p className="text-sm font-medium text-gray-900">{place.duration}</p>
          </div>
       </div>
       {place.bestTime && (
         <div className="flex items-start gap-3">
            <Sun className="w-4 h-4 text-slate-500 mt-0.5" />
            <div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Best Time to Visit</p>
               <p className="text-sm font-medium text-gray-900">{place.bestTime}</p>
            </div>
         </div>
       )}
       {place.safetyTips && (
         <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-medellin-600 mt-0.5" />
            <div>
               <p className="text-xs font-bold text-medellin-600 uppercase tracking-wide">Safety Tips</p>
               <p className="text-sm text-gray-700">{place.safetyTips}</p>
            </div>
         </div>
       )}
    </div>
  );
};